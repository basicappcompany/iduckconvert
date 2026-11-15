/**
 * Page sentences carry a little markup so a translation can move words, links and emphasis freely:
 * **bold**, `code`, [label](/path/) and [[name]] (a value filled in at build time). This turns a sentence into
 * plain tokens the page renders as real elements, so no HTML string is ever built from text.
 */
export type Inline = { t: 'text'; s: string } | { t: 'b'; s: string } | { t: 'code'; s: string } | { t: 'a'; s: string; href: string };

export function fillVars(s: string, vars: Record<string, string | number>): string {
  return s.replace(/\[\[([\w-]+)\]\]/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
}

export function parseInline(s: string): Inline[] {
  const out: Inline[] = [];
  const re = /\*\*([^*]+)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  for (const m of s.matchAll(re)) {
    if (m.index > last) out.push({ t: 'text', s: s.slice(last, m.index) });
    if (m[1] !== undefined) out.push({ t: 'b', s: m[1] });
    else if (m[2] !== undefined) out.push({ t: 'code', s: m[2] });
    else out.push({ t: 'a', s: m[3]!, href: m[4]! });
    last = m.index + m[0].length;
  }
  if (last < s.length) out.push({ t: 'text', s: s.slice(last) });
  return out;
}

/** The sentence without its markup, for titles and descriptions. */
export const plainText = (s: string): string => parseInline(s).map((i) => i.s).join('');
