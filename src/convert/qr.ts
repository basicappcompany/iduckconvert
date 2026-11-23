/**
 * QR codes. The matrix comes from the pinned `qrcode-generator` library; everything around it
 * (UTF-8 text, the Wi-Fi payload, the SVG and the pixel drawing) is here, with unit tests that
 * read the codes back with a separate decoder.
 */
import qrcode from 'qrcode-generator';

export type QrLevel = 'L' | 'M' | 'Q' | 'H';
export type WifiSecurity = 'WPA' | 'WEP' | 'nopass';

/** The library's default turns every character into one byte, which breaks anything outside Latin-1. Use UTF-8. */
const utf8 = (s: string): number[] => Array.from(new TextEncoder().encode(s));
let patched = false;
function useUtf8(): void {
  if (patched) return;
  qrcode.stringToBytes = utf8;
  patched = true;
}

/** The most bytes a QR code holds (version 40) at each error correction level. */
export const QR_MAX_BYTES: Record<QrLevel, number> = { L: 2953, M: 2331, Q: 1663, H: 1273 };

/** True when the text does not fit at this level. */
export const qrTooLong = (text: string, level: QrLevel): boolean => utf8(text).length > QR_MAX_BYTES[level];

/** The dark and light squares of a code, as rows of booleans (true = dark). Empty text gives an empty list. */
export function qrMatrix(text: string, level: QrLevel = 'M'): boolean[][] {
  if (text === '') return [];
  if (qrTooLong(text, level)) throw new Error('QR too long');
  useUtf8();
  const code = qrcode(0, level);
  code.addData(text, 'Byte');
  code.make();
  const n = code.getModuleCount();
  const rows: boolean[][] = [];
  for (let r = 0; r < n; r += 1) {
    const row: boolean[] = [];
    for (let c = 0; c < n; c += 1) row.push(code.isDark(r, c));
    rows.push(row);
  }
  return rows;
}

/** The text of a "join this Wi-Fi" code, which phone cameras understand. Special characters are escaped with a backslash. */
export function wifiPayload(ssid: string, password: string, security: WifiSecurity, hidden: boolean): string {
  const esc = (s: string): string => s.replace(/([\\;,:"])/g, '\\$1');
  const parts = [`WIFI:T:${security};S:${esc(ssid)};`];
  if (security !== 'nopass') parts.push(`P:${esc(password)};`);
  if (hidden) parts.push('H:true;');
  return parts.join('') + ';';
}

/** Width and height in pixels of the finished image: the squares plus a quiet border on each side. */
export function qrPixelSize(modules: number, pixels: number, quiet: number): { cell: number; total: number } {
  const cells = modules + quiet * 2;
  const cell = Math.max(1, Math.floor(pixels / cells));
  return { cell, total: cell * cells };
}

/** The code as an SVG file. One path draws every dark square, so the file stays small. */
export function qrSvg(matrix: boolean[][], quiet = 4, dark = '#000000', light = '#ffffff'): string {
  const n = matrix.length;
  const size = n + quiet * 2;
  let d = '';
  matrix.forEach((row, r) => {
    let c = 0;
    while (c < n) {
      if (!row[c]) {
        c += 1;
        continue;
      }
      const start = c;
      while (c < n && row[c]) c += 1;
      d += `M${start + quiet} ${r + quiet}h${c - start}v1h-${c - start}z`;
    }
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size * 10}" height="${size * 10}" shape-rendering="crispEdges"><rect width="${size}" height="${size}" fill="${light}"/><path d="${d}" fill="${dark}"/></svg>`;
}
