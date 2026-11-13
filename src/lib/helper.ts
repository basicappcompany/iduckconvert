/**
 * "Ask the helper". It is not an AI and sends nothing anywhere: a keyword matcher that also does the small jobs itself.
 * It can answer "5 km in miles", "1250 in words", "ff to decimal" and "2026 in roman" right in the chat, it finds the
 * converter that fits a plain-words request, and it remembers the converter it just suggested so a follow-up such as
 * "is it uploaded?" or "will the quality drop?" is answered from that converter's own questions and steps.
 */
import { contentFor } from './content';
import { TOOLS, hrefFor, searchTools, toolBySlug, type ToolLink } from './tools';
import { UNIT_SETS, convertUnit, formatNumber, type UnitSet } from '../convert/units';
import { fromRoman, numberToWords, parseBase, formatBase, toRoman } from '../convert/numbers';

export interface HelperReply {
  text: string;
  tools: { slug: string; href: string; emoji: string; name: string; summary: string }[];
  links: { href: string; label: string }[];
  /** A computed answer shown big, such as "3.10686 mi". */
  answer?: { big: string; small?: string };
  steps?: string[];
  /** Buttons that send a follow-up question. */
  followups: string[];
  /** The converter this reply is about, so the next question can refer to it. */
  focus?: string;
}

export interface HelperContext {
  text: {
    greeting: string;
    starters: string[];
    ui: { log: string; openIt: string; typing: string; things: string; describe: string; placeholder: string; send: string; footnote: string; understands: string; clear: string };
  };
}

export const STARTERS = ['Extract audio from a video', 'Make a GIF from a video', 'Open a CSV in Excel', '5 km in miles', '1250000 in words', 'Is my file safe?'];

export const ENGLISH_CONTEXT: HelperContext = {
  text: {
    greeting: 'Quack! I am the iDuckConvert helper. Tell me what you want to convert, or ask me a quick one like "5 km in miles" or "1250 in words" and I will work it out right here.',
    starters: STARTERS,
    ui: {
      log: 'Conversation with the helper',
      openIt: 'Open it',
      typing: 'The helper is typing',
      things: 'Things to try',
      describe: 'Ask the helper',
      placeholder: 'Try "mp4 to mp3" or "72 f in c"',
      send: 'Send',
      footnote: 'The helper matches your words to converters and does small sums itself. It is not an AI and never sees your files.',
      understands: '',
      clear: 'Start over',
    },
  },
};

const card = (t: ToolLink) => ({ slug: t.slug, href: hrefFor(t), emoji: t.emoji, name: t.name, summary: t.summary });
const reply = (text: string, extra: Partial<HelperReply> = {}): HelperReply => ({ text, tools: [], links: [], followups: [], ...extra });

const has = (q: string, ...words: string[]) => words.some((w) => new RegExp(`\\b${w}\\b`).test(q));
const STOP = new Set(['convert', 'change', 'turn', 'make', 'how', 'do', 'does', 'did', 'i', 'to', 'a', 'an', 'the', 'my', 'into', 'from', 'can', 'you', 'want', 'need', 'please', 'file', 'files', 'is', 'it', 'what', 'about', 'and', 'or', 'will', 'this', 'that', 'for', 'of', 'in', 'on', 'with', 'be', 'are', 'there']);
const words = (s: string): string[] => s.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 2 && !STOP.has(w));

// ---------- small jobs the helper does itself ----------
const num = '(-?\\d[\\d,]*(?:\\.\\d+)?)';

let aliasMap: Map<string, { set: UnitSet; key: string; id: string }[]> | null = null;

