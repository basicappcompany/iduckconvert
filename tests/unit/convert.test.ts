import { describe, expect, it } from 'vitest';
import { csvToJson, jsonToCsv, jsonToXml, jsonToYaml, markdownToHtml, parseCsv, stringifyCsv, xmlToJson, yamlToJson } from '../../src/convert/data';
import { CASES, fromRoman, hslToRgb, numberToWords, parseBase, parseHex, parseHsl, parseRgb, rgbToHsl, toHex, toRoman } from '../../src/convert/numbers';
import { UNIT_SETS, convertUnit, formatNumber } from '../../src/convert/units';
import { DATE_FORMATS, compareZones, parseDateInput, wallTimeToInstant } from '../../src/convert/time';

describe('csv', () => {
  it('handles quotes, commas, doubled quotes and newlines in fields', () => {
    expect(parseCsv('a,b\n"x, y","he said ""hi"""\n"line1\nline2",z')).toEqual([['a', 'b'], ['x, y', 'he said "hi"'], ['line1\nline2', 'z']]);
  });
  it('detects semicolons and tabs', () => {
    expect(parseCsv('a;b\n1;2')).toEqual([['a', 'b'], ['1', '2']]);
    expect(parseCsv('a\tb\n1\t2')).toEqual([['a', 'b'], ['1', '2']]);
  });
  it('round-trips through JSON', () => {
    const json = csvToJson('name,age\nAsha,29\nBen,34');
    expect(JSON.parse(json)).toEqual([{ name: 'Asha', age: 29 }, { name: 'Ben', age: 34 }]);
    expect(jsonToCsv(json)).toBe('name,age\r\nAsha,29\r\nBen,34');
  });
  it('flattens nested objects into dotted columns', () => {
    expect(jsonToCsv('[{"a":{"b":1},"c":"x,y"}]')).toBe('a.b,c\r\n1,"x,y"');
  });
  it('keeps leading zeros as text', () => {
    expect(JSON.parse(csvToJson('zip\n01234'))).toEqual([{ zip: '01234' }]);
  });
  it('quotes cells that need it', () => {
    expect(stringifyCsv([['a"b', 'c']])).toBe('"a""b",c');
  });
});

describe('xml, yaml, markdown', () => {
  it('json to xml and back', () => {
    const xml = jsonToXml('{"book":{"title":"Quack"}}');
    expect(xml).toContain('<book>');
    expect(JSON.parse(xmlToJson(xml))).toEqual({ '?xml': { '@version': '1.0', '@encoding': 'UTF-8' }, book: { title: 'Quack' } });
  });
  it('yaml round trip', () => {
    expect(JSON.parse(yamlToJson('a: 1\nb:\n  - x\n  - y'))).toEqual({ a: 1, b: ['x', 'y'] });
    expect(jsonToYaml('{"a":1}')).toBe('a: 1\n');
  });
  it('markdown to html', () => {
    expect(markdownToHtml('# Hi\n\n**bold**')).toContain('<h1>Hi</h1>');
  });
});

describe('number bases', () => {
  it('parses and rejects bad digits', () => {
    expect(parseBase('ff', 16)).toBe(255n);
    expect(parseBase('0xFF', 16)).toBe(255n);
    expect(parseBase('1010', 2)).toBe(10n);
    expect(parseBase('12', 2)).toBeNull();
    expect(parseBase('', 10)).toBeNull();
    expect(parseBase('-5', 10)).toBe(-5n);
  });
});

describe('number to words', () => {
  it('international', () => {
    expect(numberToWords('1234567', 'international').words).toBe('one million two hundred and thirty-four thousand five hundred and sixty-seven');
    expect(numberToWords('0', 'international').words).toBe('zero');
    expect(numberToWords('12.05', 'international').words).toBe('twelve point zero five');
  });
  it('Indian', () => {
    expect(numberToWords('1234567', 'indian').words).toBe('twelve lakh thirty-four thousand five hundred and sixty-seven');
    expect(numberToWords('250000000', 'indian').words).toBe('twenty-five crore');
    expect(numberToWords('1000000000000', 'indian').words).toBe('one lakh crore');
  });
  it('currency like a cheque', () => {
    expect(numberToWords('1250.50', 'indian', 'inr').words).toBe('Rupees One Thousand Two Hundred Fifty and Paise Fifty Only');
  });
  it('rejects text', () => {
    expect(numberToWords('abc', 'indian').error).toBeTruthy();
  });
});

describe('roman', () => {
  it('converts both ways', () => {
    expect(toRoman(1994)).toBe('MCMXCIV');
    expect(fromRoman('MCMXCIV')).toBe(1994);
    expect(toRoman(0)).toBeNull();
    expect(toRoman(4000)).toBeNull();
    expect(fromRoman('IIII')).toBeNull();
    expect(fromRoman('VX')).toBeNull();
  });
});

