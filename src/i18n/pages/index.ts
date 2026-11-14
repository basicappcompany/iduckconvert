import { LOCALES } from '../locales';
import type { PageContent } from '../../lib/content';
import { pageKey } from './key';

export { pageKey, pageStrings } from './key';

/**
 * Translated page text for the converter pages (the steps, the explanation and the questions under each converter).
 * The English text is built from patterns in src/lib/content.ts, so a translation is looked up by the English
 * string itself: src/i18n/pages/<language path>/<n>.ts each `export default { '<key>': 'translation' }`, where the
 * key is `pageKey(english)`. Change an English sentence and its key changes, so a unit test names every string
 * that needs translating again instead of silently showing old text. A page is shown in a language only when
 * every one of its strings has a translation, so a language never mixes English into a translated page.
 */
const files = import.meta.glob<{ default: Record<string, string> }>('./*/*.ts', { eager: true });

const BY_CODE: Record<string, Record<string, string>> = {};
for (const [file, mod] of Object.entries(files)) {
  const folder = /^\.\/([^/]+)\//.exec(file)?.[1];
  const locale = LOCALES.find((l) => l.path === folder);
  if (!locale) continue;
  BY_CODE[locale.code] = { ...(BY_CODE[locale.code] ?? {}), ...mod.default };
}

export const translationFor = (code: string, english: string): string | undefined => BY_CODE[code]?.[pageKey(english)];

/** The number of translated sentences in a language (for tests). */
export const pageKeysFor = (code: string): string[] => Object.keys(BY_CODE[code] ?? {});

/** The page text in a language, or nothing when any sentence of it is not translated yet. */
export function pageTextFor(code: string, c: PageContent): PageContent | undefined {
  const t = (s: string): string | undefined => translationFor(code, s);
  const steps = c.steps.map(t);
  const faqs = c.faqs.map((f) => ({ q: t(f.q), a: t(f.a) }));
  const sections = c.sections.map((s) => ({ h: t(s.h), p: t(s.p) }));
  const about = c.sections.length === 0 && c.about ? t(c.about) : '';
  if (steps.some((s) => s === undefined) || faqs.some((f) => f.q === undefined || f.a === undefined) || sections.some((s) => s.h === undefined || s.p === undefined) || about === undefined) return undefined;
  return { ...c, steps: steps as string[], faqs: faqs as PageContent['faqs'], sections: sections as PageContent['sections'], about: (about as string) ?? '' };
}
