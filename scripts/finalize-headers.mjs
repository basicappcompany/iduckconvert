// Runs after `astro build`. Collects the SHA-256 hash of every inline script in the built pages and writes them into
// the Content-Security-Policy in dist/_headers, so script-src never needs 'unsafe-inline'.
// JSON-LD blocks (type="application/ld+json") are data, not script, so they are left out.
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const dist = 'dist';
const MAX_HASHES = 12;
const hashes = new Map();

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (p.endsWith('.html')) collect(p);
  }
}

function collect(file) {
  const html = fs.readFileSync(file, 'utf8');
  for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const attrs = m[1];
    if (/\bsrc\s*=/.test(attrs)) continue;
    const type = /\btype\s*=\s*["']?([^"'\s>]+)/i.exec(attrs)?.[1]?.toLowerCase();
    if (type && type !== 'module' && type !== 'text/javascript') continue;
    const body = m[2];
    if (!body.trim()) continue;
    const hash = `'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`;
    hashes.set(hash, (hashes.get(hash) ?? 0) + 1);
  }
}

walk(dist);
if (hashes.size > MAX_HASHES) {
  console.error(`finalize-headers: ${hashes.size} different inline scripts (limit ${MAX_HASHES}). Move some into files.`);
  process.exit(1);
}

const file = path.join(dist, '_headers');
const text = fs.readFileSync(file, 'utf8');
if (!text.includes('__SCRIPT_HASHES__')) {
  console.error('finalize-headers: __SCRIPT_HASHES__ not found in dist/_headers');
  process.exit(1);
}
fs.writeFileSync(file, text.replaceAll('__SCRIPT_HASHES__', [...hashes.keys()].sort().join(' ')));
console.log(`finalize-headers: ${hashes.size} inline script hash(es) added to the CSP`);
