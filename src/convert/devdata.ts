/**
 * Text utilities for developers and AI work: Base64, URL encoding, JSON formatting, JSON repair and
 * the ChatGPT export. Pure functions that run in the page; the paste-or-drop island calls them
 * through `textdata.ts`.
 */

// ---------- Base64 ----------

export function base64Encode(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (let i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(binary);
}

export function base64Decode(text: string): string {
  // Accept the URL-safe alphabet, line breaks and missing padding, which are all common in the wild.
  let b64 = text.replace(/\s+/g, '').replace(/-/g, '+').replace(/_/g, '/');
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(b64)) throw new Error('That is not valid Base64. It may only contain letters, digits, + and / (or - and _), with = at the end.');
  b64 = b64.replace(/=+$/, '');
  if (b64.length % 4 === 1) throw new Error('That is not valid Base64: its length cannot be right. Part of it may be missing.');
  const binary = atob(b64 + '='.repeat((4 - (b64.length % 4)) % 4));
  const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  } catch {
    throw new Error('The Base64 is valid, but it does not decode to text. It may be an image or another file.');
  }
}

// ---------- URL encoding ----------

export function urlEncode(text: string): string {
  return encodeURIComponent(text);
}

export function urlDecode(text: string): string {
  try {
    return decodeURIComponent(text.replace(/\+/g, ' '));
  } catch {
    throw new Error('The text has a % that is not followed by two hex digits, or its escapes are not valid UTF-8.');
  }
}

// ---------- JSON: format and repair ----------

type Node = { t: 'obj'; e: [string, Node][] } | { t: 'arr'; v: Node[] } | { t: 'str'; v: string } | { t: 'raw'; v: string };

const CLOSERS: Record<string, string> = { '"': '"', "'": "'", '“': '”"', '”': '”"', '‘': "’'", '’': "’'", '`': '`' };
const MAX_DEPTH = 500;

/**
 * A forgiving JSON reader. It keeps numbers exactly as written and keeps the order and duplicates of keys,
 * which `JSON.parse` followed by `JSON.stringify` would not.
 */
class Lenient {
  private i = 0;
  constructor(private readonly s: string) {}

  fail(what: string): never {
    const near = this.s.slice(this.i, this.i + 24).replace(/\s+/g, ' ');
    throw new Error(`${what} near character ${this.i + 1}${near ? ` ("${near}")` : ' (the end of the text)'}.`);
  }

  private ws(): void {
    for (;;) {
      const c = this.s[this.i];
      if (c !== undefined && /[\s﻿ ]/.test(c)) this.i++;
      else if (c === '/' && this.s[this.i + 1] === '/') this.i = this.eol();
      else if (c === '#') this.i = this.eol();
      else if (c === '/' && this.s[this.i + 1] === '*') {
        const end = this.s.indexOf('*/', this.i + 2);
        this.i = end < 0 ? this.s.length : end + 2;
      } else return;
    }
  }

  private eol(): number {
    const n = this.s.indexOf('\n', this.i);
    return n < 0 ? this.s.length : n;
  }

