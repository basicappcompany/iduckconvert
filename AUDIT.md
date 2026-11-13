# Security and SEO audit: iduckconvert.com

Started 13 November 2026. Each item is **fixed**, **already fine** or **needs you**. Updated in the same pull request as the change; live checks are noted where made.

## Baseline (13 Nov 2026, before any change)
| Check | Result |
| --- | --- |
| securityheaders.com | **D** (missing Strict-Transport-Security, Content-Security-Policy, X-Frame-Options, Permissions-Policy) |
| MDN HTTP Observatory | **D, 35/100** (9 of 12 tests passed) |
| Lighthouse mobile, home page | 98 / 100 / 100 / 100 (performance, accessibility, best practices, SEO) |

## Part A: security
| # | Item | Status | Notes |
| --- | --- | --- | --- |
| Accounts | GitHub, Cloudflare, GoDaddy, Google logged in as the business mailbox | already fine | Checked in the browser and with `gh`. |
| A2 | Outside code | **fixed** | Only one outside host is contacted at run time: cdn.jsdelivr.net, for the 32 MB `ffmpeg-core.wasm` (too big for Cloudflare Pages' 25 MB file limit). Everything else is bundled into our own `/_astro/` files from exact-pinned npm packages (no ranges, no "latest"; a unit test enforces it). The 112 KB ffmpeg loader (`ffmpeg-core.js`) is now served from our own domain. The wasm is fetched with a SHA-384 `integrity` check, so a changed file is refused (`src/tools/ffmpeg.ts`). `@ffmpeg/util` removed. |
| A2 | SheetJS | already fine | `xlsx` 0.20.3 from the official SheetJS CDN tarball, bundled; docs.sheetjs.com lists 0.20.3 as current. The stale npm copy is not used. |
| A2 | Dependency audit | **fixed** | `pnpm audit` found `fast-xml-parser` 5.11.0 (low, CPU use on crafted XML). Upgraded to 5.12.0. 0 known vulnerabilities after. |
| A3 | `_headers` | **fixed** | CSP (no `unsafe-inline`/`unsafe-eval` for scripts; inline scripts allowed by SHA-256 hash, generated at build by `scripts/finalize-headers.mjs`), HSTS one year with includeSubDomains, nosniff, Referrer-Policy, Permissions-Policy (camera, microphone, geolocation, payment off), COOP same-origin, X-Frame-Options DENY, frame-ancestors none. Two additions beyond the brief: `blob:` in `connect-src` (the verified engine is passed to the converter as a blob URL) and `style-src 'unsafe-inline'` (inline styles only, no scripts). The browser tests now run against a server that applies these headers (`scripts/serve.mjs`), including real video and audio conversions. |
| A4 | Markdown and HTML | already fine | Converted HTML is only ever put in a textarea as text; there is no HTML preview. A browser test pastes a `<script>` and an `onerror` image and checks nothing runs. |
| A4 | innerHTML, eval | already fine | None in `src` (unit test). `set:html` is used only for JSON-LD, which escapes `<`. |
| A4 | YAML | already fine | js-yaml 5 `load` uses the safe default schema; a unit test confirms `!!js/function` is refused. |
| A4 | Safe download names | **fixed** | `safeFileName` strips slashes, colons, control characters, leading dots, and caps length; used for every output name. |
| A4 | Big files | **fixed** | Spreadsheet 50 MB, TIFF 150 MB, WEBP 50 MB, text 20 to 50 MB, media 1.9 GB (existing); each gives a friendly message. Tested with a 51 MB file. |
| A5 | Forms and helper | already fine | Feedback and request forms only build a `mailto:` link or copy text; nothing is posted. The helper runs in the page and sends nothing. No `fetch` to any server in `src`. No keys or secrets in the tree or the last 50 commits of history (searched); GitHub secret scanning status is under A6. |
| A10 | security.txt | **fixed** | `/.well-known/security.txt`, contact is the feedback page and feedback@iduckconvert.com, expires 2027-11-13. |
| A11 | Privacy page and FAQs | **fixed** | Name cdn.jsdelivr.net, the one file it serves, the fingerprint check, and that jsDelivr sees an IP address when serving it. |

Items A6 to A9 and the re-grade are recorded below as they are done.
