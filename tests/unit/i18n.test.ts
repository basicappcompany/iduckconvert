import { describe, expect, it } from 'vitest';
import { LOCALES, LOCALE_DATA, OTHER_LOCALES, alternatesFor, dictFor, hasTranslations, languageLinks, localePath, pairHasText, runLabelFor, splitLocalePath, toolText } from '../../src/i18n';
import { en, enTemplates } from '../../src/i18n/en';
import { UI_TEXT } from '../../src/i18n/ui';
import { PAGE_TOOLS, TOOLS, toolPath } from '../../src/lib/tools';
import { UNIT_PAIRS } from '../../src/lib/unit-pages';
import { ENGLISH_CONTEXT, respond } from '../../src/lib/helper';
import { helperContext } from '../../src/i18n/helper';
import { guideSlugsFor, guideTextFor, localesWithGuide } from '../../src/i18n/guides';
import { GUIDES, guideBySlug } from '../../src/lib/guides';
import { contentFor, pairContent } from '../../src/lib/content';
import { UNIT_PAIRS as UNIT_PAIRS_ALL } from '../../src/lib/unit-pages';
import { OPT_TEXT } from '../../src/i18n/options';
import { en as OPT_EN } from '../../src/i18n/options/en';
import { COMMUNITY_PAGES, communityStrings } from '../../src/lib/community-pages';
import { pageKey, pageKeysFor, pageStrings, pageTextFor, pairStrings, translationFor, unitStrings } from '../../src/i18n/pages';

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
      // A heading may have nothing before or after its highlighted word.
      if (!/HeadingBefore$|HeadingAfter$/.test(key)) expect(text.trim(), key).not.toBe('');
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
    for (const path of ['/about/', '/privacy/', '/terms/', '/how-it-works/']) expect(hasTranslations(path), path).toBe(true);
    expect(hasTranslations('/roadmap/')).toBe(false);
    // The guides list exists in the languages that have translated guides.
    expect(hasTranslations('/guides/')).toBe(true);
    // A pair page lists exactly the languages in which every sentence of it is translated.
    for (const pair of UNIT_PAIRS) {
      const have = OTHER_LOCALES.filter((l) => pairHasText(l.code, pair.slug)).length;
      expect(alternatesFor(`/${pair.slug}/`).length, pair.slug).toBe(have > 0 ? have + 1 : 0);
    }
    expect(alternatesFor('/roadmap/')).toEqual([]);
    expect(alternatesFor('/about/').length).toBe(10);
    const alts = alternatesFor('/mp4-to-mp3/');
    expect(alts.map((a) => a.hreflang).sort()).toEqual(['bn', 'de', 'en-US', 'es', 'fr', 'hi', 'id', 'pt-BR', 'ru', 'tr']);
    expect(alts.find((a) => a.hreflang === 'es')!.href).toBe('https://iduckconvert.com/es/mp4-to-mp3/');
    expect(alts.find((a) => a.hreflang === 'en-US')!.href).toBe('https://iduckconvert.com/mp4-to-mp3/');
  });
  it('the language menu keeps you on the same page, or sends you to that language home when it has no translation', () => {
    expect(languageLinks('/csv-to-json/').find((l) => l.locale.code === 'de')!.href).toBe('/de/csv-to-json/');
    expect(languageLinks('/about/').find((l) => l.locale.code === 'de')!.href).toBe('/de/about/');
    expect(languageLinks('/roadmap/').find((l) => l.locale.code === 'de')!.href).toBe('/de/');
    expect(languageLinks('/roadmap/').find((l) => l.locale.code === 'en')!.href).toBe('/');
  });
});

