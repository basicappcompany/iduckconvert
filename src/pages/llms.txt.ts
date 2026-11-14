/** /llms.txt: a short plain-text summary of the site for AI answer engines. Generated from the same lists as the pages. */
import type { APIRoute } from 'astro';
import { GUIDES, guidePath } from '../lib/guides';
import { PAGE_TOOLS, TOOLS } from '../lib/tools';
import { UNIT_PAIRS } from '../lib/unit-pages';
import { LAST_REVIEWED } from '../lib/site';

const base = 'https://iduckconvert.com';

export const GET: APIRoute = () => {
  const lines: string[] = [
    '# iDuckConvert',
    '',
    `> Free converters that run in your browser: audio, video, spreadsheets and data files, units, numbers, text and time zones. Files are not uploaded, and there is no sign-up, no watermark and no ads. Made by Basic App Company. Last reviewed ${LAST_REVIEWED}.`,
    '',
    `${PAGE_TOOLS.length} converters live on this site. ${TOOLS.length - PAGE_TOOLS.length} picture tools and all PDF conversions live on sister sites: https://iduckimg.com and https://iduckpdf.com.`,
    '',
    '## Converters',
    ...PAGE_TOOLS.map((t) => `- [${t.name}](${base}/${t.slug}/): ${t.summary}`),
    '',
    '## Popular unit conversions',
    ...UNIT_PAIRS.map((p) => `- [${p.slug.replace(/-/g, ' ')}](${base}/${p.slug}/): exact factor and a table of common values`),
    '',
    '## How-to guides',
    ...GUIDES.map((g) => `- [${g.title}](${base}${guidePath(g.slug)}): ${g.description}`),
    '',
    '## Languages',
    `- The home page and every converter are also available in Hindi, Bengali, Portuguese (Brazil), Indonesian, Russian, German, Spanish, French and Turkish, for example ${base}/es/mp4-to-mp3/. The translations are machine-made and not yet reviewed by a person.`,
    '',
    '## About',
    `- [How our converters work](${base}/how-it-works/): which engines run, which exact versions, and what is loaded from where`,
    `- [About](${base}/about/)`,
    `- [Privacy](${base}/privacy/)`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
