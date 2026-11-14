# iDuckConvert (iduckconvert.com)

Free converters that run in the browser: audio, video, spreadsheets and data, units, numbers and text, time zones. Fourth site in the iDuck family by Basic App Company (sisters: iduckpdf.com, iduckimg.com). Same look, voice and promises: friendly English, light duck jokes, no sign-up, no watermark, no ads, files never leave the browser, tips-only support.

## Stack (exact pins in package.json)
- Fork of iDuckImg's setup: Astro 7 (static), Preact 11 islands only for tool UIs, Tailwind 4 via `@tailwindcss/vite`, TypeScript 6.0.3 (strict), Vitest, Playwright (installed Chrome), pnpm, Cloudflare Pages.
- Audio and video: `@ffmpeg/ffmpeg` 0.12.15 bundled; the engine (`@ffmpeg/core` 0.12.10, single-thread, about 30 MB) is fetched at runtime from jsDelivr by `src/tools/ffmpeg.ts`. Single-thread means no COOP/COEP headers are needed. Suggested limits 500 MB desktop, 100 MB phone, hard stop 1.9 GB.
- Spreadsheets: SheetJS (`xlsx` from cdn.sheetjs.com, not the stale npm package). Data: js-yaml, marked, turndown, fast-xml-parser. TIFF: utif2. GIF: gifenc.

