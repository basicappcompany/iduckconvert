/** Text and data conversions. Pure functions, no DOM except `htmlToMarkdown`. */
import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import { dump, load } from 'js-yaml';
import { marked } from 'marked';

export type Row = string[];

/** Guess the separator from the first line: comma, semicolon, tab or pipe, whichever appears most outside quotes. */
export function detectDelimiter(text: string): string {
  const firstLine = text.split(/\r?\n/, 1)[0] ?? '';
  let best = ',';
  let bestCount = 0;
  for (const d of [',', ';', '\t', '|']) {
    let inQuotes = false;
    let count = 0;
    for (const ch of firstLine) {
      if (ch === '"') inQuotes = !inQuotes;
      else if (ch === d && !inQuotes) count++;
    }
    if (count > bestCount) {
      best = d;
      bestCount = count;
    }
  }
  return best;
}

/** RFC 4180 style parser: quoted fields, doubled quotes, newlines inside quotes. */
export function parseCsv(text: string, delimiter = detectDelimiter(text)): Row[] {
  const src = text.replace(/^﻿/, '');
  const rows: Row[] = [];
  let row: Row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < src.length; i++) {
    const ch = src[i]!;
    if (inQuotes) {
      if (ch === '"') {
        if (src[i + 1] === '"') {
          field += '"';
          i++;
        } else inQuotes = false;
      } else field += ch;
    } else if (ch === '"') inQuotes = true;
    else if (ch === delimiter) {
      row.push(field);
      field = '';
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && src[i + 1] === '\n') i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else field += ch;
  }
  if (field !== '' || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

const needsQuotes = (value: string, delimiter: string) => value.includes('"') || value.includes('\n') || value.includes('\r') || value.includes(delimiter);

export function stringifyCsv(rows: readonly (readonly unknown[])[], delimiter = ','): string {
  return rows
    .map((row) =>
      row
        .map((cell) => {
          const value = cell === null || cell === undefined ? '' : typeof cell === 'object' ? JSON.stringify(cell) : String(cell);
          return needsQuotes(value, delimiter) ? `"${value.replace(/"/g, '""')}"` : value;
        })
        .join(delimiter),
    )
    .join('\r\n');
}

/** CSV cells are all text; this turns the obvious numbers and booleans back into JSON types. */
function typed(value: string): unknown {
  if (value === '') return '';
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (/^-?(0|[1-9]\d*)(\.\d+)?$/.test(value) && value.length < 16) return Number(value);
  return value;
}

export function csvToJson(text: string, options: { typed?: boolean } = {}): string {
  const rows = parseCsv(text).filter((r) => r.length > 1 || (r[0] ?? '') !== '');
  const [head = [], ...body] = rows;
  const keys = head.map((h, i) => (h.trim() === '' ? `column${i + 1}` : h.trim()));
  const objects = body.map((r) => Object.fromEntries(keys.map((k, i) => [k, options.typed === false ? (r[i] ?? '') : typed(r[i] ?? '')])));
  return JSON.stringify(objects, null, 2);
}

/** Flatten nested objects into dotted keys: {a:{b:1}} becomes {"a.b":1}. Arrays are kept as JSON text. */
function flatten(value: unknown, prefix = '', out: Record<string, unknown> = {}): Record<string, unknown> {
  if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) flatten(v, prefix ? `${prefix}.${k}` : k, out);
  } else out[prefix || 'value'] = value;
  return out;
}

export function jsonToCsv(text: string): string {
  const data: unknown = JSON.parse(text);
  const list = Array.isArray(data) ? data : [data];
  const flat = list.map((item) => flatten(item));
  const keys: string[] = [];
  for (const row of flat) for (const k of Object.keys(row)) if (!keys.includes(k)) keys.push(k);
  return stringifyCsv([keys, ...flat.map((row) => keys.map((k) => row[k]))]);
}

export function jsonToXml(text: string, rootName = 'root'): string {
  const data: unknown = JSON.parse(text);
  const builder = new XMLBuilder({ format: true, indentBy: '  ', attributeNamePrefix: '@', ignoreAttributes: false, suppressEmptyNode: true });
  const single = data !== null && typeof data === 'object' && !Array.isArray(data) && Object.keys(data).length === 1;
  const body = Array.isArray(data) ? { [rootName]: { item: data } } : single ? data : { [rootName]: data };
  return '<?xml version="1.0" encoding="UTF-8"?>\n' + String(builder.build(body));
}