/** Every way people write a unit: its id, its symbol, its name and a plural. */
function aliases(): Map<string, { set: UnitSet; key: string; id: string }[]> {
  if (aliasMap) return aliasMap;
  const map = new Map<string, { set: UnitSet; key: string; id: string }[]>();
  const add = (alias: string, entry: { set: UnitSet; key: string; id: string }) => {
    const a = alias.toLowerCase().replace(/\s+/g, ' ').trim();
    if (!a) return;
    map.set(a, [...(map.get(a) ?? []), entry]);
  };
  for (const [key, set] of Object.entries(UNIT_SETS)) {
    for (const u of set.units) {
      const entry = { set, key, id: u.id };
      const name = u.name.toLowerCase().replace(/\s*\(.*\)/, '');
      for (const a of [u.id, u.symbol, name, `${name}s`, name.replace('metre', 'meter'), `${name.replace('metre', 'meter')}s`]) add(a, entry);
    }
  }
  // Words people use that the tables do not spell out.
  const extra: [string, string, string][] = [
    ['weight', 'lb', 'lbs'], ['weight', 'lb', 'pounds'], ['weight', 'lb', 'pound'], ['weight', 'oz', 'ounces'], ['weight', 'kg', 'kilos'], ['weight', 'kg', 'kilo'], ['weight', 'kg', 'kgs'],
    ['length', 'mi', 'miles'], ['length', 'mi', 'mile'], ['length', 'ft', 'feet'], ['length', 'ft', 'foot'], ['length', 'in', 'inches'], ['length', 'in', 'inch'], ['length', 'km', 'kms'], ['length', 'km', 'kilometers'], ['length', 'km', 'kilometres'], ['length', 'm', 'meters'], ['length', 'm', 'metres'],
    ['temperature', 'c', 'celsius'], ['temperature', 'c', 'centigrade'], ['temperature', 'f', 'fahrenheit'], ['temperature', 'k', 'kelvin'], ['temperature', 'c', 'deg c'], ['temperature', 'f', 'deg f'],
    ['speed', 'kmh', 'kph'], ['speed', 'kmh', 'km/hr'], ['speed', 'mph', 'miles per hour'], ['speed', 'kn', 'knots'],
    ['volume', 'l', 'liters'], ['volume', 'l', 'litres'], ['volume', 'l', 'liter'], ['volume', 'l', 'litre'], ['volume', 'gal', 'gallons'], ['volume', 'gal', 'gallon'], ['volume', 'cup', 'cups'],
    ['area', 'sqft', 'sq ft'], ['area', 'sqft', 'square feet'], ['area', 'sqft', 'sqft'], ['area', 'sqm', 'sq m'], ['area', 'acre', 'acres'], ['area', 'ha', 'hectares'],
    ['data', 'gb', 'gigabytes'], ['data', 'mb', 'megabytes'], ['data', 'kb', 'kilobytes'], ['data', 'tb', 'terabytes'],
    ['time', 'h', 'hours'], ['time', 'h', 'hrs'], ['time', 'min', 'minutes'], ['time', 'min', 'mins'], ['time', 's', 'seconds'], ['time', 'd', 'days'],
    ['indian-land', 'sqyd', 'gaj'], ['indian-land', 'bigha-up', 'bigha'], ['indian-land', 'sqft', 'sq ft'], ['indian-land', 'acre', 'acres'],
  ];
  for (const [key, id, alias] of extra) {
    const set = UNIT_SETS[key];
    if (set) add(alias, { set, key, id });
  }
  aliasMap = map;
  return map;
}

function unitAnswer(q: string): HelperReply | null {
  const m = new RegExp(`${num}\\s*([a-z°/²³ ]{1,30}?)\\s+(?:to|in|into|as|=|->)\\s+([a-z°/²³ ]{1,30})$`, 'i').exec(q.replace(/\?$/, '').trim());
  if (!m) return null;
  const value = Number(m[1]!.replace(/,/g, ''));
  if (!Number.isFinite(value)) return null;
  const from = aliases().get(m[2]!.trim().toLowerCase().replace(/^degrees? /, '').replace(/^deg /, 'deg '));
  const to = aliases().get(m[3]!.trim().toLowerCase().replace(/^degrees? /, '').replace(/^deg /, 'deg '));
  if (!from || !to) return null;
  // Both words must belong to the same table: "m" is a metre in length but "mi" is a mile.
  for (const f of from) {
    const t = to.find((x) => x.key === f.key);
    if (!t) continue;
    const result = convertUnit(f.set, f.id, t.id, value);
    if (!Number.isFinite(result)) continue;
    const fu = f.set.units.find((u) => u.id === f.id)!;
    const tu = f.set.units.find((u) => u.id === t.id)!;
    const tool = TOOLS.find((x) => x.units === f.key);
    return reply(`${formatNumber(value)} ${fu.symbol} is:`, {
      answer: { big: `${formatNumber(result)} ${tu.symbol}`, ...(f.set.note ? { small: f.set.note } : {}) },
      tools: tool ? [card(tool)] : [],
      followups: tool ? ['Show it in every unit'] : [],
      ...(tool ? { focus: tool.slug } : {}),
    });
  }
  return null;
}

