import type { PageContent } from '../../lib/content';

/** A short stable key for an English sentence (djb2, base 36). */
export function pageKey(english: string): string {
  let h = 5381;
  for (let i = 0; i < english.length; i++) h = ((h << 5) + h + english.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

/** The sentences of a page that a translation has to cover (the short answer is translated with the tool). */
export function pageStrings(c: Pick<PageContent, 'about' | 'steps' | 'faqs' | 'sections'>): string[] {
  const list = [...c.steps, ...c.faqs.flatMap((f) => [f.q, f.a]), ...c.sections.flatMap((s) => [s.h, s.p])];
  if (c.sections.length === 0 && c.about) list.push(c.about);
  return list;
}

/** The extra sentences of a unit page: the exact factor and where it comes from. */
export function unitStrings(c: Pick<PageContent, 'unit'>): string[] {
  return c.unit ? [c.unit.factor, c.unit.source.text] : [];
}

/** Everything a popular pair page (cm to inches) needs translated: the page text, the short answer and the unit facts. */
export function pairStrings(c: Pick<PageContent, 'about' | 'steps' | 'faqs' | 'sections' | 'answer' | 'unit'>): string[] {
  return [c.answer, ...pageStrings(c), ...unitStrings(c)];
}
