import { LOCALES } from '../locales';
import type { GuideSet, GuideText } from './types';

export type { GuideSet, GuideText } from './types';

/**
 * Translated guides live in src/i18n/guides/<language path>/<n>.ts (for example es/1.ts), each file
 * `export default { 'english-slug': { title, description, intro, steps, sections, faqs }, ... }`. They are found
 * by folder, so a new file needs no registration. A language that has not translated a guide yet simply has
 * no page for it, and sends no hreflang for it.
 */
const files = import.meta.glob<{ default: GuideSet }>('./*/*.ts', { eager: true });

const BY_CODE: Record<string, GuideSet> = {};
for (const [file, mod] of Object.entries(files)) {
  const folder = /^\.\/([^/]+)\//.exec(file)?.[1];
  const locale = LOCALES.find((l) => l.path === folder);
  if (!locale) continue;
  BY_CODE[locale.code] = { ...(BY_CODE[locale.code] ?? {}), ...mod.default };
}

/** A guide in a language, or nothing when it has not been translated yet. */
export function guideTextFor(code: string, slug: string): GuideText | undefined {
  return BY_CODE[code]?.[slug];
}

/** The English slugs of the guides translated into a language. */
export function guideSlugsFor(code: string): string[] {
  return Object.keys(BY_CODE[code] ?? {});
}

export const hasGuides = (code: string): boolean => guideSlugsFor(code).length > 0;

/** The language codes that have this guide, English not included. */
export function localesWithGuide(slug: string): string[] {
  return Object.keys(BY_CODE).filter((code) => slug in (BY_CODE[code] ?? {}));
}