function wordsAnswer(q: string): HelperReply | null {
  const m = new RegExp(`${num}\\s*(?:in|to|as)\\s*(indian |international )?words?(?: (?:in )?(indian|international))?`, 'i').exec(q) ?? new RegExp(`(?:write|spell|say)\\s+${num}\\s*(?:in|as)?\\s*(indian |international )?(?:words?)?`, 'i').exec(q);
  if (!m) return null;
  const style = /indian|lakh|crore|rupee/i.test(q) ? 'indian' : /international|million|dollar/i.test(q) ? 'international' : 'indian';
  const money = /rupee|cheque|check/i.test(q) ? 'inr' : /dollar/i.test(q) ? 'usd' : 'none';
  const r = numberToWords(m[1]!, style, money);
  if (r.error) return null;
  const text = r.words.charAt(0).toUpperCase() + r.words.slice(1);
  return reply(`In ${style === 'indian' ? 'Indian' : 'international'} style:`, {
    answer: { big: text },
    tools: [card(toolBySlug('number-to-words')!)],
    followups: style === 'indian' ? ['Write it in international style'] : ['Write it in Indian style'],
    focus: 'number-to-words',
  });
}

function baseAnswer(q: string): HelperReply | null {
  const names: Record<string, number> = { binary: 2, bin: 2, octal: 8, oct: 8, decimal: 10, dec: 10, hex: 16, hexadecimal: 16 };
  const a = /^(?:what is |convert )?([0-9a-f]+)\s*(?:in |from )?(binary|bin|octal|oct|decimal|dec|hex|hexadecimal)?\s*(?:to|in|into|as)\s*(binary|bin|octal|oct|decimal|dec|hex|hexadecimal)\??$/i.exec(q.trim());
  if (!a) return null;
  const target = names[a[3]!.toLowerCase()]!;
  let source = a[2] ? names[a[2].toLowerCase()]! : /^[01]+$/.test(a[1]!) && target !== 2 && /binary|bin/.test(q) ? 2 : /[a-f]/i.test(a[1]!) ? 16 : 10;
  if (!a[2] && /^0x/i.test(a[1]!)) source = 16;
  const value = parseBase(a[1]!, source);
  if (value === null) return null;
  return reply(`${a[1]!.toUpperCase()} (base ${source}) is:`, {
    answer: { big: formatBase(value, target), small: `Base ${target}` },
    tools: [card(toolBySlug('number-base-converter')!)],
    followups: [],
    focus: 'number-base-converter',
  });
}

function romanAnswer(q: string): HelperReply | null {
  const a = /^(?:what is |convert )?(\d{1,4})\s*(?:in|to|as)\s*roman(?: numerals?)?\??$/i.exec(q.trim());
  if (a) {
    const r = toRoman(Number(a[1]));
    return r ? reply(`${a[1]} in Roman numerals:`, { answer: { big: r }, tools: [card(toolBySlug('roman-numeral-converter')!)], focus: 'roman-numeral-converter', followups: [] }) : reply('Roman numerals only go from 1 to 3999.');
  }
  const b = /^(?:what is |convert )?([mdclxvi]{1,15})\s*(?:in|to|as)\s*(?:a )?(?:number|numbers|decimal|digits)\??$/i.exec(q.trim());
  if (b) {
    const n = fromRoman(b[1]!);
    return n === null ? reply(`"${b[1]!.toUpperCase()}" is not a correctly written Roman numeral. Try IV, XIX or MCMXCIV.`) : reply(`${b[1]!.toUpperCase()} is:`, { answer: { big: String(n) }, tools: [card(toolBySlug('roman-numeral-converter')!)], focus: 'roman-numeral-converter', followups: [] });
  }
  return null;
}

