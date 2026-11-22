import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { contentFor } from '../../src/lib/content';
import { COMMUNITY } from '../../src/lib/community';
import { GUIDES, GUIDE_CATEGORIES } from '../../src/lib/guides';
import { PAGE_TOOLS, POPULAR_SLUGS, TOOLS, TOOL_GROUPS, searchTools, toolBySlug } from '../../src/lib/tools';
import { STARTERS, respond } from '../../src/lib/helper';
import { AUDIO_TARGETS, DEFAULT_MEDIA_OPTIONS, acceptsFor, audioArgs, jobFor } from '../../src/tools/media';
import { parseTime } from '../../src/tools/ffmpeg';
import { UNIT_SETS } from '../../src/convert/units';
import { ALL_DATA_SPECS } from '../../src/convert/textdata';

describe('tool registry', () => {
  it('slugs are unique and clean', () => {
    const slugs = TOOLS.map((t) => t.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });
  it('every tool is in a known group and has copy', () => {
    for (const t of TOOLS) {
      expect(TOOL_GROUPS, t.slug).toContain(t.group);
      expect(t.name.length, t.slug).toBeGreaterThan(2);
      expect(t.summary.length, t.slug).toBeGreaterThan(10);
      expect(t.quick.length, t.slug).toBeGreaterThan(40);
    }
  });
  it('link tools point at a sister site; others do not', () => {
    for (const t of TOOLS) {
      if (t.kind === 'link') {
        expect(t.href, t.slug).toMatch(/^https:\/\/(iduckimg|iduckpdf)\.com\//);
        expect(t.site, t.slug).toBeTruthy();
      } else expect(t.href, t.slug).toBeUndefined();
    }
  });
  it('rebuilds nothing the sister sites already have', () => {
    const onImg = ['heic-to-jpg', 'heic-to-png', 'avif-to-jpg', 'avif-to-png', 'svg-to-png', 'svg-to-jpg', 'bmp-to-jpg', 'gif-to-png', 'jpg-to-png', 'png-to-jpg', 'webp-to-jpg', 'webp-to-png', 'jpg-to-webp', 'png-to-webp', 'png-to-ico'];
    for (const s of onImg) expect(toolBySlug(s)?.kind, s).toBe('link');
    // Each card opens its own iDuckIMG page (the same slug), except the favicon maker.
    for (const s of onImg.filter((x) => x !== 'png-to-ico')) expect(toolBySlug(s)?.href, s).toBe(`https://iduckimg.com/${s}/`);
    expect(TOOLS.some((t) => /pdf/.test(t.slug) && t.kind !== 'link')).toBe(false);
  });
  it('Popular right now has the eight asked for', () => {
    expect(POPULAR_SLUGS.map((s) => toolBySlug(s)?.slug)).toEqual([...POPULAR_SLUGS]);
    expect(POPULAR_SLUGS).toHaveLength(8);
  });
  it('search finds converters by plain words', () => {
    expect(searchTools('mp4 mp3')[0]?.slug).toBe('mp4-to-mp3');
    expect(searchTools('bigha')[0]?.slug).toBe('indian-land-converter');
    expect(searchTools('lakh')[0]?.slug).toBe('number-to-words');
    expect(searchTools('zzzz')).toHaveLength(0);
  });
});

describe('page content', () => {
  it('every page has steps, an explainer and 4 to 6 questions', () => {
    for (const t of PAGE_TOOLS) {
      const c = contentFor(t);
      expect(c.steps.length, t.slug).toBeGreaterThanOrEqual(3);
      expect(c.about.length, t.slug).toBeGreaterThan(40);
      expect(c.faqs.length, t.slug).toBeGreaterThanOrEqual(4);
      expect(c.faqs.length, t.slug).toBeLessThanOrEqual(6);
      for (const f of c.faqs) {
        expect(f.q.endsWith('?'), `${t.slug}: ${f.q}`).toBe(true);
        expect(f.a.length, `${t.slug}: ${f.q}`).toBeGreaterThan(25);
      }
    }
  });
  it('questions are not copy-pasted between pages of one kind (the first one is specific)', () => {
    const firsts = PAGE_TOOLS.filter((t) => t.kind === 'audio').map((t) => contentFor(t).faqs[0]!.a);
    expect(new Set(firsts).size).toBe(firsts.length);
  });
  it('every page file exists for the community list and guides', () => {
    for (const p of COMMUNITY) expect(existsSync(`src/pages/${p.slug}.astro`), p.slug).toBe(true);
    for (const f of ['index', 'converters', '404', 'privacy', 'terms', 'chat', 'roadmap', '[slug]']) expect(existsSync(`src/pages/${f}.astro`), f).toBe(true);
  });
  it('guides have the structure the pages need', () => {
    expect(GUIDES.length).toBeGreaterThanOrEqual(45);
    expect(new Set(GUIDES.map((g) => g.slug)).size).toBe(GUIDES.length);
    expect(new Set(GUIDES.map((g) => g.title)).size).toBe(GUIDES.length);
    for (const g of GUIDES) {
      expect(g.title.length, g.slug).toBeLessThanOrEqual(60);
      expect(g.description.length, g.slug).toBeGreaterThanOrEqual(70);
      expect(g.description.length, g.slug).toBeLessThanOrEqual(160);
      expect(GUIDE_CATEGORIES, g.slug).toContain(g.category);
      expect(g.faqs.length, g.slug).toBeGreaterThanOrEqual(3);
      expect(g.steps.length, g.slug).toBeGreaterThanOrEqual(3);
      for (const slug of g.tools) expect(toolBySlug(slug), `${g.slug} -> ${slug}`).toBeTruthy();
      const words = [g.intro, ...g.steps, ...g.sections.flatMap((s) => s.paragraphs), ...g.faqs.flatMap((f) => [f.q, f.a])].join(' ').split(/\s+/).length;
      expect(words, g.slug).toBeGreaterThan(250);
    }
  });
});

describe('tool data is complete', () => {
  it('unit pages point at a unit set, data pages at a spec', () => {
    for (const t of PAGE_TOOLS.filter((x) => x.kind === 'units')) expect(UNIT_SETS[t.units!], t.slug).toBeTruthy();
    for (const t of PAGE_TOOLS.filter((x) => x.kind === 'data' && x.slug !== 'text-encoding-fixer')) expect(ALL_DATA_SPECS[t.slug], t.slug).toBeTruthy();
  });
  it('every audio and video page maps to ffmpeg arguments and accepted files', () => {
    for (const t of PAGE_TOOLS.filter((x) => ['audio', 'video', 'video-gif', 'gif-video', 'video-compress', 'video-trim', 'audio-speech', 'audio-split', 'video-frames'].includes(x.kind))) {
      const job = jobFor(t.kind, t.to!, DEFAULT_MEDIA_OPTIONS);
      expect(job.args.length, t.slug).toBeGreaterThan(0);
      expect(acceptsFor(t.kind, t.from!).length, t.slug).toBeGreaterThan(0);
    }
  });
});

describe('ffmpeg arguments', () => {
  it('audio targets', () => {
    expect(audioArgs('mp3', { ...DEFAULT_MEDIA_OPTIONS, bitrate: 320 })).toContain('320k');
    expect(audioArgs('wav', DEFAULT_MEDIA_OPTIONS)).toContain('pcm_s16le');
    expect(() => audioArgs('xyz', DEFAULT_MEDIA_OPTIONS)).toThrow();
    expect(Object.keys(AUDIO_TARGETS)).toEqual(expect.arrayContaining(['mp3', 'wav', 'm4a', 'aac', 'ogg', 'flac', 'opus']));
  });
  it('gif and trim', () => {
    const gif = jobFor('video-gif', 'gif', { ...DEFAULT_MEDIA_OPTIONS, start: 5, duration: 3, fps: 10, width: 320 });
    expect(gif.before).toEqual(['-ss', '5']);
    expect(gif.args).toContain('-an');
    expect(gif.args.join(' ')).toContain('fps=10');
    const trim = jobFor('video-trim', 'mp4', { ...DEFAULT_MEDIA_OPTIONS, start: 10, end: 25 });
    expect(trim.args.slice(0, 2)).toEqual(['-t', '15']);
  });
  it('parses times', () => {
    expect(parseTime('90')).toBe(90);
    expect(parseTime('1:30')).toBe(90);
    expect(parseTime('1:02:03.5')).toBe(3723.5);
    expect(parseTime('abc')).toBeNull();
    expect(parseTime('')).toBeNull();
  });
});

describe('helper', () => {
  it('points at the right converter or sister site', () => {
    expect(respond('mp4 to mp3').tools[0]?.slug).toBe('mp4-to-mp3');
    expect(respond('i want the sound from a video').tools.map((t) => t.slug)).toContain('video-to-mp3');
    expect(respond('convert word to pdf').links[0]?.href).toBe('https://iduckpdf.com/');
    expect(respond('heic to jpg').tools[0]?.href).toMatch(/^https:\/\/iduckimg\.com\//);
    expect(respond('is it safe').text).toMatch(/not uploaded/);
    expect(respond('qqqqzzzz').tools).toHaveLength(0);
  });
});

describe('helper does small jobs and remembers the converter', () => {
  it('converts units in the chat', () => {
    expect(respond('5 km in miles').answer?.big).toBe('3.106855961 mi');
    expect(respond('72 f in c').answer?.big).toBe('22.22222222 °C');
    expect(respond('10 kg to pounds').answer?.big).toBe('22.04622622 lb');
    expect(respond('2 acres in sq ft').answer?.big).toMatch(/^87,?120 /);
    expect(respond('5 km in kg').answer).toBeUndefined();
  });
  it('writes numbers in words, Roman numerals and bases', () => {
    expect(respond('1250000 in words').answer?.big).toBe('Twelve lakh fifty thousand');
    expect(respond('1250000 in international words').answer?.big).toBe('One million two hundred and fifty thousand');
    expect(respond('2026 in roman').answer?.big).toBe('MMXXVI');
    expect(respond('xiv to number').answer?.big).toBe('14');
    expect(respond('ff to decimal').answer?.big).toBe('255');
    expect(respond('255 to binary').answer?.big).toBe('11111111');
    expect(respond('5000 in roman').text).toMatch(/3999/);
  });
  it('answers follow-ups from the converter it just suggested', () => {
    const first = respond('mp4 to mp3');
    expect(first.focus).toBe('mp4-to-mp3');
    expect(first.followups.length).toBeGreaterThan(0);
    expect(respond('how do i use it?', undefined, first.focus).steps?.length).toBeGreaterThanOrEqual(3);
    expect(respond('is my file uploaded?', undefined, first.focus).text).toMatch(/never leaves/);
    expect(respond('how big a file can i use?', undefined, first.focus).text).toMatch(/500 MB/);
    expect(respond('will the sound quality drop?', undefined, first.focus).text).toMatch(/encoded once|quality|lossy/i);
  });
  it('every starter and follow-up button gets a real answer', () => {
    for (const s of STARTERS) expect(respond(s).text.length, s).toBeGreaterThan(5);
    const r = respond('video to gif');
    for (const f of r.followups) expect(respond(f, undefined, r.focus).text.length, f).toBeGreaterThan(5);
  });
});