describe.each(MACHINE.map((l) => [l.code]))('%s helper', (code) => {
  const ctx = helperContext(code!);
  const mine = flat({ ...ctx.text, starters: undefined });
  const base = flat({ ...ENGLISH_CONTEXT.text, starters: undefined });

  it('has every sentence, none empty, with the same {placeholders} as English', () => {
    const keys = Object.keys(base).filter((k) => !k.startsWith('keywords') && !k.startsWith('labels'));
    for (const key of keys) {
      expect(mine[key], key).toBeDefined();
      expect(mine[key]!.trim(), key).not.toBe('');
      expect(holes(mine[key]!), key).toEqual(holes(base[key]!));
    }
    // A few words are spelled the same in some languages (Roadmap, international, Base N).
    const same = keys.filter((k) => mine[k] === base[k]);
    expect(same.length, same.join(', ')).toBeLessThanOrEqual(4);
  });
  it('labels every button the helper can show', () => {
    const english = new Set<string>(['Extract audio from a video', 'Make a GIF from a video', 'Open a CSV in Excel', '5 km in miles', '1250000 in words', 'Is my file safe?', 'Show it in every unit', 'Write it in international style', 'Write it in Indian style', '1250000 in international words', '1250000 in indian words', 'How do I use it?', 'Is my file uploaded?', 'How big a file can I use?']);
    expect(Object.keys(ctx.text.labels).sort()).toEqual([...english].sort());
    for (const s of ENGLISH_CONTEXT.text.starters) expect(ctx.text.labels[s], s).toBeDefined();
    for (const [k, v] of Object.entries(ctx.text.labels)) expect(v.trim(), k).not.toBe('');
  });
  it('knows every converter by its name in the language, and the language path', () => {
    for (const tool of TOOLS) expect(ctx.tools![tool.slug]?.name, tool.slug).toBe(toolText(code!, tool).name);
    expect(ctx.prefix).toBe(`/${LOCALES.find((l) => l.code === code)!.path}`);
  });
  it('still answers a sum, a converter name and the easy questions', () => {
    expect(respond('5 km to miles', ctx).answer?.big).toBe('3.106855961 mi');
    expect(respond('mp4 to mp3', ctx).tools[0]).toMatchObject({ slug: 'mp4-to-mp3', href: `${ctx.prefix}/mp4-to-mp3/`, name: toolText(code!, TOOLS.find((t) => t.slug === 'mp4-to-mp3')!).name });
    expect(respond('is it safe', ctx).text).toBe(ctx.text.replies.safe);
    expect(respond('', ctx).text).toBe(ctx.text.replies.empty);
    expect(respond('qqqqzzzz', ctx).tools).toHaveLength(0);
    // The follow-up works through the English message a button sends, and answers in the language.
    const first = respond('mp4 to mp3', ctx);
    expect(respond('How do I use it?', ctx, first.focus).steps?.[0]).toBe(toolText(code!, TOOLS.find((t) => t.slug === 'mp4-to-mp3')!).quick);
    expect(respond('How big a file can I use?', ctx, first.focus).text).toBe(ctx.text.replies.sizeAnswer);
  });
  it('understands words typed in the language', () => {
    const k = ctx.text.keywords;
    expect(respond(`${k.hello[0]}`, ctx).text).toBe(ctx.text.replies.hello);
    expect(respond(`${k.thanks[0]}`, ctx).text).toBe(ctx.text.replies.thanks);
    // A converter named in the language is found.
    const length = toolText(code!, TOOLS.find((t) => t.slug === 'length-converter')!).name;
    expect(respond(length.toLowerCase(), ctx).tools[0]?.slug).toBe('length-converter');
    // "5 km <in> <miles>" with the unit word in the language.
    const miles = k.units.find(([, english]) => english === 'miles')![0];
    const sum = `5 km ${k.connectors[0]} ${miles}`;
    expect(respond(sum, ctx).answer?.big, sum).toBe('3.106855961 mi');
    // "1250 <in> <words>" and "14 <in> <roman>" in the language.
    const wordsQ = `1250 ${k.connectors[0]} ${k.words[0]}`;
    expect(respond(wordsQ, ctx).answer?.big, wordsQ).toMatch(/thousand|lakh/i);
  });
});

