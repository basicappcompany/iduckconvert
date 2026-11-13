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

## Ask the helper and the start page
- `/chat/` is a full-height chat (`ChatHelper.tsx`, `src/lib/helper.ts`). It is still a keyword matcher, not an AI, but it does small jobs itself (units, number to words, Roman numerals, bases), remembers the converter it just suggested and answers follow-ups from that converter's own steps and questions. Keep the footnote honest if this changes. A unit test checks that every starter and follow-up button gets an answer.
- The home page is always light (`forceLight` on `AppShell`, no theme toggle there, a MutationObserver puts `data-theme=light` back). Other pages follow the saved or system theme.

## Hosting
- Cloudflare Pages project `iduckconvert` (build `pnpm build`, output `dist`, NODE_VERSION=22.23.4), deploys on merge to main. DNS is on Cloudflare (Free plan); the domain is registered at GoDaddy with Cloudflare nameservers. Email Routing forwards hello@ and feedback@ to the business Gmail; the catch-all drops.

## Gotchas
- After moving a domain to Cloudflare, purge the zone cache (Caching, Configuration, Purge Everything): the edge kept a robots.txt cached from the old GoDaddy parking origin for about an hour (max-age 4 h). Check `curl -sI https://iduckconvert.com/robots.txt` for `cf-cache-status` and an `Age` that predates the cutover. iduckcalculator.com showed the same stale file when checked.
- Cloudflare Pages returns the home page with status 200 for unknown URLs unless there is a 404 page. Keep `src/pages/404.astro`, and keep `public/_headers` limited to the `*.pages.dev` hosts (a bare `/*` rule would noindex the real site).
- Browser components must not touch `window`/`document` while rendering (the build prerenders them).
- Languages: English (US) only so far. Turkish is planned (status item 1.4); do not add a language switch that leads to missing pages.
- iDuckCalculator (iduckcalculator.com) is live and linked in the sidebar, footer and About page. A stale local DNS cache once showed its old GoDaddy parking page: check with DNS-over-HTTPS or `curl --resolve`, not the local resolver.
- Indian land units: a bigha differs by state. Only values we could justify are listed; keep the warning note.
- Currency is intentionally not built: no free keyless rate source was verified.
