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

/** The helper's sentences. Each language has its own; English is below. {placeholders} are filled in. */
export interface HelperReplies {
  empty: string;
  hello: string;
  thanks: string;
  /** {value} */
  valueIs: string;
  /** {style} */
  inStyle: string;
  indian: string;
  international: string;
  /** {value} and {source} */
  baseIs: string;
  /** {target} */
  baseLabel: string;
  /** {n} */
  romanIn: string;
  romanRange: string;
  /** {x} */
  romanBad: string;
  /** {name} */
  howTo: string;
  /** {name} and {site} */
  uploadedLink: string;
  uploadedNo: string;
  free: string;
  sizeAnswer: string;
  /** {name} */
  showEvery: string;
  writeAgain: string;
  safe: string;
  feedback: string;
  request: string;
  theme: string;
  phone: string;
  pdf: string;
  picture: string;
  notFound: string;
  /** {name} */
  one: string;
  /** {name} */
  many: string;
}

export interface HelperLinks {
  donate: string;
  settings: string;
  feedback: string;
  request: string;
  requestOne: string;
  roadmap: string;
  privacy: string;
  about: string;
  openPdf: string;
  openImg: string;
  all: string;
}

/** Extra words a visitor may type in their language. The English words always work too. */
export interface HelperKeywords {
  /** Words between the two halves of "5 km in miles". */
  connectors: string[];
  /** The word for "words", as in "1250 in words". */
  words: string[];
  /** The start of the word for Roman numerals. */
  roman: string[];
  hello: string[];
  thanks: string[];
  safe: string[];
  feedback: string[];
  request: string[];
  donate: string[];
  theme: string[];
  /** Words about size or limits, for a follow-up. */
  size: string[];
  /** Unit words in the language and the English word the sums understand: ['millas', 'miles']. */
  units: [string, string][];
}

export interface HelperContext {
  text: {
    greeting: string;
    /** The English messages that the starter buttons send. */
    starters: string[];
    ui: { log: string; openIt: string; typing: string; things: string; describe: string; placeholder: string; send: string; footnote: string; clear: string };
    replies: HelperReplies;
    links: HelperLinks;
    keywords: HelperKeywords;
    /** What a button shows for an English message it sends. */
    labels: Record<string, string>;
  };
  /** The converters' names and summaries in this language. Missing for English. */
  tools?: Record<string, { name: string; summary: string; quick?: string }>;
  /** The language path, such as "/es", put in front of the converters' addresses. */
  prefix?: string;
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
      clear: 'Start over',
    },
    replies: {
      empty: 'Type what you want to convert, for example "mp4 to mp3".',
      hello: 'Quack! What would you like to convert today?',
      thanks: 'Any time. Quack!',
      valueIs: '{value} is:',
      inStyle: 'In {style} style:',
      indian: 'Indian',
      international: 'international',
      baseIs: '{value} (base {source}) is:',
      baseLabel: 'Base {target}',
      romanIn: '{n} in Roman numerals:',
      romanRange: 'Roman numerals only go from 1 to 3999.',
      romanBad: '"{x}" is not a correctly written Roman numeral. Try IV, XIX or MCMXCIV.',
      howTo: 'Here is how to use {name}:',
      uploadedLink: '{name} is on {site}, which also runs in your browser, so your files are not uploaded there either.',
      uploadedNo: 'No. It runs inside your browser tab, so your file never leaves your device. We cannot see it or keep a copy.',
      free: 'It is free: no sign-up, no watermark and no ads. Tips are the only way to support the site.',
      sizeAnswer: 'Your own device does the work, so the limit is its memory. We suggest files under about 500 MB on a computer and 100 MB on a phone.',
      showEvery: 'Open the {name} converter to see the same number in every unit.',
      writeAgain: 'Type the number again with the style you want, for example "1250000 in international words".',
      safe: 'Every converter runs in your browser, so your files are not uploaded. The audio and video engine is downloaded once from jsDelivr (cdn.jsdelivr.net) and checked against a fixed fingerprint, but your files are not part of that.',
      feedback: 'Sorry something went wrong. A short note helps most: say which converter and what you expected.',
      request: 'Tell us what you wish existed. Requests decide what gets built next.',
      theme: 'You can change the theme with the moon button at the top, or on the Settings page.',
      phone: 'Video works on phones but it is slow and can run out of memory, because your own device does the work. We suggest files under about 100 MB on a phone and 500 MB on a computer. Trim the video first, or use a computer for big files.',
      pdf: 'PDF conversions live on iDuckPDF, a sister site that also runs in your browser.',
      picture: 'Picture conversions like that are on iDuckIMG, a sister site that also runs in your browser.',
      notFound: 'I could not find a converter for that. Try the format names, like "mp4 to mp3" or "csv to json", or a quick sum like "5 km in miles". Or browse them all.',
      one: 'That sounds like {name}:',
      many: '{name} looks like the best match, and these are close:',
    },
    links: {
      donate: 'Donate',
      settings: 'Settings',
      feedback: 'Send feedback',
      request: 'Request a feature',
      requestOne: 'Request one',
      roadmap: 'Roadmap',
      privacy: 'Privacy policy',
      about: 'About',
      openPdf: 'Open iDuckPDF',
      openImg: 'Open iDuckIMG',
      all: 'All converters',
    },
    keywords: { connectors: [], words: [], roman: [], hello: [], thanks: [], safe: [], feedback: [], request: [], donate: [], theme: [], size: [], units: [] },
    labels: {},
  },
};

