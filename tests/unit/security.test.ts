import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { checkSize, safeFileName, withExtension } from '../../src/lib/files';
import { yamlToJson } from '../../src/convert/data';
import { CORE_JS_URL, FFMPEG_CORE_VERSION, WASM_CDN_HOST, WASM_SHA384, WASM_URL } from '../../src/tools/ffmpeg';

const headers = readFileSync('public/_headers', 'utf8');
const globalBlock = headers.split(/\n(?=\/\*)/).find((b) => b.startsWith('/*')) ?? '';
const csp = /Content-Security-Policy:\s*(.+)/.exec(globalBlock)?.[1] ?? '';
const directive = (name: string) => csp.split(';').map((s) => s.trim()).find((s) => s.startsWith(`${name} `)) ?? '';

describe('security headers file', () => {
  it('sets every header that was asked for', () => {
    expect(globalBlock).toMatch(/Strict-Transport-Security:\s*max-age=31536000;\s*includeSubDomains/);
    expect(globalBlock).toMatch(/X-Content-Type-Options:\s*nosniff/);
    expect(globalBlock).toMatch(/Referrer-Policy:\s*strict-origin-when-cross-origin/);
    expect(globalBlock).toMatch(/Cross-Origin-Opener-Policy:\s*same-origin/);
    const pp = /Permissions-Policy:\s*(.+)/.exec(globalBlock)?.[1] ?? '';
    for (const f of ['camera', 'microphone', 'geolocation', 'payment']) expect(pp).toContain(`${f}=()`);
  });
  it('has a strict Content-Security-Policy', () => {
    expect(csp).toContain("default-src 'self'");
    expect(directive('script-src')).toContain("'self'");
    expect(directive('script-src')).toContain("'wasm-unsafe-eval'");
    expect(directive('script-src')).not.toContain("'unsafe-inline'");
    expect(directive('script-src')).not.toContain("'unsafe-eval'");
    expect(directive('script-src')).toContain('__SCRIPT_HASHES__');
    expect(directive('worker-src')).toContain("'self' blob:");
    expect(directive('frame-ancestors')).toBe("frame-ancestors 'none'");
    expect(directive('base-uri')).toBe("base-uri 'self'");
    expect(directive('object-src')).toBe("object-src 'none'");
  });
  it('allows exactly one outside host, the one that serves the ffmpeg engine', () => {
    const hosts = new Set([...csp.matchAll(/https?:\/\/[a-z0-9.-]+/gi)].map((m) => m[0]));
    expect([...hosts]).toEqual([WASM_CDN_HOST]);
  });
  it('keeps the pages.dev noindex rules and never noindexes the real domain', () => {
    expect(headers).toMatch(/https:\/\/:project\.pages\.dev\/\*\n\s+X-Robots-Tag: noindex/);
    expect(globalBlock).not.toMatch(/X-Robots-Tag/i);
  });
});

