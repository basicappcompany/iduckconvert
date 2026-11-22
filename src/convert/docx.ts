/** Word (.docx) to Markdown: mammoth reads the document as clean HTML, Turndown writes Markdown. Loaded only when a file is converted. */
import { stringifyCsv } from './data';
import { csvToMarkdownTable } from './textdata';

type DocxInput = { arrayBuffer: ArrayBuffer } | { buffer: Uint8Array };

interface CellLike {
  textContent: string | null;
}
interface TableLike {
  querySelectorAll: (selector: string) => ArrayLike<{ children: ArrayLike<CellLike> }>;
}

/** A Word table written as an aligned Markdown table (Turndown has no table rule of its own). */
function tableToMarkdown(table: TableLike): string {
  const rows = Array.from(table.querySelectorAll('tr')).map((tr) => Array.from(tr.children).map((cell) => (cell.textContent ?? '').replace(/\s+/g, ' ').trim()));
  const kept = rows.filter((r) => r.some((c) => c !== ''));
  if (kept.length === 0) return '';
  return `\n\n${csvToMarkdownTable(stringifyCsv(kept))}\n\n`;
}

export async function docxToMarkdown(input: DocxInput): Promise<{ markdown: string; notes: string[] }> {
  const mammoth = (await import('mammoth')).default;
  const { default: Turndown } = await import('turndown');
  // Pictures are left out: embedding them would make the Markdown enormous and most chat tools cannot use it.
  const result = await mammoth.convertToHtml(input as Parameters<typeof mammoth.convertToHtml>[0], { convertImage: mammoth.images.imgElement(async () => ({ src: '' })) });
  const service = new Turndown({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced' });
  service.remove('img' as never);
  service.addRule('wordTable', {
    filter: 'table',
    replacement: (_content, node) => tableToMarkdown(node as unknown as TableLike),
  });
  const markdown = service.turndown(result.value).replace(/\n{3,}/g, '\n\n').trim();
  if (markdown === '') throw new Error('No text was found in this Word document.');
  return { markdown: `${markdown}\n`, notes: result.messages.map((m) => m.message) };
}
