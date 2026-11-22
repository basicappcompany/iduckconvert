/** Text conversions for data that AI tools produce or take in: Markdown tables, JSON Lines, subtitles, TOML, XML rows, clean text. Pure functions. */
import { XMLParser } from 'fast-xml-parser';
import { DATA_SPECS, csvToJson, jsonToCsv, parseCsv, runDataConversion, type DataSpec } from './data';
import { base64Decode, base64Encode, chatgptToMarkdown, fixBrokenJson, jsonFormat, urlDecode, urlEncode } from './devdata';

// ---------- Markdown tables ----------

const escapeCell = (value: string): string => value.replace(/\|/g, '\\|').replace(/\r?\n/g, '<br>');

/** A CSV table written as an aligned Markdown (GitHub style) table. The first row is the header. */
export function csvToMarkdownTable(text: string): string {
  const rows = parseCsv(text).filter((r) => r.length > 1 || (r[0] ?? '') !== '');
  if (rows.length === 0) throw new Error('There are no rows to turn into a table.');
  const width = Math.max(...rows.map((r) => r.length));
  const cells = rows.map((r) => Array.from({ length: width }, (_, i) => escapeCell((r[i] ?? '').trim())));
  const sizes = Array.from({ length: width }, (_, i) => Math.max(3, ...cells.map((r) => [...r[i]!].length)));
  const line = (r: string[]) => `| ${r.map((c, i) => c + ' '.repeat(sizes[i]! - [...c].length)).join(' | ')} |`;
  const [head, ...body] = cells;
  return [line(head!), `| ${sizes.map((n) => '-'.repeat(n)).join(' | ')} |`, ...body.map(line)].join('\n');
}

const splitRow = (line: string): string[] => {
  const t = line.trim().replace(/^\|/, '').replace(/(?<!\\)\|$/, '');
  const out: string[] = [];
  let cell = '';
  for (let i = 0; i < t.length; i++) {
    if (t[i] === '\\' && t[i + 1] === '|') {
      cell += '|';
      i++;
    } else if (t[i] === '|') {
      out.push(cell);
      cell = '';
    } else cell += t[i];
  }
  out.push(cell);
  return out.map((c) => c.trim().replace(/<br\s*\/?>/gi, '\n'));
};

const isSeparator = (cells: string[]): boolean => cells.length > 0 && cells.every((c) => /^:?-+:?$/.test(c));

/** The first Markdown table found in the text, as CSV. Other text around the table is ignored. */
export function markdownTableToCsv(text: string): string {
  const lines = text.split(/\r?\n/);
  const start = lines.findIndex((l, i) => l.includes('|') && isSeparator(splitRow(lines[i + 1] ?? '')) && (lines[i + 1] ?? '').includes('-'));
  if (start < 0) throw new Error('No Markdown table found. A table needs a header row and a separator row such as | --- | --- |.');
  const rows: string[][] = [splitRow(lines[start]!)];
  for (let i = start + 2; i < lines.length && lines[i]!.includes('|'); i++) rows.push(splitRow(lines[i]!));
  const width = rows[0]!.length;
  const quote = (v: string) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
  return rows.map((r) => Array.from({ length: width }, (_, i) => quote(r[i] ?? '')).join(',')).join('\r\n');
}

// ---------- JSON Lines ----------

/** One JSON value per line. An array gives one line per item; anything else gives a single line. */
export function jsonToJsonl(text: string): string {
  const data: unknown = JSON.parse(text);
  return (Array.isArray(data) ? data : [data]).map((item) => JSON.stringify(item)).join('\n');
}

export function jsonlToJson(text: string): string {
  const items: unknown[] = [];
  text
    .replace(/^\uFEFF/, '')
    .split(/\r?\n/)
    .forEach((line, i) => {
      if (line.trim() === '') return;
      try {
        items.push(JSON.parse(line));
      } catch {
        throw new Error(`Line ${i + 1} is not valid JSON.`);
      }
    });
  return JSON.stringify(items, null, 2);
}

