/**
 * Facts shown on the unit converter pages: the exact factor as text, a table of common values, where the factor comes
 * from, and about 30 popular conversion pairs that each get a page of their own (like /cm-to-inches/).
 */
import { UNIT_SETS, convertUnit, formatNumber, type UnitSet } from '../convert/units';
import type { Faq } from './content';

export interface UnitSource {
  /** What defines the factor, in a sentence a reader can look up. */
  text: string;
  /** Link to the reference, when there is a stable public one. */
  url?: string;
}

export const UNIT_SOURCES: Record<string, UnitSource> = {
  length: { text: 'The international inch is defined as exactly 25.4 millimetres, and the foot, yard and mile follow from it (NIST Special Publication 811, Appendix B; the 1959 international yard and pound agreement). The nautical mile is exactly 1,852 metres.', url: 'https://www.nist.gov/pml/special-publication-811' },
  weight: { text: 'The international avoirdupois pound is defined as exactly 0.45359237 kilograms, and the ounce and stone follow from it (NIST Special Publication 811, Appendix B; the 1959 international yard and pound agreement). The quintal here is the metric quintal of 100 kg.', url: 'https://www.nist.gov/pml/special-publication-811' },
  temperature: { text: 'The kelvin and the degree Celsius are defined in the SI Brochure of the BIPM (0 °C is 273.15 K exactly); the Fahrenheit scale is defined from Celsius as °F = °C × 9/5 + 32.', url: 'https://www.bipm.org/en/publications/si-brochure' },
  area: { text: 'Areas follow from the exact length definitions: 1 square foot is 0.09290304 square metres exactly, and the international acre (43,560 square feet) is 4,046.8564224 square metres exactly (NIST Special Publication 811). The older US survey acre differs very slightly and is not used here.', url: 'https://www.nist.gov/pml/special-publication-811' },
  volume: { text: 'The US gallon is defined as 231 cubic inches, exactly 3.785411784 litres (NIST Handbook 44). The UK (imperial) gallon is exactly 4.54609 litres (UK Weights and Measures Act 1985). The cup, pint, quart and fluid ounce here are US customary units.', url: 'https://www.nist.gov/pml/owm/nist-handbook-44-current-edition' },
  speed: { text: 'Speeds follow from the exact length and time definitions: 1 mile per hour is exactly 0.44704 metres per second, and 1 knot is exactly 1,852 metres per hour (NIST Special Publication 811). Mach 1 depends on temperature; the figure used here is the speed of sound at sea level in standard air, about 340.29 m/s, and is approximate.', url: 'https://www.nist.gov/pml/special-publication-811' },
  time: { text: 'The second is defined by the BIPM (SI Brochure). A minute, hour, day and week are exact multiples; a month (30.436875 days on average) and a year (365.25 days, the Julian year) are conventional averages, not exact calendar lengths.', url: 'https://www.bipm.org/en/publications/si-brochure' },
  data: { text: 'KB, MB, GB and TB use the SI decimal prefixes (1 KB = 1,000 bytes); KiB, MiB, GiB and TiB use the binary prefixes standardised in IEC 80000-13 (1 KiB = 1,024 bytes). The SI prefixes are defined in the BIPM SI Brochure.', url: 'https://www.bipm.org/en/publications/si-brochure' },
  pressure: { text: 'The standard atmosphere is exactly 101,325 pascals (BIPM) and the bar is exactly 100,000 pascals. The pound per square inch follows from the exact pound and inch definitions (NIST Special Publication 811). The millimetre of mercury is the conventional value 133.322387415 pascals and is treated as approximate.', url: 'https://www.nist.gov/pml/special-publication-811' },
  energy: { text: 'The thermochemical calorie is exactly 4.184 joules (NIST Special Publication 811), a kilowatt-hour is exactly 3.6 million joules, and a watt-hour is exactly 3,600 joules. The BTU used here (International Table) is 1,055.05585262 joules and is treated as approximate.', url: 'https://www.nist.gov/pml/special-publication-811' },
  'indian-land': { text: 'The square foot, square yard (gaj), square metre, acre and hectare are exact and follow the NIST definitions. Local units such as the bigha, biswa, katha, guntha and cent have no single national standard: the values here are commonly cited local figures, not read from each state\'s official land-revenue document, so check the record for your own district before relying on them.' },
  'number-scale': { text: 'The Indian numbering system names 100,000 a lakh and 10,000,000 a crore; the international system names 1,000,000 a million and 1,000,000,000 a billion (short scale). These are definitions, so the relationships are exact.' },
};

