/**
 * Small developer tools that need no file conversion: Unix timestamps, UUIDs, hashes and the text chunker.
 * Pure functions (the islands in src/tools/DevTools.tsx only draw them), with unit tests.
 */
// ---------- Unix timestamp ----------

export type TimestampUnit = 'seconds' | 'milliseconds' | 'microseconds' | 'nanoseconds' | 'date';

export interface ParsedTimestamp {
  /** Milliseconds since 1 January 1970 UTC. */
  ms: number;
  /** What the input was taken to be. */
  unit: TimestampUnit;
}

/** The biggest instant a JavaScript Date can hold. */
const MAX_MS = 8.64e15;

const ISO_LIKE = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2})(\.\d+)?)?)?\s*(Z|[+-]\d{2}:?\d{2})?$/i;
const RFC_LIKE = /^[A-Za-z]{3},\s+\d{1,2}\s+[A-Za-z]{3}\s+\d{4}\s+\d{2}:\d{2}(?::\d{2})?\s+(?:GMT|UTC|[+-]\d{4})$/;

/**
 * Reads a Unix timestamp or a date. A whole number of up to 11 digits is seconds, 12 to 14 digits milliseconds,
 * 15 to 17 microseconds and more than that nanoseconds. A date with no time zone is read as UTC, so the answer
 * does not depend on the computer it is worked out on. Returns null when it is neither.
 */
export function parseTimestamp(input: string): ParsedTimestamp | null {
  const text = input.trim();
  if (text === '') return null;
  const numeric = /^[+-]?(\d+)(?:\.\d+)?$/.exec(text);
  if (numeric) {
    const digits = numeric[1]!.length;
    const value = Number(text);
    const [ms, unit]: [number, TimestampUnit] =
      digits <= 11 ? [value * 1000, 'seconds'] : digits <= 14 ? [value, 'milliseconds'] : digits <= 17 ? [value / 1000, 'microseconds'] : [value / 1e6, 'nanoseconds'];
    const rounded = Math.round(ms);
    return Number.isFinite(rounded) && Math.abs(rounded) <= MAX_MS ? { ms: rounded, unit } : null;
  }
  let ms = NaN;
  const iso = ISO_LIKE.exec(text);
  if (iso) {
    const [, y, mo, d, h = '00', mi = '00', s = '00', frac = '', zone = 'Z'] = iso;
    const z = zone.toUpperCase() === 'Z' ? 'Z' : zone.length === 5 ? `${zone.slice(0, 3)}:${zone.slice(3)}` : zone;
    ms = Date.parse(`${y}-${mo}-${d}T${h}:${mi}:${s}${frac}${z}`);
    // Date.parse rolls 31 February into March; a date that is not real is rejected instead.
    if (!Number.isNaN(ms) && z === 'Z' && new Date(ms).getUTCDate() !== Number(d)) ms = NaN;
  } else if (RFC_LIKE.test(text)) {
    ms = Date.parse(text);
  }
  return Number.isNaN(ms) || Math.abs(ms) > MAX_MS ? null : { ms, unit: 'date' };
}

export interface TimestampView {
  seconds: string;
  milliseconds: string;
  iso: string;
  local: string;
  relative: string;
}

const RELATIVE_STEPS: ReadonlyArray<[Intl.RelativeTimeFormatUnit, number]> = [
  ['year', 365 * 86_400],
  ['month', 30 * 86_400],
  ['day', 86_400],
  ['hour', 3_600],
  ['minute', 60],
  ['second', 1],
];

/** "3 days ago" or "in 2 hours", in the page language. */
export function relativeTime(ms: number, nowMs: number, lang: string): string {
  const diff = Math.round((ms - nowMs) / 1000);
  const fmt = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' });
  for (const [unit, size] of RELATIVE_STEPS) {
    if (Math.abs(diff) >= size || unit === 'second') return fmt.format(Math.trunc(diff / size), unit);
  }
  return '';
}

/** The same instant written the ways a developer asks for it. */
export function describeTimestamp(ms: number, lang: string, nowMs: number = Date.now()): TimestampView {
  const date = new Date(ms);
  let local: string;
  try {
    local = new Intl.DateTimeFormat(lang, { dateStyle: 'full', timeStyle: 'long' }).format(date);
  } catch {
    local = date.toString();
  }
  return {
    seconds: String(Math.floor(ms / 1000)),
    milliseconds: String(ms),
    iso: date.toISOString(),
    local,
    relative: relativeTime(ms, nowMs, lang),
  };
}

// ---------- UUID ----------

export type UuidVersion = 'v4' | 'v7';

export interface UuidOptions {
  upper?: boolean;
  hyphens?: boolean;
  /** For tests: the bytes to use and the clock. */
  random?: (n: number) => Uint8Array;
  now?: number;
}

