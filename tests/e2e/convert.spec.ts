import { expect, test, type Page } from '@playwright/test';
import JSZip from 'jszip';
import gifenc from 'gifenc';
const { GIFEncoder } = gifenc;

/** Run a converter on one file and give back the bytes of its first download. */
async function convert(page: Page, path: string, file: { name: string; mimeType: string; buffer: Buffer }, button = 'Convert'): Promise<Buffer> {
  await page.goto(path);
  // Wait for the page's island to be interactive before adding files (files given too early are lost).
  await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
  await page.locator('input[type=file]').first().setInputFiles(file);
  await page.getByRole('button', { name: button, exact: true }).click();
  const link = page.locator('a[download]').first();
  await expect(link).toBeVisible({ timeout: 240_000 });
  const href = (await link.getAttribute('href'))!;
  const base64 = await page.evaluate(async (url) => {
    const bytes = new Uint8Array(await (await fetch(url)).arrayBuffer());
    let s = '';
    for (const b of bytes) s += String.fromCharCode(b);
    return btoa(s);
  }, href);
  return Buffer.from(base64, 'base64');
}

const ascii = (b: Buffer, from: number, to: number) => b.subarray(from, to).toString('latin1');

/** One second of a 440 Hz tone as a 16-bit mono WAV. */
function wav(): Buffer {
  const rate = 8000;
  const n = rate;
  const buf = Buffer.alloc(44 + n * 2);
  buf.write('RIFF', 0);
  buf.writeUInt32LE(36 + n * 2, 4);
  buf.write('WAVEfmt ', 8);
  buf.writeUInt32LE(16, 16);
  buf.writeUInt16LE(1, 20);
  buf.writeUInt16LE(1, 22);
  buf.writeUInt32LE(rate, 24);
  buf.writeUInt32LE(rate * 2, 28);
  buf.writeUInt16LE(2, 32);
  buf.writeUInt16LE(16, 34);
  buf.write('data', 36);
  buf.writeUInt32LE(n * 2, 40);
  for (let i = 0; i < n; i++) buf.writeInt16LE(Math.round(Math.sin((2 * Math.PI * 440 * i) / rate) * 12000), 44 + i * 2);
  return buf;
}

/** A 2x2 uncompressed RGB TIFF, built by hand. */
function tiff(): Buffer {
  const b = Buffer.alloc(140);
  b.write('II', 0);
  b.writeUInt16LE(42, 2);
  b.writeUInt32LE(8, 4);
  b.writeUInt16LE(9, 8);
  const entries: [number, number, number, number][] = [
    [256, 3, 1, 2], [257, 3, 1, 2], [258, 3, 3, 122], [259, 3, 1, 1], [262, 3, 1, 2],
    [273, 4, 1, 128], [277, 3, 1, 3], [278, 3, 1, 2], [279, 4, 1, 12],
  ];
  entries.forEach(([tag, type, count, value], i) => {
    const o = 10 + i * 12;
    b.writeUInt16LE(tag, o);
    b.writeUInt16LE(type, o + 2);
    b.writeUInt32LE(count, o + 4);
    b.writeUInt32LE(value, o + 8);
  });
  [8, 8, 8].forEach((v, i) => b.writeUInt16LE(v, 122 + i * 2));
  [255, 0, 0, 0, 255, 0, 0, 0, 255, 255, 255, 0].forEach((v, i) => (b[128 + i] = v));
  return b;
}

