/**
 * "Ask the helper": a small keyword matcher, not an AI. Nothing is sent anywhere. It reads a plain-words
 * question, finds the converters that fit and answers a few common questions about the site.
 */
import { TOOLS, hrefFor, searchTools, type ToolLink } from './tools';

export interface HelperReply {
  text: string;
  tools: { slug: string; href: string; emoji: string; name: string; summary: string }[];
  links: { href: string; label: string }[];
}

export interface HelperContext {
  text: {
    greeting: string;
    starters: string[];
    ui: { log: string; openIt: string; typing: string; things: string; describe: string; placeholder: string; send: string; footnote: string; understands: string };
  };
}

export const STARTERS = ['Extract audio from a video', 'Make a GIF from a video', 'Open a CSV in Excel', 'Convert kilograms to pounds', 'Write a number in words'];

export const ENGLISH_CONTEXT: HelperContext = {
  text: {
    greeting: 'Quack! Tell me what you want to convert, in plain words, and I will point you to the right converter.',
    starters: STARTERS,
    ui: {
      log: 'Conversation with the helper',
      openIt: 'Open it',
      typing: 'The helper is typing',
      things: 'Things to try',
      describe: 'Describe what you want to convert',
      placeholder: 'For example: mp4 to mp3',
      send: 'Send',
      footnote: 'The helper is a keyword matcher, not an AI. It sends nothing anywhere.',
      understands: '',
    },
  },
};

const card = (t: ToolLink) => ({ slug: t.slug, href: hrefFor(t), emoji: t.emoji, name: t.name, summary: t.summary });
const reply = (text: string, tools: ToolLink[] = [], links: HelperReply['links'] = []): HelperReply => ({ text, tools: tools.map(card), links });

const has = (q: string, ...words: string[]) => words.some((w) => new RegExp(`\\b${w}\\b`).test(q));

/** Words people use that our tool keywords do not, mapped to words that match. */
const SYNONYMS: [RegExp, string][] = [
  [/\b(rip|extract|take out|pull out)\b.*\b(audio|sound|music)\b|\bsound from\b|\baudio from\b/, 'video to mp3'],
  [/\bmovie|clip\b/, 'video'],
  [/\bspreadsheet|excel|xls\b/, 'excel'],
  [/\bkg|kilogram|pounds?\b/, 'weight'],
  [/\bmiles?|kilometres?|kilometers?|feet|inches\b/, 'length'],
  [/\bbigha|gaj|plot\b/, 'indian land'],
  [/\blakh|crore|cheque|check amount\b/, 'number to words'],
  [/\btimezone|time zone|ist|utc|pst|est|gmt\b/, 'time zone'],
  [/\bsmaller|reduce|shrink|too big\b/, 'compress'],
  [/\bcut|shorten\b/, 'trim'],
];

/** `ctx` is accepted so a translated helper can be added later; the matching is English only for now. */
export function respond(message: string, ctx?: HelperContext): HelperReply {
  void ctx;
  const q = message.toLowerCase().trim();
  if (!q) return reply('Type what you want to convert, for example "mp4 to mp3".');

  if (has(q, 'hi', 'hello', 'hey', 'quack')) return reply('Quack! What would you like to convert?');
  if (has(q, 'safe', 'private', 'privacy', 'upload', 'uploaded', 'secure')) {
    return reply('Every converter runs in your browser, so your files are not uploaded. The audio and video engine is downloaded once from a public CDN, but your files are not part of that.', [], [{ href: '/privacy/', label: 'Privacy policy' }, { href: '/about/', label: 'About' }]);
  }
  if (has(q, 'feedback', 'bug', 'broken', 'problem', 'report')) return reply('Sorry something went wrong. A short note helps most: say which converter and what you expected.', [], [{ href: '/feedback/', label: 'Send feedback' }]);
  if (has(q, 'request', 'suggest', 'idea', 'missing', 'wish')) return reply('Tell us what you wish existed. Requests decide what gets built next.', [], [{ href: '/request/', label: 'Request a feature' }, { href: '/roadmap/', label: 'Roadmap' }]);
  if (has(q, 'donate', 'tip', 'support', 'pay', 'price', 'cost', 'free')) return reply('It is free: no sign-up, no watermark and no ads. Tips are the only way to support it.', [], [{ href: '/donate/', label: 'Donate' }]);
  if (has(q, 'dark', 'theme', 'light', 'settings')) return reply('You can change the theme with the moon button at the top, or on the Settings page.', [], [{ href: '/settings/', label: 'Settings' }]);

  // Work that lives on a sister site.
  if (/\bpdf\b/.test(q)) {
    return reply('PDF conversions live on iDuckPDF, a sister site that also runs in your browser.', [], [{ href: 'https://iduckpdf.com/', label: 'Open iDuckPDF' }]);
  }
  if (/\b(heic|heif|avif|svg|bmp|jpg|jpeg|png|ico|favicon|photo|picture|image)\b/.test(q) && !/tiff?|webp/.test(q)) {
    const link = TOOLS.filter((t) => t.site === 'iDuckIMG' && searchTools(q, [t]).length > 0);
    return reply('Picture conversions like that are on iDuckIMG, a sister site that also runs in your browser.', link, [{ href: 'https://iduckimg.com/', label: 'Open iDuckIMG' }]);
  }

  let search = q;
  for (const [pattern, add] of SYNONYMS) if (pattern.test(q)) search += ` ${add}`;
  let found = searchTools(search.replace(/\b(convert|change|turn|make|how|do|i|to|a|an|the|my|into|from|can|you|want|need|please|file|files)\b/g, ' ').trim() || search);
  // "mp4 to mp3": try the exact slug first.
  const slugGuess = /([a-z0-9]+)\s+(?:to|into|2)\s+([a-z0-9]+)/.exec(q);
  if (slugGuess) {
    const exact = TOOLS.find((t) => t.slug === `${slugGuess[1]}-to-${slugGuess[2]}`);
    if (exact) found = [exact, ...found.filter((t) => t !== exact)];
  }
  if (found.length === 0) {
    return reply('I could not find a converter for that. Try the format names, like "mp4 to mp3" or "csv to json", or browse them all.', [], [{ href: '/converters/', label: 'All converters' }, { href: '/request/', label: 'Request one' }]);
  }
  const top = found.slice(0, 3);
  return reply(top.length === 1 ? 'This one should do it:' : 'These look like a match:', top, [{ href: '/converters/', label: 'All converters' }]);
}