export function xmlToJson(text: string): string {
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@', parseTagValue: false, parseAttributeValue: false, trimValues: true });
  return JSON.stringify(parser.parse(text), null, 2);
}

export function yamlToJson(text: string): string {
  return JSON.stringify(load(text), null, 2);
}

export function jsonToYaml(text: string): string {
  return dump(JSON.parse(text), { indent: 2, lineWidth: 100, noRefs: true });
}

export function markdownToHtml(text: string): string {
  return String(marked.parse(text, { async: false }));
}

export async function htmlToMarkdown(text: string): Promise<string> {
  const { default: Turndown } = await import('turndown');
  const service = new Turndown({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced' });
  return service.turndown(text);
}

/** Decode bytes with a named encoding (a TextDecoder label such as "windows-1252"). */
export function decodeBytes(bytes: Uint8Array, encoding: string): string {
  return new TextDecoder(encoding, { fatal: false }).decode(bytes);
}

export const ENCODINGS = ['utf-8', 'windows-1252', 'iso-8859-1', 'iso-8859-15', 'windows-1250', 'windows-1251', 'utf-16le', 'utf-16be', 'shift_jis', 'gbk', 'big5', 'euc-kr'] as const;

export interface DataSpec {
  inputLabel: string;
  outputLabel: string;
  ext: string;
  mime: string;
  accepts: string[];
  sample: string;
}

/** What each text conversion page shows: labels, file types and a sample to try. */
export const DATA_SPECS: Record<string, DataSpec> = {
  'csv-to-json': { inputLabel: 'CSV', outputLabel: 'JSON', ext: 'json', mime: 'application/json', accepts: ['.csv', '.tsv', '.txt', 'text/csv'], sample: 'name,age,city\nAsha,29,Pune\nBen,34,"Austin, TX"' },
  'json-to-csv': { inputLabel: 'JSON', outputLabel: 'CSV', ext: 'csv', mime: 'text/csv', accepts: ['.json', 'application/json'], sample: '[{"name":"Asha","age":29,"address":{"city":"Pune"}},{"name":"Ben","age":34,"address":{"city":"Austin"}}]' },
  'json-to-xml': { inputLabel: 'JSON', outputLabel: 'XML', ext: 'xml', mime: 'application/xml', accepts: ['.json', 'application/json'], sample: '{"book":{"title":"Quack","tags":["duck","pond"]}}' },
  'xml-to-json': { inputLabel: 'XML', outputLabel: 'JSON', ext: 'json', mime: 'application/json', accepts: ['.xml', 'application/xml', 'text/xml'], sample: '<book id="1"><title>Quack</title><tag>duck</tag><tag>pond</tag></book>' },
  'yaml-to-json': { inputLabel: 'YAML', outputLabel: 'JSON', ext: 'json', mime: 'application/json', accepts: ['.yaml', '.yml', 'text/yaml'], sample: 'name: Quack\nlegs: 2\ntags:\n  - duck\n  - pond' },
  'json-to-yaml': { inputLabel: 'JSON', outputLabel: 'YAML', ext: 'yaml', mime: 'text/yaml', accepts: ['.json', 'application/json'], sample: '{"name":"Quack","legs":2,"tags":["duck","pond"]}' },
  'markdown-to-html': { inputLabel: 'Markdown', outputLabel: 'HTML', ext: 'html', mime: 'text/html', accepts: ['.md', '.markdown', '.txt'], sample: '# Hello\n\nSome **bold** text and a [link](https://iduckconvert.com).\n\n- one\n- two' },
  'html-to-markdown': { inputLabel: 'HTML', outputLabel: 'Markdown', ext: 'md', mime: 'text/markdown', accepts: ['.html', '.htm', 'text/html'], sample: '<h1>Hello</h1><p>Some <strong>bold</strong> text and a <a href="https://iduckconvert.com">link</a>.</p><ul><li>one</li><li>two</li></ul>' },
};

export async function runDataConversion(slug: string, input: string): Promise<string> {
  switch (slug) {
    case 'csv-to-json':
      return csvToJson(input);
    case 'json-to-csv':
      return jsonToCsv(input);
    case 'json-to-xml':
      return jsonToXml(input);
    case 'xml-to-json':
      return xmlToJson(input);
    case 'yaml-to-json':
      return yamlToJson(input);
    case 'json-to-yaml':
      return jsonToYaml(input);
    case 'markdown-to-html':
      return markdownToHtml(input);
    case 'html-to-markdown':
      return htmlToMarkdown(input);
    default:
      throw new Error(`Unknown converter: ${slug}`);
  }
}
