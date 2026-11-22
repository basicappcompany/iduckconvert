import { describe, expect, it } from 'vitest';
import JSZip from 'jszip';
import { estimateTokens } from '../../src/convert/tokens';
import { docxToMarkdown } from '../../src/convert/docx';
import { DEFAULT_MEDIA_OPTIONS, MAX_FRAMES, acceptsFor, jobFor, segmentSeconds } from '../../src/tools/media';
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
  });
  it('refuses a file that is not a Word document', async () => {
    await expect(docxToMarkdown({ buffer: new TextEncoder().encode('not a zip') })).rejects.toThrow();
  });
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
