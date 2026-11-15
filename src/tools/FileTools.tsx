/** Converters that turn dropped files into other files in the browser: CSV and Excel, TIFF to JPG, WEBP to GIF. */
import { useMemo, useState } from 'preact/hooks';
import SimpleToolShell from '../components/SimpleToolShell';
import { Field, OptionsPanel } from '../components/OptionsPanel';
import type { OutputFile, ToolDefinition } from '../engine/types';
import { checkSize, withExtension } from '../lib/files';
import { fill, useOpts } from '../i18n/options';
import { parseCsv, stringifyCsv } from '../convert/data';

// ---------- CSV <-> Excel ----------
interface ExcelOptions {
  bom: boolean;
}

/** Cells that are plainly numbers become numbers; things like 01234 or 12-5 stay text so no data is lost. */
export function cellValue(text: string): string | number {
  return /^-?(0|[1-9]\d*)(\.\d+)?$/.test(text) && text.length < 16 ? Number(text) : text;
}

const excelTool = (to: string): ToolDefinition<ExcelOptions> => ({
  id: `excel-${to}`,
  accepts: to === 'xlsx' ? ['.csv', '.tsv', '.txt', 'text/csv'] : ['.xlsx', '.xls', '.xlsm', '.ods'],
  defaultOptions: { bom: true },
  run: async (file, options, ctx) => {
    checkSize(file, 50, 'spreadsheet');
    const XLSX = await import('xlsx');
    ctx.onProgress(0.2);
    if (to === 'xlsx') {
      const text = new TextDecoder('utf-8').decode(new Uint8Array(await file.arrayBuffer()));
      const rows = parseCsv(text).map((row) => row.map(cellValue));
      const sheet = XLSX.utils.aoa_to_sheet(rows);
      const book = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(book, sheet, 'Sheet1');
      const out = XLSX.write(book, { type: 'array', bookType: 'xlsx' }) as ArrayBuffer;
      return [{ name: withExtension(file.name, 'xlsx'), blob: new Blob([out], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }) }];
    }
    const book = XLSX.read(new Uint8Array(await file.arrayBuffer()), { type: 'array', cellDates: true });
    const base = withExtension(file.name, 'csv').replace(/\.csv$/, '');
    const outputs: OutputFile[] = book.SheetNames.map((sheetName) => {
      const rows = XLSX.utils.sheet_to_json<unknown[]>(book.Sheets[sheetName]!, { header: 1, raw: false, blankrows: false, defval: '' });
      const csv = stringifyCsv(rows);
      const name = book.SheetNames.length === 1 ? `${base}.csv` : `${base}-${sheetName.replace(/[\\/:*?"<>|]/g, '_')}.csv`;
      return { name, blob: new Blob([options.bom ? '﻿' : '', csv], { type: 'text/csv;charset=utf-8' }) };
    });
    return outputs;
  },
});

export function ExcelTool({ to, runLabel }: { to: 'xlsx' | 'csv'; runLabel: string }) {
  const o = useOpts();
  const tool = useMemo(() => excelTool(to), [to]);
  const [bom, setBom] = useState(true);
  return (
    <SimpleToolShell tool={tool} options={{ bom }} canRun runLabel={runLabel}>
      {() =>
        to === 'csv' ? (
          <OptionsPanel title={o.options}>
            <label class="flex items-center gap-2 text-sm font-bold">
              <input type="checkbox" checked={bom} onChange={(e) => setBom(e.currentTarget.checked)} />
              {o.excelBom}
            </label>
          </OptionsPanel>
        ) : (
          <p class="text-sm text-muted">{o.excelNote}</p>
        )
      }
    </SimpleToolShell>
  );
}

// ---------- TIFF -> JPG ----------
interface TiffOptions {
  quality: number;
}

async function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality?: number): Promise<Blob> {
  return new Promise((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('The picture could not be saved.'))), type, quality));
}