  /** Reads the first object or array in the text and ignores anything around it. */
  readFirst(): Node {
    const start = this.s.search(/[{[]/);
    if (start < 0) throw new Error('There is no JSON object or array in this text. It should start with { or [.');
    this.i = start;
    return this.value(0);
  }

  private value(depth: number): Node {
    if (depth > MAX_DEPTH) this.fail('This is nested too deeply to read');
    this.ws();
    const c = this.s[this.i];
    if (c === undefined) this.fail('A value is missing');
    if (c === '{') return this.object(depth);
    if (c === '[') return this.array(depth);
    if (c in CLOSERS) return { t: 'str', v: this.string() };
    const num = /^[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/.exec(this.s.slice(this.i, this.i + 400));
    if (num) {
      this.i += num[0].length;
      return { t: 'raw', v: this.number(num[0]) };
    }
    const word = /^[A-Za-z_$][\w$-]*/.exec(this.s.slice(this.i, this.i + 400));
    if (word) {
      this.i += word[0].length;
      return this.word(word[0]);
    }
    return this.fail('Unexpected character');
  }

  private number(raw: string): string {
    let n = raw.replace(/^\+/, '');
    const sign = n.startsWith('-') ? '-' : '';
    n = n.replace(/^-/, '');
    if (n.startsWith('.')) n = '0' + n;
    n = n.replace(/\.(?=$|[eE])/, '').replace(/^0+(?=\d)/, '');
    return sign + n;
  }

  private word(w: string): Node {
    const lower = w.toLowerCase();
    if (lower === 'true' || lower === 'false' || lower === 'null') return { t: 'raw', v: lower };
    if (lower === 'none' || lower === 'undefined' || lower === 'nan' || lower === 'infinity') return { t: 'raw', v: 'null' };
    return { t: 'str', v: w };
  }

  private string(): string {
    const open = this.s[this.i]!;
    const close = CLOSERS[open]!;
    this.i++;
    let out = '';
    while (this.i < this.s.length) {
      const c = this.s[this.i]!;
      if (close.includes(c)) {
        this.i++;
        return out;
      }
      if (c === '\\') {
        const n = this.s[this.i + 1];
        this.i += 2;
        if (n === undefined) break;
        const simple: Record<string, string> = { n: '\n', r: '\r', t: '\t', b: '\b', f: '\f', '/': '/', '\\': '\\', '"': '"', "'": "'" };
        if (n === 'u' && /^[0-9a-fA-F]{4}/.test(this.s.slice(this.i, this.i + 4))) {
          out += String.fromCharCode(parseInt(this.s.slice(this.i, this.i + 4), 16));
          this.i += 4;
        } else out += simple[n] ?? '\\' + n;
        continue;
      }
      out += c;
      this.i++;
    }
    return out; // an unfinished string at the end of the text: keep what there is
  }

  private key(): string {
    const c = this.s[this.i]!;
    if (c in CLOSERS) return this.string();
    const m = /^[^\s:,={}[\]"'`“”‘’]+/.exec(this.s.slice(this.i, this.i + 400));
    if (!m) return this.fail('A key was expected');
    this.i += m[0].length;
    return m[0];
  }

  private object(depth: number): Node {
    this.i++;
    const e: [string, Node][] = [];
    for (;;) {
      this.ws();
      const c = this.s[this.i];
      if (c === undefined) return { t: 'obj', e }; // cut off: close it
      if (c === '}') {
        this.i++;
        return { t: 'obj', e };
      }
      if (c === ',') {
        this.i++;
        continue;
      }
      const k = this.key();
      this.ws();
      if (this.s[this.i] === ':' || this.s[this.i] === '=') this.i++;
      this.ws();
      const next = this.s[this.i];
      if (next === undefined) {
        e.push([k, { t: 'raw', v: 'null' }]);
        return { t: 'obj', e };
      }
      if (next === ',' || next === '}') this.fail(`The key "${k}" has no value`);
      e.push([k, this.value(depth + 1)]);
    }
  }

  private array(depth: number): Node {
    this.i++;
    const v: Node[] = [];
    for (;;) {
      this.ws();
      const c = this.s[this.i];
      if (c === undefined) return { t: 'arr', v };
      if (c === ']') {
        this.i++;
        return { t: 'arr', v };
      }
      if (c === ',') {
        this.i++;
        continue;
      }
      v.push(this.value(depth + 1));
    }
  }
}

function write(n: Node, level: number): string {
  const pad = '  '.repeat(level + 1);
  const end = '  '.repeat(level);
  if (n.t === 'str') return JSON.stringify(n.v);
  if (n.t === 'raw') return n.v;
  if (n.t === 'arr') return n.v.length === 0 ? '[]' : `[\n${n.v.map((x) => pad + write(x, level + 1)).join(',\n')}\n${end}]`;
  return n.e.length === 0 ? '{}' : `{\n${n.e.map(([k, x]) => `${pad}${JSON.stringify(k)}: ${write(x, level + 1)}`).join(',\n')}\n${end}}`;
}

/** Valid JSON, laid out with two-space indentation. Numbers and key order are kept exactly. */
export function jsonFormat(text: string): string {
  const source = text.replace(/^﻿/, '');
  JSON.parse(source); // throws the browser's own message, with the position, if it is not valid
  if (!/^\s*[{[]/.test(source)) return source.trim();
  return write(new Lenient(source).readFirst(), 0);
}

/** Broken JSON (single quotes, comments, trailing commas, Python values, a code fence around it, cut off at the end) made valid. */
export function fixBrokenJson(text: string): string {
  let source = text.replace(/^﻿/, '');
  const fence = /```[A-Za-z0-9_-]*[ \t]*\r?\n([\s\S]*?)(?:\r?\n[ \t]*```|$)/.exec(source);
  if (fence) source = fence[1]!;
  return write(new Lenient(source).readFirst(), 0);
}

// ---------- ChatGPT export to Markdown ----------

interface ExportContent {
  content_type?: string;
  parts?: unknown[];
  text?: string;
  language?: string;
}
interface ExportMessage {
  author?: { role?: string };
  content?: ExportContent;
  recipient?: string;
  metadata?: { is_visually_hidden_from_conversation?: boolean };
}
interface ExportNode {
  message?: ExportMessage | null;
  parent?: string | null;
  children?: string[];
}
interface ExportConversation {
  title?: string | null;
  create_time?: number | null;
  mapping?: Record<string, ExportNode>;
  current_node?: string | null;
}

/** The private-use markers that ChatGPT puts around citations and entities. */
function stripMarkers(s: string): string {
  return s.replace(/[^]*/g, '').replace(/[-]/g, '');
}

function messageText(m: ExportMessage): string {
  const c = m.content;
  if (!c) return '';
  if (c.content_type === 'code') {
    const lang = c.language && c.language !== 'unknown' ? c.language : '';
    return '```' + lang + '\n' + (c.text ?? '').replace(/\n$/, '') + '\n```';
  }
  if (c.content_type !== 'text' && c.content_type !== 'multimodal_text') return '';
  const parts = (c.parts ?? []).map((p) => {
    if (typeof p === 'string') return p;
    if (p && typeof p === 'object' && (p as { content_type?: string }).content_type === 'image_asset_pointer') return '*[image]*';
    return '';
  });
  return stripMarkers(parts.filter((p) => p.trim() !== '').join('\n\n')).trim();
}

/** The messages of the branch the person was reading, first to last. */
function orderedNodes(mapping: Record<string, ExportNode>, current: string | null | undefined): ExportNode[] {
  const path: ExportNode[] = [];
  const seen = new Set<string>();
  if (current && mapping[current]) {
    for (let id: string | null | undefined = current; id && mapping[id] && !seen.has(id); id = mapping[id]!.parent) {
      seen.add(id);
      path.push(mapping[id]!);
    }
    return path.reverse();
  }
  const root = Object.keys(mapping).find((id) => !mapping[id]!.parent || !mapping[mapping[id]!.parent!]);
  for (let id: string | undefined = root; id && mapping[id] && !seen.has(id); ) {
    seen.add(id);
    path.push(mapping[id]!);
    id = mapping[id]!.children?.at(-1);
  }
  return path;
}

function conversationToMarkdown(c: ExportConversation): string {
  const lines = [`# ${(c.title ?? '').trim() || 'Untitled'}`];
  if (typeof c.create_time === 'number') lines.push('', `*${new Date(c.create_time * 1000).toISOString().slice(0, 10)}*`);
  for (const node of orderedNodes(c.mapping ?? {}, c.current_node)) {
    const m = node.message;
    if (!m || m.metadata?.is_visually_hidden_from_conversation) continue;
    const role = m.author?.role;
    if (role !== 'user' && role !== 'assistant') continue;
    if (role === 'assistant' && m.recipient && m.recipient !== 'all') continue; // a call to a tool, not a reply
    const text = messageText(m);
    if (text) lines.push('', role === 'user' ? '## You' : '## ChatGPT', '', text);
  }
  return lines.join('\n');
}

export function chatgptToMarkdown(text: string): string {
  const data: unknown = JSON.parse(text.replace(/^﻿/, ''));
  const list = Array.isArray(data) ? data : [data];
  const conversations = list.filter((c): c is ExportConversation => c !== null && typeof c === 'object' && typeof (c as ExportConversation).mapping === 'object' && (c as ExportConversation).mapping !== null);
  if (conversations.length === 0) throw new Error('This does not look like a ChatGPT export. Use the conversations.json file from the unzipped export.');
  return conversations.map(conversationToMarkdown).join('\n\n---\n\n') + '\n';
}
