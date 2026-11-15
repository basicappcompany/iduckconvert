/**
 * Number to words in the nine other languages (English is src/convert/numbers.ts). Each language spells whole numbers in
 * the international way (thousand, million, billion...) and in the Indian way (thousand, lakh, crore); lakh and crore are
 * written the way the language writes foreign words. Machine-written rules, checked by unit tests; a person who reads the
 * language has not reviewed them yet.
 */
import { numberToWords, type WordStyle, type WordsResult } from './numbers';

export type Money = 'none' | 'inr' | 'usd';
export interface LocalWords extends WordsResult {
  /** Why the input failed, so the page can show it in its own language. */
  errorKey?: 'bad' | 'big';
}

interface Speller {
  zero: string;
  minus: string;
  point: string;
  and: string;
  /** Major and minor currency names (the Russian ones are chosen by number). */
  money: { inr: [Name, Name]; usd: [Name, Name] };
  int: (n: bigint, style: WordStyle, fem?: boolean) => string;
}
type Name = string | ((n: bigint) => string);

const TOO_BIG = 'too big';

/** Groups of three digits, lowest first. */
function groups(n: bigint, max: number): number[] {
  const out: number[] = [];
  let rest = n;
  while (rest > 0n) {
    out.push(Number(rest % 1000n));
    rest /= 1000n;
  }
  if (out.length > max) throw new RangeError(TOO_BIG);
  return out;
}

/** The Indian way: crore, lakh, thousand, then the last three digits. */
function indian(
  n: bigint,
  p: { below100: (n: number) => string; below1000: (n: number) => string; crore: string; lakh: string; thousand: string; oneThousand?: string; join?: string },
): string {
  const j = p.join ?? ' ';
  const crore = n / 10_000_000n;
  let rest = Number(n % 10_000_000n);
  const parts: string[] = [];
  if (crore > 0n) parts.push(`${crore >= 100n ? indian(crore, p) : p.below100(Number(crore))} ${p.crore}`);
  const lakh = Math.floor(rest / 100_000);
  rest %= 100_000;
  if (lakh) parts.push(`${p.below100(lakh)} ${p.lakh}`);
  const thousand = Math.floor(rest / 1000);
  rest %= 1000;
  if (thousand) parts.push(thousand === 1 && p.oneThousand ? p.oneThousand : `${p.below100(thousand)} ${p.thousand}`);
  if (rest) parts.push(p.below1000(rest));
  return parts.join(j);
}