const fmt = (text: string, values: Record<string, string | number>): string => text.replace(/\{(\w+)\}/g, (whole, key: string) => (key in values ? String(values[key]) : whole));

/** What one reply needs to know about the language it is written in. */
interface Env {
  english: boolean;
  r: HelperReplies;
  l: HelperLinks;
  k: HelperKeywords;
  tools: Record<string, { name: string; summary: string; quick?: string }>;
  prefix: string;
}

function envFor(ctx?: HelperContext): Env {
  const text = ctx?.text ?? ENGLISH_CONTEXT.text;
  return { english: !ctx?.tools, r: text.replies, l: text.links, k: text.keywords, tools: ctx?.tools ?? {}, prefix: ctx?.prefix ?? '' };
}

const escapeRe = (w: string): string => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
/** True when any of these words (the visitor's language, or English) is in the text as a whole word. */
const anyWord = (q: string, list: readonly string[]): boolean => list.length > 0 && new RegExp(`(?<![\\p{L}\\p{N}])(?:${list.map(escapeRe).join('|')})(?![\\p{L}\\p{N}])`, 'u').test(q);

const reply = (text: string, extra: Partial<HelperReply> = {}): HelperReply => ({ text, tools: [], links: [], followups: [], ...extra });

const has = (q: string, ...list: string[]) => anyWord(q, list);
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

const card = (env: Env, t: ToolLink) => {
  const own = env.tools[t.slug];
  return { slug: t.slug, href: t.site || !env.prefix ? hrefFor(t) : `${env.prefix}${hrefFor(t)}`, emoji: t.emoji, name: own?.name ?? t.name, summary: own?.summary ?? t.summary };
};

/** Unit words typed in the language become the English words the unit tables know. */
function localizeUnits(q: string, env: Env): string {
  let out = q;
  for (const [word, english] of [...env.k.units].sort((x, y) => y[0].length - x[0].length)) {
    out = out.replace(new RegExp(`(?<![\\p{L}\\p{N}\\p{M}])${escapeRe(word)}(?![\\p{L}\\p{N}\\p{M}])`, 'gu'), english);
  }
  return out;
}

function unitAnswer(question: string, env: Env): HelperReply | null {
  const q = localizeUnits(question, env);
  const joins = ['to', 'in', 'into', 'as', '=', '->', ...env.k.connectors].map(escapeRe).join('|');
  const m = new RegExp(`${num}\\s*([a-z°/²³ ]{1,30}?)\\s+(?:${joins})\\s+([a-z°/²³ ]{1,30})$`, 'iu').exec(q.replace(/\?$/, '').trim());
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
    return reply(fmt(env.r.valueIs, { value: `${formatNumber(value)} ${fu.symbol}` }), {
      answer: { big: `${formatNumber(result)} ${tu.symbol}`, ...(f.set.note ? { small: f.set.note } : {}) },
      tools: tool ? [card(env, tool)] : [],
      followups: tool ? ['Show it in every unit'] : [],
      ...(tool ? { focus: tool.slug } : {}),
    });
  }
  return null;
}