/** Units whose size is a convention or an approximation, so a factor involving them is not called "exact". */
const APPROXIMATE: Record<string, string[]> = {
  speed: ['mach'],
  time: ['mo', 'yr'],
  pressure: ['mmhg'],
  energy: ['btu'],
  'indian-land': ['guntha', 'cent', 'katha-wb', 'biswa-up', 'bigha-up', 'bigha-raj', 'bigha-gj', 'bigha-wb', 'bigha-as'],
};

export const isExactPair = (setKey: string, a: string, b: string): boolean => !(APPROXIMATE[setKey] ?? []).some((id) => id === a || id === b);

const PLURALS: Record<string, string> = { foot: 'feet', inch: 'inches', 'square foot': 'square feet', 'square inch': 'square inches', 'fluid ounce': 'fluid ounces', lakh: 'lakh', crore: 'crore', 'kilocalorie': 'kilocalories', 'cup': 'cups', 'stone': 'stone' };

export function unitWord(setKey: string, id: string, amount: number): string {
  const set = UNIT_SETS[setKey]!;
  const u = set.units.find((x) => x.id === id)!;
  const name = u.name.replace(/\s*\(.*\)/, '').toLowerCase();
  if (amount === 1) return name;
  return PLURALS[name] ?? (/(s|x)$/.test(name) ? name : `${name}s`);
}

/** "1 inch = 2.54 centimetres exactly." Temperature gets its own formula. */
export function factorStatement(setKey: string, from: string, to: string): string {
  const set = UNIT_SETS[setKey]!;
  if (setKey === 'temperature') {
    if (from === 'c' && to === 'f') return '°F = °C × 9 ÷ 5 + 32, so 0 °C = 32 °F and 100 °C = 212 °F exactly.';
    if (from === 'f' && to === 'c') return '°C = (°F − 32) × 5 ÷ 9, so 32 °F = 0 °C and 212 °F = 100 °C exactly.';
    if (from === 'c' && to === 'k') return 'K = °C + 273.15 exactly.';
    return `Temperature converts by a formula, not a single factor: ${formatNumber(convertUnit(set, from, to, 0))} at 0 ${set.units.find((u) => u.id === from)!.symbol}.`;
  }
  const value = convertUnit(set, from, to, 1);
  const exact = isExactPair(setKey, from, to);
  return `1 ${unitWord(setKey, from, 1)} = ${formatNumber(value)} ${unitWord(setKey, to, value)}${exact ? ' exactly' : ' (approximately; see the source below)'}.`;
}

const STEP_VALUES = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50, 75, 100, 250];
const TEMP_C = [-40, -20, -10, 0, 5, 10, 15, 20, 25, 30, 37, 40, 50, 60, 80, 100, 150, 200];
const TEMP_F = [-40, 0, 14, 32, 50, 68, 72, 86, 98.6, 100, 104, 150, 180, 212, 250, 300, 350, 400];

export interface TableRow {
  from: string;
  to: string;
}

/** About 18 common values, so the page has real numbers a reader can look up without using the tool. */
export function valueTable(setKey: string, from: string, to: string): TableRow[] {
  const set = UNIT_SETS[setKey]!;
  const fu = set.units.find((u) => u.id === from)!;
  const tu = set.units.find((u) => u.id === to)!;
  const values = setKey === 'temperature' ? (from === 'f' ? TEMP_F : TEMP_C) : STEP_VALUES;
  return values.map((v) => ({
    from: `${formatNumber(v)} ${fu.symbol}`,
    to: `${formatNumber(convertUnit(set, from, to, v))} ${tu.symbol}`,
  }));
}