// ---------- Spanish ----------
const ES_U = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'];
const ES_T = ['', '', '', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
const ES_H = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
const esBelow100 = (n: number): string => (n < 30 ? ES_U[n]! : ES_T[Math.floor(n / 10)]! + (n % 10 ? ` y ${ES_U[n % 10]}` : ''));
const esBelow1000 = (n: number): string => (n === 100 ? 'cien' : [ES_H[Math.floor(n / 100)], n % 100 ? esBelow100(n % 100) : ''].filter(Boolean).join(' '));
const esApocope = (s: string): string => s.replace(/veintiuno$/, 'veintiún').replace(/uno$/, 'un');
const esBelowMillion = (n: number): string => {
  const th = Math.floor(n / 1000);
  const r = n % 1000;
  return [th ? (th === 1 ? 'mil' : `${esApocope(esBelow1000(th))} mil`) : '', r ? esBelow1000(r) : ''].filter(Boolean).join(' ');
};
const ES_BIG: [string, string][] = [['millón', 'millones'], ['billón', 'billones'], ['trillón', 'trillones'], ['cuatrillón', 'cuatrillones']];
function esInt(n: bigint, style: WordStyle): string {
  if (n === 0n) return 'cero';
  if (n < 0n) return `menos ${esInt(-n, style)}`;
  if (style === 'indian') return indian(n, { below100: (k) => esApocope(esBelow100(k)), below1000: esBelow1000, crore: 'crore', lakh: 'lakh', thousand: 'mil', oneThousand: 'mil' });
  const g: number[] = [];
  let rest = n;
  while (rest > 0n) {
    g.push(Number(rest % 1_000_000n));
    rest /= 1_000_000n;
  }
  if (g.length > ES_BIG.length + 1) throw new RangeError(TOO_BIG);
  const parts: string[] = [];
  for (let i = g.length - 1; i >= 0; i--) {
    const v = g[i]!;
    if (!v) continue;
    if (i === 0) parts.push(esBelowMillion(v));
    else parts.push(v === 1 ? `un ${ES_BIG[i - 1]![0]}` : `${esApocope(esBelowMillion(v))} ${ES_BIG[i - 1]![1]}`);
  }
  return parts.join(' ');
}

// ---------- French ----------
const FR_U = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
const FR_T = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante'];
function frBelow100(n: number, final = true): string {
  if (n < 20) return FR_U[n]!;
  const t = Math.floor(n / 10);
  const u = n % 10;
  if (n < 70) return FR_T[t]! + (u === 1 ? ' et un' : u ? `-${FR_U[u]}` : '');
  if (n < 80) return u === 1 ? 'soixante et onze' : `soixante-${FR_U[10 + u]}`;
  if (n < 90) return u ? `quatre-vingt-${FR_U[u]}` : `quatre-vingt${final ? 's' : ''}`;
  return `quatre-vingt-${FR_U[n - 80]}`;
}
function frBelow1000(n: number, final = true): string {
  const h = Math.floor(n / 100);
  const r = n % 100;
  const hundred = h === 0 ? '' : h === 1 ? 'cent' : `${FR_U[h]} cent${r === 0 && final ? 's' : ''}`;
  return [hundred, r ? frBelow100(r, final) : ''].filter(Boolean).join(' ');
}
const FR_SCALES = ['', 'mille', 'million', 'milliard', 'billion', 'billiard', 'trillion', 'trilliard'];
function frInt(n: bigint, style: WordStyle): string {
  if (n === 0n) return 'zéro';
  if (n < 0n) return `moins ${frInt(-n, style)}`;
  if (style === 'indian') return indian(n, { below100: (k) => frBelow100(k, false), below1000: frBelow1000, crore: 'crore', lakh: 'lakh', thousand: 'mille', oneThousand: 'mille' });
  const g = groups(n, FR_SCALES.length);
  const parts: string[] = [];
  for (let i = g.length - 1; i >= 0; i--) {
    const v = g[i]!;
    if (!v) continue;
    if (i === 0) parts.push(frBelow1000(v, true));
    else if (i === 1) parts.push(v === 1 ? 'mille' : `${frBelow1000(v, false)} mille`);
    else parts.push(`${v === 1 ? 'un' : frBelow1000(v, true)} ${FR_SCALES[i]}${v > 1 ? 's' : ''}`);
  }
  return parts.join(' ');
}

// ---------- German ----------
const DE_U = ['null', 'ein', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn'];
const DE_T = ['', '', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'];
function deBelow100(n: number, last = true): string {
  if (n === 1) return last ? 'eins' : 'ein';
  if (n < 20) return DE_U[n]!;
  const u = n % 10;
  return (u ? `${DE_U[u]}und` : '') + DE_T[Math.floor(n / 10)];
}
function deBelow1000(n: number, last = true): string {
  const h = Math.floor(n / 100);
  const r = n % 100;
  return (h ? (h === 1 ? 'einhundert' : `${DE_U[h]}hundert`) : '') + (r ? deBelow100(r, last) : '');
}
const DE_BIG: [string, string][] = [['Million', 'Millionen'], ['Milliarde', 'Milliarden'], ['Billion', 'Billionen'], ['Billiarde', 'Billiarden'], ['Trillion', 'Trillionen'], ['Trilliarde', 'Trilliarden']];
function deInt(n: bigint, style: WordStyle): string {
  if (n === 0n) return 'null';
  if (n < 0n) return `minus ${deInt(-n, style)}`;
  if (style === 'indian') return indian(n, { below100: (k) => deBelow100(k, false), below1000: deBelow1000, crore: 'Crore', lakh: 'Lakh', thousand: 'Tausend', oneThousand: 'eintausend' });
  const g = groups(n, DE_BIG.length + 2);
  const parts: string[] = [];
  for (let i = g.length - 1; i >= 0; i--) {
    const v = g[i]!;
    if (!v) continue;
    if (i === 0) parts.push(deBelow1000(v, true));
    else if (i === 1) parts.push(`${deBelow1000(v, false)}tausend`);
    else {
      const word = deBelow1000(v, false);
      parts.push(v === 1 ? `eine ${DE_BIG[i - 2]![0]}` : `${word.endsWith('ein') ? `${word}e` : word} ${DE_BIG[i - 2]![1]}`);
    }
  }
  // Thousands and the last three digits are one word in German; the large scales stand apart.
  const out: string[] = [];
  for (let k = 0; k < parts.length; k++) {
    const piece = parts[k]!;
    const prev = out[out.length - 1];
    if (prev !== undefined && !/(Million|Milliarde|Billion|Billiarde|Trillion|Trilliarde)(en|n)?$/.test(prev) && !/[ ]/.test(piece)) out[out.length - 1] = prev + piece;
    else out.push(piece);
  }
  return out.join(' ');
}

// ---------- Portuguese (Brazil) ----------
const PT_U = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
const PT_T = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
const PT_H = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];
const ptBelow100 = (n: number): string => (n < 20 ? PT_U[n]! : PT_T[Math.floor(n / 10)]! + (n % 10 ? ` e ${PT_U[n % 10]}` : ''));
const ptBelow1000 = (n: number): string => (n === 100 ? 'cem' : n < 100 ? ptBelow100(n) : PT_H[Math.floor(n / 100)]! + (n % 100 ? ` e ${ptBelow100(n % 100)}` : ''));
const PT_BIG: [string, string][] = [['milhão', 'milhões'], ['bilhão', 'bilhões'], ['trilhão', 'trilhões'], ['quatrilhão', 'quatrilhões'], ['quintilhão', 'quintilhões'], ['sextilhão', 'sextilhões']];
function ptInt(n: bigint, style: WordStyle): string {
  if (n === 0n) return 'zero';
  if (n < 0n) return `menos ${ptInt(-n, style)}`;
  if (style === 'indian') return indian(n, { below100: ptBelow100, below1000: ptBelow1000, crore: 'crore', lakh: 'lakh', thousand: 'mil', oneThousand: 'mil' });
  const g = groups(n, PT_BIG.length + 2);
  const pieces: { v: number; text: string }[] = [];
  for (let i = g.length - 1; i >= 0; i--) {
    const v = g[i]!;
    if (!v) continue;
    if (i === 0) pieces.push({ v, text: ptBelow1000(v) });
    else if (i === 1) pieces.push({ v, text: v === 1 ? 'mil' : `${ptBelow1000(v)} mil` });
    else pieces.push({ v, text: v === 1 ? `um ${PT_BIG[i - 2]![0]}` : `${ptBelow1000(v)} ${PT_BIG[i - 2]![1]}` });
  }
  // "e" joins a group to the next one when that one is below 100 or a round hundred: mil e um, dois milhões e quinhentos.
  return pieces.map((p, k) => (k === 0 ? p.text : `${p.v < 100 || p.v % 100 === 0 ? 'e ' : ''}${p.text}`)).join(' ');
}

// ---------- Russian ----------
const RU_U = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
const RU_T = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
const RU_H = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
function ruBelow1000(n: number, fem: boolean): string {
  const h = Math.floor(n / 100);
  const r = n % 100;
  const unit = (u: number): string => (fem && u === 1 ? 'одна' : fem && u === 2 ? 'две' : RU_U[u]!);
  const rest = r === 0 ? '' : r < 20 ? unit(r) : [RU_T[Math.floor(r / 10)], r % 10 ? unit(r % 10) : ''].filter(Boolean).join(' ');
  return [RU_H[h], rest].filter(Boolean).join(' ');
}
/** Pick the Russian noun form for a number: one, few (2 to 4) or many. */
const ruForm = (n: bigint, one: string, few: string, many: string): string => {
  const last2 = Number(n % 100n);
  const last = last2 % 10;
  return last2 >= 11 && last2 <= 14 ? many : last === 1 ? one : last >= 2 && last <= 4 ? few : many;
};
const RU_SCALES: [string, string, string][] = [['тысяча', 'тысячи', 'тысяч'], ['миллион', 'миллиона', 'миллионов'], ['миллиард', 'миллиарда', 'миллиардов'], ['триллион', 'триллиона', 'триллионов'], ['квадриллион', 'квадриллиона', 'квадриллионов'], ['квинтиллион', 'квинтиллиона', 'квинтиллионов'], ['секстиллион', 'секстиллиона', 'секстиллионов']];
function ruInt(n: bigint, style: WordStyle, fem = false): string {
  if (n === 0n) return 'ноль';
  if (n < 0n) return `минус ${ruInt(-n, style, fem)}`;
  if (style === 'indian') {
    const crore = n / 10_000_000n;
    let rest = Number(n % 10_000_000n);
    const parts: string[] = [];
    if (crore > 0n) parts.push(`${crore >= 100n ? ruInt(crore, style) : ruBelow1000(Number(crore), false)} ${ruForm(crore, 'крор', 'крор', 'крор')}`);
    const lakh = Math.floor(rest / 100_000);
    rest %= 100_000;
    if (lakh) parts.push(`${ruBelow1000(lakh, false)} ${ruForm(BigInt(lakh), 'лакх', 'лакха', 'лакхов')}`);
    const th = Math.floor(rest / 1000);
    rest %= 1000;
    if (th) parts.push(`${ruBelow1000(th, true)} ${ruForm(BigInt(th), RU_SCALES[0]![0], RU_SCALES[0]![1], RU_SCALES[0]![2])}`);
    if (rest) parts.push(ruBelow1000(rest, fem));
    return parts.join(' ');
  }
  const g = groups(n, RU_SCALES.length + 1);
  const parts: string[] = [];
  for (let i = g.length - 1; i >= 0; i--) {
    const v = g[i]!;
    if (!v) continue;
    if (i === 0) parts.push(ruBelow1000(v, fem));
    else {
      const s = RU_SCALES[i - 1]!;
      parts.push(`${ruBelow1000(v, i === 1)} ${ruForm(BigInt(v), s[0], s[1], s[2])}`);
    }
  }
  return parts.join(' ');
}

// ---------- Turkish ----------
const TR_U = ['sıfır', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz'];
const TR_T = ['', 'on', 'yirmi', 'otuz', 'kırk', 'elli', 'altmış', 'yetmiş', 'seksen', 'doksan'];
const trBelow100 = (n: number): string => [TR_T[Math.floor(n / 10)], n % 10 ? TR_U[n % 10] : ''].filter(Boolean).join(' ');
const trBelow1000 = (n: number): string => {
  const h = Math.floor(n / 100);
  return [h ? (h === 1 ? 'yüz' : `${TR_U[h]} yüz`) : '', n % 100 ? trBelow100(n % 100) : ''].filter(Boolean).join(' ');
};
const TR_BIG = ['milyon', 'milyar', 'trilyon', 'katrilyon', 'kentilyon', 'seksilyon'];
function trInt(n: bigint, style: WordStyle): string {
  if (n === 0n) return 'sıfır';
  if (n < 0n) return `eksi ${trInt(-n, style)}`;
  if (style === 'indian') return indian(n, { below100: trBelow100, below1000: trBelow1000, crore: 'kror', lakh: 'lakh', thousand: 'bin', oneThousand: 'bin' });
  const g = groups(n, TR_BIG.length + 2);
  const parts: string[] = [];
  for (let i = g.length - 1; i >= 0; i--) {
    const v = g[i]!;
    if (!v) continue;
    if (i === 0) parts.push(trBelow1000(v));
    else if (i === 1) parts.push(v === 1 ? 'bin' : `${trBelow1000(v)} bin`);
    else parts.push(`${trBelow1000(v)} ${TR_BIG[i - 2]}`);
  }
  return parts.join(' ');
}

// ---------- Indonesian ----------
const ID_U = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
function idBelow100(n: number): string {
  if (n < 10) return ID_U[n]!;
  if (n === 10) return 'sepuluh';
  if (n === 11) return 'sebelas';
  if (n < 20) return `${ID_U[n - 10]} belas`;
  return `${ID_U[Math.floor(n / 10)]} puluh${n % 10 ? ` ${ID_U[n % 10]}` : ''}`;
}
const idBelow1000 = (n: number): string => {
  const h = Math.floor(n / 100);
  return [h ? (h === 1 ? 'seratus' : `${ID_U[h]} ratus`) : '', n % 100 ? idBelow100(n % 100) : ''].filter(Boolean).join(' ');
};
const ID_BIG = ['juta', 'miliar', 'triliun', 'kuadriliun', 'kuintiliun', 'sekstiliun'];
function idInt(n: bigint, style: WordStyle): string {
  if (n === 0n) return 'nol';
  if (n < 0n) return `negatif ${idInt(-n, style)}`;
  if (style === 'indian') return indian(n, { below100: idBelow100, below1000: idBelow1000, crore: 'crore', lakh: 'lakh', thousand: 'ribu', oneThousand: 'seribu' });
  const g = groups(n, ID_BIG.length + 2);
  const parts: string[] = [];
  for (let i = g.length - 1; i >= 0; i--) {
    const v = g[i]!;
    if (!v) continue;
    if (i === 0) parts.push(idBelow1000(v));
    else if (i === 1) parts.push(v === 1 ? 'seribu' : `${idBelow1000(v)} ribu`);
    else parts.push(`${idBelow1000(v)} ${ID_BIG[i - 2]}`);
  }
  return parts.join(' ');
}

// ---------- Hindi and Bengali: every number to 99 has its own word ----------
const HI_99 = 'शून्य एक दो तीन चार पाँच छह सात आठ नौ दस ग्यारह बारह तेरह चौदह पंद्रह सोलह सत्रह अठारह उन्नीस बीस इक्कीस बाईस तेईस चौबीस पच्चीस छब्बीस सत्ताईस अट्ठाईस उनतीस तीस इकतीस बत्तीस तैंतीस चौंतीस पैंतीस छत्तीस सैंतीस अड़तीस उनतालीस चालीस इकतालीस बयालीस तैंतालीस चौवालीस पैंतालीस छियालीस सैंतालीस अड़तालीस उनचास पचास इक्यावन बावन तिरपन चौवन पचपन छप्पन सत्तावन अट्ठावन उनसठ साठ इकसठ बासठ तिरसठ चौंसठ पैंसठ छियासठ सड़सठ अड़सठ उनहत्तर सत्तर इकहत्तर बहत्तर तिहत्तर चौहत्तर पचहत्तर छिहत्तर सतहत्तर अठहत्तर उन्यासी अस्सी इक्यासी बयासी तिरासी चौरासी पचासी छियासी सत्तासी अट्ठासी नवासी नब्बे इक्यानवे बानवे तिरानवे चौरानवे पंचानवे छियानवे सत्तानवे अट्ठानवे निन्यानवे'.split(' ');
const BN_99 = 'শূন্য এক দুই তিন চার পাঁচ ছয় সাত আট নয় দশ এগারো বারো তেরো চৌদ্দ পনেরো ষোলো সতেরো আঠারো ঊনিশ বিশ একুশ বাইশ তেইশ চব্বিশ পঁচিশ ছাব্বিশ সাতাশ আঠাশ ঊনত্রিশ ত্রিশ একত্রিশ বত্রিশ তেত্রিশ চৌত্রিশ পঁয়ত্রিশ ছত্রিশ সাঁইত্রিশ আটত্রিশ ঊনচল্লিশ চল্লিশ একচল্লিশ বিয়াল্লিশ তেতাল্লিশ চুয়াল্লিশ পঁয়তাল্লিশ ছেচল্লিশ সাতচল্লিশ আটচল্লিশ ঊনপঞ্চাশ পঞ্চাশ একান্ন বাহান্ন তিপ্পান্ন চুয়ান্ন পঞ্চান্ন ছাপ্পান্ন সাতান্ন আটান্ন ঊনষাট ষাট একষট্টি বাষট্টি তেষট্টি চৌষট্টি পঁয়ষট্টি ছেষট্টি সাতষট্টি আটষট্টি ঊনসত্তর সত্তর একাত্তর বাহাত্তর তিয়াত্তর চুয়াত্তর পঁচাত্তর ছিয়াত্তর সাতাত্তর আটাত্তর ঊনআশি আশি একাশি বিরাশি তিরাশি চুরাশি পঁচাশি ছিয়াশি সাতাশি অষ্টাশি ঊননব্বই নব্বই একানব্বই বিরানব্বই তিরানব্বই চুরানব্বই পঁচানব্বই ছিয়ানব্বই সাতানব্বই আটানব্বই নিরানব্বই'.split(' ');

function southAsian(t: string[], w: { hundred: string; thousand: string; lakh: string; crore: string; big: string[]; minus: string }) {
  const below100 = (n: number): string => t[n]!;
  const below1000 = (n: number): string => {
    const h = Math.floor(n / 100);
    return [h ? `${t[h]} ${w.hundred}` : '', n % 100 ? t[n % 100]! : ''].filter(Boolean).join(' ');
  };
  return (n: bigint, style: WordStyle): string => {
    const go = (v: bigint): string => {
      if (v === 0n) return t[0]!;
      if (v < 0n) return `${w.minus} ${go(-v)}`;
      if (style === 'indian') return indian(v, { below100, below1000, crore: w.crore, lakh: w.lakh, thousand: w.thousand });
      const g = groups(v, w.big.length + 2);
      const parts: string[] = [];
      for (let i = g.length - 1; i >= 0; i--) {
        const x = g[i]!;
        if (!x) continue;
        parts.push(i === 0 ? below1000(x) : `${below1000(x)} ${i === 1 ? w.thousand : w.big[i - 2]}`);
      }
      return parts.join(' ');
    };
    return go(n);
  };
}
const hiInt = southAsian(HI_99, { hundred: 'सौ', thousand: 'हज़ार', lakh: 'लाख', crore: 'करोड़', big: ['मिलियन', 'बिलियन', 'ट्रिलियन', 'क्वाड्रिलियन', 'क्विंटिलियन', 'सेक्स्टिलियन'], minus: 'ऋण' });
const bnInt = southAsian(BN_99, { hundred: 'শো', thousand: 'হাজার', lakh: 'লাখ', crore: 'কোটি', big: ['মিলিয়ন', 'বিলিয়ন', 'ট্রিলিয়ন', 'কোয়াড্রিলিয়ন', 'কুইন্টিলিয়ন', 'সেক্সটিলিয়ন'], minus: 'মাইনাস' });

// ---------- the languages ----------
const ruMajor = (one: string, few: string, many: string): Name => (n) => ruForm(n, one, few, many);

const SPELLERS: Record<string, Speller> = {
  es: { zero: 'cero', minus: 'menos', point: 'coma', and: 'y', money: { inr: ['rupias', 'paise'], usd: ['dólares', 'centavos'] }, int: esInt },
  fr: { zero: 'zéro', minus: 'moins', point: 'virgule', and: 'et', money: { inr: ['roupies', 'paisa'], usd: ['dollars', 'centimes'] }, int: frInt },
  de: { zero: 'null', minus: 'minus', point: 'Komma', and: 'und', money: { inr: ['Rupien', 'Paise'], usd: ['Dollar', 'Cent'] }, int: deInt },
  'pt-BR': { zero: 'zero', minus: 'menos', point: 'vírgula', and: 'e', money: { inr: ['rupias', 'paise'], usd: ['dólares', 'centavos'] }, int: ptInt },
  ru: { zero: 'ноль', minus: 'минус', point: 'запятая', and: 'и', money: { inr: [ruMajor('рупия', 'рупии', 'рупий'), ruMajor('пайса', 'пайсы', 'пайс')], usd: [ruMajor('доллар', 'доллара', 'долларов'), ruMajor('цент', 'цента', 'центов')] }, int: ruInt },
  tr: { zero: 'sıfır', minus: 'eksi', point: 'virgül', and: 've', money: { inr: ['rupi', 'paise'], usd: ['dolar', 'sent'] }, int: trInt },
  id: { zero: 'nol', minus: 'negatif', point: 'koma', and: 'dan', money: { inr: ['rupee', 'paise'], usd: ['dolar', 'sen'] }, int: idInt },
  hi: { zero: 'शून्य', minus: 'ऋण', point: 'दशमलव', and: 'और', money: { inr: ['रुपये', 'पैसे'], usd: ['डॉलर', 'सेंट'] }, int: hiInt },
  bn: { zero: 'শূন্য', minus: 'মাইনাস', point: 'দশমিক', and: 'এবং', money: { inr: ['টাকা', 'পয়সা'], usd: ['ডলার', 'সেন্ট'] }, int: bnInt },
};

/** Whether a language has its own number words (English uses src/convert/numbers.ts). */
export const hasWords = (code: string): boolean => code in SPELLERS;

const nameOf = (name: Name, n: bigint): string => (typeof name === 'string' ? name : name(n));

/** Turn "1234.56" into words in a language, in the same shapes as `numberToWords` (plain, rupees or dollars). */
export function numberToWordsIn(code: string, input: string, style: WordStyle, currency: Money = 'none'): LocalWords {
  const s = SPELLERS[code];
  if (!s) {
    const r = numberToWords(input, style, currency);
    return r.error ? { ...r, errorKey: /too large/.test(r.error) ? 'big' : 'bad' } : r;
  }
  const cleaned = input.trim().replace(/[,\s_]/g, '');
  if (!/^-?\d+(\.\d+)?$/.test(cleaned)) return { words: '', error: 'bad', errorKey: 'bad' };
  const negative = cleaned.startsWith('-');
  const [whole = '0', fraction = ''] = cleaned.replace('-', '').split('.');
  try {
    const big = BigInt(whole);
    if (currency === 'none') {
      const digits = fraction ? ` ${s.point} ${[...fraction].map((d) => s.int(BigInt(d), 'international')).join(' ')}` : '';
      return { words: `${negative ? `${s.minus} ` : ''}${s.int(big, style)}${digits}` };
    }
    const [major, minor] = s.money[currency];
    const cents = BigInt((fraction + '00').slice(0, 2));
    // Russian rupees and paise are feminine, dollars and cents masculine.
    const fem = code === 'ru' && currency === 'inr';
    const text = `${s.int(big, style, fem)} ${nameOf(major, big)}${cents > 0n ? ` ${s.and} ${s.int(cents, style, fem)} ${nameOf(minor, cents)}` : ''}`;
    return { words: negative ? `${s.minus} ${text}` : text };
  } catch (error) {
    if (error instanceof RangeError) return { words: '', error: 'big', errorKey: 'big' };
    throw error;
  }
}
