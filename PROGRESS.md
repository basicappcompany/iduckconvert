# iDuckConvert build progress

Resume here in a new session. The full picture is `docs/status.html`. Base = iDuckImg (Astro 7, Preact islands, Tailwind 4, pnpm).

## Decisions
- Private repo. Never push to main after the first commit: branch, PR, merge on green CI.
- PDF conversions belong to iDuckPDF; image conversions iDuckIMG already has (HEIC/AVIF/BMP/SVG to JPG/PNG, favicon/ICO) are link cards.
- Languages: English plus 9 (hi, bn, pt-BR, id, ru, de, es, fr, tr). All phases done (home, converters, helper, guides, converter page text, unit pairs, About/Privacy/Terms/How it works, Ctrl K, converter options, names and dates, the other site pages). All machine-translated; none read by a native speaker yet.
- Contact: hello@iduckconvert.com (general), feedback@iduckconvert.com (forms). Needs Cloudflare Email Routing set up by the owner.
- iDuckCalculator: live and linked (sidebar, footer, About).

## Checklist
- [x] Step 0: GitHub account check
- [x] Step 1a: sister repos read
- [x] Step 1b: live-site visual comparison in dark/light/mobile (status item 0.5)
- [x] Step 2: overlap list (6 link cards)
- [x] Step 3: repo created
- [x] Shell: theme, AppShell, Ctrl K, ToolLayout, home, community pages, helper
- [x] Converters: audio (14), video (12), images (2 built, 6 linked), data (11), units (11), numbers and text (5), time (2)
- [x] Site pages, 4 guides, sitemap, robots, canonical, OG/Twitter, og.png, favicon
- [x] Unit tests (745 in 7 files) and browser tests (101: 96 passed locally on 16 Nov, the WEBM recording test fails on this PC and its 4 dependents were skipped; CI passes the suite)
- [x] Languages phase 1 (switch, hreflang, home page and every converter in 9 languages)
- [x] Languages phase 2a: the helper in 9 languages
- [x] Languages phase 2b: all 47 how-to guides in all nine languages
- [x] Languages phase 3a: converter page text (664 sentences x 9 languages)
- [x] Languages phase 3b: all 32 unit pair pages in all nine languages
- [x] Languages phase 3c-1: About, Privacy, Terms, How it works in all nine languages
- [x] Languages phase 3c-2: the Ctrl K window in all nine languages
- [x] Languages phase 3c-3: options inside converters in all nine languages
- [x] Languages phase 3c-4: unit, city and date-format names, number to words, errors, six more pages
- [x] Final QA pass 16 Nov: top bar overflow on phones fixed (PR #25), Ctrl K finds unit pairs (PR #26)
- [ ] Link cards for newer iDuckIMG converters (GIF to PNG, HEIC to PNG...): owner to say which
- [x] Cloudflare Pages project, domain, Email Routing (done 13 Nov; send a real test email to hello@ still to do)
- [x] 46 how-to guides (42 added), grouped by topic
- [x] Helper chat rebuilt (full height, inline sums, follow-ups); home page always light
- [x] Security and SEO audit (AUDIT.md): headers A+, Search Console and Bing set up; owner steps listed there (GitHub two-factor, DNSSEC DS at GoDaddy)
- [x] Lighthouse on the live site (mobile): 98 / 100 / 100 / 100 on 13 Nov (before the language work; a re-run on 16 Nov failed here, so refresh it in Chrome DevTools)
- [ ] Phone check of video limits (owner)