describe('the English helper is untouched', () => {
  it('has no translated tools and keeps its own addresses', () => {
    expect(respond('mp4 to mp3').tools[0]?.href).toBe('/mp4-to-mp3/');
    expect(respond('hello').text).toBe(ENGLISH_CONTEXT.text.replies.hello);
  });
});

describe.each(MACHINE.map((l) => [l.code]))('%s guides', (code) => {
  const slugs = guideSlugsFor(code!);
  it('has every English guide', () => {
    expect([...slugs].sort()).toEqual(GUIDES.map((g) => g.slug).sort());
  });
  it('has translated guides, and only for guides that exist', () => {
    expect(slugs.length).toBeGreaterThan(0);
    for (const slug of slugs) expect(guideBySlug(slug), slug).toBeDefined();
  });
  it.each(slugs.map((s) => [s]))('%s matches the English guide piece by piece', (slug) => {
    const en = guideBySlug(slug!)!;
    const t = guideTextFor(code!, slug!)!;
    expect(t.steps, 'steps').toHaveLength(en.steps.length);
    expect(t.sections, 'sections').toHaveLength(en.sections.length);
    expect(t.faqs, 'faqs').toHaveLength(en.faqs.length);
    t.sections.forEach((s, i) => expect(s.paragraphs, `section ${i}`).toHaveLength(en.sections[i]!.paragraphs.length));
    const all = [t.title, t.description, t.intro, ...t.steps, ...t.sections.flatMap((s) => [s.heading, ...s.paragraphs]), ...t.faqs.flatMap((f) => [f.q, f.a])];
    for (const text of all) {
      expect(text.trim(), 'empty text').not.toBe('');
      expect(text, text.slice(0, 40)).not.toMatch(/\{\w+\}/);
    }
    // Nothing is left in English, and the sizes stay sensible for a search result.
    expect(t.title).not.toBe(en.title);
    expect(t.intro).not.toBe(en.intro);
    expect(t.title.length, 'title').toBeLessThanOrEqual(90);
    expect(t.description.length, 'description').toBeGreaterThanOrEqual(50);
    expect(t.description.length, 'description').toBeLessThanOrEqual(260);
    // The numbers in the steps survive translation (a size, a bit rate, a width).
    const digits = (s: string) => (s.match(/\d+/g) ?? []).filter((d) => d.length >= 3).sort();
    for (const [i, step] of en.steps.entries()) {
      for (const d of digits(step)) expect(t.steps[i], `step ${i + 1} keeps ${d}`).toContain(d);
    }
  });
});

describe('guide pages and hreflang', () => {
  it('a guide with translations lists exactly the languages that have it', () => {
    const slug = 'how-to-make-a-gif-from-a-video';
    const have = localesWithGuide(slug).length;
    expect(have).toBeGreaterThan(0);
    const alts = alternatesFor(`/guides/${slug}/`);
    expect(alts).toHaveLength(have + 1);
    expect(alts.some((a) => a.hreflang === 'en-US')).toBe(true);
    // A guide nobody has translated sends no hreflang at all.
    expect(alternatesFor('/guides/not-a-real-guide/')).toEqual([]);
  });
  it('the language menu sends a language without the guide to its guides list', () => {
    const links = languageLinks('/guides/not-translated-anywhere/');
    expect(links.find((l) => l.locale.code === 'es')!.href).toBe('/es/guides/');
  });
});

