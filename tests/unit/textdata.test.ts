import { describe, expect, it } from 'vitest';
import {
  ALL_DATA_SPECS,
  cleanChatText,
  csvToJsonl,
  csvToMarkdownTable,
  jsonToJsonl,
  jsonToToml,
  jsonlToJson,
  markdownTableToCsv,
  parseCues,
  runAnyDataConversion,
  srtToVtt,
  subtitlesToText,
  tomlToJson,
  vttToSrt,
  xmlToCsv,
} from '../../src/convert/textdata';

describe('Markdown tables', () => {
  it('writes an aligned table from CSV, escaping pipes and line breaks', () => {
    const md = csvToMarkdownTable('name,note\nAsha,"a|b"\nBen,"two\nlines"');
    expect(md.split('\n')).toEqual(['| name | note         |', '| ---- | ------------ |', '| Asha | a\\|b         |', '| Ben  | two<br>lines |']);
  });
  it('pads short rows to the widest row', () => {
    expect(csvToMarkdownTable('a,b,c\n1,2').split('\n')[2]).toBe('| 1   | 2   |     |');
  });
  it('turns a table back into CSV, ignoring the text around it', () => {
    const csv = markdownTableToCsv('Here you go:\n\n| name | city |\n| :--- | ---: |\n| Asha | Pune |\n| Ben | Austin, TX |\n\nThanks!');
    expect(csv).toBe('name,city\r\nAsha,Pune\r\nBen,"Austin, TX"');
  });
  it('keeps escaped pipes and line breaks, and works without outer pipes', () => {
    expect(markdownTableToCsv('a | b\n--- | ---\nx\\|y | p<br>q')).toBe('a,b\r\nx|y,"p\nq"');
  });
  it('round trips', () => {
    const csv = 'name,city\r\nAsha,Pune\r\nBen,"Austin, TX"';
    expect(markdownTableToCsv(csvToMarkdownTable(csv))).toBe(csv);
  });
  it('says so when there is no table', () => {
    expect(() => markdownTableToCsv('just some text')).toThrow(/No Markdown table found/);
    expect(() => csvToMarkdownTable('')).toThrow();
  });
});

describe('JSON Lines', () => {
  it('writes one line per item', () => {
    expect(jsonToJsonl('[{"a":1},{"a":2,"b":[1,2]}]')).toBe('{"a":1}\n{"a":2,"b":[1,2]}');
    expect(jsonToJsonl('{"a":1}')).toBe('{"a":1}');
  });
  it('reads lines back into an array, skipping blank lines and a BOM', () => {
    expect(JSON.parse(jsonlToJson('﻿{"a":1}\r\n\r\n{"a":2}\n'))).toEqual([{ a: 1 }, { a: 2 }]);
  });
  it('names the bad line', () => {
    expect(() => jsonlToJson('{"a":1}\n{oops}\n')).toThrow('Line 2 is not valid JSON.');
  });
  it('turns CSV into typed JSONL', () => {
    expect(csvToJsonl('prompt,n\nSay hi,1\nSay bye,2')).toBe('{"prompt":"Say hi","n":1}\n{"prompt":"Say bye","n":2}');
  });
});

describe('subtitles', () => {
  const srt = '1\r\n00:00:01,000 --> 00:00:03,500\r\nHello, <i>and</i> welcome.\r\n\r\n2\r\n00:00:04,000 --> 00:00:06,000\r\nLine one\r\nLine two\r\n';
  it('reads SRT and WebVTT cues the same way', () => {
    const a = parseCues(srt);
    expect(a).toEqual([
      { start: '00:00:01,000', end: '00:00:03,500', text: 'Hello, <i>and</i> welcome.' },
      { start: '00:00:04,000', end: '00:00:06,000', text: 'Line one\nLine two' },
    ]);
    expect(parseCues('WEBVTT\n\n00:01.000 --> 00:03.500 align:start position:0%\nHi')).toEqual([{ start: '00:00:01,000', end: '00:00:03,500', text: 'Hi' }]);
  });
  it('converts SRT to VTT with dots, the header and the cue text', () => {
    expect(srtToVtt(srt)).toBe('WEBVTT\n\n00:00:01.000 --> 00:00:03.500\nHello, <i>and</i> welcome.\n\n00:00:04.000 --> 00:00:06.000\nLine one\nLine two\n');
  });
  it('converts VTT to SRT: numbers the cues, uses commas, pads short times, drops notes, settings and tags', () => {
    const vtt = 'WEBVTT - demo\n\nNOTE this is a comment\n\nintro\n00:01.000 --> 00:03.500 align:start\n<v Asha>Hello</v> there\n\n01:02:03.4 --> 01:02:05.000\nBye';
    expect(vttToSrt(vtt)).toBe('1\n00:00:01,000 --> 00:00:03,500\nHello there\n\n2\n01:02:03,400 --> 01:02:05,000\nBye\n');
  });
  it('round trips SRT to VTT to SRT (tags aside)', () => {
    const plain = '1\n00:00:01,000 --> 00:00:03,500\nHello\n\n2\n00:00:04,000 --> 00:00:06,000\nBye\n';
    expect(vttToSrt(srtToVtt(plain))).toBe(plain);
  });
  it('gives only the words', () => {
    expect(subtitlesToText(srt)).toBe('Hello, and welcome.\nLine one Line two');
  });
  it('says so when there are no timings', () => {
    expect(() => srtToVtt('hello')).toThrow(/No subtitle timings found/);
  });
});

