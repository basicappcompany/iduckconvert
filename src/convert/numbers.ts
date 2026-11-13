/** Number bases, number to words, Roman numerals, text case and colour codes. Pure functions. */

// ---------- bases ----------
const DIGITS = '0123456789abcdefghijklmnopqrstuvwxyz';

/** Parse text in a base (2 to 36) as a BigInt. Returns null when it is empty or has a bad digit. Spaces and underscores are ignored. */
export function parseBase(text: string, base: number): bigint | null {
  const clean = text.trim().toLowerCase().replace(/[\s_]/g, '').replace(base === 16 ? /^0x/ : base === 2 ? /^0b/ : base === 8 ? /^0o/ : /^$/, '');
  if (clean === '') return null;
  const negative = clean.startsWith('-');
  const body = negative ? clean.slice(1) : clean;
  if (body === '') return null;
  let result = 0n;
  const b = BigInt(base);
  for (const ch of body) {
    const d = DIGITS.indexOf(ch);
    if (d < 0 || d >= base) return null;
    result = result * b + BigInt(d);
  }
  return negative ? -result : result;
}

export function formatBase(value: bigint, base: number): string {
  return value.toString(base).toUpperCase();
}

// ---------- number to words ----------
const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const INTL_SCALES = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion'];

function below100(n: number): string {
  if (n < 20) return ONES[n]!;
  const t = TENS[Math.floor(n / 10)]!;
  return n % 10 ? `${t}-${ONES[n % 10]}` : t;
}

function below1000(n: number): string {
  const h = Math.floor(n / 100);
  const rest = n % 100;
  const parts: string[] = [];
  if (h) parts.push(`${ONES[h]} hundred`);
  if (rest) parts.push(h ? `and ${below100(rest)}` : below100(rest));
  return parts.join(' ');
}

/** Whole numbers in words, international style: thousand, million, billion. */
export function integerToWordsIntl(n: bigint): string {
  if (n === 0n) return 'zero';
  if (n < 0n) return `minus ${integerToWordsIntl(-n)}`;
  const groups: number[] = [];
  let rest = n;
  while (rest > 0n) {
    groups.push(Number(rest % 1000n));
    rest /= 1000n;
  }
  if (groups.length > INTL_SCALES.length) throw new RangeError('That number is too large to write out.');
  const parts: string[] = [];
  for (let i = groups.length - 1; i >= 0; i--) {
    const g = groups[i]!;
    if (g === 0) continue;
    parts.push(`${below1000(g)}${INTL_SCALES[i] ? ` ${INTL_SCALES[i]}` : ''}`);
  }
  // British "and" belongs only before the last group when that group is below 100.
  return parts.join(' ').replace(/ and /g, ' and ');
}

/** Whole numbers in words, Indian style: thousand, lakh, crore. Above 99 crore it keeps counting in crore. */
export function integerToWordsIndian(n: bigint): string {
  if (n === 0n) return 'zero';
  if (n < 0n) return `minus ${integerToWordsIndian(-n)}`;
  const crore = n / 10_000_000n;
  let rest = Number(n % 10_000_000n);
  const parts: string[] = [];
  if (crore > 0n) parts.push(`${crore >= 100n ? integerToWordsIndian(crore) : below100(Number(crore))} crore`);
  const lakh = Math.floor(rest / 100_000);
  rest %= 100_000;
  if (lakh) parts.push(`${below100(lakh)} lakh`);
  const thousand = Math.floor(rest / 1000);
  rest %= 1000;
  if (thousand) parts.push(`${below100(thousand)} thousand`);
  if (rest) parts.push(below1000(rest));
  return parts.join(' ');
}

export type WordStyle = 'indian' | 'international';

export interface WordsResult {
  words: string;
  /** Set when the input was not a number. */
  error?: string;
}

/**
 * Turn "1234.56" into words. With `currency`, the whole part is rupees (or dollars) and the two-digit fraction is paise (or cents),
 * written the way cheques and invoices expect: "Rupees One Thousand ... and Paise Fifty-six Only".
 */
export function numberToWords(input: string, style: WordStyle, currency: 'none' | 'inr' | 'usd' = 'none'): WordsResult {
  const cleaned = input.trim().replace(/[,\s_]/g, '');
  if (!/^-?\d+(\.\d+)?$/.test(cleaned)) return { words: '', error: 'Type a number such as 1234 or 1234.56.' };
  const negative = cleaned.startsWith('-');
  const [whole = '0', fraction = ''] = cleaned.replace('-', '').split('.');
  let big: bigint;
  try {
    big = BigInt(whole);
    const toWords = style === 'indian' ? integerToWordsIndian : integerToWordsIntl;
    if (currency === 'none') {
      const digits = fraction ? ` point ${[...fraction].map((d) => ONES[Number(d)]).join(' ')}` : '';
      return { words: `${negative ? 'minus ' : ''}${toWords(big)}${digits}` };
    }
    const major = currency === 'inr' ? 'rupees' : 'dollars';
    const minor = currency === 'inr' ? 'paise' : 'cents';
    const cents = Number((fraction + '00').slice(0, 2));
    const capital = (s: string) => s.replace(/(^|[\s-])([a-z])/g, (_, a: string, b: string) => a + b.toUpperCase());
    const majorText = `${capital(major)} ${capital(toWords(big).replace(/ and /g, ' '))}`;
    const minorText = cents > 0 ? ` and ${capital(minor)} ${capital(below100(cents))}` : '';
    return { words: `${negative ? 'Minus ' : ''}${majorText}${minorText} Only` };
  } catch (error) {
    return { words: '', error: error instanceof Error ? error.message : 'Could not convert that number.' };
  }
}