test.describe('media converters (ffmpeg.wasm)', () => {
  test.describe.configure({ mode: 'serial', timeout: 300_000, retries: 2 });
  let webm: Buffer;
  let mp4: Buffer;
  let gif: Buffer;

  test('WAV to MP3 makes a real MP3', async ({ page }) => {
    const out = await convert(page, '/wav-to-mp3/', { name: 'tone.wav', mimeType: 'audio/wav', buffer: wav() });
    expect(ascii(out, 0, 3) === 'ID3' || (out[0] === 0xff && (out[1]! & 0xe0) === 0xe0)).toBe(true);
    expect(out.length).toBeGreaterThan(1000);
  });

  test('WAV to FLAC makes a real FLAC', async ({ page }) => {
    const out = await convert(page, '/wav-to-flac/', { name: 'tone.wav', mimeType: 'audio/wav', buffer: wav() });
    expect(ascii(out, 0, 4)).toBe('fLaC');
  });

  test('records a small WEBM clip with sound, then WEBM to MP4', async ({ page }) => {
    await page.goto('/');
    const base64 = await page.evaluate(async () => {
      const canvas = document.createElement('canvas');
      canvas.width = 160;
      canvas.height = 120;
      const g = canvas.getContext('2d')!;
      const audio = new AudioContext();
      const osc = audio.createOscillator();
      const dest = audio.createMediaStreamDestination();
      osc.connect(dest);
      osc.start();
      const stream = new MediaStream([...canvas.captureStream(15).getVideoTracks(), ...dest.stream.getAudioTracks()]);
      const rec = new MediaRecorder(stream, { mimeType: 'video/webm;codecs=vp8,opus' });
      const chunks: Blob[] = [];
      rec.ondataavailable = (e) => chunks.push(e.data);
      const done = new Promise<void>((r) => (rec.onstop = () => r()));
      rec.start();
      for (let i = 0; i < 30; i++) {
        g.fillStyle = `hsl(${i * 12},80%,50%)`;
        g.fillRect(0, 0, 160, 120);
        await new Promise((r) => setTimeout(r, 100));
      }
      rec.stop();
      await done;
      osc.stop();
      const bytes = new Uint8Array(await new Blob(chunks).arrayBuffer());
      let s = '';
      for (const b of bytes) s += String.fromCharCode(b);
      return btoa(s);
    });
    webm = Buffer.from(base64, 'base64');
    expect(webm.length).toBeGreaterThan(1000);
    mp4 = await convert(page, '/webm-to-mp4/', { name: 'clip.webm', mimeType: 'video/webm', buffer: webm });
    expect(ascii(mp4, 4, 8)).toBe('ftyp');
  });

  test('MP4 to MP3 extracts the sound', async ({ page }) => {
    const out = await convert(page, '/mp4-to-mp3/', { name: 'clip.mp4', mimeType: 'video/mp4', buffer: mp4 });
    expect(ascii(out, 0, 3) === 'ID3' || out[0] === 0xff).toBe(true);
  });

  test('Video to GIF makes a GIF, and GIF to MP4 turns it back', async ({ page }) => {
    gif = await convert(page, '/video-to-gif/', { name: 'clip.mp4', mimeType: 'video/mp4', buffer: mp4 }, 'Make GIF');
    expect(ascii(gif, 0, 6)).toBe('GIF89a');
    const back = await convert(page, '/gif-to-mp4/', { name: 'clip.gif', mimeType: 'image/gif', buffer: gif });
    expect(ascii(back, 4, 8)).toBe('ftyp');
  });

  test('Compress video and Trim video give MP4 files', async ({ page }) => {
    const small = await convert(page, '/compress-video/', { name: 'clip.mp4', mimeType: 'video/mp4', buffer: mp4 }, 'Compress');
    expect(ascii(small, 4, 8)).toBe('ftyp');
    const cut = await convert(page, '/trim-video/', { name: 'clip.mp4', mimeType: 'video/mp4', buffer: mp4 }, 'Trim');
    expect(ascii(cut, 4, 8)).toBe('ftyp');
  });

  test('Audio for transcription makes a small mono MP3 (and a WAV on request)', async ({ page }) => {
    const out = await convert(page, '/audio-for-transcription/', { name: 'tone.wav', mimeType: 'audio/wav', buffer: wav() });
    expect(ascii(out, 0, 3) === 'ID3' || (out[0] === 0xff && (out[1]! & 0xe0) === 0xe0)).toBe(true);
    await page.getByLabel('File type').selectOption('wav');
    await page.getByRole('button', { name: 'Convert', exact: true }).click();
    // The new result replaces the old one. A WAV starts with RIFF and says one channel at 16,000 samples a second.
    await expect(page.locator('a[download]').first()).toHaveAttribute('download', /\.wav$/, { timeout: 120_000 });
    const href = (await page.locator('a[download]').first().getAttribute('href'))!;
    const head = await page.evaluate(async (url) => Array.from(new Uint8Array(await (await fetch(url)).arrayBuffer()).slice(0, 44)), href);
    expect(String.fromCharCode(...head.slice(0, 4))).toBe('RIFF');
    expect(head[22]).toBe(1);
    expect(head[24]! + head[25]! * 256).toBe(16000);
  });

  test('Split audio cuts a long recording into parts under the size limit', async ({ page }) => {
    // About 11 minutes of 8 kHz sound is a 10.5 MB WAV. At 128 kbit/s a 10 MB part is about 10 minutes, so two parts come out.
    const rate = 8000;
    const n = rate * 660;
    const big = Buffer.alloc(44 + n * 2);
    big.write('RIFF', 0);
    big.writeUInt32LE(36 + n * 2, 4);
    big.write('WAVEfmt ', 8);
    big.writeUInt32LE(16, 16);
    big.writeUInt16LE(1, 20);
    big.writeUInt16LE(1, 22);
    big.writeUInt32LE(rate, 24);
    big.writeUInt32LE(rate * 2, 28);
    big.writeUInt16LE(2, 32);
    big.writeUInt16LE(16, 34);
    big.write('data', 36);
    big.writeUInt32LE(n * 2, 40);
    for (let i = 0; i < n; i++) big.writeInt16LE(Math.round(Math.sin((2 * Math.PI * 300 * i) / rate) * 9000), 44 + i * 2);
    await page.goto('/split-audio/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.locator('input[type=file]').first().setInputFiles({ name: 'lecture.wav', mimeType: 'audio/wav', buffer: big });
    await page.getByLabel('Largest part').selectOption('10');
    await page.getByLabel('Quality (bitrate)').selectOption('128');
    await page.getByRole('button', { name: 'Convert', exact: true }).click();
    await expect(page.getByRole('button', { name: /Download all \(2\) as ZIP/ })).toBeVisible({ timeout: 280_000 });
    await expect(page.locator('a[download]').first()).toHaveAttribute('download', /^lecture-part-000\.mp3$/);
  });

  test('Video to frames gives numbered JPG pictures in a ZIP', async ({ page }) => {
    // A three-second video made from a three-frame GIF, so this test does not depend on recording in the browser.
    const encoder = GIFEncoder();
    const palette = [[255, 210, 63], [20, 20, 20], [40, 120, 220]];
    for (const colour of [0, 1, 2]) encoder.writeFrame(new Uint8Array(64 * 48).fill(colour), 64, 48, { palette, delay: 1000 });
    encoder.finish();
    const video = await convert(page, '/gif-to-mp4/', { name: 'three.gif', mimeType: 'image/gif', buffer: Buffer.from(encoder.bytes()) });
    expect(ascii(video, 4, 8)).toBe('ftyp');
    await page.goto('/video-to-frames/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.locator('input[type=file]').first().setInputFiles({ name: 'clip.mp4', mimeType: 'video/mp4', buffer: video });
    await page.getByLabel('Take a picture').selectOption('1');
    await page.getByRole('button', { name: 'Convert', exact: true }).click();
    await expect(page.getByRole('button', { name: /Download all \(\d+\) as ZIP/ })).toBeVisible({ timeout: 240_000 });
    const first = page.locator('a[download]').first();
    await expect(first).toHaveAttribute('download', /^clip-frame-0001\.jpg$/);
    const href = (await first.getAttribute('href'))!;
    const head = await page.evaluate(async (url) => Array.from(new Uint8Array(await (await fetch(url)).arrayBuffer()).slice(0, 3)), href);
    expect(head).toEqual([0xff, 0xd8, 0xff]);
  });

  /** A three-second 64 by 48 video at 10 frames a second, made from a GIF, so these tests do not depend on recording in the browser. */
  async function gifVideo(page: Page): Promise<Buffer> {
    const encoder = GIFEncoder();
    const palette = [[255, 210, 63], [20, 20, 20], [40, 120, 220]];
    for (let i = 0; i < 30; i++) encoder.writeFrame(new Uint8Array(64 * 48).fill(i % 3), 64, 48, { palette, delay: 100 });
    encoder.finish();
    return convert(page, '/gif-to-mp4/', { name: 'three.gif', mimeType: 'image/gif', buffer: Buffer.from(encoder.bytes()) });
  }

  /** What the browser itself reads from a video: its size and length. */
  async function probe(page: Page, bytes: Buffer): Promise<{ w: number; h: number; d: number }> {
    return page.evaluate(async (b64) => {
      const bin = atob(b64);
      const data = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) data[i] = bin.charCodeAt(i);
      const video = document.createElement('video');
      video.muted = true;
      video.src = URL.createObjectURL(new Blob([data], { type: 'video/mp4' }));
      await new Promise<void>((resolve, reject) => {
        video.onloadedmetadata = () => resolve();
        video.onerror = () => reject(new Error('the browser could not read the video'));
      });
      return { w: video.videoWidth, h: video.videoHeight, d: video.duration };
    }, bytes.toString('base64'));
  }

  const downloadName = async (page: Page): Promise<string> => (await page.locator('a[download]').first().getAttribute('download'))!;

  test('Trim audio cuts part of a recording and Change audio volume saves an MP3', async ({ page }) => {
    await page.goto('/trim-audio/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.locator('input[type=file]').first().setInputFiles({ name: 'tone.wav', mimeType: 'audio/wav', buffer: wav() });
    await page.locator('#t-start').fill('0.25');
    await page.locator('#t-end').fill('0.75');
    await page.getByRole('button', { name: 'Trim', exact: true }).click();
    await expect(page.locator('a[download]').first()).toBeVisible({ timeout: 120_000 });
    expect(await downloadName(page)).toBe('tone-trimmed.mp3');
    const cut = await page.evaluate(async (url) => (await (await fetch(url)).arrayBuffer()).byteLength, (await page.locator('a[download]').first().getAttribute('href'))!);
    expect(cut).toBeGreaterThan(500);

    const loud = await convert(page, '/change-audio-volume/', { name: 'tone.wav', mimeType: 'audio/wav', buffer: wav() });
    expect(ascii(loud, 0, 3) === 'ID3' || (loud[0] === 0xff && (loud[1]! & 0xe0) === 0xe0)).toBe(true);
    expect(await downloadName(page)).toBe('tone-volume.mp3');
    await page.locator('#vol-mode').selectOption('fixed');
    await page.locator('#vol-gain').selectOption('10');
    await page.getByRole('button', { name: 'Convert', exact: true }).click();
    await expect(page.locator('a[download]').first()).toBeVisible({ timeout: 120_000 });
  });

  test('Rotate video swaps the size, Change video speed halves the length, Remove audio keeps the picture', async ({ page }) => {
    const video = await gifVideo(page);
    expect(await probe(page, video)).toMatchObject({ w: 64, h: 48 });
    expect((await probe(page, video)).d).toBeGreaterThan(2.5);

    const turned = await convert(page, '/rotate-video/', { name: 'clip.mp4', mimeType: 'video/mp4', buffer: video });
    expect(await downloadName(page)).toBe('clip-rotated.mp4');
    expect(await probe(page, turned)).toMatchObject({ w: 48, h: 64 });

    const fast = await convert(page, '/change-video-speed/', { name: 'clip.mp4', mimeType: 'video/mp4', buffer: video });
    expect(await downloadName(page)).toBe('clip-speed.mp4');
    const d = (await probe(page, fast)).d;
    expect(d).toBeGreaterThan(1.2);
    expect(d).toBeLessThan(1.9);

    const muted = await convert(page, '/remove-audio-from-video/', { name: 'clip.mp4', mimeType: 'video/mp4', buffer: video });
    expect(await downloadName(page)).toBe('clip-muted.mp4');
    expect(ascii(muted, 4, 8)).toBe('ftyp');
    expect(await probe(page, muted)).toMatchObject({ w: 64, h: 48 });
    expect(muted.includes(Buffer.from('soun'))).toBe(false);
  });

  test('Remove audio drops the sound track of a recording that had one', async ({ page }) => {
    expect(mp4.includes(Buffer.from('soun'))).toBe(true);
    const muted = await convert(page, '/remove-audio-from-video/', { name: 'clip.mp4', mimeType: 'video/mp4', buffer: mp4 });
    expect(ascii(muted, 4, 8)).toBe('ftyp');
    expect(muted.includes(Buffer.from('soun'))).toBe(false);
  });

  test('a broken file gives a clear message, not a crash', async ({ page }) => {
    await page.goto('/mp3-to-wav/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.locator('input[type=file]').first().setInputFiles({ name: 'bad.mp3', mimeType: 'audio/mpeg', buffer: Buffer.from('this is not audio at all') });
    await page.getByRole('button', { name: 'Convert', exact: true }).click();
    await expect(page.getByRole('alert')).toContainText(/damaged|could not|failed|no audio/i, { timeout: 120_000 });
  });
});

test.describe('file converters', () => {
  test('CSV to Excel keeps leading zeros as text and numbers as numbers', async ({ page }) => {
    const out = await convert(page, '/csv-to-excel/', { name: 'data.csv', mimeType: 'text/csv', buffer: Buffer.from('zip,qty\n01234,5\n"a, b",7\n') });
    expect(ascii(out, 0, 2)).toBe('PK');
    // Read it back with Excel to CSV to prove the file opens.
    const back = await convert(page, '/excel-to-csv/', { name: 'data.xlsx', mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', buffer: out });
    const text = back.toString('utf8').replace(/^﻿/, '');
    expect(text).toBe('zip,qty\r\n01234,5\r\n"a, b",7');
  });

  test('Excel to Markdown table writes an aligned table, with the pipe escaped', async ({ page }) => {
    const xlsx = await convert(page, '/csv-to-excel/', { name: 'data.csv', mimeType: 'text/csv', buffer: Buffer.from('name,qty\nDuck | pond,5\nGoose,12\n') });
    const md = await convert(page, '/excel-to-markdown-table/', { name: 'data.xlsx', mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', buffer: xlsx });
    expect(md.toString('utf8')).toBe('| name         | qty |\n| ------------ | --- |\n| Duck \\| pond | 5   |\n| Goose        | 12  |\n');
  });

  test('Word to Markdown keeps a heading, bold text and a table', async ({ page }) => {
    const zip = new JSZip();
    zip.file('[Content_Types].xml', '<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>');
    zip.file('_rels/.rels', '<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>');
    zip.file('word/_rels/document.xml.rels', '<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>');
    zip.file('word/styles.xml', '<?xml version="1.0" encoding="UTF-8"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/></w:style></w:styles>');
    const cell = (t: string) => `<w:tc><w:p><w:r><w:t>${t}</w:t></w:r></w:p></w:tc>`;
    zip.file('word/document.xml', `<?xml version="1.0" encoding="UTF-8"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body><w:p><w:pPr><w:pStyle w:val="Heading1"/></w:pPr><w:r><w:t>Duck report</w:t></w:r></w:p><w:p><w:r><w:t xml:space="preserve">Plain and </w:t></w:r><w:r><w:rPr><w:b/></w:rPr><w:t>bold</w:t></w:r></w:p><w:tbl><w:tr>${cell('Name')}${cell('Ducks')}</w:tr><w:tr>${cell('Pond')}${cell('12')}</w:tr></w:tbl></w:body></w:document>`);
    const docx = Buffer.from(await zip.generateAsync({ type: 'uint8array' }));
    const out = await convert(page, '/word-to-markdown/', { name: 'report.docx', mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', buffer: docx });
    const text = out.toString('utf8');
    expect(text).toContain('# Duck report');
    expect(text).toContain('Plain and **bold**');
    expect(text).toMatch(/\| Name\s+\| Ducks \|/);
  });

  test('TIFF to JPG makes a JPG', async ({ page }) => {
    const out = await convert(page, '/tiff-to-jpg/', { name: 'scan.tif', mimeType: 'image/tiff', buffer: tiff() });
    expect(out[0]).toBe(0xff);
    expect(out[1]).toBe(0xd8);
  });

  test('WEBP to GIF makes a GIF', async ({ page }) => {
    await page.goto('/');
    const base64 = await page.evaluate(async () => {
      const c = document.createElement('canvas');
      c.width = 40;
      c.height = 30;
      const g = c.getContext('2d')!;
      g.fillStyle = '#ffd23f';
      g.fillRect(0, 0, 40, 30);
      const blob: Blob = await new Promise((r) => c.toBlob((b) => r(b!), 'image/webp'));
      const bytes = new Uint8Array(await blob.arrayBuffer());
      let s = '';
      for (const b of bytes) s += String.fromCharCode(b);
      return btoa(s);
    });
    const out = await convert(page, '/webp-to-gif/', { name: 'pic.webp', mimeType: 'image/webp', buffer: Buffer.from(base64, 'base64') });
    expect(ascii(out, 0, 6)).toBe('GIF89a');
  });

  test('a batch gives a ZIP button', async ({ page }) => {
    await page.goto('/wav-to-mp3/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.locator('input[type=file]').first().setInputFiles([
      { name: 'a.wav', mimeType: 'audio/wav', buffer: wav() },
      { name: 'b.wav', mimeType: 'audio/wav', buffer: wav() },
    ]);
    await page.getByRole('button', { name: 'Convert', exact: true }).click();
    await expect(page.getByRole('button', { name: /Download all \(2\) as ZIP/ })).toBeVisible({ timeout: 240_000 });
  });
});

test.describe('text converters', () => {
  test('CSV to JSON converts as you type and downloads', async ({ page }) => {
    await page.goto('/csv-to-json/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.getByLabel('CSV in').fill('name,age\nAsha,29');
    await expect(page.getByLabel('JSON out')).toHaveValue(/"name": "Asha"/);
    await expect(page.getByRole('button', { name: /Download \.json/ })).toBeEnabled();
  });

  test('CSV to Markdown table, and the table converts back', async ({ page }) => {
    await page.goto('/csv-to-markdown-table/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.getByLabel('CSV in').fill('name,city\nAsha,Pune');
    await expect(page.getByLabel('Markdown table out')).toHaveValue('| name | city |\n| ---- | ---- |\n| Asha | Pune |');
    await page.goto('/markdown-table-to-csv/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.getByLabel('Markdown table in').fill('| name | city |\n| --- | --- |\n| Asha | Pune |');
    await expect(page.getByLabel('CSV out')).toHaveValue('name,city\nAsha,Pune'); // a text box turns CRLF into LF
  });

  test('SRT to VTT and VTT to SRT', async ({ page }) => {
    await page.goto('/srt-to-vtt/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.getByRole('button', { name: 'Try an example' }).click();
    await expect(page.getByLabel('VTT out')).toHaveValue(/^WEBVTT\n\n00:00:01\.000 --> 00:00:03\.500\nHello, and welcome\./);
    await page.goto('/vtt-to-srt/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.getByRole('button', { name: 'Try an example' }).click();
    await expect(page.getByLabel('SRT out')).toHaveValue(/^1\n00:00:01,000 --> 00:00:03,500\nHello, and welcome\./);
  });

  test('JSON to TOML loads its library and a null is reported by name', async ({ page }) => {
    await page.goto('/json-to-toml/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.getByLabel('JSON in').fill('{"title":"Quack","owner":{"name":"Asha"}}');
    await expect(page.getByLabel('TOML out')).toHaveValue(/title = "Quack"[\s\S]*\[owner\][\s\S]*name = "Asha"/);
    await page.getByLabel('JSON in').fill('{"a":{"b":null}}');
    await expect(page.getByRole('alert')).toContainText('"a.b"');
  });

  test('JSON to JSONL, XML to CSV and Clean AI text work with the example', async ({ page }) => {
    for (const [slug, input, output, pattern] of [
      ['json-to-jsonl', 'JSON in', 'JSONL out', /^\{"prompt":"Say hi","completion":"Hi!"\}\n\{"prompt":"Say bye"/],
      ['xml-to-csv', 'XML in', 'CSV out', /^@id,title,year\n1,Quack,2021/],
      ['clean-chat-text', 'text in', 'clean text out', /^Plan\n\nHere is the plan - it's simple:\n\n- Read the guide \(https:\/\/example\.com\)\n- Use pnpm test$/],
    ] as const) {
      await page.goto(`/${slug}/`);
      await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
      await page.getByRole('button', { name: 'Try an example' }).click();
      await expect(page.getByLabel(input)).not.toHaveValue('');
      await expect(page.getByLabel(output)).toHaveValue(pattern);
    }
  });

  test('bad JSON shows a message', async ({ page }) => {
    await page.goto('/json-to-csv/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.getByLabel('JSON in').fill('{not json');
    await expect(page.getByRole('alert')).toBeVisible();
  });

  test('TXT encoding fixer repairs Windows-1252 accents', async ({ page }) => {
    const out = await convert(page, '/text-encoding-fixer/', { name: 'old.txt', mimeType: 'text/plain', buffer: Buffer.from([0x63, 0x61, 0x66, 0xe9]) });
    expect(out.toString('utf8')).toBe('café');
  });
});

test.describe('calculators', () => {
  test('length converter', async ({ page }) => {
    await page.goto('/length-converter/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.locator('#u-value').fill('1');
    await page.locator('#u-from').selectOption('km');
    await page.locator('#u-to').selectOption('mi');
    await expect(page.locator('#u-result')).toHaveText('0.6213711922');
  });

  test('Indian land units show the bigha warning', async ({ page }) => {
    await page.goto('/indian-land-converter/');
    await expect(page.getByText(/bigha is not one fixed size/i)).toBeVisible();
  });

  test('number to words, Indian style', async ({ page }) => {
    await page.goto('/number-to-words/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.getByLabel('Number', { exact: true }).fill('1234567');
    await expect(page.getByText('Twelve lakh thirty-four thousand five hundred and sixty-seven')).toBeVisible();
  });

  test('number bases update each other', async ({ page }) => {
    await page.goto('/number-base-converter/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.getByLabel('Hexadecimal (base 16)').fill('ff');
    await expect(page.getByLabel('Decimal (base 10)')).toHaveValue('255');
    await expect(page.getByLabel('Binary (base 2)')).toHaveValue('11111111');
  });

  test('roman numerals both ways', async ({ page }) => {
    await page.goto('/roman-numeral-converter/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.getByLabel('Number or Roman numeral').fill('1994');
    await expect(page.getByText('MCMXCIV', { exact: true })).toBeVisible();
    await page.getByLabel('Number or Roman numeral').fill('XIV');
    await expect(page.getByText('14', { exact: true })).toBeVisible();
  });

  test('colour codes agree', async ({ page }) => {
    await page.goto('/color-code-converter/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.getByLabel('HEX').fill('#ff0000');
    await expect(page.getByLabel('RGB')).toHaveValue('255, 0, 0');
    await expect(page.getByLabel('HSL')).toHaveValue('0, 100%, 50%');
  });

  test('text case', async ({ page }) => {
    await page.goto('/text-case-converter/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.getByLabel('Your text').fill('hello big world');
    await page.getByRole('button', { name: 'snake_case' }).click();
    await expect(page.locator('#c-out')).toHaveValue('hello_big_world');
  });

  test('token counter estimates tokens and says it is an estimate', async ({ page }) => {
    await page.goto('/token-counter/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.locator('#tk-in').fill('The quick brown fox jumps over the lazy dog');
    await expect(page.locator('#tk-out')).toHaveText('About 12 tokens');
    await expect(page.getByText('By characters: 11. By words: 12.')).toBeVisible();
    await expect(page.getByText(/This is an estimate/)).toBeVisible();
  });

  test('time zone converter shows next-day rows', async ({ page }) => {
    await page.goto('/time-zone-converter/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.getByLabel('Starting zone').selectOption('Asia/Kolkata');
    await page.locator('#tz-date').fill('2026-03-04');
    await page.locator('#tz-time').fill('23:00');
    const tokyo = page.getByRole('row', { name: /Tokyo/ });
    await expect(tokyo).toContainText('02:30');
    await expect(tokyo).toContainText('next day');
  });

  test('date formats', async ({ page }) => {
    await page.goto('/date-format-converter/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.getByLabel('Date', { exact: true }).fill('04/03/2026');
    await expect(page.getByText('2026-03-04', { exact: true })).toBeVisible();
    await expect(page.locator('p.font-black', { hasText: 'Wednesday, 4th March 2026' })).toBeVisible();
  });
});

test.describe('site', () => {
  test('home has Popular right now, filter chips and a working search window', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Popular right now' })).toBeVisible();
    await page.getByRole('switch', { name: /^Units/ }).click();
    await expect(page.locator('[data-card-group]:visible')).toHaveCount(1);
    await page.keyboard.press('Control+k');
    await page.getByRole('combobox').fill('mp3');
    await expect(page.getByRole('option').first()).toBeVisible();
  });

  test('theme toggle switches and persists (every page except the always-light start page)', async ({ page }) => {
    await page.goto('/about/');
    await page.waitForFunction(() => document.querySelector('#theme-toggle') !== null);
    await page.emulateMedia({ colorScheme: 'light' });
    await page.locator('#theme-toggle').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('unknown address gets the 404 page', async ({ page }) => {
    const res = await page.goto('/no-such-page/');
    expect(res?.status()).toBe(404);
  });
});