function wordsAnswer(q: string, env: Env): HelperReply | null {
  const joins = ['in', 'to', 'as', ...env.k.connectors].map(escapeRe).join('|');
  const wordWord = ['words?', ...env.k.words.map(escapeRe)].join('|');
  const m = new RegExp(`${num}\\s*(?:${joins})\\s*(indian |international )?(?:${wordWord})(?: (?:in )?(indian|international))?`, 'iu').exec(q) ?? new RegExp(`(?:write|spell|say)\\s+${num}\\s*(?:in|as)?\\s*(indian |international )?(?:words?)?`, 'i').exec(q);
  if (!m) return null;
  const style = /indian|lakh|crore|rupee/i.test(q) ? 'indian' : /international|million|dollar/i.test(q) ? 'international' : 'indian';
  const money = /rupee|cheque|check/i.test(q) ? 'inr' : /dollar/i.test(q) ? 'usd' : 'none';
  const r = numberToWords(m[1]!, style, money);
  if (r.error) return null;
  const text = r.words.charAt(0).toUpperCase() + r.words.slice(1);
  return reply(fmt(env.r.inStyle, { style: style === 'indian' ? env.r.indian : env.r.international }), {
    answer: { big: text },
    tools: [card(env, toolBySlug('number-to-words')!)],
    followups: style === 'indian' ? ['Write it in international style'] : ['Write it in Indian style'],
    focus: 'number-to-words',
  });
}

function baseAnswer(q: string, env: Env): HelperReply | null {
  const names: Record<string, number> = { binary: 2, bin: 2, octal: 8, oct: 8, decimal: 10, dec: 10, hex: 16, hexadecimal: 16 };
  const a = /^(?:what is |convert )?([0-9a-f]+)\s*(?:in |from )?(binary|bin|octal|oct|decimal|dec|hex|hexadecimal)?\s*(?:to|in|into|as)\s*(binary|bin|octal|oct|decimal|dec|hex|hexadecimal)\??$/i.exec(q.trim());
  if (!a) return null;
  const target = names[a[3]!.toLowerCase()]!;
  let source = a[2] ? names[a[2].toLowerCase()]! : /^[01]+$/.test(a[1]!) && target !== 2 && /binary|bin/.test(q) ? 2 : /[a-f]/i.test(a[1]!) ? 16 : 10;
  if (!a[2] && /^0x/i.test(a[1]!)) source = 16;
  const value = parseBase(a[1]!, source);
  if (value === null) return null;
  return reply(fmt(env.r.baseIs, { value: a[1]!.toUpperCase(), source }), {
    answer: { big: formatBase(value, target), small: fmt(env.r.baseLabel, { target }) },
    tools: [card(env, toolBySlug('number-base-converter')!)],
    followups: [],
    focus: 'number-base-converter',
  });
}

function romanAnswer(q: string, env: Env): HelperReply | null {
  const romanWord = ['roman(?: numerals?)?', ...env.k.roman.map((w) => `${escapeRe(w)}\\S*`)].join('|');
  const joins = ['in', 'to', 'as', ...env.k.connectors].map(escapeRe).join('|');
  const a = new RegExp(`^(?:what is |convert )?(\\d{1,4})\\s*(?:${joins})\\s*(?:${romanWord})\\??$`, 'iu').exec(q.trim());
  const tool = toolBySlug('roman-numeral-converter')!;
  if (a) {
    const r = toRoman(Number(a[1]));
    return r ? reply(fmt(env.r.romanIn, { n: a[1]! }), { answer: { big: r }, tools: [card(env, tool)], focus: 'roman-numeral-converter', followups: [] }) : reply(env.r.romanRange);
  }
  const b = /^(?:what is |convert )?([mdclxvi]{1,15})\s*(?:in|to|as)\s*(?:a )?(?:number|numbers|decimal|digits)\??$/i.exec(q.trim());
  if (b) {
    const n = fromRoman(b[1]!);
    return n === null ? reply(fmt(env.r.romanBad, { x: b[1]!.toUpperCase() })) : reply(fmt(env.r.valueIs, { value: b[1]!.toUpperCase() }), { answer: { big: String(n) }, tools: [card(env, tool)], focus: 'roman-numeral-converter', followups: [] });
  }
  return null;
}

