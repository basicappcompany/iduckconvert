import { describe, expect, it } from 'vitest';
import JSZip from 'jszip';
import { estimateTokens } from '../../src/convert/tokens';
import { docxToMarkdown } from '../../src/convert/docx';
import { DEFAULT_MEDIA_OPTIONS, MAX_FRAMES, acceptsFor, atempoChain, jobFor, segmentSeconds } from '../../src/tools/media';
import { PAGE_TOOLS } from '../../src/lib/tools';

describe('token estimate', () => {
  it('is zero for nothing and counts both rules of thumb', () => {
    expect(estimateTokens('')).toMatchObject({ chars: 0, words: 0, lines: 0, tokens: 0 });
    const t = estimateTokens('The quick brown fox jumps over the lazy dog');
    expect(t).toMatchObject({ chars: 43, words: 9, lines: 1, byChars: 11, byWords: 12, tokens: 12 });
  });
  it('counts lines and code points, not UTF-16 units', () => {
    const t = estimateTokens('a\nb\r\nc 😀');
    expect(t.lines).toBe(3);
    expect(t.chars).toBe(8);
  });
  it('is the middle of the two estimates', () => {
    const t = estimateTokens('word '.repeat(100));
    expect(t.tokens).toBe(Math.round((t.byChars + t.byWords) / 2));
  });
});

/** The smallest Word file mammoth will read: one heading, one paragraph with bold text, and a two-by-two table. */
async function makeDocx(): Promise<Uint8Array> {
  const zip = new JSZip();
  zip.file('[Content_Types].xml', '<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>');
  zip.file('_rels/.rels', '<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>');
  zip.file('word/_rels/document.xml.rels', '<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>');
  zip.file('word/styles.xml', '<?xml version="1.0" encoding="UTF-8"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/></w:style></w:styles>');
  const cell = (t: string) => `<w:tc><w:p><w:r><w:t>${t}</w:t></w:r></w:p></w:tc>`;
  zip.file(
    'word/document.xml',
    `<?xml version="1.0" encoding="UTF-8"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>` +
      `<w:p><w:pPr><w:pStyle w:val="Heading1"/></w:pPr><w:r><w:t>Duck report</w:t></w:r></w:p>` +
      `<w:p><w:r><w:t xml:space="preserve">Plain and </w:t></w:r><w:r><w:rPr><w:b/></w:rPr><w:t>bold</w:t></w:r><w:r><w:t xml:space="preserve"> words.</w:t></w:r></w:p>` +
      `<w:tbl><w:tr>${cell('Name')}${cell('Ducks')}</w:tr><w:tr>${cell('Pond')}${cell('12')}</w:tr></w:tbl>` +
      `</w:body></w:document>`,
  );
  return zip.generateAsync({ type: 'uint8array' });
}

describe('Word to Markdown', () => {
  it('keeps headings, bold text and tables', async () => {
    const bytes = await makeDocx();
    const { markdown } = await docxToMarkdown({ buffer: bytes });
    expect(markdown).toContain('# Duck report');
    expect(markdown).toContain('Plain and **bold** words.');
    expect(markdown).toMatch(/\| Name\s+\| Ducks \|/);
    expect(markdown).toMatch(/\| Pond\s+\| 12\s+\|/);
  }, 30_000);
  it('refuses a file that is not a Word document', async () => {
    await expect(docxToMarkdown({ buffer: new TextEncoder().encode('not a zip') })).rejects.toThrow();
  }, 30_000);
});

describe('audio and video presets', () => {
  it('speech: one channel at 16 kHz, small MP3 or WAV', () => {
    const mp3 = jobFor('audio-speech', 'mp3', DEFAULT_MEDIA_OPTIONS);
    expect(mp3.args.join(' ')).toContain('-ac 1 -ar 16000');
    expect(mp3.args).toContain('libmp3lame');
    expect(mp3.args).toContain('32k');
    expect(mp3.spec.ext).toBe('mp3');
    const wav = jobFor('audio-speech', 'mp3', { ...DEFAULT_MEDIA_OPTIONS, speechFormat: 'wav' });
    expect(wav.args).toContain('pcm_s16le');
    expect(wav.spec.ext).toBe('wav');
  });
  it('split: the part length keeps a constant-bitrate part under the limit', () => {
    // 24 MB at 64 kbit/s is about 50 minutes; at 32 kbit/s about 100.
    expect(segmentSeconds(24, 64)).toBe(3019);
    expect(segmentSeconds(24, 32)).toBe(6039);
    for (const [mb, kbps] of [[10, 128], [24, 64], [49, 96], [24, 32]] as const) {
      const bytes = (segmentSeconds(mb, kbps) * kbps * 1000) / 8;
      expect(bytes, `${mb} MB at ${kbps}`).toBeLessThan(mb * 1024 * 1024);
    }
    const job = jobFor('audio-split', 'mp3', { ...DEFAULT_MEDIA_OPTIONS, bitrate: 64, partMb: 24 });
    expect(job.args.join(' ')).toContain('-f segment -segment_time 3019 -reset_timestamps 1');
    expect(job.many?.pattern).toBe('part_%03d.mp3');
    expect(job.many?.match.test('part_007.mp3')).toBe(true);
    expect(job.many?.match.test('input.mp3')).toBe(false);
  });
  it('frames: one picture every N seconds, capped', () => {
    const job = jobFor('video-frames', 'jpg', { ...DEFAULT_MEDIA_OPTIONS, frameEvery: 5, width: 0 });
    expect(job.args.join(' ')).toContain('fps=1/5');
    expect(job.args.join(' ')).not.toContain('scale');
    expect(job.args).toContain(String(MAX_FRAMES));
    expect(jobFor('video-frames', 'jpg', { ...DEFAULT_MEDIA_OPTIONS, width: 480 }).args.join(' ')).toContain("scale='min(480,iw)':-2");
    expect(job.many?.match.test('frame_0001.jpg')).toBe(true);
  });
  it('the drop zone takes audio and video for the audio presets, video only for frames', () => {
    expect(acceptsFor('audio-speech', 'audio')).toEqual(expect.arrayContaining(['.mp3', '.mp4', 'audio/*', 'video/*']));
    expect(acceptsFor('audio-split', 'audio')).toEqual(expect.arrayContaining(['.wav', '.mov']));
    expect(acceptsFor('video-frames', 'video')).not.toContain('audio/*');
  });
  it('every new page has a registry row that the island can mount', () => {
    for (const slug of ['audio-for-transcription', 'split-audio', 'video-to-frames', 'word-to-markdown', 'excel-to-markdown-table', 'token-counter']) {
      expect(PAGE_TOOLS.find((t) => t.slug === slug), slug).toBeTruthy();
    }
  });
});