describe('TOML', () => {
  it('converts both ways', async () => {
    const toml = await jsonToToml('{"title":"Quack","owner":{"name":"Asha"},"ports":[8000,8001]}');
    expect(toml).toContain('title = "Quack"');
    expect(toml).toContain('ports = [ 8000, 8001 ]');
    expect(toml).toContain('[owner]');
    expect(JSON.parse(await tomlToJson(toml))).toEqual({ title: 'Quack', owner: { name: 'Asha' }, ports: [8000, 8001] });
  });
  it('needs an object at the top', async () => {
    await expect(jsonToToml('[1,2]')).rejects.toThrow(/top level/);
  });
  it('stops on a null instead of silently leaving it out, and names it', async () => {
    await expect(jsonToToml('{"a":1,"b":{"c":null}}')).rejects.toThrow('"b.c"');
    await expect(jsonToToml('{"list":[1,null]}')).rejects.toThrow('"list[1]"');
  });
  it('writes TOML dates as text', async () => {
    expect(JSON.parse(await tomlToJson('d = 2024-01-02\nt = 2024-01-02T03:04:05Z'))).toEqual({ d: '2024-01-02', t: '2024-01-02T03:04:05.000Z' });
  });
  it('reports bad TOML', async () => {
    await expect(tomlToJson('title = ')).rejects.toThrow();
  });
});

describe('XML to CSV', () => {
  it('uses the repeated tag as the rows, with attributes as @ columns', () => {
    const csv = xmlToCsv('<books><book id="1"><title>Quack</title><year>2021</year></book><book id="2"><title>Pond</title><year>2024</year></book></books>');
    expect(csv).toBe('@id,title,year\r\n1,Quack,2021\r\n2,Pond,2024');
  });
  it('makes one row when nothing repeats', () => {
    expect(xmlToCsv('<book><title>Quack</title></book>')).toBe('title\r\nQuack');
  });
});

describe('clean chat text', () => {
  it('removes Markdown but keeps the words, links and code', () => {
    const out = cleanChatText('## Plan\n\nHere is **the plan** — it’s _simple_:\n\n* Read the [guide](https://example.com)\n* Use `pnpm test`\n\n> quoted\n\n---\n\n```js\nlet a = 1;\n```');
    expect(out).toBe("Plan\n\nHere is the plan - it's simple:\n\n- Read the guide (https://example.com)\n- Use pnpm test\n\nquoted\n\nlet a = 1;");
  });
  it('removes invisible characters but keeps the joiners that Indic scripts and emoji need', () => {
    expect(cleanChatText('a​b⁠c﻿d­e')).toBe('abcde');
    expect(cleanChatText('क‍ष')).toBe('क‍ष');
  });
  it('straightens quotes, ellipses and spaces, and trims blank lines', () => {
    expect(cleanChatText('“Hi”…   there you  \n\n\n\nbye   ')).toBe('"Hi"... there you\n\nbye');
  });
  it('leaves snake_case and 2*3*4 alone', () => {
    expect(cleanChatText('use my_var_name and 2*3*4')).toBe('use my_var_name and 2*3*4');
  });
});

describe('the page specs', () => {
  it('give every sample a working result', async () => {
    for (const [slug, spec] of Object.entries(ALL_DATA_SPECS)) {
      if (slug === 'text-encoding-fixer') continue;
      const out = await runAnyDataConversion(slug, spec.sample);
      expect(out.trim().length, slug).toBeGreaterThan(0);
    }
  });
});
