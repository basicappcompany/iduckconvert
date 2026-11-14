import { describe, expect, it } from 'vitest';
import { LOCALES, LOCALE_DATA, OTHER_LOCALES, alternatesFor, dictFor, hasTranslations, languageLinks, localePath, runLabelFor, splitLocalePath, toolText } from '../../src/i18n';
import { en, enTemplates } from '../../src/i18n/en';
import { UI_TEXT } from '../../src/i18n/ui';
import { PAGE_TOOLS, TOOLS, toolPath } from '../../src/lib/tools';
import { UNIT_PAIRS } from '../../src/lib/unit-pages';

/** Every string in a value, with a path to it, so two languages can be compared key by key. */
function flat(value: unknown, prefix = ''): Record<string, string> {
  if (typeof value === 'string') return { [prefix]: value };
  if (Array.isArray(value)) return Object.assign({}, ...value.map((v, i) => flat(v, `${prefix}[${i}]`)));
  if (value && typeof value === 'object') return Object.assign({}, ...Object.entries(value).map(([k, v]) => flat(v, prefix ? `${prefix}.${k}` : k)));
  return {};
}
const holes = (s: string): string[] => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]!).sort();
const MACHINE = LOCALES.filter((l) => l.status === 'machine');

describe('language registry', () => {
  it('has English at the root and the nine other languages under their own paths', () => {
    expect(LOCALES[0]).toMatchObject({ code: 'en', path: '' });
    expect(MACHINE.map((l) => l.code).sort()).toEqual(['bn', 'de', 'es', 'fr', 'hi', 'id', 'pt-BR', 'ru', 'tr']);
    expect(new Set(LOCALES.map((l) => l.code)).size).toBe(LOCALES.length);
    expect(new Set(LOCALES.map((l) => l.path)).size).toBe(LOCALES.length);
    expect(OTHER_LOCALES.length).toBe(9);
  });
  it('turns paths into language paths and back', () => {
    expect(localePath('es', '/mp4-to-mp3/')).toBe('/es/mp4-to-mp3/');
    expect(localePath('es', '/')).toBe('/es/');
    expect(localePath('en', '/mp4-to-mp3/')).toBe('/mp4-to-mp3/');
    expect(localePath('pt-BR', '/')).toBe('/pt-br/');
    expect(splitLocalePath('/pt-br/csv-to-json/')).toMatchObject({ rest: '/csv-to-json/', locale: { code: 'pt-BR' } });
    expect(splitLocalePath('/csv-to-json/')).toMatchObject({ rest: '/csv-to-json/', locale: { code: 'en' } });
    // A converter whose slug looks like nothing special stays English.
    expect(splitLocalePath('/about/').locale.code).toBe('en');
  });
});

describe.each(MACHINE.map((l) => [l.code]))('%s page text', (code) => {
  const d = dictFor(code!);
  const source = flat(en);
  const mine = flat(d);

  it('has every key, none empty, with the same {placeholders} as English', () => {
    expect(Object.keys(mine).sort()).toEqual(Object.keys(source).sort());
    for (const [key, text] of Object.entries(mine)) {
      expect(text.trim(), key).not.toBe('');
      expect(holes(text), key).toEqual(holes(source[key]!));
    }
  });
  it('is not English: almost every string differs from the English one', () => {
    const same = Object.entries(mine).filter(([k, t]) => t === source[k]);
    // A few short words are spelled the same in some languages (Audio, Video, Roadmap).
    expect(same.length, same.map(([k]) => k).join(', ')).toBeLessThanOrEqual(6);
  });
  it('keeps the duck out of the translation of the site name', () => {
    expect(mine['homeTitle']).toContain('iDuckConvert');
    expect(mine['footerLine']).toContain('iduckconvert.com');
    expect(mine['footerLine']).toContain('{date}');
  });
});

describe.each(MACHINE.map((l) => [l.code]))('%s shared controls', (code) => {
  const base = flat(UI_TEXT['en']);
  const mine = flat(UI_TEXT[code!]);
  it('has every control, with the same {placeholders}', () => {
    expect(Object.keys(mine).sort()).toEqual(Object.keys(base).sort());
    for (const [key, text] of Object.entries(mine)) {
      expect(text.trim(), key).not.toBe('');
      expect(holes(text), key).toEqual(holes(base[key]!));
    }
  });
  it('translates the run buttons', () => {
    for (const key of ['runConvert', 'runExtractMp3', 'runMakeGif', 'runCompress', 'runTrim']) expect(mine[key], key).not.toBe(base[key]);
  });
});