// ---------- follow-ups about the converter just suggested ----------
function followUp(q: string, tool: ToolLink, env: Env): HelperReply | null {
  const content = contentFor(tool);
  const own = env.tools[tool.slug];
  if (/\b(big|size|large|limit|mb|gb|megabytes|gigabytes|maximum)\b/.test(q) || anyWord(q, env.k.size)) {
    if (!env.english) return reply(env.r.sizeAnswer, { tools: [card(env, tool)], focus: tool.slug, followups: ['How do I use it?'] });
    const faq = content.faqs.find((f) => /^how big a file/i.test(f.q));
    if (faq) return reply(faq.a, { tools: [card(env, tool)], focus: tool.slug, followups: ['How do I use it?'] });
  }
  if (/\b(how|steps|use|start|work)\b/.test(q) && /\b(how|steps|use|do i|works?)\b/.test(q)) {
    // The step-by-step text is English; in other languages the converter's own short answer says how to use it.
    if (!env.english) return reply(fmt(env.r.howTo, { name: own?.name ?? tool.name }), { steps: [toolQuick(tool, env)], tools: [card(env, tool)], focus: tool.slug, followups: ['Is my file uploaded?', 'How big a file can I use?'] });
    return reply(fmt(env.r.howTo, { name: tool.name }), { steps: content.steps, tools: [card(env, tool)], focus: tool.slug, followups: ['Is my file uploaded?', 'How big a file can I use?'] });
  }
  if (/\b(upload|uploaded|private|privacy|safe|secure|server)\b/.test(q) || anyWord(q, env.k.safe)) {
    return reply(tool.kind === 'link' ? fmt(env.r.uploadedLink, { name: own?.name ?? tool.name, site: tool.site ?? '' }) : env.r.uploadedNo, { tools: [card(env, tool)], focus: tool.slug, followups: ['How do I use it?'] });
  }
  if (/\b(free|cost|price|pay|paid|watermark|sign ?up|account|ads?)\b/.test(q) || anyWord(q, env.k.donate)) {
    return reply(env.r.free, { links: [{ href: '/donate/', label: env.l.donate }], tools: [card(env, tool)], focus: tool.slug });
  }
  if (!env.english) return null;
  // Otherwise look for the converter's own question that shares the most words with what was asked.
  const asked = new Set(words(q));
  if (asked.size === 0) return null;
  let best: { score: number; faq: { q: string; a: string } } | null = null;
  for (const faq of [...content.faqs, ...content.sections.map((s) => ({ q: s.h, a: s.p }))]) {
    const hay = new Set(words(`${faq.q} ${faq.a}`));
    const hit = [...asked].filter((w) => hay.has(w)).length;
    if (hit > 0 && (!best || hit > best.score)) best = { score: hit, faq };
  }
  if (best && best.score >= 2) return reply(best.faq.a, { tools: [card(env, tool)], focus: tool.slug, followups: ['How do I use it?'] });
  return null;
}