## Workflow
- Never push to main (the only exception was the first commit on the empty repo): branch, PR, fix CI on the same PR, merge when green.
- `pnpm verify` (check, lint, test) before each commit; `pnpm test:e2e` runs the real converters in Chrome against the production build (port 4411; do not reuse a port another project's preview may hold).
- Docs-only changes are batched to one PR at the end of the day (the `docs-sync` skill). `docs/status.html` is the single source for the status page.

## Layout
- `src/lib/tools.ts`: the registry. Home page, sidebar, Ctrl K, sitemap, "More in" and the helper all read it. A `link` tool lives on a sister site (card only, no page). Do not rebuild what iDuckPDF or iDuckIMG has: link to it.
- `src/pages/[slug].astro` renders every converter; it must list each island kind explicitly (Astro cannot hydrate a component picked from a lookup table). New kind = new line there.
- `src/lib/content.ts`: steps, 4 to 6 FAQs and the explainer per page. `src/lib/guides.ts`: the guides (a unit test checks structure and length).
- `src/convert/*`: pure conversion logic (data, units, numbers, time) with unit tests. `src/tools/*`: the islands and the ffmpeg wrapper.
- `src/engine`, `FileDropzone`, `DownloadPanel`, `SimpleToolShell`: the shared file flow, inherited from iDuckImg (input files, options, job, outputs, ZIP).
- Design system: neo-brutalist duck theme from iDuckImg/iDuckPDF (`src/styles/global.css`, `src/lib/theme.ts`; dark theme colour #121212). Use the shared classes (`card`, `btn`, `pill`, `chip`, `prose`...).

## Guides
- Guides live in `src/lib/guides.ts` (the first four), `guides-media.ts`, `guides-data.ts` and `guides-more.ts`, each with a `category`. A unit test enforces unique slug and title, title at most 60 characters, description 70 to 160, at least 250 words (intro, steps, sections and questions) and that every linked converter exists. Write one guide per real job and give each its own facts; never paste one paragraph into many guides. The tool page links the first guide whose main (first) tool it is.

## Security (see AUDIT.md)
- `public/_headers` sets the security headers on every page; `scripts/finalize-headers.mjs` (run by `pnpm build`) puts the SHA-256 hash of each inline script into the CSP, so scripts never need `unsafe-inline`. Add a new inline script and the build still works, but more than 12 distinct inline scripts fails the build: move them to files.
- The only outside host is cdn.jsdelivr.net, for `ffmpeg-core.wasm`, fetched with a SHA-384 `integrity` check (`src/tools/ffmpeg.ts`). The 112 KB loader is self-hosted in `public/vendor/ffmpeg/` (`.gitattributes` keeps it byte-exact). If you change the ffmpeg core version, change the loader file, `WASM_URL`, `WASM_SHA384` and the hash in `tests/unit/security.test.ts` together.
- `Cache-Control: no-transform` stops Cloudflare injecting its analytics script (which the CSP blocks). Real User Monitoring is also off for the zone.
- The browser tests run through `scripts/serve.mjs`, which applies `dist/_headers`, so the CSP is really tested, including conversions.
- Never write user input, file names or converted text with innerHTML (a unit test checks `src`). Download names go through `safeFileName`; big files through `checkSize`.

## SEO pages
- The 22 audio and video converter pages get their own text from `src/lib/media-pages.ts`; a test fails if two pages repeat a title, description, answer or paragraph. Every converter page opens with a 40 to 60 word answer (tested).
- Unit pages show the exact factor, a table of common values and the source from `src/lib/unit-pages.ts`; about 30 popular pairs (cm to inches...) have their own pages from the same file. `/llms.txt` and the sitemap are generated from the lists.
- Local DNS cache can lie: check live changes with DNS-over-HTTPS or `curl --resolve`, and ask Cloudflare's own nameserver (`nslookup -type=TXT iduckconvert.com bob.ns.cloudflare.com`).

## Ask the helper and the start page
- `/chat/` is a full-height chat (`ChatHelper.tsx`, `src/lib/helper.ts`). It is still a keyword matcher, not an AI, but it does small jobs itself (units, number to words, Roman numerals, bases), remembers the converter it just suggested and answers follow-ups from that converter's own steps and questions. Keep the footnote honest if this changes. A unit test checks that every starter and follow-up button gets an answer.
- Theme: light is the default on every page (the site ignores the system setting until someone chooses). The toggle in the top bar, on every page including the start page, saves the choice (light, dark or "match my device") and it is used on every page until it is changed; Settings, Clear saved settings goes back to light. The choice is read by an inline script before first paint (`THEME_STORAGE_KEY`), so there is no flash. `tests/e2e/helper-theme.spec.ts` covers it.

## Hosting
- Cloudflare Pages project `iduckconvert` (build `pnpm build`, output `dist`, NODE_VERSION=22.23.4), deploys on merge to main. DNS is on Cloudflare (Free plan); the domain is registered at GoDaddy with Cloudflare nameservers. Email Routing forwards hello@ and feedback@ to the business mailbox; the catch-all drops.

## Languages (English plus nine, like iDuckPDF and iDuckIMG)

- `src/i18n/locales.ts` is the registry: en (root, hreflang en-US), hi, bn, pt-BR, id, ru, de, es, fr, tr under `/hi/`, `/pt-br/` and so on. There is one English: its text already uses British spelling ("metres", "colour"), so there is no separate English (UK) page. `status: 'machine'` means machine-translated and labelled on the page; never set `reviewed` until a person who reads the language has checked it, and never publish a language with English text under its address (`planned` keeps it out of hreflang and the sitemap).
- `src/i18n/en.ts` is the English source of the page text (`Dict` in `types.ts`); each other language is one file (`es.ts`, `pt-br.ts`...) holding `dict`, `templates` (the audio and video pair tools and the sister-site link tools are built from patterns) and `tools` (name, summary and short answer for every one-off converter). The shared control text and the run buttons (Convert, Extract MP3, Make GIF, Compress, Trim) are in `src/i18n/ui.ts`, kept apart so the browser bundle stays small; `useUi()` reads `<html lang>` after mount, so the first render is English and then switches.
- Pages: `src/pages/[lang]/index.astro` (home) and `[lang]/[slug].astro` (one per converter, same island through `ToolIsland.astro`), laid out by `LocalizedToolLayout.astro`. `AppShell` takes `locale` and `alternates`, reads its labels from the dictionary (English included, so the strings live in one place) and has the language menu (a `<details>`; closes on tap elsewhere, Escape, focus leaving and `pageshow`). `ToolLayout` and the English home pass `alternatesFor(path)`; hreflang is sent only for pages that exist in every language (`hasTranslations`). The sitemap lists the language versions through the `i18n` option in `astro.config.ts`.
- Translated: page chrome, home page, every converter's name, summary and short answer, the trust line, the file picker, buttons and download area, the helper, and the how-to guides that have been translated so far. Still English: the options inside each converter, the long explanations, steps, tables and questions on converter pages (left off translated pages instead of shown in English), the unit pair pages, the community and legal pages and the Ctrl K window. Translated pages say so (`machineNote`, `controlsEnglish`). Sidebar links to pages with no translation open the English page.
- The helper: `src/lib/helper.ts` answers from a `HelperContext` (its sentences, links, keywords, unit words in the language, and the converters' translated names); English is `ENGLISH_CONTEXT` and behaves exactly as before. `src/i18n/helper/<code>.ts` holds each language, `helperContext(code)` builds the plain data the island needs, `[lang]/chat.astro` hosts it. Buttons show a translated label but send the English question (`labels`), so the matcher keeps working. A new helper sentence needs all nine files: `tests/unit/i18n.test.ts` fails until they have it.
- Guides: `src/i18n/guides/<language path>/<n>.ts` (for example `es/1.ts`), each `export default { 'english-slug': { title, description, intro, steps, sections, faqs } }`. They are found by folder (`import.meta.glob`), so a new file needs no registration; a guide that a language has not translated simply has no page there and no hreflang for it (`codesFor` in `src/i18n/index.ts`). Pages: `[lang]/guides/index.astro` and `[lang]/guides/[slug].astro`. The test checks every translated guide has the same number of steps, sections, paragraphs and questions as the English one, keeps the numbers, and names no `{placeholder}`. Name a button with the language's own run label (`ui.ts`) in straight quotes. All 47 guides are done in all nine languages, and a test checks every language has every English guide.
- Converter page text (steps, explanation, questions): `src/i18n/pages/<language path>/<n>.ts`, each `export default { '<key>': 'translation' }`, where the key is `pageKey(english sentence)` (`src/i18n/pages/key.ts`). The English text is generated by `src/lib/content.ts`, so edit a sentence there and a unit test names every language that now lacks it. `LocalizedToolLayout.astro` shows the section only when every sentence of that page is translated. Unit pair pages and the unit table are still English only.
- Adding a converter means adding its text in all nine language files (or its pattern if it is an audio or video pair): `tests/unit/i18n.test.ts` fails until every language has it, keeps the `{placeholders}`, keeps the strings out of English, and checks that a short answer names the run button in quotes exactly as the page shows it. Changing an English string in `en.ts` or `ui.ts` means changing the nine translations.
- Do not put the language in a place that breaks English: the English pages' text, URLs and `lang="en-US"` are unchanged.

## Gotchas
- On Windows git checks files out with CRLF line endings. Tests that read files such as `public/_headers` must accept `\r?\n`; `public/vendor/**` is marked `-text` so the hash-checked ffmpeg loader stays byte-exact.
- After moving a domain to Cloudflare, purge the zone cache (Caching, Configuration, Purge Everything): the edge kept a robots.txt cached from the old GoDaddy parking origin for about an hour (max-age 4 h). Check `curl -sI https://iduckconvert.com/robots.txt` for `cf-cache-status` and an `Age` that predates the cutover. iduckcalculator.com showed the same stale file when checked.
- Cloudflare Pages returns the home page with status 200 for unknown URLs unless there is a 404 page. Keep `src/pages/404.astro`, and keep `public/_headers` limited to the `*.pages.dev` hosts (a bare `/*` rule would noindex the real site).
- Browser components must not touch `window`/`document` while rendering (the build prerenders them).
- Languages: see the Languages section below.
- iDuckCalculator (iduckcalculator.com) is live and linked in the sidebar, footer and About page. A stale local DNS cache once showed its old GoDaddy parking page: check with DNS-over-HTTPS or `curl --resolve`, not the local resolver.
- Indian land units: a bigha differs by state. Only values we could justify are listed; keep the warning note.
- Currency is intentionally not built: no free keyless rate source was verified.
