import { describe, expect, it } from 'vitest';
import { contentFor, pairContent } from '../../src/lib/content';
import { GUIDES } from '../../src/lib/guides';
import { MEDIA_PAGES, SETTINGS } from '../../src/lib/media-pages';
import { PAGE_TOOLS, TOOLS } from '../../src/lib/tools';
import { UNIT_PAIRS, UNIT_SOURCES, bighaRows, factorStatement, isExactPair, valueTable } from '../../src/lib/unit-pages';
import { UNIT_SETS, convertUnit } from '../../src/convert/units';

const words = (s: string) => s.trim().split(/\s+/).length;
const mediaTools = PAGE_TOOLS.filter((t) => ['audio', 'video'].includes(t.kind));

describe('answer-first text', () => {
  it('every page opens with a plain answer of 40 to 60 words', () => {
    for (const t of PAGE_TOOLS) {
      const n = words(contentFor(t).answer);
      expect(n, `${t.slug}: ${n} words`).toBeGreaterThanOrEqual(40);
      expect(n, `${t.slug}: ${n} words`).toBeLessThanOrEqual(60);
    }
    for (const p of UNIT_PAIRS) {
      const n = words(pairContent(p).answer);
      expect(n, `${p.slug}: ${n} words`).toBeGreaterThanOrEqual(40);
      expect(n, `${p.slug}: ${n} words`).toBeLessThanOrEqual(60);
    }
  });
  it('every page has numbered steps', () => {
    for (const t of PAGE_TOOLS) expect(contentFor(t).steps.length, t.slug).toBeGreaterThanOrEqual(3);
  });
});

describe('audio and video pages are each different', () => {
  it('there is a written page for every audio and video converter', () => {
    for (const t of mediaTools.filter((x) => x.kind === 'audio' || (x.kind === 'video' && x.from !== 'video'))) expect(MEDIA_PAGES[t.slug], t.slug).toBeTruthy();
  });
  it('titles, descriptions, answers and the page-specific paragraphs are all unique', () => {
    const keys = ['hook', 'description', 'answer', 'who', 'quality', 'devices'] as const;
    for (const k of keys) {
      const values = Object.values(MEDIA_PAGES).map((p) => p[k]);
      expect(new Set(values).size, k).toBe(values.length);
    }
    const titles = Object.entries(MEDIA_PAGES).map(([slug, p]) => `${slug}: ${p.hook}`);
    expect(new Set(titles).size).toBe(titles.length);
  });
  it('titles fit and descriptions are the right length', () => {
    for (const [slug, p] of Object.entries(MEDIA_PAGES)) {
      const tool = TOOLS.find((t) => t.slug === slug)!;
      const title = `${tool.name}: ${p.hook} | iDuckConvert`;
      expect(title.length, title).toBeLessThanOrEqual(66);
      expect(p.description.length, slug).toBeGreaterThanOrEqual(100);
      expect(p.description.length, slug).toBeLessThanOrEqual(175);
    }
  });
  it('pages carry six question headings, and the question text differs from page to page', () => {
    for (const t of mediaTools) {
      const c = contentFor(t);
      expect(c.sections.length, t.slug).toBe(6);
      for (const s of c.sections) expect(s.h.endsWith('?'), `${t.slug}: ${s.h}`).toBe(true);
    }
    const sizes = mediaTools.filter((t) => t.kind === 'audio' && t.from !== 'video' && t.from !== 'mp4').map((t) => contentFor(t).sections[3]!.p);
    expect(new Set(sizes).size).toBe(sizes.length);
  });
  it('states the settings used, matching the encoder arguments', () => {
    for (const to of ['mp3', 'wav', 'm4a', 'aac', 'ogg', 'flac', 'opus', 'mp4', 'webm']) expect(SETTINGS[to], to).toBeTruthy();
    expect(SETTINGS['mp4']).toContain('CRF 23');
    expect(SETTINGS['mp3']).toContain('192');
  });
});

