# Security and SEO audit: iduckconvert.com

Started 13 November 2026. Each item is **fixed**, **already fine** or **needs you**. Updated in the same pull request as the change; live checks are noted where they were made.

## Baseline and result
| Check | Before (13 Nov 2026) | After |
| --- | --- | --- |
| securityheaders.com | **D** | see "Final grades" at the end |
| MDN HTTP Observatory | **D, 35/100** | see "Final grades" at the end |
| Lighthouse mobile, home page | 98 / 100 / 100 / 100 | see "Final grades" at the end |

## Accounts
GitHub (`gh` and browser), Cloudflare, Google and GoDaddy were each checked as basicappcompany@gmail.com. GoDaddy **signed out** partway through (it asked for a password), so the GoDaddy items below could not be done. No passwords were typed and no accounts were created.

## Part A: security
| # | Item | Status | Notes |
| --- | --- | --- | --- |
| A2 | Outside code | **fixed** | Only one outside host is contacted at run time: cdn.jsdelivr.net, for the 32 MB `ffmpeg-core.wasm` (too big for Cloudflare Pages' 25 MB file limit). Every other library is bundled into our own `/_astro/` files from exact-pinned npm packages (no ranges, no "latest"; a unit test enforces it). The 112 KB ffmpeg loader is now self-hosted (`public/vendor/ffmpeg/`, byte-exact via `.gitattributes`, hash checked by a unit test). The wasm is fetched with a SHA-384 `integrity` check, so a changed file is refused. |
| A2 | SheetJS | already fine | `xlsx` 0.20.3 from the official SheetJS CDN tarball, bundled. The SheetJS docs list 0.20.3 as the current release; the stale npm copy is not used. |
| A2 | Dependency audit | **fixed** | `pnpm audit` found `fast-xml-parser` 5.11.0 (low severity, CPU use on crafted XML). Upgraded to 5.12.0. 0 known vulnerabilities after. |
| A3 | `_headers` | **fixed** | CSP with no `unsafe-inline` or `unsafe-eval` for scripts (the few inline scripts Astro writes are allowed by SHA-256 hash, generated at build by `scripts/finalize-headers.mjs`), HSTS one year with includeSubDomains, nosniff, Referrer-Policy, Permissions-Policy (camera, microphone, geolocation, payment off), COOP same-origin, X-Frame-Options DENY and frame-ancestors none. Two additions beyond the brief: `blob:` in `connect-src` (the verified engine is handed to the converter as a blob URL) and `style-src 'unsafe-inline'` (inline styles only; no script is affected). Browser tests run against a server that applies these headers (`scripts/serve.mjs`) including real video, audio, spreadsheet and picture conversions, and the same conversion was run on the live site. |
| A3 | Analytics beacon | **fixed** | Cloudflare was injecting its Web Analytics beacon into every page; the policy (correctly) blocked it, which produced console errors. Fixed with `Cache-Control: no-transform` (Cloudflare does not rewrite such responses) and Real User Monitoring was switched off for the zone. This also keeps the "nothing else is contacted" promise true. |
| A4 | Markdown and HTML | already fine | Converted HTML is only ever shown as text in a textarea; there is no HTML preview. A browser test pastes a `<script>`, an `onerror` image and a `javascript:` link and checks nothing runs. DOMPurify was not added because nothing renders the HTML. |
| A4 | innerHTML, eval | already fine | None in `src` (unit test). `set:html` is used only for JSON-LD, which escapes `<` (unit test). |
| A4 | YAML | already fine | js-yaml 5 `load` uses the safe default schema; a unit test confirms `!!js/function` and `!!js/regexp` are refused. |
| A4 | Safe download names | **fixed** | `safeFileName` strips slashes, colons, control characters and leading dots, and caps length. Used for every output name; tested, including a hostile name in the browser. |
| A4 | Big files | **fixed** | Spreadsheet 50 MB, TIFF 150 MB, WEBP 50 MB, text 20 to 50 MB, media 1.9 GB (existing). Each gives a friendly message. Tested in a browser with a 51 MB file. |
| A5 | Forms and helper | already fine | The feedback and request forms only build a `mailto:` link or copy text; nothing is posted, so no spam protection is needed (no Turnstile added). The helper runs in the page and sends nothing. No `fetch` to a server in `src`. No keys or secrets in the tree or the last 50 commits (searched). |
| A6 | Dependabot alerts and security updates | **fixed** | Both enabled through the GitHub API. |
| A6 | Secret scanning and push protection | **needs you** | GitHub answers "not available for this repository": it needs GitHub Advanced Security (paid) for a private repo. Making the repo public would enable it. Not changed. |
| A6 | Branch protection on `main` | **needs you** | GitHub answers "Upgrade to GitHub Pro or make this repository public". Not upgraded. The rule in use is by habit: branch, pull request, merge on green CI. |
| A6 | Two-factor login | **needs you** | GitHub says **two-factor authentication is not enabled** on basicappcompany. Please turn it on (Settings, Password and authentication). |
| A7 | Always Use HTTPS | **fixed** | Was off; now on. `http://` returns 301 to https. |
| A7 | Minimum TLS | **fixed** | Was 1.0 (the default); now 1.2. TLS 1.0 and 1.1 handshakes are refused, 1.2 and 1.3 work (tested with curl). |
| A7 | TLS 1.3, Automatic HTTPS Rewrites | already fine | Both were on. |
| A7 | Bot Fight Mode | **fixed** | Was off; now on. AI Labyrinth left off (it injects fake links for bots and was not requested). |
| A7 | SPF and DMARC | **fixed** | The domain sends no mail but does receive it through Cloudflare Email Routing, which needs `include:_spf.mx.cloudflare.net`, so SPF is `v=spf1 include:_spf.mx.cloudflare.net -all` (hard fail for everyone else) instead of a bare `-all`. DMARC is `v=DMARC1; p=reject;` (it had been GoDaddy's `p=quarantine` with reports sent to GoDaddy). Verified at Cloudflare's own nameserver. A real test email to hello@ has not been sent. |
| A8 | DNSSEC | **needs you** | Needs the DS record entered at GoDaddy, and GoDaddy signed out. See the end of this file for the status and the values. |
| A9 | GoDaddy lock and auto-renew | **needs you** | Could not check: GoDaddy asked for a password. |
| A10 | security.txt | **fixed** | `/.well-known/security.txt` with the feedback page and feedback@ as contacts, expiring 2027-11-13. |
| A11 | Privacy page and FAQs | **fixed** | Name cdn.jsdelivr.net, the one file it serves, the fingerprint check, and that jsDelivr sees an IP address when serving it. A new page, /how-it-works/, lists every engine and where it loads from. |

## Part B: SEO, AEO and GEO
| # | Item | Status | Notes |
| --- | --- | --- | --- |
| B1 | Robots meta | **fixed** | Every indexable page has `index,follow,max-image-preview:large,max-snippet:-1`; the forms, settings and helper keep `noindex`. |
| B1 | robots.txt | **fixed** | Allows everything, names the sitemap, and has explicit groups for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, Bingbot and Googlebot. A stale robots.txt (cached from the old GoDaddy parking page) was found live and cleared with a cache purge earlier today. |
| B1 | Cloudflare AI bot settings | already fine | Real requests with each AI crawler's user agent get 200 from the live site; no "block AI bots" setting is on, and Cloudflare's managed robots.txt is not overriding ours (the file served is ours). Bot Fight Mode was turned on afterwards, as asked; verified crawlers are exempt from it. |
| B1 | Crawler Hints (IndexNow) | **fixed** | Was off; now on. |
| B1 | Sitemap | **fixed** | Lists only pages on this domain (no iDuckIMG or iDuckPDF links), every converter, guide and pair page, each with a `lastmod`; 0 broken URLs (checked against the build). |
| B2 | Search Console and Bing | see the end of this file | |
| B3 | Thin, repeated audio and video pages | **fixed** | All 22 audio and video converter pages were rewritten. Each now has its own title hook, description, answer, "who needs this", "does it lose quality" paragraph, devices paragraph, two questions, and a size example computed from typical bitrates. Six question headings per page; the settings paragraph states the exact codec and bitrate. No page was merged: every pair has a real reason to exist. Unit tests fail if any title, description, answer or paragraph repeats. |
| B4 | Readable without JavaScript | already fine | The site is static HTML. A browser test with JavaScript switched off checks six pages (heading, 3+ steps, 3+ questions, over 1,000 characters). |
| B5 | Answer-first pages | **fixed** | Every converter page has a 40 to 60 word plain answer straight under the heading (a unit test enforces it), numbered steps and question-style headings. Unit pages state the exact factor as text, a table of 15 to 20 common values computed from the tool's own tables, and the source. |
| B6 | Popular unit pairs | **fixed** | 32 pair pages (cm to inches, kg to lbs, feet to metres, Celsius to Fahrenheit, km to miles, sq ft to sq m, acre to bigha with a state table, MB to GB, lakh to million and more), each with the converter preset, the exact factor, a value table, a note and four questions; linked from the main unit pages. |
| B7 | Structured data | **fixed, partly checked** | Converter pages: WebApplication (applicationCategory, operatingSystem "Any", price 0), FAQPage, BreadcrumbList and HowTo. Guides: Article with datePublished and dateModified. Home: Organization (sameAs: iDuckPDF, iDuckIMG, iDuckCalculator) and WebSite. Every JSON-LD block in the build (552 at the time) parses, and the required fields are checked. See the end of this file for Google's tools. |
| B8 | Honest counts | **fixed** | Home says "57 converters here, plus 6 picture tools on iDuckIMG" and the six cards sit in their own "On our sister sites" block. |
| B8 | Links back from the other sites | **needs you** | Not checked from the other sites' pages in this pass; see the end of this file. |
| B9 | Dark mode toggle and language switch | **needs you** | The toggle is on every page except the start page, which you asked to keep always light (that conflicts with "add a dark toggle" for the home page only). The language switch is not added: Turkish is not translated yet, and the brief says not to publish it until it is. |
| B10 | Trust signals | **fixed** | New /how-it-works/ page; "Last reviewed: 13 November 2026" on every converter page; unit factors cite NIST SP 811, NIST Handbook 44, the BIPM SI Brochure and IEC 80000-13; About names Basic App Company and gives hello@iduckconvert.com. |
| B10 | Indian land units by state | **needs you** | The bigha, biswa, katha, guntha and cent values are commonly cited figures that were **not verified against each state's official land-revenue document**. The pages say so, and flag these units as approximate. Someone with access to the official sources should confirm them. |
| B11 | llms.txt | **fixed** | `/llms.txt`, generated from the same lists as the pages. |
| B12 | Speed | see the end of this file | ffmpeg loads only when Convert is pressed with a file chosen, never on page load (checked in the code). |