// ---------- Roman numerals ----------
const ROMAN: [number, string][] = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];

export function toRoman(n: number): string | null {
  if (!Number.isInteger(n) || n < 1 || n > 3999) return null;
  let rest = n;
  let out = '';
  for (const [value, sym] of ROMAN) {
    while (rest >= value) {
      out += sym;
      rest -= value;
    }
  }
  return out;
}

/** Only accepts correctly formed numerals: IIII or VX are rejected. */
export function fromRoman(text: string): number | null {
  const s = text.trim().toUpperCase();
  if (!/^[MDCLXVI]+$/.test(s)) return null;
  let total = 0;
  let i = 0;
  for (const [value, sym] of ROMAN) {
    while (s.startsWith(sym, i)) {
      total += value;
      i += sym.length;
    }
  }
  return i === s.length && toRoman(total) === s ? total : null;
}

// ---------- text case ----------
const words = (s: string): string[] => s.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(/[^\p{L}\p{N}]+/u).filter(Boolean);
const cap = (w: string) => (w ? w[0]!.toUpperCase() + w.slice(1).toLowerCase() : w);

export const CASES: { id: string; label: string; apply: (s: string) => string }[] = [
  { id: 'upper', label: 'UPPER CASE', apply: (s) => s.toUpperCase() },
  { id: 'lower', label: 'lower case', apply: (s) => s.toLowerCase() },
  { id: 'title', label: 'Title Case', apply: (s) => s.toLowerCase().replace(/(^|[\s\-(["'])(\p{L})/gu, (_, a: string, b: string) => a + b.toUpperCase()) },
  { id: 'sentence', label: 'Sentence case', apply: (s) => s.toLowerCase().replace(/(^\s*|[.!?]\s+)(\p{L})/gu, (_, a: string, b: string) => a + b.toUpperCase()) },
  { id: 'camel', label: 'camelCase', apply: (s) => words(s).map((w, i) => (i === 0 ? w.toLowerCase() : cap(w))).join('') },
  { id: 'pascal', label: 'PascalCase', apply: (s) => words(s).map(cap).join('') },
  { id: 'snake', label: 'snake_case', apply: (s) => words(s).map((w) => w.toLowerCase()).join('_') },
  { id: 'kebab', label: 'kebab-case', apply: (s) => words(s).map((w) => w.toLowerCase()).join('-') },
  { id: 'constant', label: 'CONSTANT_CASE', apply: (s) => words(s).map((w) => w.toUpperCase()).join('_') },
  { id: 'toggle', label: 'tOGGLE cASE', apply: (s) => [...s].map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())).join('') },
];

// ---------- colours ----------
export interface Rgb {
  r: number;
  g: number;
  b: number;
}

export function parseHex(text: string): Rgb | null {
  const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(text.trim());
  if (!m) return null;
  let h = m[1]!;
  if (h.length === 3) h = [...h].map((c) => c + c).join('');
  return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16) };
}

export const toHex = ({ r, g, b }: Rgb): string => '#' + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('').toUpperCase();

export function parseRgb(text: string): Rgb | null {
  const m = /^(?:rgb\()?\s*(\d{1,3})\s*[ ,]\s*(\d{1,3})\s*[ ,]\s*(\d{1,3})\s*\)?$/i.exec(text.trim());
  if (!m) return null;
  const [r, g, b] = [Number(m[1]), Number(m[2]), Number(m[3])];
  return r > 255 || g > 255 || b > 255 ? null : { r, g, b };
}

export function rgbToHsl({ r, g, b }: Rgb): { h: number; s: number; l: number } {
  const [rn, gn, bn] = [r / 255, g / 255, b / 255];
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  const d = max - min;
  if (d === 0) return { h: 0, s: 0, l: Math.round(l * 100) };
  const s = d / (1 - Math.abs(2 * l - 1));
  let h = max === rn ? ((gn - bn) / d) % 6 : max === gn ? (bn - rn) / d + 2 : (rn - gn) / d + 4;
  h = (h * 60 + 360) % 360;
  return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function hslToRgb(h: number, s: number, l: number): Rgb {
  const sn = s / 100;
  const ln = l / 100;
  const c = (1 - Math.abs(2 * ln - 1)) * sn;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = ln - c / 2;
  const [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return { r: Math.round((r + m) * 255), g: Math.round((g + m) * 255), b: Math.round((b + m) * 255) };
}

export function parseHsl(text: string): Rgb | null {
  const m = /^(?:hsl\()?\s*(\d{1,3}(?:\.\d+)?)\s*(?:deg)?\s*[ ,]\s*(\d{1,3}(?:\.\d+)?)%?\s*[ ,]\s*(\d{1,3}(?:\.\d+)?)%?\s*\)?$/i.exec(text.trim());
  if (!m) return null;
  const [h, s, l] = [Number(m[1]), Number(m[2]), Number(m[3])];
  return h > 360 || s > 100 || l > 100 ? null : hslToRgb(h % 360, s, l);
}