describe('unit pages', () => {
  it('main unit pages state the factor, give 15 to 20 values and name a source', () => {
    for (const t of PAGE_TOOLS.filter((x) => x.kind === 'units')) {
      const u = contentFor(t).unit!;
      expect(u.factor.length, t.slug).toBeGreaterThan(10);
      expect(u.rows.length, t.slug).toBeGreaterThanOrEqual(15);
      expect(u.rows.length, t.slug).toBeLessThanOrEqual(20);
      expect(u.source.text.length, t.slug).toBeGreaterThan(40);
    }
  });
  it('the factor text is right for the headline cases', () => {
    expect(factorStatement('length', 'in', 'cm')).toBe('1 inch = 2.54 centimetres exactly.');
    expect(factorStatement('length', 'ft', 'm')).toBe('1 foot = 0.3048 metres exactly.');
    expect(factorStatement('weight', 'lb', 'kg')).toBe('1 pound = 0.45359237 kilograms exactly.');
    expect(factorStatement('temperature', 'c', 'f')).toContain('× 9 ÷ 5 + 32');
    expect(factorStatement('data', 'gb', 'mb')).toBe('1 gigabyte = 1000 megabytes exactly.');
    expect(factorStatement('speed', 'mach', 'ms')).toContain('approximately');
    expect(isExactPair('indian-land', 'bigha-up', 'sqft')).toBe(false);
    expect(isExactPair('indian-land', 'acre', 'sqft')).toBe(true);
  });
  it('table values are computed, not typed', () => {
    const rows = valueTable('length', 'in', 'cm');
    expect(rows.find((r) => r.from === '10 in')?.to).toBe('25.4 cm');
    expect(valueTable('temperature', 'c', 'f').find((r) => r.from === '100 °C')?.to).toBe('212 °F');
  });
  it('every unit set has a source', () => {
    for (const key of Object.keys(UNIT_SETS)) expect(UNIT_SOURCES[key], key).toBeTruthy();
  });
});

describe('popular pair pages', () => {
  it('there are about thirty, with unique slugs that do not clash with anything else', () => {
    expect(UNIT_PAIRS.length).toBeGreaterThanOrEqual(30);
    const slugs = UNIT_PAIRS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    const taken = new Set([...TOOLS.map((t) => t.slug), ...GUIDES.map((g) => g.slug), 'guides', 'converters', 'about', 'privacy', 'terms', 'roadmap', 'chat', 'how-it-works', 'donate', 'feedback', 'request', 'settings']);
    for (const s of slugs) expect(taken.has(s), s).toBe(false);
  });
  it('each pair points at real units and carries its own text', () => {
    for (const p of UNIT_PAIRS) {
      const set = UNIT_SETS[p.set]!;
      expect(set.units.some((u) => u.id === p.from), p.slug).toBe(true);
      expect(set.units.some((u) => u.id === p.to), p.slug).toBe(true);
      expect(Number.isFinite(convertUnit(set, p.from, p.to, 1)), p.slug).toBe(true);
      const c = pairContent(p);
      expect(c.faqs.length, p.slug).toBeGreaterThanOrEqual(4);
      expect(c.unit!.rows.length, p.slug).toBeGreaterThanOrEqual(15);
      expect(p.note.length, p.slug).toBeGreaterThan(60);
    }
    const notes = UNIT_PAIRS.map((p) => p.note);
    expect(new Set(notes).size).toBe(notes.length);
  });
  it('the worked answers in the pair FAQs match the calculation', () => {
    const check = (slug: string, value: number, expected: number, tolerance = 0.02) => {
      const p = UNIT_PAIRS.find((x) => x.slug === slug)!;
      const got = convertUnit(UNIT_SETS[p.set]!, p.from, p.to, value);
      expect(Math.abs(got - expected) / Math.abs(expected), slug).toBeLessThan(tolerance);
    };
    check('cm-to-inches', 170, 66.93);
    check('kg-to-lbs', 23, 50.71);
    check('lbs-to-kg', 150, 68.04);
    check('celsius-to-fahrenheit', 37, 98.6);
    check('sq-ft-to-sq-m', 1000, 92.9);
    check('hectare-to-acre', 5, 12.355);
    check('kcal-to-kj', 250, 1046);
    check('psi-to-bar', 32, 2.206);
    check('mph-to-kmh', 70, 112.65);
    check('crore-to-million', 1, 10);
    check('lakh-to-million', 1, 0.1);
  });
  it('the acre-to-bigha page shows each state', () => {
    const rows = bighaRows();
    expect(rows.length).toBeGreaterThanOrEqual(4);
    expect(rows.find((r) => r.state.includes('Gujarat'))?.perAcre).toBe('2.5');
  });
});