export function csvToJsonl(text: string): string {
  return jsonToJsonl(csvToJson(text));
}

// ---------- Subtitles (SRT and WebVTT) ----------

export interface Cue {
  start: string;
  end: string;
  text: string;
}

const TIMING = /((?:\d{1,2}:)?\d{1,2}:\d{2}[,.]\d{1,3})\s*-->\s*((?:\d{1,2}:)?\d{1,2}:\d{2}[,.]\d{1,3})/;

/** Hours:minutes:seconds,milliseconds with every part padded, from either "00:01.5" or "00:00:01,500". */
function normaliseTime(t: string): string {
  const [clock, ms = '0'] = t.split(/[,.]/);
  const parts = clock!.split(':');
  while (parts.length < 3) parts.unshift('0');
  return `${parts.map((p) => p.padStart(2, '0')).join(':')},${ms.padEnd(3, '0')}`;
}

/** Cues from SRT or WebVTT text (the format is detected from the timing lines). Headers, notes and styles are skipped. */
export function parseCues(text: string): Cue[] {
  const blocks = text.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n').split(/\n{2,}/);
  const cues: Cue[] = [];
  for (const block of blocks) {
    const lines = block.split('\n');
    const at = lines.findIndex((l) => TIMING.test(l));
    if (at < 0) continue;
    const m = TIMING.exec(lines[at]!)!;
    const body = lines
      .slice(at + 1)
      .join('\n')
      .trim();
    cues.push({ start: normaliseTime(m[1]!), end: normaliseTime(m[2]!), text: body });
  }
  if (cues.length === 0) throw new Error('No subtitle timings found. Each cue needs a line such as 00:00:01,000 --> 00:00:03,500.');
  return cues;
}

const stripTags = (s: string): string => s.replace(/<\/?[a-zA-Z][^>]*>/g, '');

export function srtToVtt(text: string): string {
  const cues = parseCues(text);
  return 'WEBVTT\n\n' + cues.map((c) => `${c.start.replace(',', '.')} --> ${c.end.replace(',', '.')}\n${c.text}`).join('\n\n') + '\n';
}

export function vttToSrt(text: string): string {
  const cues = parseCues(text);
  return cues.map((c, i) => `${i + 1}\n${c.start} --> ${c.end}\n${stripTags(c.text)}`).join('\n\n') + '\n';
}

/** Only the words: no numbers, timings or tags. One cue per line, with a cue's own line breaks turned into spaces. */
export function subtitlesToText(text: string): string {
  return parseCues(text)
    .map((c) => stripTags(c.text).replace(/\s*\n\s*/g, ' ').trim())
    .filter(Boolean)
    .join('\n');
}

// ---------- TOML ----------

// The TOML library is loaded only when a TOML page converts something, so the other pages stay light.
export async function jsonToToml(text: string): Promise<string> {
  const data: unknown = JSON.parse(text);
  if (data === null || typeof data !== 'object' || Array.isArray(data)) throw new Error('TOML needs a JSON object at the top level, such as {"name": "Quack"}.');
  // The library leaves a null out without a word. Losing data silently is worse than stopping, so name the key instead.
  const nullAt = (v: unknown, path: string): string | undefined => {
    if (v === null) return path;
    if (v !== null && typeof v === 'object') {
      for (const [k, child] of Object.entries(v as Record<string, unknown>)) {
        const found = nullAt(child, Array.isArray(v) ? `${path}[${k}]` : path ? `${path}.${k}` : k);
        if (found) return found;
      }
    }
    return undefined;
  };
  const bad = nullAt(data, '');
  if (bad) throw new Error(`TOML has no null value, so "${bad}" cannot be written. Replace it with a value or remove it.`);
  const { stringify } = await import('smol-toml');
  return stringify(data as Record<string, unknown>) + '\n';
}

