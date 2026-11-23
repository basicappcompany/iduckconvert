import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { chunkText, describeTimestamp, hashAll, makeUuids, matchingHashes, md5, parseTimestamp, relativeTime } from '../../src/convert/devtools';

const bytes = (s: string): Uint8Array => new TextEncoder().encode(s);

describe('Unix timestamp', () => {
  const NOV14 = Date.UTC(2023, 10, 14, 22, 13, 20);

  it('reads seconds, milliseconds, microseconds and nanoseconds by their length', () => {
    expect(parseTimestamp('1700000000')).toEqual({ ms: NOV14, unit: 'seconds' });
    expect(parseTimestamp('1700000000000')).toEqual({ ms: NOV14, unit: 'milliseconds' });
    expect(parseTimestamp('1700000000000000')).toEqual({ ms: NOV14, unit: 'microseconds' });
    expect(parseTimestamp('1700000000000000000')).toEqual({ ms: NOV14, unit: 'nanoseconds' });
  });

  it('reads decimals, signs, zero and dates before 1970', () => {
    expect(parseTimestamp('1700000000.5')?.ms).toBe(NOV14 + 500);
    expect(parseTimestamp('0')).toEqual({ ms: 0, unit: 'seconds' });
    expect(parseTimestamp('-86400')).toEqual({ ms: -86_400_000, unit: 'seconds' });
    expect(parseTimestamp('  1700000000  ')?.ms).toBe(NOV14);
  });

  it('reads dates, and a date with no zone is UTC', () => {
    expect(parseTimestamp('2023-11-14T22:13:20Z')).toEqual({ ms: NOV14, unit: 'date' });
    expect(parseTimestamp('2023-11-14 22:13:20')?.ms).toBe(NOV14);
    expect(parseTimestamp('2023-11-14 22:13')?.ms).toBe(NOV14 - 20_000);
    expect(parseTimestamp('2023-11-14')?.ms).toBe(Date.UTC(2023, 10, 14));
    expect(parseTimestamp('2023-11-15T03:43:20+05:30')?.ms).toBe(NOV14);
    expect(parseTimestamp('2023-11-14T22:13:20.250Z')?.ms).toBe(NOV14 + 250);
    expect(parseTimestamp('Tue, 14 Nov 2023 22:13:20 GMT')?.ms).toBe(NOV14);
  });

  it('rejects what is not a time', () => {
    for (const bad of ['', '  ', 'hello', 'foo 1', '2023-02-31', '2023-13-01', '12/31/2023', '1e9', '99999999999999999999999999']) {
      expect(parseTimestamp(bad), bad).toBeNull();
    }
  });

  it('writes the instant the ways a developer asks for it', () => {
    const v = describeTimestamp(NOV14, 'en', NOV14 + 3 * 86_400_000);
    expect(v).toMatchObject({ seconds: '1700000000', milliseconds: '1700000000000', iso: '2023-11-14T22:13:20.000Z', relative: '3 days ago' });
    expect(v.local).toContain('2023');
  });

  it('floors the seconds for a time before 1970', () => {
    expect(describeTimestamp(-1500, 'en', 0).seconds).toBe('-2');
  });

  it('says how long ago or how far ahead, in the page language', () => {
    expect(relativeTime(0, 0, 'en')).toBe('now');
    expect(relativeTime(0, 7_200_000, 'en')).toBe('2 hours ago');
    expect(relativeTime(120_000, 0, 'en')).toBe('in 2 minutes');
    expect(relativeTime(0, 400 * 86_400_000, 'en')).toBe('last year');
    expect(relativeTime(0, 3 * 86_400_000, 'de')).toBe('vor 3 Tagen');
  });
});