/** The converter's short answer in the page language, which is also how to use it. */
function toolQuick(tool: ToolLink, env: Env): string {
  return env.tools[tool.slug]?.quick ?? tool.quick;
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
  const env = envFor(ctx);
  const q = message.toLowerCase().trim();
  if (!q) return reply(env.r.empty);

  // Small jobs first: if it is a sum, just do it.
  const inline = unitAnswer(q, env) ?? wordsAnswer(q, env) ?? romanAnswer(q, env) ?? baseAnswer(q, env);
  if (inline) return inline;

  if (has(q, 'hi', 'hello', 'hey', 'quack', 'hola', ...env.k.hello)) return reply(env.r.hello, { followups: ['Extract audio from a video', '5 km in miles'] });
  if (has(q, 'thanks', 'thank', 'thx', ...env.k.thanks)) return reply(env.r.thanks);

  // A follow-up about the converter we just talked about.
  const current = focus ? toolBySlug(focus) : undefined;
  if (current) {
    const f = followUp(q, current, env);
    if (f) return f;
  }
  if (/^(show it in every unit|every unit)/.test(q) && current) return reply(fmt(env.r.showEvery, { name: env.tools[current.slug]?.name ?? current.name }), { tools: [card(env, current)], focus: current.slug });
  if (/^write it in (indian|international) style/.test(q)) {
    return reply(env.r.writeAgain, { followups: ['1250000 in international words', '1250000 in indian words'] });
  }

  if (has(q, 'safe', 'private', 'privacy', 'upload', 'uploaded', 'secure', ...env.k.safe)) {
    return reply(env.r.safe, { links: [{ href: '/privacy/', label: env.l.privacy }, { href: '/about/', label: env.l.about }] });
  }
  if (has(q, 'feedback', 'bug', 'broken', 'problem', 'report', ...env.k.feedback)) return reply(env.r.feedback, { links: [{ href: '/feedback/', label: env.l.feedback }] });
  if (has(q, 'request', 'suggest', 'idea', 'missing', 'wish', ...env.k.request)) return reply(env.r.request, { links: [{ href: '/request/', label: env.l.request }, { href: '/roadmap/', label: env.l.roadmap }] });
  if (has(q, 'donate', 'tip', 'support', 'pay', 'price', 'cost', 'free', ...env.k.donate)) return reply(env.r.free, { links: [{ href: '/donate/', label: env.l.donate }] });
  if (has(q, 'dark', 'theme', 'light', 'settings', ...env.k.theme)) return reply(env.r.theme, { links: [{ href: '/settings/', label: env.l.settings }] });
  if (has(q, 'phone', 'mobile', 'android', 'iphone') && has(q, 'video', 'big', 'large', 'slow')) {
    return reply(env.r.phone, { tools: [card(env, toolBySlug('trim-video')!)], focus: 'trim-video', followups: ['How do I use it?'] });
  }

  // Work that lives on a sister site.
  if (/\bpdf\b/.test(q)) return reply(env.r.pdf, { links: [{ href: 'https://iduckpdf.com/', label: env.l.openPdf }] });
  if (/\b(heic|heif|avif|svg|bmp|jpg|jpeg|png|ico|favicon|photo|picture|image)\b/.test(q) && !/tiff?|webp/.test(q)) {
    const link = TOOLS.filter((t) => t.site === 'iDuckIMG' && searchTools(q, [t]).length > 0);
    return reply(env.r.picture, { tools: link.map((t) => card(env, t)), links: [{ href: 'https://iduckimg.com/', label: env.l.openImg }] });
  }

  let search = q;
  for (const [pattern, add] of SYNONYMS) if (pattern.test(q)) search += ` ${add}`;
  let found = searchTools(search.replace(/\b(convert|change|turn|make|how|do|i|to|a|an|the|my|into|from|can|you|want|need|please|file|files)\b/g, ' ').trim() || search);
  const slugGuess = /([a-z0-9]+)\s+(?:to|into|2)\s+([a-z0-9]+)/.exec(q);
  if (slugGuess) {
    const exact = TOOLS.find((t) => t.slug === `${slugGuess[1]}-to-${slugGuess[2]}`);
    if (exact) found = [exact, ...found.filter((t) => t !== exact)];
  }
  // A visitor who types a converter's name in their own language: match the translated names.
  const named = TOOLS.filter((t) => {
    const name = env.tools[t.slug]?.name.toLowerCase();
    return !!name && name.length >= 3 && (q.includes(name) || (q.length >= 4 && name.includes(q)));
  }).sort((x, y) => (env.tools[y.slug]?.name.length ?? 0) - (env.tools[x.slug]?.name.length ?? 0));
  if (named.length > 0) found = [...named, ...found.filter((t) => !named.includes(t))];
  if (found.length === 0) {
    return reply(env.r.notFound, { links: [{ href: env.prefix ? `${env.prefix}/` : '/converters/', label: env.l.all }, { href: '/request/', label: env.l.requestOne }] });
  }
  const top = found.slice(0, 3);
  const first = top[0]!;
  const firstName = env.tools[first.slug]?.name ?? first.name;
  return reply(top.length === 1 ? fmt(env.r.one, { name: firstName }) : fmt(env.r.many, { name: firstName }), {
    tools: top.map((t) => card(env, t)),
    links: [{ href: env.prefix ? `${env.prefix}/` : '/converters/', label: env.l.all }],
    followups: first.kind === 'link' ? [] : ['How do I use it?', 'Is my file uploaded?', 'How big a file can I use?'],
    focus: first.slug,
  });
}