describe('outside code is pinned and checked', () => {
  const pkg = JSON.parse(readFileSync('package.json', 'utf8')) as { dependencies: Record<string, string>; devDependencies: Record<string, string> };
  it('every dependency is an exact version (SheetJS is the official CDN tarball)', () => {
    for (const [name, version] of Object.entries({ ...pkg.dependencies, ...pkg.devDependencies })) {
      if (name === 'xlsx') expect(version).toMatch(/^https:\/\/cdn\.sheetjs\.com\/xlsx-\d+\.\d+\.\d+\/xlsx-\d+\.\d+\.\d+\.tgz$/);
      else expect(version, name).toMatch(/^\d+\.\d+\.\d+$/);
    }
  });
  it('the ffmpeg engine URL names an exact version, and its hash and loader are recorded', () => {
    expect(WASM_URL).toContain(`@ffmpeg/core@${FFMPEG_CORE_VERSION}/`);
    expect(FFMPEG_CORE_VERSION).toMatch(/^\d+\.\d+\.\d+$/);
    expect(WASM_SHA384).toMatch(/^sha384-[A-Za-z0-9+/]{64}$/);
    const local = join('public', CORE_JS_URL);
    expect(existsSync(local)).toBe(true);
    // The self-hosted loader must be the exact file from the pinned release.
    const hash = createHash('sha384').update(readFileSync(local)).digest('base64');
    expect(`sha384-${hash}`).toBe('sha384-9KlAmgHu5wDqdgQvFhQGZOtKdCwGcMppDhM/kBkUpZ5LS7KGuAHbE+NgtJQEf84i');
  });
  it('no source file loads script or style from another host', () => {
    const files: string[] = [];
    const walk = (d: string) => {
      for (const e of readdirSync(d)) {
        const p = join(d, e);
        if (statSync(p).isDirectory()) walk(p);
        else if (/\.(ts|tsx|astro|css)$/.test(p)) files.push(p);
      }
    };
    walk('src');
    for (const f of files) {
      const text = readFileSync(f, 'utf8');
      expect(/<script[^>]+src=["']https?:/i.test(text), f).toBe(false);
      expect(/<link[^>]+href=["']https?:[^>]*stylesheet/i.test(text), f).toBe(false);
      expect(/@import\s+url\(["']?https?:/i.test(text), f).toBe(false);
    }
  });
});

describe('risky patterns stay out of the source', () => {
  const read = (dir: string): string[] =>
    readdirSync(dir).flatMap((e) => {
      const p = join(dir, e);
      return statSync(p).isDirectory() ? read(p) : /\.(ts|tsx|astro)$/.test(p) ? [readFileSync(p, 'utf8')] : [];
    });
  const source = read('src').join('\n');
  it('has no eval, new Function, innerHTML or document.write', () => {
    expect(source).not.toMatch(/\beval\s*\(/);
    expect(source).not.toMatch(/new Function\s*\(/);
    expect(source).not.toMatch(/\.(innerHTML|outerHTML)\s*=/);
    expect(source).not.toMatch(/insertAdjacentHTML|dangerouslySetInnerHTML|document\.write/);
  });
  it('writes raw HTML only for JSON-LD, which escapes < first', () => {
    const uses = source.match(/set:html=\{[^}]+\}/g) ?? [];
    expect(uses).toEqual(['set:html={serialize(item)}']);
  });
});

describe('safe file names and size limits', () => {
  it('strips path characters and keeps the extension', () => {
    expect(safeFileName('../../etc/passwd')).toBe('etc_passwd');
    expect(safeFileName('a\\b:c*d?e"f<g>h|i.mp3')).toBe('a_b_c_d_e_f_g_h_i.mp3');
    expect(safeFileName('.hidden')).toBe('hidden');
    expect(safeFileName('  ')).toBe('file');
    expect(safeFileName('x\u0000y\u001fz.txt')).toBe('x_y_z.txt');
    expect(safeFileName(`${'a'.repeat(300)}.mp3`).length).toBeLessThanOrEqual(120);
    expect(safeFileName(`${'a'.repeat(300)}.mp3`).endsWith('.mp3')).toBe(true);
    expect(withExtension('../video.mov', 'mp4')).toBe('video.mp4');
  });
  it('refuses a file that is too big with a friendly message', () => {
    expect(() => checkSize({ name: 'big.csv', size: 60 * 1024 * 1024 }, 50, 'spreadsheet')).toThrow(/limit is 50 MB/);
    expect(() => checkSize({ name: 'ok.csv', size: 1024 }, 50)).not.toThrow();
  });
});

describe('parsers are safe', () => {
  it('YAML refuses custom and executable types', () => {
    expect(() => yamlToJson('x: !!js/function "function(){ return 1 }"')).toThrow();
    expect(() => yamlToJson('x: !!js/regexp /a/')).toThrow();
    expect(JSON.parse(yamlToJson('a: 1'))).toEqual({ a: 1 });
  });
});