describe('text case', () => {
  const run = (id: string, s: string) => CASES.find((c) => c.id === id)!.apply(s);
  it('works', () => {
    expect(run('camel', 'hello big world')).toBe('helloBigWorld');
    expect(run('snake', 'Hello Big-World')).toBe('hello_big_world');
    expect(run('title', 'the quick brown fox')).toBe('The Quick Brown Fox');
    expect(run('sentence', 'hello there. how are you')).toBe('Hello there. How are you');
    expect(run('constant', 'max retries')).toBe('MAX_RETRIES');
  });
});

describe('colours', () => {
  it('hex, rgb and hsl agree', () => {
    expect(parseHex('#f80')).toEqual({ r: 255, g: 136, b: 0 });
    expect(toHex({ r: 255, g: 136, b: 0 })).toBe('#FF8800');
    expect(rgbToHsl({ r: 255, g: 0, b: 0 })).toEqual({ h: 0, s: 100, l: 50 });
    expect(hslToRgb(120, 100, 50)).toEqual({ r: 0, g: 255, b: 0 });
    expect(parseRgb('rgb(10, 20, 30)')).toEqual({ r: 10, g: 20, b: 30 });
    expect(parseRgb('300,0,0')).toBeNull();
    expect(parseHsl('hsl(240, 100%, 50%)')).toEqual({ r: 0, g: 0, b: 255 });
  });
});

describe('units', () => {
  const conv = (set: string, from: string, to: string, v: number) => convertUnit(UNIT_SETS[set]!, from, to, v);
  it('linear', () => {
    expect(conv('length', 'km', 'mi', 1)).toBeCloseTo(0.621371, 5);
    expect(conv('length', 'ft', 'in', 1)).toBeCloseTo(12, 9);
    expect(conv('weight', 'kg', 'lb', 1)).toBeCloseTo(2.204623, 5);
    expect(conv('data', 'gb', 'mb', 1)).toBe(1000);
    expect(conv('data', 'gib', 'mib', 1)).toBe(1024);
    expect(conv('area', 'acre', 'sqft', 1)).toBeCloseTo(43560, 3);
    expect(conv('indian-land', 'acre', 'sqft', 1)).toBe(43560);
  });
  it('temperature', () => {
    expect(conv('temperature', 'c', 'f', 100)).toBeCloseTo(212, 9);
    expect(conv('temperature', 'f', 'c', -40)).toBeCloseTo(-40, 9);
    expect(conv('temperature', 'c', 'k', 0)).toBeCloseTo(273.15, 9);
  });
  it('bad input', () => {
    expect(conv('length', 'm', 'ft', Number.NaN)).toBeNaN();
  });
  it('formats without float noise', () => {
    expect(formatNumber(0.1 + 0.2)).toBe('0.3');
    expect(formatNumber(1e21)).toContain('e');
  });
  it('every set has its default units', () => {
    for (const [key, set] of Object.entries(UNIT_SETS)) {
      const ids = set.units.map((x) => x.id);
      expect(ids, key).toContain(set.defaultFrom);
      expect(ids, key).toContain(set.defaultTo);
      expect(new Set(ids).size, key).toBe(ids.length);
    }
  });
});

describe('time', () => {
  it('IST is 5:30 ahead of UTC and handles a date shift', () => {
    const instant = wallTimeToInstant(2026, 3, 4, 23, 0, 'Asia/Kolkata');
    expect(instant.toISOString()).toBe('2026-03-04T17:30:00.000Z');
    const rows = compareZones(instant, 'Asia/Kolkata', [{ label: 'Tokyo', zone: 'Asia/Tokyo' }, { label: 'NY', zone: 'America/New_York' }]);
    expect(rows[0]).toMatchObject({ time: '02:30', dayShift: 1, offset: 'UTC+09:00' });
    expect(rows[1]).toMatchObject({ time: '12:30', dayShift: 0, offset: 'UTC-05:00' });
  });
  it('daylight saving: London is +1 in summer', () => {
    const instant = wallTimeToInstant(2026, 7, 1, 12, 0, 'Europe/London');
    expect(instant.toISOString()).toBe('2026-07-01T11:00:00.000Z');
  });
  it('date formats', () => {
    const f = (id: string) => DATE_FORMATS.find((x) => x.id === id)!.format(2026, 3, 4);
    expect(f('iso')).toBe('2026-03-04');
    expect(f('dmy-slash')).toBe('04/03/2026');
    expect(f('mdy-slash')).toBe('03/04/2026');
    expect(f('ordinal')).toBe('Wednesday, 4th March 2026');
  });
  it('parses dates and rejects impossible ones', () => {
    expect(parseDateInput('04/03/2026', 'dmy')).toEqual([2026, 3, 4]);
    expect(parseDateInput('04/03/2026', 'mdy')).toEqual([2026, 4, 3]);
    expect(parseDateInput('31/02/2026', 'dmy')).toBeNull();
  });
});
