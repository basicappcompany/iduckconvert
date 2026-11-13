// A tiny static server for the browser tests. Unlike `astro preview` it applies dist/_headers (the real security
// headers, including the Content-Security-Policy) and answers unknown addresses with dist/404.html and status 404,
// the way Cloudflare Pages does. Usage: node scripts/serve.mjs <port>
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';

const root = path.resolve('dist');
const port = Number(process.argv[2] ?? 4411);
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json', '.wasm': 'application/wasm', '.svg': 'image/svg+xml', '.png': 'image/png', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml',
  '.webmanifest': 'application/manifest+json', '.ico': 'image/x-icon',
};

// Only the bare "/*" block applies here: the pages.dev rules name a host and must not apply to localhost.
function globalHeaders() {
  const lines = fs.readFileSync(path.join(root, '_headers'), 'utf8').split(/\r?\n/);
  const out = {};
  let inBlock = false;
  for (const line of lines) {
    if (/^\S/.test(line) && !line.startsWith('#')) inBlock = line.trim() === '/*';
    else if (inBlock && /^\s+\S/.test(line)) {
      const i = line.indexOf(':');
      out[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
  }
  return out;
}
const headers = globalHeaders();

function resolve(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]);
  const p = path.join(root, clean);
  if (!p.startsWith(root)) return null;
  if (fs.existsSync(p) && fs.statSync(p).isFile()) return p;
  const index = path.join(p, 'index.html');
  return fs.existsSync(index) ? index : null;
}

http
  .createServer((req, res) => {
    const file = resolve(req.url ?? '/');
    const status = file ? 200 : 404;
    const target = file ?? path.join(root, '404.html');
    res.writeHead(status, { 'Content-Type': types[path.extname(target)] ?? 'application/octet-stream', ...headers });
    fs.createReadStream(target).pipe(res);
  })
  .listen(port, () => console.log(`serving dist on http://localhost:${port} with security headers`));