describe.each(MACHINE.map((l) => [l.code]))('%s converter text', (code) => {
  const data = LOCALE_DATA[code!]!;
  it('has text for the pattern tools with the {f}, {t} and {run} slots', () => {
    const t = data.templates;
    for (const key of ['audioSummary', 'audioQuick', 'videoSummary', 'videoQuick'] as const) expect(holes(t[key]), key).toContain('f');
    for (const key of ['audioQuick', 'videoQuick'] as const) expect(holes(t[key]), key).toContain('run');
    expect(holes(t.pairName)).toEqual(['f', 't']);
    expect(holes(t.linkSummary)).toEqual(['name', 'site']);
    expect(holes(t.linkQuick)).toEqual(['name', 'site']);
    for (const key of Object.keys(enTemplates) as (keyof typeof enTemplates)[]) expect(t[key], key).not.toBe(enTemplates[key]);
  });
  it('has a name, summary and short answer for every converter, none left in English', () => {
    for (const tool of TOOLS) {
      const text = toolText(code!, tool);
      expect(text.name.trim(), tool.slug).not.toBe('');
      expect(text.summary.trim(), tool.slug).not.toBe('');
      expect(text.quick.trim(), tool.slug).not.toBe('');
      expect(text.summary + text.quick, tool.slug).not.toMatch(/\{\w+\}/);
      // Tool names that are only format names (MP3 to WAV) change shape; the summary and answer must always be translated.
      expect(text.summary, tool.slug).not.toBe(tool.summary);
      if (tool.kind !== 'link') expect(text.quick, tool.slug).not.toBe(tool.quick);
    }
  });
  it('names the run button the page really shows, in quotes', () => {
    const withButton = new Set(['audio', 'video', 'gif-video', 'video-gif', 'video-compress', 'video-trim', 'excel', 'tiff', 'webp-gif']);
    for (const tool of PAGE_TOOLS.filter((t) => withButton.has(t.kind))) {
      const label = runLabelFor(code!, tool);
      expect(toolText(code!, tool).quick, tool.slug).toContain(`"${label}"`);
    }
  });
  it('has its own text for every one-off converter (nothing falls back to English)', () => {
    const oneOff = PAGE_TOOLS.filter((t) => !(t.slug === `${t.from}-to-${t.to}` && (t.kind === 'audio' || t.kind === 'video') && t.slug !== 'mp4-to-mp3'));
    for (const tool of oneOff) expect(data.tools[tool.slug], tool.slug).toBeDefined();
  });
});

describe('addresses and hreflang', () => {
  it('lists every language for the home page and every converter, and only those', () => {
    expect(hasTranslations('/')).toBe(true);
    for (const tool of PAGE_TOOLS) expect(hasTranslations(toolPath(tool.slug)), tool.slug).toBe(true);
    expect(hasTranslations('/about/')).toBe(false);
    expect(hasTranslations('/guides/')).toBe(false);
    for (const pair of UNIT_PAIRS) expect(hasTranslations(`/${pair.slug}/`), pair.slug).toBe(false);
    expect(alternatesFor('/about/')).toEqual([]);
    const alts = alternatesFor('/mp4-to-mp3/');
    expect(alts.map((a) => a.hreflang).sort()).toEqual(['bn', 'de', 'en-US', 'es', 'fr', 'hi', 'id', 'pt-BR', 'ru', 'tr']);
    expect(alts.find((a) => a.hreflang === 'es')!.href).toBe('https://iduckconvert.com/es/mp4-to-mp3/');
    expect(alts.find((a) => a.hreflang === 'en-US')!.href).toBe('https://iduckconvert.com/mp4-to-mp3/');
  });
  it('the language menu keeps you on the same page, or sends you to that language home when it has no translation', () => {
    expect(languageLinks('/csv-to-json/').find((l) => l.locale.code === 'de')!.href).toBe('/de/csv-to-json/');
    expect(languageLinks('/about/').find((l) => l.locale.code === 'de')!.href).toBe('/de/');
    expect(languageLinks('/about/').find((l) => l.locale.code === 'en')!.href).toBe('/');
  });
});