// ---------- follow-ups about the converter just suggested ----------
function followUp(q: string, tool: ToolLink): HelperReply | null {
  const content = contentFor(tool);
  if (/\b(big|size|large|limit|mb|gb|megabytes|gigabytes|maximum)\b/.test(q)) {
    const faq = content.faqs.find((f) => /^how big a file/i.test(f.q));
    if (faq) return reply(faq.a, { tools: [card(tool)], focus: tool.slug, followups: ['How do I use it?'] });
  }
  if (/\b(how|steps|use|start|work)\b/.test(q) && /\b(how|steps|use|do i|works?)\b/.test(q)) {
    return reply(`Here is how to use ${tool.name}:`, { steps: content.steps, tools: [card(tool)], focus: tool.slug, followups: ['Is my file uploaded?', 'How big a file can I use?'] });
  }
  if (/\b(upload|uploaded|private|privacy|safe|secure|server)\b/.test(q)) {
    return reply(tool.kind === 'link' ? `${tool.name} is on ${tool.site}, which also runs in your browser, so your files are not uploaded there either.` : 'No. It runs inside your browser tab, so your file never leaves your device. We cannot see it or keep a copy.', { tools: [card(tool)], focus: tool.slug, followups: ['How do I use it?'] });
  }
  if (/\b(free|cost|price|pay|paid|watermark|sign ?up|account|ads?)\b/.test(q)) {
    return reply('It is free: no sign-up, no watermark and no ads. Tips are the only way to support the site.', { links: [{ href: '/donate/', label: 'Donate' }], tools: [card(tool)], focus: tool.slug });
  }
  // Otherwise look for the converter's own question that shares the most words with what was asked.
  const asked = new Set(words(q));
  if (asked.size === 0) return null;
  let best: { score: number; faq: { q: string; a: string } } | null = null;
  for (const faq of [...content.faqs, ...content.sections.map((s) => ({ q: s.h, a: s.p }))]) {
    const hay = new Set(words(`${faq.q} ${faq.a}`));
    const hit = [...asked].filter((w) => hay.has(w)).length;
    if (hit > 0 && (!best || hit > best.score)) best = { score: hit, faq };
  }
  if (best && best.score >= 2) return reply(best.faq.a, { tools: [card(tool)], focus: tool.slug, followups: ['How do I use it?'] });
  return null;
}

/** Words people use that our tool keywords do not, mapped to words that match. */
const SYNONYMS: [RegExp, string][] = [
  [/\b(rip|extract|take out|pull out)\b.*\b(audio|sound|music)\b|\bsound from\b|\baudio from\b|\bmusic from\b/, 'video to mp3'],
  [/\bmovie|clip\b/, 'video'],
  [/\bspreadsheet|excel|xls\b/, 'excel'],
  [/\bkg|kilogram|pounds?\b/, 'weight'],
  [/\bmiles?|kilometres?|kilometers?|feet|inches\b/, 'length'],
  [/\bbigha|gaj|plot\b/, 'indian land'],
  [/\blakh|crore|cheque|check amount\b/, 'number to words'],
  [/\btimezone|time zone|ist|utc|pst|est|gmt\b/, 'time zone'],
  [/\bsmaller|reduce|shrink|too big|whatsapp|email size\b/, 'compress'],
  [/\bcut|shorten\b/, 'trim'],
  [/\bgarbled|weird characters|accents? broken\b/, 'encoding'],
];

