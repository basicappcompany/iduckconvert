import jsQR from 'jsqr';
import { describe, expect, it } from 'vitest';
import { qrMatrix, qrPixelSize, qrSvg, qrTooLong, wifiPayload, type QrLevel } from '../../src/convert/qr';

/** Draw the matrix as grey pixels, the way a camera would see a printed code, and read it back with an independent decoder. */
function readBack(matrix: boolean[][], cell = 6, quiet = 4): string | null {
  const modules = matrix.length;
  const side = (modules + quiet * 2) * cell;
  const data = new Uint8ClampedArray(side * side * 4).fill(255);
  matrix.forEach((row, r) =>
    row.forEach((dark, c) => {
      if (!dark) return;
      for (let y = 0; y < cell; y += 1)
        for (let x = 0; x < cell; x += 1) {
          const i = (((r + quiet) * cell + y) * side + (c + quiet) * cell + x) * 4;
          data[i] = data[i + 1] = data[i + 2] = 0;
        }
    }),
  );
  return jsQR(data, side, side)?.data ?? null;
}

describe('QR matrix', () => {
  it('is empty for empty text and square otherwise', () => {
    expect(qrMatrix('')).toEqual([]);
    const m = qrMatrix('hello');
    expect(m.length).toBeGreaterThanOrEqual(21);
    expect(m.every((row) => row.length === m.length)).toBe(true);
    expect((m.length - 17) % 4).toBe(0);
  });

  it('reads back as the same text at every error correction level', () => {
    for (const level of ['L', 'M', 'Q', 'H'] as QrLevel[]) {
      expect(readBack(qrMatrix('https://iduckconvert.com/qr-code-generator/', level))).toBe('https://iduckconvert.com/qr-code-generator/');
    }
  });

  it('keeps text outside Latin-1 (UTF-8, not one byte per letter)', () => {
    for (const text of ['नमस्ते दुनिया', 'Привет, мир', 'Grüße aus München', '你好，世界', 'ducks 🦆 swim']) {
      expect(readBack(qrMatrix(text))).toBe(text);
    }
  });

  it('holds a long text, and a higher level makes a bigger code', () => {
    const text = 'Quack. '.repeat(120);
    expect(readBack(qrMatrix(text, 'L'))).toBe(text);
    expect(qrMatrix(text, 'H').length).toBeGreaterThan(qrMatrix(text, 'L').length);
  });

  it('rejects text that cannot fit, counting bytes and not letters', () => {
    expect(qrTooLong('a'.repeat(1273), 'H')).toBe(false);
    expect(qrTooLong('a'.repeat(1274), 'H')).toBe(true);
    expect(qrTooLong('é'.repeat(700), 'H')).toBe(true);
    expect(() => qrMatrix('a'.repeat(3000), 'L')).toThrow();
  });
});

describe('Wi-Fi code', () => {
  it('writes the payload phone cameras read', () => {
    expect(wifiPayload('Home', 'secret', 'WPA', false)).toBe('WIFI:T:WPA;S:Home;P:secret;;');
    expect(wifiPayload('Cafe', '', 'nopass', false)).toBe('WIFI:T:nopass;S:Cafe;;');
    expect(wifiPayload('Hidden', 'pw', 'WEP', true)).toBe('WIFI:T:WEP;S:Hidden;P:pw;H:true;;');
  });

  it('escapes the characters that have a meaning in the format', () => {
    expect(wifiPayload('a;b,c:d"e\\f', 'p;w', 'WPA', false)).toBe('WIFI:T:WPA;S:a\\;b\\,c\\:d\\"e\\\\f;P:p\\;w;;');
  });

  it('makes a code that reads back as the payload', () => {
    const payload = wifiPayload('Duck Pond', 'swim-9; ok', 'WPA', false);
    expect(readBack(qrMatrix(payload))).toBe(payload);
  });
});

describe('QR image', () => {
  it('sizes the picture in whole pixels per square', () => {
    expect(qrPixelSize(25, 1024, 4)).toEqual({ cell: 31, total: 31 * 33 });
    expect(qrPixelSize(177, 100, 4).cell).toBe(1);
  });

  it('writes an SVG with one path and the quiet border', () => {
    const m = qrMatrix('ducks');
    const svg = qrSvg(m);
    const size = m.length + 8;
    expect(svg).toContain(`viewBox="0 0 ${size} ${size}"`);
    expect(svg.match(/<path /g)).toHaveLength(1);
    expect(svg).toContain('fill="#ffffff"');
    expect(svg.startsWith('<svg xmlns="http://www.w3.org/2000/svg"')).toBe(true);
  });

  it('draws exactly the dark squares', () => {
    const m = qrMatrix('ducks');
    const d = /d="([^"]*)"/.exec(qrSvg(m, 0))![1]!;
    let area = 0;
    for (const run of d.split('z')) {
      const w = /h(\d+)v1/.exec(run);
      if (w) area += Number(w[1]);
    }
    expect(area).toBe(m.flat().filter(Boolean).length);
  });
});
