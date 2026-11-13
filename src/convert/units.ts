/** Unit tables. Every linear unit holds its size in the base unit; temperature has its own functions. */
export interface Unit {
  id: string;
  name: string;
  symbol: string;
  /** How many base units one of these is. */
  factor: number;
}

export interface UnitSet {
  title: string;
  base: string;
  units: Unit[];
  defaultFrom: string;
  defaultTo: string;
  note?: string;
  /** Temperature is not a ratio, so it converts through these two functions. */
  toBase?: (id: string, value: number) => number;
  fromBase?: (id: string, value: number) => number;
}

const u = (id: string, name: string, symbol: string, factor: number): Unit => ({ id, name, symbol, factor });

export const UNIT_SETS: Record<string, UnitSet> = {
  length: {
    title: 'Length',
    base: 'metre',
    defaultFrom: 'm',
    defaultTo: 'ft',
    units: [
      u('mm', 'Millimetre', 'mm', 0.001), u('cm', 'Centimetre', 'cm', 0.01), u('m', 'Metre', 'm', 1), u('km', 'Kilometre', 'km', 1000),
      u('in', 'Inch', 'in', 0.0254), u('ft', 'Foot', 'ft', 0.3048), u('yd', 'Yard', 'yd', 0.9144), u('mi', 'Mile', 'mi', 1609.344),
      u('nmi', 'Nautical mile', 'nmi', 1852),
    ],
  },
  weight: {
    title: 'Weight',
    base: 'kilogram',
    defaultFrom: 'kg',
    defaultTo: 'lb',
    units: [
      u('mg', 'Milligram', 'mg', 0.000001), u('g', 'Gram', 'g', 0.001), u('kg', 'Kilogram', 'kg', 1), u('t', 'Tonne', 't', 1000),
      u('oz', 'Ounce', 'oz', 0.028349523125), u('lb', 'Pound', 'lb', 0.45359237), u('st', 'Stone', 'st', 6.35029318), u('quintal', 'Quintal', 'q', 100),
    ],
  },
  temperature: {
    title: 'Temperature',
    base: 'kelvin',
    defaultFrom: 'c',
    defaultTo: 'f',
    units: [u('c', 'Celsius', '°C', 1), u('f', 'Fahrenheit', '°F', 1), u('k', 'Kelvin', 'K', 1)],
    toBase: (id, v) => (id === 'c' ? v + 273.15 : id === 'f' ? ((v - 32) * 5) / 9 + 273.15 : v),
    fromBase: (id, v) => (id === 'c' ? v - 273.15 : id === 'f' ? ((v - 273.15) * 9) / 5 + 32 : v),
  },
  area: {
    title: 'Area',
    base: 'square metre',
    defaultFrom: 'sqm',
    defaultTo: 'sqft',
    units: [
      u('sqcm', 'Square centimetre', 'cm²', 0.0001), u('sqm', 'Square metre', 'm²', 1), u('sqkm', 'Square kilometre', 'km²', 1e6),
      u('sqin', 'Square inch', 'in²', 0.00064516), u('sqft', 'Square foot', 'ft²', 0.09290304), u('sqyd', 'Square yard', 'yd²', 0.83612736),
      u('acre', 'Acre', 'ac', 4046.8564224), u('ha', 'Hectare', 'ha', 10000), u('sqmi', 'Square mile', 'mi²', 2589988.110336),
    ],
  },
  volume: {
    title: 'Volume',
    base: 'litre',
    defaultFrom: 'l',
    defaultTo: 'gal',
    units: [
      u('ml', 'Millilitre', 'ml', 0.001), u('l', 'Litre', 'l', 1), u('m3', 'Cubic metre', 'm³', 1000),
      u('tsp', 'Teaspoon (US)', 'tsp', 0.00492892159375), u('tbsp', 'Tablespoon (US)', 'tbsp', 0.01478676478125), u('floz', 'Fluid ounce (US)', 'fl oz', 0.0295735295625),
      u('cup', 'Cup (US)', 'cup', 0.2365882365), u('pt', 'Pint (US)', 'pt', 0.473176473), u('qt', 'Quart (US)', 'qt', 0.946352946), u('gal', 'Gallon (US)', 'gal', 3.785411784),
      u('galuk', 'Gallon (UK)', 'gal UK', 4.54609),
    ],
  },
  speed: {
    title: 'Speed',
    base: 'metre per second',
    defaultFrom: 'kmh',
    defaultTo: 'mph',
    units: [u('ms', 'Metre per second', 'm/s', 1), u('kmh', 'Kilometre per hour', 'km/h', 1 / 3.6), u('mph', 'Mile per hour', 'mph', 0.44704), u('kn', 'Knot', 'kn', 1852 / 3600), u('fts', 'Foot per second', 'ft/s', 0.3048), u('mach', 'Mach (at sea level)', 'Ma', 340.29)],
  },
  time: {
    title: 'Time',
    base: 'second',
    defaultFrom: 'h',
    defaultTo: 'min',
    note: 'A month is 30.44 days and a year is 365.25 days here, the usual averages.',
    units: [u('ms', 'Millisecond', 'ms', 0.001), u('s', 'Second', 's', 1), u('min', 'Minute', 'min', 60), u('h', 'Hour', 'h', 3600), u('d', 'Day', 'd', 86400), u('wk', 'Week', 'wk', 604800), u('mo', 'Month', 'mo', 2629800), u('yr', 'Year', 'yr', 31557600)],
  },
  data: {
    title: 'Data size',
    base: 'byte',
    defaultFrom: 'mb',
    defaultTo: 'kb',
    note: 'KB, MB and GB here use 1000 (what disk makers and phone plans use). KiB, MiB and GiB use 1024 (what many operating systems show).',
    units: [
      u('bit', 'Bit', 'bit', 0.125), u('b', 'Byte', 'B', 1), u('kb', 'Kilobyte', 'KB', 1e3), u('mb', 'Megabyte', 'MB', 1e6), u('gb', 'Gigabyte', 'GB', 1e9), u('tb', 'Terabyte', 'TB', 1e12),
      u('kib', 'Kibibyte', 'KiB', 1024), u('mib', 'Mebibyte', 'MiB', 1024 ** 2), u('gib', 'Gibibyte', 'GiB', 1024 ** 3), u('tib', 'Tebibyte', 'TiB', 1024 ** 4),
    ],
  },
  pressure: {
    title: 'Pressure',
    base: 'pascal',
    defaultFrom: 'bar',
    defaultTo: 'psi',
    units: [u('pa', 'Pascal', 'Pa', 1), u('kpa', 'Kilopascal', 'kPa', 1000), u('bar', 'Bar', 'bar', 100000), u('psi', 'Pound per square inch', 'psi', 6894.757293168), u('atm', 'Atmosphere', 'atm', 101325), u('mmhg', 'Millimetre of mercury', 'mmHg', 133.322387415)],
  },
  energy: {
    title: 'Energy',
    base: 'joule',
    defaultFrom: 'kcal',
    defaultTo: 'kj',
    units: [u('j', 'Joule', 'J', 1), u('kj', 'Kilojoule', 'kJ', 1000), u('cal', 'Calorie (small)', 'cal', 4.184), u('kcal', 'Kilocalorie (food Calorie)', 'kcal', 4184), u('wh', 'Watt-hour', 'Wh', 3600), u('kwh', 'Kilowatt-hour', 'kWh', 3.6e6), u('btu', 'British thermal unit', 'BTU', 1055.05585262)],
  },
  'indian-land': {
    title: 'Indian land units',
    base: 'square foot',
    defaultFrom: 'bigha-up',
    defaultTo: 'sqft',
    note: 'A bigha is not one fixed size: it differs by state and sometimes by district, and a gaj is a square yard. Check the local revenue record before buying or selling land.',
    units: [
      u('sqft', 'Square foot', 'sq ft', 1), u('sqyd', 'Square yard (gaj)', 'gaj', 9), u('sqm', 'Square metre', 'm²', 10.7639104167), u('acre', 'Acre', 'acre', 43560), u('ha', 'Hectare', 'ha', 107639.104167),
      u('guntha', 'Guntha (Maharashtra, Karnataka)', 'guntha', 1089), u('cent', 'Cent (South India)', 'cent', 435.6), u('katha-wb', 'Katha (West Bengal)', 'katha', 720), u('biswa-up', 'Biswa (Uttar Pradesh)', 'biswa', 1350),
      u('bigha-up', 'Bigha (Uttar Pradesh)', 'bigha UP', 27000), u('bigha-raj', 'Bigha (Rajasthan, pucca)', 'bigha Raj', 27225), u('bigha-gj', 'Bigha (Gujarat)', 'bigha GJ', 17424), u('bigha-wb', 'Bigha (West Bengal)', 'bigha WB', 14400), u('bigha-as', 'Bigha (Assam)', 'bigha AS', 14400),
    ],
  },
};

/** Convert a value; returns NaN when the input is not a finite number. */
export function convertUnit(set: UnitSet, from: string, to: string, value: number): number {
  if (!Number.isFinite(value)) return NaN;
  if (set.toBase && set.fromBase) return set.fromBase(to, set.toBase(from, value));
  const a = set.units.find((x) => x.id === from);
  const b = set.units.find((x) => x.id === to);
  if (!a || !b) return NaN;
  return (value * a.factor) / b.factor;
}

/** Up to 10 significant digits with no trailing zeros; exponent form only for huge or tiny numbers. */
export function formatNumber(n: number): string {
  if (!Number.isFinite(n)) return '';
  if (n === 0) return '0';
  const abs = Math.abs(n);
  if (abs >= 1e15 || abs < 1e-7) return n.toExponential(6).replace(/\.?0+e/, 'e');
  const text = Number(n.toPrecision(10)).toString();
  if (text.includes('e')) return Number(n.toPrecision(10)).toFixed(12).replace(/\.?0+$/, '');
  return text;
}