export interface UnitPair {
  slug: string;
  set: string;
  from: string;
  to: string;
  /** Two sentences of practical context for this exact pair. */
  note: string;
  /** One question that only makes sense for this pair, with its answer. */
  faq: Faq;
}

const P = (slug: string, set: string, from: string, to: string, note: string, q: string, a: string): UnitPair => ({ slug, set, from, to, note, faq: { q, a } });

export const UNIT_PAIRS: readonly UnitPair[] = [
  P('cm-to-inches', 'length', 'cm', 'in', 'Rulers in India and Europe are marked in centimetres, while screen sizes, photo sizes and many clothing sizes are given in inches. One inch is exactly 2.54 cm, so you divide by 2.54.', 'How tall is 170 cm in feet and inches?', '170 cm is 66.93 inches, which is 5 feet 6.9 inches, usually written as 5 ft 7 in.'),
  P('inches-to-cm', 'length', 'in', 'cm', 'Phone, laptop and TV screens are sold by their diagonal in inches. Multiply inches by 2.54 for centimetres; the factor is exact, so there is no rounding in the rule itself.', 'How many centimetres is a 6.1-inch phone screen?', '6.1 inches is 15.49 cm measured along the diagonal.'),
  P('feet-to-metres', 'length', 'ft', 'm', 'Building heights, flight altitudes and room sizes are often quoted in feet. One foot is exactly 0.3048 metres, so multiply feet by 0.3048.', 'How many metres is 6 feet?', '6 feet is exactly 1.8288 metres, about 1.83 m.'),
  P('metres-to-feet', 'length', 'm', 'ft', 'Divide metres by 0.3048 (or multiply by 3.28084) to get feet. A rough check is to multiply by 3 and add a tenth.', 'How many feet is 100 metres?', '100 metres is 328.084 feet, about 328 ft 1 in.'),
  P('miles-to-km', 'length', 'mi', 'km', 'Road signs in the UK and US use miles, and almost everywhere else uses kilometres. Multiply miles by 1.609344; a quick estimate is miles times 1.6.', 'How far is a marathon of 26.2 miles in kilometres?', '26.2 miles is 42.16 km; the official marathon distance is 42.195 km.'),
  P('km-to-miles', 'length', 'km', 'mi', 'Multiply kilometres by 0.621371, or by 0.6 for a quick estimate. Running distances are the common use: 5K, 10K and the half marathon are all given in kilometres.', 'How many miles is a 10 km run?', '10 km is 6.21 miles.'),
  P('yards-to-metres', 'length', 'yd', 'm', 'Yards are used for football pitches, fabric and golf. One yard is exactly 0.9144 metres, so a yard is a little shorter than a metre.', 'How many metres is a 100-yard football pitch?', '100 yards is exactly 91.44 metres.'),
  P('inches-to-feet', 'length', 'in', 'ft', 'Divide inches by 12 to get feet. For a height written as feet and inches, divide, then turn the leftover decimal back into inches by multiplying by 12.', 'How many feet and inches is 100 inches?', '100 inches is 8.333 feet, which is 8 feet 4 inches.'),
  P('kg-to-lbs', 'weight', 'kg', 'lb', 'Airlines, gyms and body-weight charts switch between kilograms and pounds. Multiply kilograms by 2.20462; doubling and adding a tenth is a quick estimate.', 'How many pounds is a 23 kg suitcase?', '23 kg is 50.71 pounds, so a 23 kg bag is just over a 50 lb limit.'),
  P('lbs-to-kg', 'weight', 'lb', 'kg', 'The pound is exactly 0.45359237 kg, so multiply pounds by 0.45359237. Halving pounds and taking off a tenth of the result is a fair mental estimate.', 'How many kilograms is 150 pounds?', '150 pounds is 68.04 kg.'),
  P('ounces-to-grams', 'weight', 'oz', 'g', 'Recipes and postal rates use ounces; scales and labels elsewhere use grams. One avoirdupois ounce is exactly 28.349523125 grams, often rounded to 28.35.', 'How many grams is 8 ounces?', '8 ounces is 226.8 grams.'),
  P('grams-to-ounces', 'weight', 'g', 'oz', 'Divide grams by 28.3495 for ounces. Note that fluid ounces measure volume, not weight, so this page is for weight only.', 'How many ounces is 500 grams?', '500 grams is 17.64 ounces, a little over a pound.'),
  P('stone-to-kg', 'weight', 'st', 'kg', 'The stone, used in the UK and Ireland for body weight, is 14 pounds, exactly 6.35029318 kg. A weight given as stone and pounds needs the pounds added: 11 st 4 lb is 11.29 stone.', 'How many kilograms is 12 stone?', '12 stone is 76.2 kg.'),
  P('celsius-to-fahrenheit', 'temperature', 'c', 'f', 'Weather, cooking and body temperature are quoted in Celsius in most of the world and Fahrenheit in the US. Multiply by 9, divide by 5 and add 32.', 'What is 37 °C in Fahrenheit?', '37 °C is 98.6 °F, normal human body temperature.'),
  P('fahrenheit-to-celsius', 'temperature', 'f', 'c', 'Subtract 32, multiply by 5 and divide by 9. Oven recipes from the US are the usual reason: 350 °F is 176.7 °C, usually set as 180 °C.', 'What is 98.6 °F in Celsius?', '98.6 °F is exactly 37 °C.'),
  P('sq-ft-to-sq-m', 'area', 'sqft', 'sqm', 'Flats and plots in India are sold in square feet, while many other countries quote square metres. Multiply by 0.09290304; the factor is the square of the length factor, not 0.3048.', 'How many square metres is a 1,000 sq ft flat?', '1,000 sq ft is 92.9 square metres.'),
  P('sq-m-to-sq-ft', 'area', 'sqm', 'sqft', 'Multiply square metres by 10.7639 to get square feet. A plot of 100 square metres is about 1,076 square feet.', 'How many square feet is 100 square metres?', '100 square metres is 1,076.39 square feet.'),
  P('acre-to-sq-ft', 'area', 'acre', 'sqft', 'An acre is exactly 43,560 square feet, historically the area a team of oxen could plough in a day. It is a size you can picture as a little less than a football field.', 'How many square feet are in half an acre?', 'Half an acre is 21,780 square feet.'),
  P('hectare-to-acre', 'area', 'ha', 'acre', 'Land is sold in hectares in most countries and acres in the US, UK and India. A hectare is 10,000 square metres, about 2.47 acres.', 'How many acres is 5 hectares?', '5 hectares is 12.355 acres.'),
  P('acre-to-bigha', 'indian-land', 'acre', 'bigha-up', 'A bigha is not one fixed size: it differs by state and sometimes by district, so the number of bigha in an acre depends on where the land is. The table below shows an acre in the bigha of several states.', 'Is a bigha the same everywhere in India?', 'No. It is about 27,000 sq ft in Uttar Pradesh, about 17,400 in Gujarat and about 14,400 in West Bengal and Assam, so an acre is a different number of bigha in each. Always use the figure in your local land record.'),
  P('litres-to-gallons', 'volume', 'l', 'gal', 'This page uses the US gallon of 3.785411784 litres. The UK gallon is larger, 4.54609 litres, so the same number of litres is fewer UK gallons.', 'How many UK gallons is 50 litres?', '50 litres is 11.0 UK gallons, or 13.2 US gallons.'),
  P('gallons-to-litres', 'volume', 'gal', 'l', 'Multiply US gallons by 3.785411784. Fuel prices and tank sizes in American cars are in gallons; for a UK gallon multiply by 4.54609 instead.', 'How many litres is 10 US gallons?', '10 US gallons is 37.85 litres.'),
  P('cups-to-ml', 'volume', 'cup', 'ml', 'American recipes use the US cup of about 236.6 ml. Metric cups in Australia and elsewhere are 250 ml, so check which one a recipe means.', 'How many millilitres is 2 cups?', '2 US cups is 473.18 ml, about 473 ml.'),
  P('mph-to-kmh', 'speed', 'mph', 'kmh', 'Speed limits and car dials in the UK and US are in miles per hour. Multiply by 1.609344 to get km/h.', 'How many km/h is 70 mph?', '70 mph is 112.65 km/h.'),
  P('kmh-to-mph', 'speed', 'kmh', 'mph', 'Multiply kilometres per hour by 0.621371. It is useful when driving a rental car abroad whose dial shows only one unit.', 'How many mph is 120 km/h?', '120 km/h is 74.56 mph.'),
  P('mb-to-gb', 'data', 'mb', 'gb', 'This page uses the decimal system used by storage makers and data plans, where 1 GB is 1,000 MB. Some operating systems show 1,024-based figures under the same names.', 'How many gigabytes is 2,500 MB?', '2,500 MB is 2.5 GB in the decimal system.'),
  P('gb-to-mb', 'data', 'gb', 'mb', 'Multiply gigabytes by 1,000 for megabytes in the decimal system. The binary figure, 1 GiB = 1,024 MiB, is what some systems show, so a 4 GB file can read as 3.7 GiB.', 'How many megabytes is 4 GB?', '4 GB is 4,000 MB, which is 3,815 MiB in binary units.'),
  P('kb-to-mb', 'data', 'kb', 'mb', 'Photos, documents and email attachments are quoted in kilobytes and megabytes. Divide kilobytes by 1,000 in the decimal system.', 'How many megabytes is a 750 KB photo?', '750 KB is 0.75 MB.'),
  P('psi-to-bar', 'pressure', 'psi', 'bar', 'Car and bicycle tyre pressures are given in psi on most pumps, bar in much of Europe. Divide psi by 14.5038 to get bar.', 'How many bar is 32 psi?', '32 psi is 2.206 bar.'),
  P('kcal-to-kj', 'energy', 'kcal', 'kj', 'Food labels in India and the US show kilocalories (written as Calories), while Europe and Australia also show kilojoules. Multiply kcal by 4.184.', 'How many kilojoules is a 250 kcal snack?', '250 kcal is 1,046 kJ.'),
  P('lakh-to-million', 'number-scale', 'lakh', 'million', 'A lakh is 100,000, so ten lakh make a million. Indian reports, news and prices use lakh and crore, while international reports use million and billion.', 'How many lakh is a million?', 'One million is 10 lakh.'),
  P('crore-to-million', 'number-scale', 'crore', 'million', 'A crore is 10,000,000, which is ten million; one hundred crore make a billion. Use it when converting Indian figures for an international audience.', 'How many crore is a billion?', 'One billion is 100 crore.'),
];

export const pairBySlug = (slug: string): UnitPair | undefined => UNIT_PAIRS.find((p) => p.slug === slug);
export const pairsForSet = (setKey: string): UnitPair[] => UNIT_PAIRS.filter((p) => p.set === setKey);

/** Where the acre-to-bigha table gets its rows: an acre expressed in the bigha of each state listed. */
export function bighaRows(): { state: string; sqft: string; perAcre: string }[] {
  const set: UnitSet = UNIT_SETS['indian-land']!;
  return set.units
    .filter((u) => u.id.startsWith('bigha-'))
    .map((u) => ({ state: u.name.replace(/^Bigha \(/, '').replace(/\)$/, ''), sqft: formatNumber(u.factor), perAcre: formatNumber(convertUnit(set, 'acre', u.id, 1)) }));
}

/** The words a pair page uses for its own name, e.g. "cm to inches". */
export function pairName(pair: UnitPair): string {
  const fu = UNIT_SETS[pair.set]!.units.find((u) => u.id === pair.from)!;
  const tu = UNIT_SETS[pair.set]!.units.find((u) => u.id === pair.to)!;
  return `${fu.symbol} to ${tu.symbol}`;
}