export async function tomlToJson(text: string): Promise<string> {
  const { parse } = await import('smol-toml');
  return JSON.stringify(parse(text), null, 2);
}

// ---------- XML to CSV ----------

/** The first list of records inside parsed XML: the repeated tag. With no repeated tag, the whole document is one record. */
function findRecords(value: unknown): unknown[] {
  if (Array.isArray(value)) return value;
  if (value !== null && typeof value === 'object') {
    const children = Object.values(value as Record<string, unknown>);
    const list = children.find((v) => Array.isArray(v));
    if (list) return list as unknown[];
    if (children.length === 1 && children[0] !== null && typeof children[0] === 'object') return findRecords(children[0]);
  }
  return [value];
}

export function xmlToCsv(text: string): string {
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@', parseTagValue: false, parseAttributeValue: false, trimValues: true });
  // The parser lists attributes after the child tags; put them first so an id column leads the row.
  const attributesFirst = (r: unknown): unknown => {
    if (r === null || typeof r !== 'object' || Array.isArray(r)) return r;
    const entries = Object.entries(r as Record<string, unknown>);
    return Object.fromEntries([...entries.filter(([k]) => k.startsWith('@')), ...entries.filter(([k]) => !k.startsWith('@'))]);
  };
  const records = findRecords(parser.parse(text)).map(attributesFirst);
  return jsonToCsv(JSON.stringify(records));
}

// ---------- Clean text from chat tools ----------

/** Zero-width space, word joiner, zero-width no-break space and the soft hyphen. The joiners that scripts and emoji need are kept. */
const INVISIBLE = /[\u200B\u2060\uFEFF\u00AD]/g;

