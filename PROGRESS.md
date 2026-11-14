# iDuckConvert build progress

Resume here in a new session. The full picture is `docs/status.html`. Base = iDuckImg (Astro 7, Preact islands, Tailwind 4, pnpm).

## Decisions
- Private repo. Never push to main after the first commit: branch, PR, merge on green CI.
- PDF conversions belong to iDuckPDF; image conversions iDuckIMG already has (HEIC/AVIF/BMP/SVG to JPG/PNG, favicon/ICO) are link cards.
- Languages: English plus 9 (hi, bn, pt-BR, id, ru, de, es, fr, tr), phase 1 live: home page, all converters, shared controls. Phases 2 and 3 (guides, helper, pair pages, long text) to do.
- Contact: hello@iduckconvert.com (general), feedback@iduckconvert.com (forms). Needs Cloudflare Email Routing set up by the owner.
- iDuckCalculator: live and linked (sidebar, footer, About).

## Checklist
- [x] Step 0: GitHub account check
- [x] Step 1a: sister repos read
- [ ] Step 1b: live-site visual comparison in dark/light/mobile (only checked against the sister repos' code and my own screenshots of this site)
- [x] Step 2: overlap list (6 link cards)
- [x] Step 3: repo created
- [x] Shell: theme, AppShell, Ctrl K, ToolLayout, home, community pages, helper
- [x] Converters: audio (14), video (12), images (2 built, 6 linked), data (11), units (11), numbers and text (5), time (2)
- [x] Site pages, 4 guides, sitemap, robots, canonical, OG/Twitter, og.png, favicon
- [x] Unit tests (42) and browser tests (26)
- [x] Languages phase 1 (switch, hreflang, home page and every converter in 9 languages)
- [x] Languages phase 2a: the helper in 9 languages
- [ ] Languages phase 2b: how-to guides (5 of 47 done in all nine languages)
- [ ] Languages phase 3: unit pair pages, long explanations, About, Privacy, Terms
- [x] Cloudflare Pages project, domain, Email Routing (done 13 Nov; send a real test email to hello@ still to do)
- [x] 46 how-to guides (42 added), grouped by topic
- [x] Helper chat rebuilt (full height, inline sums, follow-ups); home page always light
- [x] Security and SEO audit (AUDIT.md): headers A+, Search Console and Bing set up; owner steps listed there (GitHub two-factor, DNSSEC DS at GoDaddy)
- [x] Lighthouse on the live site (mobile): 98 / 100 / 100 / 100
- [ ] Phone check of video limits (owner)