function randomBytes(n: number): Uint8Array {
  const bytes = new Uint8Array(n);
  crypto.getRandomValues(bytes);
  return bytes;
}

function formatUuid(bytes: Uint8Array, upper: boolean, hyphens: boolean): string {
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
  const text = hyphens ? `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}` : hex;
  return upper ? text.toUpperCase() : text;
}

/**
 * Makes `count` UUIDs. Version 4 is 122 random bits. Version 7 starts with the time in milliseconds, so a batch sorts
 * in the order it was made: the ones made in the same millisecond carry a counter that goes up by one.
 */
export function makeUuids(version: UuidVersion, count: number, options: UuidOptions = {}): string[] {
  const { upper = false, hyphens = true, random = randomBytes } = options;
  const n = Math.max(1, Math.min(1000, Math.floor(count)));
  const out: string[] = [];
  const now = options.now ?? Date.now();
  const startCounter = version === 'v7' ? ((random(2)[0]! << 8) | random(2)[1]!) % (4096 - n + 1) : 0;
  for (let i = 0; i < n; i++) {
    const b = random(16).slice(0, 16);
    if (version === 'v7') {
      for (let k = 0; k < 6; k++) b[5 - k] = Math.floor(now / 2 ** (8 * k)) & 0xff;
      const counter = startCounter + i;
      b[6] = 0x70 | (counter >> 8);
      b[7] = counter & 0xff;
    } else {
      b[6] = (b[6]! & 0x0f) | 0x40;
    }
    b[8] = (b[8]! & 0x3f) | 0x80;
    out.push(formatUuid(b, upper, hyphens));
  }
  return out;
}

// ---------- hashes ----------

const MD5_SHIFT = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];
const MD5_K = Array.from({ length: 64 }, (_, i) => Math.floor(Math.abs(Math.sin(i + 1)) * 2 ** 32) >>> 0);

/** MD5 (RFC 1321). The browser's own crypto has no MD5, and people still ask for it to check a download. */
export function md5(data: Uint8Array): string {
  let a0 = 0x67452301;
  let b0 = 0xefcdab89 | 0;
  let c0 = 0x98badcfe | 0;
  let d0 = 0x10325476;
  const total = data.length;
  const full = Math.floor(total / 64);
  const rest = total - full * 64;
  const tailSize = rest < 56 ? 64 : 128;
  const tail = new Uint8Array(tailSize);
  tail.set(data.subarray(full * 64));
  tail[rest] = 0x80;
  const tailView = new DataView(tail.buffer);
  const bits = total * 8;
  tailView.setUint32(tailSize - 8, bits >>> 0, true);
  tailView.setUint32(tailSize - 4, Math.floor(bits / 2 ** 32), true);
  const words = new Int32Array(16);
  const run = (view: DataView, offset: number): void => {
    for (let i = 0; i < 16; i++) words[i] = view.getInt32(offset + i * 4, true);
    let a = a0;
    let b = b0;
    let c = c0;
    let d = d0;
    for (let i = 0; i < 64; i++) {
      let f: number;
      let g: number;
      if (i < 16) {
        f = (b & c) | (~b & d);
        g = i;
      } else if (i < 32) {
        f = (d & b) | (~d & c);
        g = (5 * i + 1) % 16;
      } else if (i < 48) {
        f = b ^ c ^ d;
        g = (3 * i + 5) % 16;
      } else {
        f = c ^ (b | ~d);
        g = (7 * i) % 16;
      }
      const sum = (f + a + MD5_K[i]! + words[g]!) | 0;
      const shift = MD5_SHIFT[(i >> 4) * 4 + (i & 3)]!;
      a = d;
      d = c;
      c = b;
      b = (b + ((sum << shift) | (sum >>> (32 - shift)))) | 0;
    }
    a0 = (a0 + a) | 0;
    b0 = (b0 + b) | 0;
    c0 = (c0 + c) | 0;
    d0 = (d0 + d) | 0;
  };
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  for (let i = 0; i < full; i++) run(view, i * 64);
  for (let i = 0; i < tailSize; i += 64) run(tailView, i);
  const out = new DataView(new ArrayBuffer(16));
  [a0, b0, c0, d0].forEach((w, i) => out.setInt32(i * 4, w, true));
  return Array.from(new Uint8Array(out.buffer), (x) => x.toString(16).padStart(2, '0')).join('');
}

export const HASHES = [
  { id: 'md5', label: 'MD5' },
  { id: 'sha1', label: 'SHA-1' },
  { id: 'sha256', label: 'SHA-256' },
  { id: 'sha384', label: 'SHA-384' },
  { id: 'sha512', label: 'SHA-512' },
] as const;

