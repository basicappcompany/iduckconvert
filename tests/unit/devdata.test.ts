import { describe, expect, it } from 'vitest';
import { base64Decode, base64Encode, chatgptToMarkdown, fixBrokenJson, jsonFormat, urlDecode, urlEncode } from '../../src/convert/devdata';
import { ALL_DATA_SPECS, runAnyDataConversion } from '../../src/convert/textdata';

describe('Base64', () => {
  it('encodes text as UTF-8', () => {
    expect(base64Encode('Hello')).toBe('SGVsbG8=');
    expect(base64Encode('Hello, duck! \u{1F986}')).toBe('SGVsbG8sIGR1Y2shIPCfpoY=');
    expect(base64Encode('')).toBe('');
  });

  it('decodes it back, including the URL-safe alphabet, line breaks and missing padding', () => {
    expect(base64Decode('SGVsbG8=')).toBe('Hello');
    expect(base64Decode('SGVsbG8')).toBe('Hello');
    expect(base64Decode('SGVs\nbG8=')).toBe('Hello');
    expect(base64Decode('SGVsbG8sIGR1Y2shIPCfpoY=')).toBe('Hello, duck! \u{1F986}');
    expect(base64Decode(base64Encode('??>>~~').replace(/\+/g, '-').replace(/\//g, '_'))).toBe('??>>~~');
  });

  it('round-trips a long text', () => {
    const long = 'quack ü 中 '.repeat(20_000);
    expect(base64Decode(base64Encode(long))).toBe(long);
  });

  it('says what is wrong instead of guessing', () => {
    expect(() => base64Decode('not base64!')).toThrow(/not valid Base64/);
    expect(() => base64Decode('A')).toThrow(/length/);
    expect(() => base64Decode('/9j/4AAQ')).toThrow(/does not decode to text/);
  });
});

describe('URL encoding', () => {
  it('encodes everything outside the safe set', () => {
    expect(urlEncode('name=Asha & Ben')).toBe('name%3DAsha%20%26%20Ben');
    expect(urlEncode('Zürich')).toBe('Z%C3%BCrich');
    expect(urlEncode("a-b_c.d!e~f*g'h(i)j")).toBe("a-b_c.d!e~f*g'h(i)j");
  });

  it('decodes percent codes and plus signs', () => {
    expect(urlDecode('Z%C3%BCrich')).toBe('Zürich');
    expect(urlDecode('ducks+in+a+row')).toBe('ducks in a row');
    expect(urlDecode('1%2B1')).toBe('1+1');
    expect(urlDecode('plain text')).toBe('plain text');
  });

  it('rejects a broken code', () => {
    expect(() => urlDecode('100%')).toThrow(/hex digits/);
    expect(() => urlDecode('%E0%A4%A')).toThrow(/hex digits/);
  });
});

describe('JSON formatter', () => {
  it('indents with two spaces', () => {
    expect(jsonFormat('{"a":1,"b":[1,2],"c":{},"d":[]}')).toBe('{\n  "a": 1,\n  "b": [\n    1,\n    2\n  ],\n  "c": {},\n  "d": []\n}');
  });

  it('keeps big numbers, number spelling and key order exactly', () => {
    const out = jsonFormat('{"id":12345678901234567890,"2":1,"1":2,"x":1.50,"y":1e3}');
    expect(out).toContain('"id": 12345678901234567890');
    expect(out).toContain('"x": 1.50');
    expect(out).toContain('"y": 1e3');
    expect(out.indexOf('"2"')).toBeLessThan(out.indexOf('"1"'));
  });

  it('keeps escapes and non-ASCII text', () => {
    const out = jsonFormat('{"t":"line\\nbreak \\"q\\" ü \\u00e9"}');
    expect(JSON.parse(out)).toEqual({ t: 'line\nbreak "q" ü é' });
  });

  it('throws the parser message for invalid JSON', () => {
    expect(() => jsonFormat('{"a":1,}')).toThrow();
    expect(() => jsonFormat("{'a':1}")).toThrow();
  });

  it('leaves a lone value alone', () => {
    expect(jsonFormat('  42 ')).toBe('42');
    expect(jsonFormat('"hi"')).toBe('"hi"');
  });
});

describe('Fix broken JSON', () => {
  const parse = (s: string): unknown => JSON.parse(fixBrokenJson(s));

  it('repairs single quotes, unquoted keys, trailing commas and comments', () => {
    expect(parse("{ a: 'x', 'b': [1, 2,], // note\n /* more */ c: \"y\", }")).toEqual({ a: 'x', b: [1, 2], c: 'y' });
  });

  it('turns Python values and NaN into JSON values', () => {
    expect(parse('{"a": True, "b": False, "c": None, "d": undefined, "e": NaN}')).toEqual({ a: true, b: false, c: null, d: null, e: null });
  });

  it('reads curly quotes', () => {
    expect(parse('{“a”: “b”}')).toEqual({ a: 'b' });
  });

  it('takes the JSON out of a code fence and from around prose', () => {
    expect(parse('Sure! Here it is:\n```json\n{"a": 1}\n```\nHope that helps.')).toEqual({ a: 1 });
    expect(parse('Result: [1, 2, 3] done')).toEqual([1, 2, 3]);
  });

  it('adds missing commas between members', () => {
    expect(parse('{"a": 1\n"b": 2\n"c": [1 2]}')).toEqual({ a: 1, b: 2, c: [1, 2] });
  });

  it('closes JSON that was cut off', () => {
    expect(parse('{"a": [1, 2, {"b": "te')).toEqual({ a: [1, 2, { b: 'te' }] });
    expect(parse('{"a": 1, "b":')).toEqual({ a: 1, b: null });
  });

  it('tidies number spellings and keeps big numbers', () => {
    const out = fixBrokenJson('{a: +5, b: .5, c: 5., d: 007, e: 12345678901234567890}');
    expect(out).toContain('"a": 5');
    expect(out).toContain('"b": 0.5');
    expect(out).toContain('"c": 5');
    expect(out).toContain('"d": 7');
    expect(out).toContain('"e": 12345678901234567890');
  });

  it('turns a bare word value into text and keeps escapes it does not know', () => {
    expect(parse('{"s": ok, "p": "a\\d"}')).toEqual({ s: 'ok', p: 'a\\d' });
    expect(parse("{'q': 'it\\'s'}")).toEqual({ q: "it's" });
  });

  it('keeps duplicate keys and their order', () => {
    expect(fixBrokenJson('{"b":1,"a":2,"b":3}')).toBe('{\n  "b": 1,\n  "a": 2,\n  "b": 3\n}');
  });

  it('returns valid JSON unchanged apart from layout', () => {
    const valid = '{"a":[1,{"b":null}],"c":"d"}';
    expect(fixBrokenJson(valid)).toBe(jsonFormat(valid));
  });

  it('says so when there is nothing to read, or a key has no value', () => {
    expect(() => fixBrokenJson('just words')).toThrow(/no JSON/);
    expect(() => fixBrokenJson('{"a":, "b": 1}')).toThrow(/has no value/);
  });

  it('refuses text nested too deeply instead of crashing', () => {
    expect(() => fixBrokenJson('['.repeat(2000))).toThrow(/nested too deeply/);
  });
});

describe('ChatGPT export to Markdown', () => {
  const message = (role: string, parts: unknown[], extra: Record<string, unknown> = {}) => ({ author: { role }, content: { content_type: 'text', parts }, ...extra });
  const conversation = {
    title: 'Duck facts',
    create_time: 1700000000,
    current_node: 'e',
    mapping: {
      a: { id: 'a', message: null, parent: null, children: ['s'] },
      s: { id: 's', parent: 'a', children: ['b'], message: message('system', ['You are helpful.']) },
      b: { id: 'b', parent: 's', children: ['c', 'd'], message: message('user', ['Why do ducks float?']) },
      c: { id: 'c', parent: 'b', children: [], message: message('assistant', ['An old answer that was regenerated.']) },
      d: { id: 'd', parent: 'b', children: ['t', 'e'], message: message('assistant', ['Their feathers trap air.citeturn0search0']) },
      t: { id: 't', parent: 'd', children: [], message: message('assistant', ['{"query":"ducks"}'], { recipient: 'browser' }) },
      e: { id: 'e', parent: 'd', children: [], message: { author: { role: 'assistant' }, content: { content_type: 'code', language: 'python', text: 'print("quack")\n' } } },
    },
  };

  it('writes the branch that was current, with the right headings', () => {
    const md = chatgptToMarkdown(JSON.stringify([conversation]));
    expect(md).toBe(
      '# Duck facts\n\n*2023-11-14*\n\n## You\n\nWhy do ducks float?\n\n## ChatGPT\n\nTheir feathers trap air.\n\n## ChatGPT\n\n```python\nprint("quack")\n```\n',
    );
  });

  it('leaves out system messages, tool calls, regenerated replies and citation marks', () => {
    const md = chatgptToMarkdown(JSON.stringify([conversation]));
    expect(md).not.toContain('You are helpful');
    expect(md).not.toContain('browser');
    expect(md).not.toContain('old answer');
    expect(md).not.toMatch(/[-]/);
  });

  it('follows the last child when there is no current node, and marks pictures', () => {
    const noCurrent = { ...conversation, current_node: null };
    expect(chatgptToMarkdown(JSON.stringify(noCurrent))).toContain('Their feathers trap air.');
    const withImage = { title: null, mapping: { a: { id: 'a', parent: null, children: [], message: message('user', ['look', { content_type: 'image_asset_pointer' }], { }) } }, current_node: 'a' };
    const md = chatgptToMarkdown(JSON.stringify(withImage));
    expect(md).toContain('# Untitled');
    expect(md).toContain('look\n\n*[image]*');
  });

  it('separates several conversations', () => {
    const md = chatgptToMarkdown(JSON.stringify([conversation, { ...conversation, title: 'Second' }]));
    expect(md).toContain('\n\n---\n\n# Second');
  });

  it('survives a loop in the tree', () => {
    const loop = { title: 'Loop', current_node: 'a', mapping: { a: { id: 'a', parent: 'b', children: [], message: message('user', ['one']) }, b: { id: 'b', parent: 'a', children: [], message: message('assistant', ['two']) } } };
    expect(chatgptToMarkdown(JSON.stringify(loop))).toContain('one');
  });

  it('explains a file that is not an export', () => {
    expect(() => chatgptToMarkdown('[{"a":1}]')).toThrow(/does not look like a ChatGPT export/);
    expect(() => chatgptToMarkdown('not json')).toThrow();
  });

  it('turns the page example into Markdown', async () => {
    const md = await runAnyDataConversion('chatgpt-to-markdown', ALL_DATA_SPECS['chatgpt-to-markdown']!.sample);
    expect(md).toContain('## You\n\nWhy do ducks float?');
    expect(md).toContain('## ChatGPT\n\nTheir feathers trap air and are coated in oil.');
  });
});

describe('the examples on the pages', () => {
  const slugs = ['base64-encode', 'base64-decode', 'url-encode', 'url-decode', 'json-formatter', 'fix-broken-json', 'chatgpt-to-markdown'];
  it.each(slugs)('%s turns its own example into output', async (slug) => {
    const out = await runAnyDataConversion(slug, ALL_DATA_SPECS[slug]!.sample);
    expect(out.length).toBeGreaterThan(0);
  });

  it('the decode examples are the encode examples written out', async () => {
    expect(await runAnyDataConversion('base64-decode', ALL_DATA_SPECS['base64-decode']!.sample)).toBe(ALL_DATA_SPECS['base64-encode']!.sample);
    expect(await runAnyDataConversion('url-decode', ALL_DATA_SPECS['url-decode']!.sample)).toBe(ALL_DATA_SPECS['url-encode']!.sample);
  });

  it('the broken example comes out as the fixed object', async () => {
    const out = await runAnyDataConversion('fix-broken-json', ALL_DATA_SPECS['fix-broken-json']!.sample);
    expect(JSON.parse(out)).toEqual({ name: 'Quack', tags: ['duck', 'pond'], swims: true, owner: null });
  });
});
