import { PAGE_TOOLS, TOOLS, toolPath, type ToolLink } from '../lib/tools';
import { SITE_URL } from '../lib/seo';
import { en } from './en';
import { LOCALES, localePath, type LocaleInfo } from './locales';
import { uiFor } from './ui';
import type { Dict, LocaleData, ToolText, UiText } from './types';
import { guideSlugsFor, hasGuides, localesWithGuide } from './guides';
import { pairTextFor } from './pages';
import { UNIT_PAIRS } from '../lib/unit-pages';
import { pairContent } from '../lib/content';
import { bn } from './bn';
import { de } from './de';
import { es } from './es';
import { fr } from './fr';
import { hi } from './hi';
import { id } from './id';
import { ptBR } from './pt-br';
import { ru } from './ru';
import { tr } from './tr';

export { DEFAULT_LOCALE, LOCALES, OTHER_LOCALES, localeByCode, localeByPath, localePath, splitLocalePath, type LocaleInfo } from './locales';
export type { Dict, LocaleData, ToolText, ToolTemplates, UiText } from './types';

/** Every translated language's text, by locale code. English is built from the tool list itself. */
export const LOCALE_DATA: Readonly<Record<string, LocaleData>> = {
  hi,
  bn,
  'pt-BR': ptBR,
  id,
  ru,
  de,
  es,
  fr,
  tr,
};

export function dictFor(code: string): Dict {
  return LOCALE_DATA[code]?.dict ?? en;
}

export function uiTextFor(code: string): UiText {
  return uiFor(code);
}

/** Fill {placeholders}: format('All {n} converters', { n: 24 }). */
export function format(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (whole, key: string) => (key in values ? String(values[key]) : whole));
}

/** A tool made from a pattern: an audio or video pair such as MP3 to WAV (not the one-off tools with their own text). */
function isPair(tool: ToolLink): boolean {
  return (tool.kind === 'audio' || tool.kind === 'video') && tool.slug === `${tool.from}-to-${tool.to}` && tool.slug !== 'mp4-to-mp3';
}

/** The run button's label on a tool page, in a language. */
export function runLabelFor(code: string, tool: ToolLink): string {
  const ui = uiFor(code);
  if (tool.slug === 'video-to-mp3') return ui.runExtractMp3;
  if (tool.kind === 'video-gif') return ui.runMakeGif;
  if (tool.kind === 'video-compress') return ui.runCompress;
  if (tool.kind === 'video-trim') return ui.runTrim;
  return ui.runConvert;
}

/** Name, summary and quick answer of a tool in a language, falling back to English. */
export function toolText(code: string, tool: ToolLink): ToolText {
  const english: ToolText = { name: tool.name, summary: tool.summary, quick: tool.quick };
  if (code === 'en') return english;
  const data = LOCALE_DATA[code];
  if (!data) return english;
  const own = data.tools[tool.slug];
  if (own) return own;
  const run = runLabelFor(code, tool);
  const t = data.templates;
  if (isPair(tool)) {
    const names = { f: tool.name.split(' to ')[0]!, t: tool.name.split(' to ')[1]!, run: `"${run}"` };
    const audio = tool.kind === 'audio';
    return {
      name: format(t.pairName, names),
      summary: format(audio ? t.audioSummary : t.videoSummary, names),
      quick: format(audio ? t.audioQuick : t.videoQuick, names),
    };
  }
  if (tool.kind === 'link') {
    const v = { name: tool.name, site: tool.site ?? '' };
    return { name: tool.name, summary: format(t.linkSummary, v), quick: format(t.linkQuick, v) };
  }
  return english;
}

export interface Alternate {
  /** The hreflang value: en-US, hi, pt-BR... */
  hreflang: string;
  href: string;
  locale: LocaleInfo;
}

/** The English paths that have a translated version in every published language. */
/** The long community pages that every language has (src/lib/community-pages.ts). */
export const COMMUNITY_TRANSLATED = ['/about/', '/privacy/', '/terms/', '/how-it-works/'] as const;
const TRANSLATED_PATHS = new Set<string>(['/', '/chat/', ...COMMUNITY_TRANSLATED, ...PAGE_TOOLS.map((t) => toolPath(t.slug))]);

const PAIRS = new Map(UNIT_PAIRS.map((p) => [p.slug, p]));
const pairDone = new Map<string, boolean>();

/** True when a popular pair page (cm to inches) is fully translated into a language. */
export function pairHasText(code: string, slug: string): boolean {
  const key = `${code}/${slug}`;
  let done = pairDone.get(key);
  if (done === undefined) {
    const pair = PAIRS.get(slug);
    done = pair !== undefined && pairTextFor(code, pairContent(pair)) !== undefined;
    pairDone.set(key, done);
  }
  return done;
}

/** The language codes (English included) that have a version of this English path. Empty when only English has it. */
function codesFor(englishPath: string): string[] {
  const published = LOCALES.filter((l) => l.status !== 'planned').map((l) => l.code);
  if (TRANSLATED_PATHS.has(englishPath)) return published;
  const pairSlug = /^\/([^/]+)\/$/.exec(englishPath)?.[1];
  if (pairSlug && PAIRS.has(pairSlug)) {
    const have = published.filter((c) => c === 'en' || pairHasText(c, pairSlug));
    return have.length > 1 ? have : [];
  }
  if (englishPath === '/guides/') return published.filter((c) => c === 'en' || hasGuides(c));
  const guide = /^\/guides\/([^/]+)\/$/.exec(englishPath)?.[1];
  if (guide) {
    const have = new Set(['en', ...localesWithGuide(guide)]);
    return have.size > 1 ? published.filter((c) => have.has(c)) : [];
  }
  return [];
}

/** True when this English path has a translated version in at least one other language. */
export function hasTranslations(englishPath: string): boolean {
  return codesFor(englishPath).length > 1;
}

/** Every language version of an English path, as absolute URLs, or nothing when it has none. */
export function alternatesFor(englishPath: string): Alternate[] {
  const codes = codesFor(englishPath);
  if (codes.length < 2) return [];
  return LOCALES.filter((l) => codes.includes(l.code)).map((locale) => ({
    hreflang: locale.hreflang,
    href: `${SITE_URL}${localePath(locale.code, englishPath)}`,
    locale,
  }));
}

/** Where the language menu sends the visitor: the same page in each language, or that language's closest page (its guides, else its home page). */
export function languageLinks(englishPath: string): { locale: LocaleInfo; href: string }[] {
  const codes = codesFor(englishPath);
  return LOCALES.filter((l) => l.status !== 'planned').map((locale) => {
    if (codes.includes(locale.code)) return { locale, href: localePath(locale.code, englishPath) };
    if (englishPath.startsWith('/guides/') && hasGuides(locale.code)) return { locale, href: localePath(locale.code, '/guides/') };
    return { locale, href: localePath(locale.code, '/') };
  });
}

export { guideSlugsFor, hasGuides };

/** Every tool, for the checks that make sure no language misses one. */
export const ALL_TOOLS = TOOLS;