describe('UUID', () => {
  const fixed = (fill: number) => (n: number) => new Uint8Array(n).fill(fill);
  const V4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
  const V7 = /^[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

  it('makes version 4 ids with the version and variant bits set', () => {
    for (const id of makeUuids('v4', 50)) expect(id).toMatch(V4);
    expect(makeUuids('v4', 1, { random: fixed(0xff) })[0]).toBe('ffffffff-ffff-4fff-bfff-ffffffffffff');
    expect(makeUuids('v4', 1, { random: fixed(0) })[0]).toBe('00000000-0000-4000-8000-000000000000');
  });

  it('makes different ids each time', () => {
    expect(new Set(makeUuids('v4', 500)).size).toBe(500);
  });

  it('makes version 7 ids that start with the time and sort in the order they were made', () => {
    const now = 1_700_000_000_000;
    const ids = makeUuids('v7', 200, { now });
    for (const id of ids) {
      expect(id).toMatch(V7);
      expect(id.startsWith('018bcfe5-6800-')).toBe(true);
    }
    expect([...ids].sort()).toEqual(ids);
    expect(new Set(ids).size).toBe(200);
  });

  it('keeps the counter inside its 12 bits, even for the biggest batch', () => {
    const ids = makeUuids('v7', 1000, { now: 1, random: fixed(0xff) });
    expect(ids).toHaveLength(1000);
    for (const id of ids) expect(id).toMatch(V7);
    expect([...ids].sort()).toEqual(ids);
  });

  it('can write capitals and leave out the hyphens', () => {
    const id = makeUuids('v4', 1, { random: fixed(0xab), upper: true, hyphens: false })[0]!;
    expect(id).toMatch(/^[0-9A-F]{32}$/);
    expect(id[12]).toBe('4');
  });

  it('limits the count to 1 to 1000', () => {
    expect(makeUuids('v4', 0)).toHaveLength(1);
    expect(makeUuids('v4', 5000)).toHaveLength(1000);
    expect(makeUuids('v4', 3.9)).toHaveLength(3);
  });
});

describe('hashes', () => {
  it('matches the published MD5 test values', () => {
    expect(md5(bytes(''))).toBe('d41d8cd98f00b204e9800998ecf8427e');
    expect(md5(bytes('abc'))).toBe('900150983cd24fb0d6963f7d28e17f72');
    expect(md5(bytes('The quick brown fox jumps over the lazy dog'))).toBe('9e107d9d372bb6826bd81d3542a419d6');
    expect(md5(bytes('12345678901234567890123456789012345678901234567890123456789012345678901234567890'))).toBe('57edf4a22be3c955ac49da2e2107b67a');
  });

  it('agrees with Node for every length around the block edges, and for bytes that are not text', () => {
    for (let n = 0; n <= 200; n++) {
      const data = new Uint8Array(n).map((_, i) => (i * 31 + n) & 0xff);
      expect(md5(data), `length ${n}`).toBe(createHash('md5').update(data).digest('hex'));
    }
  });

  it('hashes a view into a bigger buffer, not the whole buffer', () => {
    const big = new Uint8Array(100).fill(7);
    expect(md5(big.subarray(10, 40))).toBe(createHash('md5').update(big.subarray(10, 40)).digest('hex'));
  });

  it('gives all five hashes in lower-case hex', async () => {
    const all = await hashAll(bytes('abc'));
    expect(all.map((h) => h.label)).toEqual(['MD5', 'SHA-1', 'SHA-256', 'SHA-384', 'SHA-512']);
    expect(all[1]!.hex).toBe('a9993e364706816aba3e25717850c26c9cd0d89d');
    expect(all[2]!.hex).toBe('ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
    expect(all[3]!.hex).toHaveLength(96);
    expect(all[4]!.hex).toHaveLength(128);
    expect(all[4]!.hex).toBe(createHash('sha512').update('abc').digest('hex'));
  });

  it('hashes text as UTF-8', async () => {
    const all = await hashAll(bytes('Hello, duck! \u{1F986}'));
    expect(all[0]!.hex).toBe(createHash('md5').update('Hello, duck! \u{1F986}', 'utf8').digest('hex'));
  });

  it('finds which hash a given value is, ignoring case, spaces and a label', async () => {
    const all = await hashAll(bytes('abc'));
    const sha = 'BA7816BF 8F01CFEA414140DE5DAE2223B00361A396177A9CB410FF61F20015AD';
    expect(matchingHashes(all, sha).map((h) => h.label)).toEqual(['SHA-256']);
    expect(matchingHashes(all, `sha256: ${sha}`).map((h) => h.label)).toEqual(['SHA-256']);
    expect(matchingHashes(all, 'SHA-256 = ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad').length).toBe(1);
    expect(matchingHashes(all, 'ba7816bf')).toEqual([]);
    expect(matchingHashes(all, '  ')).toEqual([]);
  });
});

describe('text chunker', () => {
  const para = (n: number) => `Paragraph ${n}. ` + 'The duck swam across the pond and quacked at the geese. '.repeat(6).trim();

  it('returns nothing for empty text and one part for short text', () => {
    expect(chunkText('', 100)).toEqual([]);
    expect(chunkText('   \n ', 100)).toEqual([]);
    expect(chunkText('Hello there.', 100)).toEqual([{ text: 'Hello there.', tokens: 3 }]);
  });

  it('keeps every part within the size and loses no words', () => {
    const text = Array.from({ length: 12 }, (_, i) => para(i + 1)).join('\n\n');
    const parts = chunkText(text, 150);
    expect(parts.length).toBeGreaterThan(1);
    for (const p of parts) expect(p.text.length).toBeLessThanOrEqual(600);
    const words = (s: string) => s.split(/\s+/).filter(Boolean);
    expect(parts.flatMap((p) => words(p.text))).toEqual(words(text));
  });

  it('prefers to end a part at a paragraph', () => {
    const text = [para(1), para(2), para(3), para(4)].join('\n\n');
    const parts = chunkText(text, 200);
    expect(parts.length).toBeGreaterThan(1);
    for (const p of parts) expect(p.text).toMatch(/\.$/);
    for (const p of parts) expect(p.text.startsWith('Paragraph')).toBe(true);
  });

  it('breaks a long paragraph at sentences', () => {
    const text = 'The duck swam. '.repeat(100).trim();
    const parts = chunkText(text, 50);
    expect(parts.length).toBeGreaterThan(5);
    for (const p of parts) {
      expect(p.text.startsWith('The duck swam.')).toBe(true);
      expect(p.text.endsWith('swam.')).toBe(true);
    }
  });

  it('breaks a long run of words at words, and only cuts a word longer than a whole part', () => {
    const words = chunkText('quack '.repeat(300).trim(), 20);
    for (const p of words) expect(p.text).toMatch(/^(quack )*quack$/);
    const long = chunkText('x'.repeat(1000), 50);
    expect(long.map((p) => p.text).join('')).toBe('x'.repeat(1000));
    for (const p of long) expect(p.text.length).toBeLessThanOrEqual(200);
  });

  it('does not cut an emoji in half', () => {
    const parts = chunkText('\u{1F986}'.repeat(500), 10);
    expect(parts.map((p) => p.text).join('')).toBe('\u{1F986}'.repeat(500));
    for (const p of parts) expect(p.text).not.toMatch(/[\ud800-\udbff]$/);
  });

  it('starts each later part with the end of the one before when asked', () => {
    const text = Array.from({ length: 40 }, (_, i) => `Sentence number ${i + 1} is here.`).join(' ');
    const plain = chunkText(text, 60);
    const lapped = chunkText(text, 60, 15);
    expect(lapped.length).toBeGreaterThanOrEqual(plain.length);
    for (let i = 1; i < lapped.length; i++) {
      const tail = lapped[i - 1]!.text.split(' ').slice(-3).join(' ');
      expect(lapped[i]!.text, `part ${i + 1}`).toContain(tail.split(' ').slice(-1)[0]!);
    }
    for (const p of lapped) expect(p.text.length).toBeLessThanOrEqual(240);
    // Every sentence still appears.
    for (let i = 1; i <= 40; i++) expect(lapped.some((p) => p.text.includes(`Sentence number ${i} is here.`))).toBe(true);
  });

  it('never lets the overlap eat the whole part', () => {
    const parts = chunkText('word '.repeat(400).trim(), 20, 500);
    expect(parts.length).toBeGreaterThan(1);
    for (const p of parts) expect(p.text.length).toBeLessThanOrEqual(80);
  });

  it('estimates the tokens of each part', () => {
    const [p] = chunkText('a'.repeat(40), 100);
    expect(p).toEqual({ text: 'a'.repeat(40), tokens: 10 });
  });

  it('handles Windows line endings and Chinese full stops', () => {
    const win = chunkText(`${para(1)}\r\n\r\n${para(2)}\r\n\r\n${para(3)}`, 120);
    expect(win.length).toBeGreaterThan(1);
    const zh = chunkText('这是一只鸭子。'.repeat(100), 40);
    expect(zh.length).toBeGreaterThan(1);
    for (const p of zh) expect(p.text.endsWith('。')).toBe(true);
  });
});