describe.each(MACHINE.map((l) => [l.code]))('%s converter page text', (code) => {
  const english = new Map<string, string>();
  for (const t of PAGE_TOOLS) for (const s of [...pageStrings(contentFor(t)), ...unitStrings(contentFor(t))]) english.set(pageKey(s), s);
  for (const p of UNIT_PAIRS_ALL) for (const s of pairStrings(pairContent(p))) english.set(pageKey(s), s);
  for (const p of COMMUNITY_PAGES) for (const s of communityStrings(p)) english.set(pageKey(s), s);
  const have = pageKeysFor(code!);

  it('translates only sentences that exist in English', () => {
    expect(have.filter((k) => !english.has(k))).toEqual([]);
  });
  it('keeps the numbers and names no placeholder', () => {
    for (const k of have) {
      const en = english.get(k)!;
      const tr = translationFor(code!, en)!;
      expect(tr.length, k).toBeGreaterThan(1);
      expect(tr, k).not.toMatch(/\{\w+\}/);
      // The small markup of src/lib/inline.ts must survive: the same [[values]], link targets, bold and code spans.
      expect(tr.match(/\[\[[\w-]+\]\]/g)?.sort(), `${k} values`).toEqual(en.match(/\[\[[\w-]+\]\]/g)?.sort());
      expect([...tr.matchAll(/\]\(([^)\s]+)\)/g)].map((m) => m[1]).sort(), `${k} links`).toEqual([...en.matchAll(/\]\(([^)\s]+)\)/g)].map((m) => m[1]).sort());
      expect(tr.split('**').length, `${k} bold`).toBe(en.split('**').length);
      expect(tr.split('`').length, `${k} code`).toBe(en.split('`').length);
      for (const n of en.match(/\d{3,}/g) ?? []) expect(tr.replace(/[\s,.’']/g, ''), `${k}: ${n}`).toContain(n.replace(/[\s,.’']/g, ''));
    }
  });
  it('shows a page only when every sentence of it is translated', () => {
    for (const t of PAGE_TOOLS) {
      const c = contentFor(t);
      const complete = pageStrings(c).every((s) => translationFor(code!, s) !== undefined);
      expect(pageTextFor(code!, c) !== undefined, t.slug).toBe(complete);
    }
  });
});

describe.each(MACHINE.map((l) => [l.code]))('%s converter page text is complete', (code) => {
  it('translates every sentence of every converter page', () => {
    const missing: string[] = [];
    for (const t of PAGE_TOOLS) {
      const c = contentFor(t);
      const gap = pageStrings(c).filter((s) => translationFor(code!, s) === undefined);
      if (gap.length) missing.push(`${t.slug}: ${gap.length} missing, first: ${gap[0]}`);
    }
    expect(missing).toEqual([]);
  });
});

describe.each(MACHINE.map((l) => [l.code]))('%s long community pages (About, Privacy, Terms, How it works)', (code) => {
  it('has every sentence translated', () => {
    const missing: string[] = [];
    for (const p of COMMUNITY_PAGES) {
      const gap = communityStrings(p).filter((x) => translationFor(code!, x) === undefined);
      if (gap.length) missing.push(`${p.slug}: ${gap.length} missing, first: ${gap[0]}`);
    }
    expect(missing).toEqual([]);
  });
});

describe.each(MACHINE.map((l) => [l.code]))('%s words inside the converters', (code) => {
  const mine = OPT_TEXT[code!]! as Record<string, string>;
  const base = OPT_EN as Record<string, string>;
  const holes = (t: string): string[] => [...t.matchAll(/\{(\w+)\}/g)].map((m) => m[1]!).sort();
  it('has every key, none empty', () => {
    expect(Object.keys(mine).sort()).toEqual(Object.keys(base).sort());
    for (const [k, v] of Object.entries(mine)) expect(v.trim().length, k).toBeGreaterThan(0);
  });
  it('keeps the {placeholders} (unitsAll may leave out {title})', () => {
    for (const [k, en] of Object.entries(base)) {
      const want = k === 'unitsAll' ? holes(en).filter((h) => h !== 'title') : holes(en);
      expect(holes(mine[k]!), k).toEqual(want);
    }
  });
  it('keeps the example values', () => {
    for (const [k, en] of Object.entries(base)) for (const n of en.match(/\d{3,}/g) ?? []) expect(mine[k]!, `${k}: ${n}`).toContain(n);
  });
  it('is not English: almost every string differs from the English one', () => {
    const same = Object.keys(base).filter((k) => mine[k] === base[k]);
    expect(same.length, same.join(', ')).toBeLessThan(Object.keys(base).length * 0.1);
  });
});