export type HashId = (typeof HASHES)[number]['id'];
export interface HashResult {
  id: HashId;
  label: string;
  hex: string;
}

const SUBTLE: Record<Exclude<HashId, 'md5'>, string> = { sha1: 'SHA-1', sha256: 'SHA-256', sha384: 'SHA-384', sha512: 'SHA-512' };

export function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer), (x) => x.toString(16).padStart(2, '0')).join('');
}

/** Every hash of the bytes, in lower-case hex. */
export async function hashAll(bytes: Uint8Array): Promise<HashResult[]> {
  const digest = async (name: string): Promise<string> => toHex(await crypto.subtle.digest(name, bytes as BufferSource));
  const sha = await Promise.all((Object.keys(SUBTLE) as Array<keyof typeof SUBTLE>).map(async (id) => [id, await digest(SUBTLE[id])] as const));
  const byId = new Map<HashId, string>([['md5', md5(bytes)], ...sha]);
  return HASHES.map((h) => ({ id: h.id, label: h.label, hex: byId.get(h.id)! }));
}

/** The hashes that equal a hash someone gave you. It ignores case, spaces and a "sha256:" style prefix. */
export function matchingHashes(results: readonly HashResult[], given: string): HashResult[] {
  const clean = given.replace(/^\s*[a-z0-9-]+\s*[:=]\s*/i, '').replace(/\s+/g, '').toLowerCase();
  return clean === '' ? [] : results.filter((r) => r.hex === clean);
}

// ---------- text chunker ----------

export interface Chunk {
  text: string;
  /** Estimated tokens: one for every 4 characters. */
  tokens: number;
}

/** Splits after each match of `sep`, keeping the separator on the piece before it. */
function splitKeep(text: string, sep: RegExp): string[] {
  const out: string[] = [];
  let last = 0;
  for (const m of text.matchAll(sep)) {
    const end = m.index + m[0].length;
    if (end > last) out.push(text.slice(last, end));
    last = end;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const LEVELS: RegExp[] = [/\n[ \t]*\n\s*/g, /[.!?…]["')\]”’]*\s+|[。！？]["')\]”’」』]*\s*|\n/g, /\s+/g];

/** Breaks text into pieces no longer than `budget`, using the biggest natural break that works. */
function pieces(text: string, budget: number, level = 0): string[] {
  if (text.length <= budget) return [text];
  if (level >= LEVELS.length) {
    const out: string[] = [];
    let i = 0;
    while (i < text.length) {
      let end = Math.min(text.length, i + budget);
      const code = text.charCodeAt(end - 1);
      if (end < text.length && code >= 0xd800 && code <= 0xdbff && end - i > 1) end -= 1;
      out.push(text.slice(i, end));
      i = end;
    }
    return out;
  }
  return splitKeep(text, LEVELS[level]!).flatMap((p) => (p.length <= budget ? [p] : pieces(p, budget, level + 1)));
}

/** The end of the previous part, cut at a word boundary, to start the next part with. */
function overlapTail(previous: string, chars: number): string {
  if (chars <= 0 || previous.length <= chars) return '';
  let tail = previous.slice(-chars);
  const before = previous.charAt(previous.length - chars - 1);
  if (before !== '' && !/\s/.test(before) && !/^\s/.test(tail)) {
    const space = tail.search(/\s/);
    tail = space === -1 ? '' : tail.slice(space);
  }
  return tail.replace(/^\s+/, '');
}

/**
 * Splits text into parts of at most `maxTokens` (estimated, 4 characters each) for an AI tool with a small input
 * limit. A part ends at a paragraph if it can, then a sentence, then a word; it only ever cuts a word that is longer
 * than a whole part. Each part after the first can begin with the last `overlapTokens` of the one before, so the
 * thread is not lost.
 */
export function chunkText(text: string, maxTokens: number, overlapTokens = 0): Chunk[] {
  const budget = Math.max(8, Math.floor(maxTokens) * 4);
  const overlap = Math.min(Math.max(0, Math.floor(overlapTokens) * 4), Math.floor(budget / 2));
  if (text.trim() === '') return [];
  const parts: string[] = [];
  let current = '';
  let carried = '';
  for (const piece of pieces(text, budget)) {
    if (current !== '' && current.length + piece.length > budget) {
      parts.push(current);
      carried = overlapTail(current, overlap);
      current = '';
    }
    if (current === '') {
      const withTail = carried !== '' ? `${carried} ${piece}` : piece;
      current = withTail.length <= budget ? withTail : piece;
      carried = '';
    } else {
      current += piece;
    }
  }
  if (current !== '') parts.push(current);
  return parts
    .map((p) => p.trim())
    .filter((p) => p !== '')
    .map((p) => ({ text: p, tokens: Math.ceil([...p].length / 4) }));
}