const tiffTool: ToolDefinition<TiffOptions> = {
  id: 'tiff-to-jpg',
  accepts: ['.tif', '.tiff', 'image/tiff'],
  defaultOptions: { quality: 90 },
  run: async (file, options, ctx) => {
    checkSize(file, 150, 'TIFF');
    const UTIF = (await import('utif2')).default;
    const buffer = await file.arrayBuffer();
    const pages = UTIF.decode(buffer);
    if (pages.length === 0) throw new Error('No picture found in this TIFF.');
    const outputs: OutputFile[] = [];
    for (const [i, page] of pages.entries()) {
      if (ctx.signal.aborted) break;
      UTIF.decodeImage(buffer, page);
      const rgba = UTIF.toRGBA8(page);
      const canvas = document.createElement('canvas');
      canvas.width = page.width;
      canvas.height = page.height;
      const g = canvas.getContext('2d')!;
      // JPG has no transparency, so scans with an alpha channel land on white.
      g.fillStyle = '#fff';
      g.fillRect(0, 0, canvas.width, canvas.height);
      const overlay = document.createElement('canvas');
      overlay.width = page.width;
      overlay.height = page.height;
      overlay.getContext('2d')!.putImageData(new ImageData(new Uint8ClampedArray(rgba.buffer.slice(0) as ArrayBuffer), page.width, page.height), 0, 0);
      g.drawImage(overlay, 0, 0);
      const blob = await canvasToBlob(canvas, 'image/jpeg', options.quality / 100);
      const base = withExtension(file.name, 'jpg').replace(/\.jpg$/, '');
      outputs.push({ name: pages.length === 1 ? `${base}.jpg` : `${base}-page${i + 1}.jpg`, blob, width: page.width, height: page.height });
      ctx.onProgress((i + 1) / pages.length);
    }
    return outputs;
  },
};

export function TiffTool({ runLabel }: { runLabel: string }) {
  const o = useOpts();
  const [quality, setQuality] = useState(90);
  return (
    <SimpleToolShell tool={tiffTool} options={{ quality }} canRun runLabel={runLabel}>
      {() => (
        <OptionsPanel title={o.options}>
          <Field id="tq" label={fill(o.tiffQuality, { q: quality })} hint={o.tiffHint}>
            <input id="tq" type="range" min="40" max="100" value={quality} onInput={(e) => setQuality(Number(e.currentTarget.value))} />
          </Field>
        </OptionsPanel>
      )}
    </SimpleToolShell>
  );
}

// ---------- WEBP -> GIF ----------
interface WebpOptions {
  maxWidth: number;
}

const webpTool: ToolDefinition<WebpOptions> = {
  id: 'webp-to-gif',
  accepts: ['.webp', 'image/webp'],
  defaultOptions: { maxWidth: 0 },
  run: async (file, options) => {
    checkSize(file, 50, 'picture');
    const { GIFEncoder, quantize, applyPalette } = await import('gifenc');
    const bitmap = await createImageBitmap(file);
    const scale = options.maxWidth > 0 && bitmap.width > options.maxWidth ? options.maxWidth / bitmap.width : 1;
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const g = canvas.getContext('2d', { willReadFrequently: true })!;
    g.drawImage(bitmap, 0, 0, width, height);
    bitmap.close();
    const { data } = g.getImageData(0, 0, width, height);
    // Fully transparent pixels become the GIF's transparent colour.
    const palette = quantize(data, 256, { format: 'rgba4444', oneBitAlpha: true });
    const index = applyPalette(data, palette, 'rgba4444');
    const transparent = palette.findIndex((c: number[]) => c.length === 4 && c[3] === 0);
    const gif = GIFEncoder();
    gif.writeFrame(index, width, height, { palette, ...(transparent >= 0 ? { transparent: true, transparentIndex: transparent } : {}) });
    gif.finish();
    return [{ name: withExtension(file.name, 'gif'), blob: new Blob([gif.bytes() as BlobPart], { type: 'image/gif' }), width, height }];
  },
};

export function WebpGifTool({ runLabel }: { runLabel: string }) {
  const o = useOpts();
  const [maxWidth, setMaxWidth] = useState(0);
  return (
    <SimpleToolShell tool={webpTool} options={{ maxWidth }} canRun runLabel={runLabel}>
      {() => (
        <OptionsPanel title={o.options}>
          <Field id="ww" label={o.largestWidth} hint={o.webpHint}>
            <select id="ww" class="input" value={maxWidth} onChange={(e) => setMaxWidth(Number(e.currentTarget.value))}>
              <option value={0}>{o.keepSize}</option>
              {[320, 480, 640, 800, 1080].map((w) => (
                <option value={w}>{fill(o.pixels, { n: w })}</option>
              ))}
            </select>
          </Field>
          <p class="text-sm text-muted">{o.webpNote}</p>
        </OptionsPanel>
      )}
    </SimpleToolShell>
  );
}