export function respond(message: string, ctx?: HelperContext, focus?: string): HelperReply {
  void ctx;
  const q = message.toLowerCase().trim();
  if (!q) return reply('Type what you want to convert, for example "mp4 to mp3".');

  // Small jobs first: if it is a sum, just do it.
  const inline = unitAnswer(q) ?? wordsAnswer(q) ?? romanAnswer(q) ?? baseAnswer(q);
  if (inline) return inline;

  if (has(q, 'hi', 'hello', 'hey', 'quack', 'hola')) return reply('Quack! What would you like to convert today?', { followups: ['Extract audio from a video', '5 km in miles'] });
  if (has(q, 'thanks', 'thank', 'thx')) return reply('Any time. Quack!');

  // A follow-up about the converter we just talked about.
  const current = focus ? toolBySlug(focus) : undefined;
  if (current) {
    const f = followUp(q, current);
    if (f) return f;
  }
  if (/^(show it in every unit|every unit)/.test(q) && current) return reply(`Open the ${current.name} converter to see the same number in every unit.`, { tools: [card(current)], focus: current.slug });
  if (/^write it in (indian|international) style/.test(q)) {
    return reply('Type the number again with the style you want, for example "1250000 in international words".', { followups: ['1250000 in international words', '1250000 in indian words'] });
  }

  if (has(q, 'safe', 'private', 'privacy', 'upload', 'uploaded', 'secure')) {
    return reply('Every converter runs in your browser, so your files are not uploaded. The audio and video engine is downloaded once from jsDelivr (cdn.jsdelivr.net) and checked against a fixed fingerprint, but your files are not part of that.', { links: [{ href: '/privacy/', label: 'Privacy policy' }, { href: '/about/', label: 'About' }] });
  }
  if (has(q, 'feedback', 'bug', 'broken', 'problem', 'report')) return reply('Sorry something went wrong. A short note helps most: say which converter and what you expected.', { links: [{ href: '/feedback/', label: 'Send feedback' }] });
  if (has(q, 'request', 'suggest', 'idea', 'missing', 'wish')) return reply('Tell us what you wish existed. Requests decide what gets built next.', { links: [{ href: '/request/', label: 'Request a feature' }, { href: '/roadmap/', label: 'Roadmap' }] });
  if (has(q, 'donate', 'tip', 'support', 'pay', 'price', 'cost', 'free')) return reply('It is free: no sign-up, no watermark and no ads. Tips are the only way to support it.', { links: [{ href: '/donate/', label: 'Donate' }] });
  if (has(q, 'dark', 'theme', 'light', 'settings')) return reply('You can change the theme with the moon button at the top, or on the Settings page.', { links: [{ href: '/settings/', label: 'Settings' }] });
  if (has(q, 'phone', 'mobile', 'android', 'iphone') && has(q, 'video', 'big', 'large', 'slow')) {
    return reply('Video works on phones but it is slow and can run out of memory, because your own device does the work. We suggest files under about 100 MB on a phone and 500 MB on a computer. Trim the video first, or use a computer for big files.', { tools: [card(toolBySlug('trim-video')!)], focus: 'trim-video', followups: ['How do I use it?'] });
  }

  // Work that lives on a sister site.
  if (/\bpdf\b/.test(q)) return reply('PDF conversions live on iDuckPDF, a sister site that also runs in your browser.', { links: [{ href: 'https://iduckpdf.com/', label: 'Open iDuckPDF' }] });
  if (/\b(heic|heif|avif|svg|bmp|jpg|jpeg|png|ico|favicon|photo|picture|image)\b/.test(q) && !/tiff?|webp/.test(q)) {
    const link = TOOLS.filter((t) => t.site === 'iDuckIMG' && searchTools(q, [t]).length > 0);
    return reply('Picture conversions like that are on iDuckIMG, a sister site that also runs in your browser.', { tools: link.map(card), links: [{ href: 'https://iduckimg.com/', label: 'Open iDuckIMG' }] });
  }

  let search = q;
  for (const [pattern, add] of SYNONYMS) if (pattern.test(q)) search += ` ${add}`;
  let found = searchTools(search.replace(/\b(convert|change|turn|make|how|do|i|to|a|an|the|my|into|from|can|you|want|need|please|file|files)\b/g, ' ').trim() || search);
  const slugGuess = /([a-z0-9]+)\s+(?:to|into|2)\s+([a-z0-9]+)/.exec(q);
  if (slugGuess) {
    const exact = TOOLS.find((t) => t.slug === `${slugGuess[1]}-to-${slugGuess[2]}`);
    if (exact) found = [exact, ...found.filter((t) => t !== exact)];
  }
  if (found.length === 0) {
    return reply('I could not find a converter for that. Try the format names, like "mp4 to mp3" or "csv to json", or a quick sum like "5 km in miles". Or browse them all.', { links: [{ href: '/converters/', label: 'All converters' }, { href: '/request/', label: 'Request one' }] });
  }
  const top = found.slice(0, 3);
  const first = top[0]!;
  return reply(top.length === 1 ? `That sounds like ${first.name}:` : `${first.name} looks like the best match, and these are close:`, {
    tools: top.map(card),
    links: [{ href: '/converters/', label: 'All converters' }],
    followups: first.kind === 'link' ? [] : ['How do I use it?', 'Is my file uploaded?', 'How big a file can I use?'],
    focus: first.slug,
  });
}
