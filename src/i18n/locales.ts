/**
 * The language registry: the one place that says which languages exist.
 *
 * The ten languages are the ones iDuckPDF and iDuckIMG publish, except that English is one language here: English, Hindi, Bengali,
 * Portuguese (Brazil), Indonesian, Russian, German, Spanish, French and Turkish. All read left to right. English
 * lives at the root; every other language lives under its own path (/es/, /pt-br/, ...).
 *
 * Phase 1 (this) translates the page chrome, the home page, the heading, short answer and trust line of every
 * converter page, the shared file controls and the run buttons. The long explanations, the how-to guides, the helper,
 * the unit pair pages and the community and legal pages stay English for now, and the translated pages say so.
 *
 * `status`: 'machine' means translated by a machine and published with a visible label; a person has not yet read it.
 * A locale that is 'planned' is left out of hreflang and the sitemap, so it is never indexed with English text under
 * a foreign address.
 */
export type LocaleStatus = 'machine' | 'reviewed' | 'planned';

export interface LocaleInfo {
  /** The code used in code: en, en-GB, hi, pt-BR... */
  code: string;
  /** The language tag for hreflang, <html lang> and the sitemap: en-US, en-GB, hi, pt-BR... */
  hreflang: string;
  /** The URL path segment: en has none (root); others are /es/, /pt-br/... */
  path: string;
  /** English name, for people maintaining the site. */
  name: string;
  /** The name in its own language, shown in the language menu. */
  native: string;
  /** Open Graph locale, for example pt_BR. */
  og: string;
  status: LocaleStatus;
}

export const DEFAULT_LOCALE = 'en';

export const LOCALES: readonly LocaleInfo[] = [
  { code: 'en', hreflang: 'en-US', path: '', name: 'English', native: 'English', og: 'en_US', status: 'reviewed' },
  { code: 'hi', hreflang: 'hi', path: 'hi', name: 'Hindi', native: 'हिन्दी', og: 'hi_IN', status: 'machine' },
  { code: 'bn', hreflang: 'bn', path: 'bn', name: 'Bengali', native: 'বাংলা', og: 'bn_BD', status: 'machine' },
  { code: 'pt-BR', hreflang: 'pt-BR', path: 'pt-br', name: 'Portuguese (Brazil)', native: 'Português (Brasil)', og: 'pt_BR', status: 'machine' },
  { code: 'id', hreflang: 'id', path: 'id', name: 'Indonesian', native: 'Bahasa Indonesia', og: 'id_ID', status: 'machine' },
  { code: 'ru', hreflang: 'ru', path: 'ru', name: 'Russian', native: 'Русский', og: 'ru_RU', status: 'machine' },
  { code: 'de', hreflang: 'de', path: 'de', name: 'German', native: 'Deutsch', og: 'de_DE', status: 'machine' },
  { code: 'es', hreflang: 'es', path: 'es', name: 'Spanish', native: 'Español', og: 'es_ES', status: 'machine' },
  { code: 'fr', hreflang: 'fr', path: 'fr', name: 'French', native: 'Français', og: 'fr_FR', status: 'machine' },
  { code: 'tr', hreflang: 'tr', path: 'tr', name: 'Turkish', native: 'Türkçe', og: 'tr_TR', status: 'machine' },
];

/** The languages that get their own pages: every one except English. */
export const OTHER_LOCALES: readonly LocaleInfo[] = LOCALES.filter((l) => l.code !== DEFAULT_LOCALE && l.status !== 'planned');

export function localeByCode(code: string): LocaleInfo {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0]!;
}

export function localeByPath(segment: string): LocaleInfo | undefined {
  return OTHER_LOCALES.find((l) => l.path === segment);
}

/** /compress-image/ in Spanish -> /es/compress-image/. English paths are unchanged. */
export function localePath(code: string, path: string): string {
  const info = localeByCode(code);
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (!info.path) return clean;
  return clean === '/' ? `/${info.path}/` : `/${info.path}${clean}`;
}

/** /es/compress-image/ -> { locale: es, rest: /compress-image/ }. Anything else is English as it is. */
export function splitLocalePath(pathname: string): { locale: LocaleInfo; rest: string } {
  const withSlash = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const m = /^\/([^/]+)(\/.*)$/.exec(withSlash);
  const found = m ? localeByPath(m[1]!) : undefined;
  if (found && m) return { locale: found, rest: m[2]! };
  return { locale: localeByCode(DEFAULT_LOCALE), rest: withSlash };
}