/** Markdown out, tidy characters in: plain text that pastes cleanly into an email, a form or a document. */
export function cleanChatText(text: string): string {
  let t = text.replace(/\r\n?/g, '\n').replace(INVISIBLE, '');
  t = t.replace(/^(```|~~~)[^\n]*\n([\s\S]*?)\n\1[ \t]*$/gm, '$2'); // code fences: keep the code
  t = t.replace(/^[ \t]*([-*_])([ \t]*\1){2,}[ \t]*$/gm, ''); // horizontal rules
  t = t.replace(/^[ \t]{0,3}#{1,6}[ \t]+(.*?)[ \t]*#*[ \t]*$/gm, '$1'); // headings
  t = t.replace(/^[ \t]{0,3}>[ \t]?/gm, ''); // quotes
  t = t.replace(/^([ \t]*)[*+][ \t]+/gm, '$1- '); // bullets
  t = t.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1'); // images: keep the alt text
  t = t.replace(/\[([^\]]+)\]\(([^)\s]+)[^)]*\)/g, (_m, label: string, url: string) => (label === url ? url : `${label} (${url})`));
  t = t.replace(/(\*\*|__)(?=\S)([\s\S]*?\S)\1/g, '$2'); // bold
  t = t.replace(/(?<![\w*])\*(?=\S)([^*\n]*?\S)\*(?![\w*])/g, '$1'); // italic with asterisks
  t = t.replace(/(?<![\w_])_(?=\S)([^_\n]*?\S)_(?![\w_])/g, '$1'); // italic with underscores
  t = t.replace(/~~(?=\S)([\s\S]*?\S)~~/g, '$1'); // strikethrough
  t = t.replace(/`([^`\n]+)`/g, '$1'); // inline code
  t = t.replace(/[\u2018\u2019\u201A\u201B]/g, "'").replace(/[\u201C\u201D\u201E\u201F]/g, '"').replace(/\u2026/g, '...').replace(/[  ]/g, ' ').replace(/[\u2013\u2014]/g, '-');
  t = t.replace(/(\S)[ \t]{2,}(?=\S)/g, '$1 '); // runs of spaces inside a line
  t = t.replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n');
  return t.trim();
}

// ---------- What each page shows, and how it runs ----------

const SRT_SAMPLE = '1\n00:00:01,000 --> 00:00:03,500\nHello, and welcome.\n\n2\n00:00:04,000 --> 00:00:06,000\nToday we convert some files.';
const VTT_SAMPLE = 'WEBVTT\n\n00:01.000 --> 00:03.500\nHello, and welcome.\n\n00:04.000 --> 00:06.000\nToday we convert some files.';

export const NEW_DATA_SPECS: Record<string, DataSpec> = {
  'csv-to-markdown-table': { inputLabel: 'CSV', outputLabel: 'Markdown table', ext: 'md', mime: 'text/markdown', accepts: ['.csv', '.tsv', '.txt', 'text/csv'], sample: 'name,role,city\nAsha,Designer,Pune\nBen,Engineer,"Austin, TX"' },
  'markdown-table-to-csv': { inputLabel: 'Markdown table', outputLabel: 'CSV', ext: 'csv', mime: 'text/csv', accepts: ['.md', '.markdown', '.txt'], sample: '| name | role | city |\n| --- | --- | --- |\n| Asha | Designer | Pune |\n| Ben | Engineer | Austin, TX |' },
  'json-to-jsonl': { inputLabel: 'JSON', outputLabel: 'JSONL', ext: 'jsonl', mime: 'application/x-ndjson', accepts: ['.json', 'application/json'], sample: '[{"prompt":"Say hi","completion":"Hi!"},{"prompt":"Say bye","completion":"Bye!"}]' },
  'jsonl-to-json': { inputLabel: 'JSONL', outputLabel: 'JSON', ext: 'json', mime: 'application/json', accepts: ['.jsonl', '.ndjson', '.txt', 'application/x-ndjson'], sample: '{"prompt":"Say hi","completion":"Hi!"}\n{"prompt":"Say bye","completion":"Bye!"}' },
  'csv-to-jsonl': { inputLabel: 'CSV', outputLabel: 'JSONL', ext: 'jsonl', mime: 'application/x-ndjson', accepts: ['.csv', '.tsv', '.txt', 'text/csv'], sample: 'prompt,completion\nSay hi,Hi!\nSay bye,Bye!' },
  'srt-to-vtt': { inputLabel: 'SRT', outputLabel: 'VTT', ext: 'vtt', mime: 'text/vtt', accepts: ['.srt', '.txt'], sample: SRT_SAMPLE },
  'vtt-to-srt': { inputLabel: 'VTT', outputLabel: 'SRT', ext: 'srt', mime: 'application/x-subrip', accepts: ['.vtt', '.txt', 'text/vtt'], sample: VTT_SAMPLE },
  'subtitles-to-text': { inputLabel: 'SRT or VTT', outputLabel: 'text', ext: 'txt', mime: 'text/plain', accepts: ['.srt', '.vtt', '.txt', 'text/vtt'], sample: SRT_SAMPLE },
  'json-to-toml': { inputLabel: 'JSON', outputLabel: 'TOML', ext: 'toml', mime: 'application/toml', accepts: ['.json', 'application/json'], sample: '{"title":"Quack","owner":{"name":"Asha"},"ports":[8000,8001]}' },
  'toml-to-json': { inputLabel: 'TOML', outputLabel: 'JSON', ext: 'json', mime: 'application/json', accepts: ['.toml', '.txt'], sample: 'title = "Quack"\nports = [8000, 8001]\n\n[owner]\nname = "Asha"' },
  'xml-to-csv': { inputLabel: 'XML', outputLabel: 'CSV', ext: 'csv', mime: 'text/csv', accepts: ['.xml', 'application/xml', 'text/xml'], sample: '<books><book id="1"><title>Quack</title><year>2021</year></book><book id="2"><title>Pond</title><year>2024</year></book></books>' },
  'base64-encode': { inputLabel: 'text', outputLabel: 'Base64', ext: 'txt', mime: 'text/plain', accepts: ['.txt', '.md', '.json', '.csv', '.log'], sample: 'Hello, duck! \u{1F986}' },
  'base64-decode': { inputLabel: 'Base64', outputLabel: 'text', ext: 'txt', mime: 'text/plain', accepts: ['.txt', '.b64', '.base64'], sample: 'SGVsbG8sIGR1Y2shIPCfpoY=' },
  'url-encode': { inputLabel: 'text', outputLabel: 'URL-encoded text', ext: 'txt', mime: 'text/plain', accepts: ['.txt'], sample: 'name=Asha & Ben&city=Zürich?q=ducks in a row' },
  'url-decode': { inputLabel: 'URL-encoded text', outputLabel: 'text', ext: 'txt', mime: 'text/plain', accepts: ['.txt'], sample: 'name%3DAsha%20%26%20Ben%26city%3DZ%C3%BCrich%3Fq%3Dducks%20in%20a%20row' },
  'json-formatter': { inputLabel: 'JSON', outputLabel: 'formatted JSON', ext: 'json', mime: 'application/json', accepts: ['.json', '.txt', 'application/json'], sample: '{"name":"Quack","tags":["duck","pond"],"size":{"w":12,"h":8},"big":12345678901234567890}' },
  'fix-broken-json': { inputLabel: 'broken JSON', outputLabel: 'fixed JSON', ext: 'json', mime: 'application/json', accepts: ['.json', '.txt', 'application/json'], sample: "```json\n{\n  // the pond\n  name: 'Quack',\n  tags: ['duck', 'pond',],\n  swims: True,\n  owner: None,\n}\n```" },
  'chatgpt-to-markdown': { inputLabel: 'ChatGPT export', outputLabel: 'Markdown', ext: 'md', mime: 'text/markdown', accepts: ['.json', 'application/json'], sample: '[{"title":"Duck facts","create_time":1700000000,"current_node":"c","mapping":{"a":{"id":"a","message":null,"parent":null,"children":["b"]},"b":{"id":"b","parent":"a","children":["c"],"message":{"author":{"role":"user"},"content":{"content_type":"text","parts":["Why do ducks float?"]}}},"c":{"id":"c","parent":"b","children":[],"message":{"author":{"role":"assistant"},"content":{"content_type":"text","parts":["Their feathers trap air and are coated in oil."]}}}}}]' },
  'clean-chat-text': { inputLabel: 'text', outputLabel: 'clean text', ext: 'txt', mime: 'text/plain', accepts: ['.txt', '.md', '.markdown'], sample: '## Plan\n\nHere is **the plan** — it’s _simple_:\n\n* Read the [guide](https://example.com)\n* Use `pnpm test`' },
};

export const ALL_DATA_SPECS: Record<string, DataSpec> = { ...DATA_SPECS, ...NEW_DATA_SPECS };

const NEW_RUNNERS: Record<string, (input: string) => string | Promise<string>> = {
  'csv-to-markdown-table': csvToMarkdownTable,
  'markdown-table-to-csv': markdownTableToCsv,
  'json-to-jsonl': jsonToJsonl,
  'jsonl-to-json': jsonlToJson,
  'csv-to-jsonl': csvToJsonl,
  'srt-to-vtt': srtToVtt,
  'vtt-to-srt': vttToSrt,
  'subtitles-to-text': subtitlesToText,
  'json-to-toml': jsonToToml,
  'toml-to-json': tomlToJson,
  'xml-to-csv': xmlToCsv,
  'clean-chat-text': cleanChatText,
  'base64-encode': base64Encode,
  'base64-decode': base64Decode,
  'url-encode': urlEncode,
  'url-decode': urlDecode,
  'json-formatter': jsonFormat,
  'fix-broken-json': fixBrokenJson,
  'chatgpt-to-markdown': chatgptToMarkdown,
};

export async function runAnyDataConversion(slug: string, input: string): Promise<string> {
  const run = NEW_RUNNERS[slug];
  return run ? run(input) : runDataConversion(slug, input);
}