describe('trim, volume, mute, rotate and speed presets', () => {
  const o = DEFAULT_MEDIA_OPTIONS;
  it('tempo changes are chained inside the 0.5 to 2 range the filter accepts', () => {
    expect(atempoChain(2)).toBe('atempo=2');
    expect(atempoChain(1.5)).toBe('atempo=1.5');
    expect(atempoChain(4)).toBe('atempo=2,atempo=2');
    expect(atempoChain(3)).toBe('atempo=2,atempo=1.5');
    expect(atempoChain(0.75)).toBe('atempo=0.75');
    expect(atempoChain(0.25)).toBe('atempo=0.5,atempo=0.5');
  });
  it('speed: the picture and the sound change together', () => {
    const job = jobFor('video-speed', 'mp4', { ...o, speed: 2 });
    const args = job.args.join(' ');
    expect(args).toContain('-af atempo=2');
    expect(args).toContain('setpts=PTS/2,scale=');
    expect(job.spec.ext).toBe('mp4');
  });
  it('rotate: the turn comes before the even-size scale', () => {
    expect(jobFor('video-rotate', 'mp4', { ...o, rotate: 'cw' }).args.join(' ')).toContain('-vf transpose=1,scale=');
    expect(jobFor('video-rotate', 'mp4', { ...o, rotate: 'ccw' }).args.join(' ')).toContain('transpose=2,');
    expect(jobFor('video-rotate', 'mp4', { ...o, rotate: '180' }).args.join(' ')).toContain('hflip,vflip,scale=');
    expect(jobFor('video-rotate', 'mp4', { ...o, rotate: 'hflip' }).args.join(' ')).toContain('-vf hflip,scale=');
  });
  it('mute: copies the picture when it can, otherwise makes an MP4 without sound', () => {
    const copy = jobFor('video-mute', 'mp4', o, 'MOV');
    expect(copy.args).toEqual(['-an', '-c:v', 'copy']);
    expect(copy.spec).toEqual({ ext: 'mov', mime: 'video/quicktime' });
    const avi = jobFor('video-mute', 'mp4', o, 'avi');
    expect(avi.args).toContain('libx264');
    expect(avi.args).toContain('-an');
    expect(avi.spec.ext).toBe('mp4');
    expect(jobFor('video-mute', 'mp4', o).spec.ext).toBe('mp4');
  });
  it('audio trim: start before the input, length after, saved as MP3', () => {
    const job = jobFor('audio-trim', 'mp3', { ...o, start: 10, end: 25 });
    expect(job.before).toEqual(['-ss', '10']);
    expect(job.args.slice(0, 2)).toEqual(['-t', '15']);
    expect(job.args).toContain('libmp3lame');
    expect(job.spec.ext).toBe('mp3');
    expect(jobFor('audio-trim', 'mp3', o).before).toEqual([]);
  });
  it('volume: even out to -16 LUFS, or a fixed number of decibels', () => {
    expect(jobFor('audio-volume', 'mp3', { ...o, normalise: true }).args.join(' ')).toContain('-af loudnorm=I=-16:TP=-1.5:LRA=11');
    expect(jobFor('audio-volume', 'mp3', { ...o, normalise: false, gainDb: 6 }).args.join(' ')).toContain('-af volume=6dB');
    expect(jobFor('audio-volume', 'mp3', { ...o, normalise: false, gainDb: -3 }).args.join(' ')).toContain('-af volume=-3dB');
  });
  it('the drop zone takes the right files', () => {
    expect(acceptsFor('audio-trim', 'audio')).toEqual(expect.arrayContaining(['.mp3', '.mp4']));
    expect(acceptsFor('audio-volume', 'audio')).toEqual(expect.arrayContaining(['.wav', 'video/*']));
    for (const kind of ['video-mute', 'video-rotate', 'video-speed'] as const) expect(acceptsFor(kind, 'video')).not.toContain('audio/*');
  });
  it('every new page has a registry row', () => {
    for (const slug of ['trim-audio', 'change-audio-volume', 'remove-audio-from-video', 'rotate-video', 'change-video-speed']) expect(PAGE_TOOLS.find((t) => t.slug === slug), slug).toBeTruthy();
  });
});
