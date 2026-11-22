# iDuckConvert build progress

Resume here in a new session. The full picture is `docs/status.html`. Base = iDuckImg (Astro 7, Preact islands, Tailwind 4, pnpm).

## Decisions
- Private repo. Never push to main after the first commit: branch, PR, merge on green CI.
- PDF conversions belong to iDuckPDF; image conversions iDuckIMG already has (HEIC, AVIF, BMP, SVG, GIF, WEBP, JPG and PNG to each other, favicon/ICO) are link cards, each to its own iDuckIMG page. PDF conversions are not carded one by one.
- Languages: English plus 9 (hi, bn, pt-BR, id, ru, de, es, fr, tr). All phases done (home, converters, helper, guides, converter page text, unit pairs, About/Privacy/Terms/How it works, Ctrl K, converter options, names and dates, the other site pages). All machine-translated; none read by a native speaker yet.
- Contact: hello@iduckconvert.com (general), feedback@iduckconvert.com (forms). Cloudflare Email Routing is set up (13 Nov); a real test email has not been sent yet.
- iDuckCalculator: live and linked (sidebar, footer, About).

## Checklist
- [x] Step 0: GitHub account check
- [x] Step 1a: sister repos read
- [x] Step 1b: live-site visual comparison in dark/light/mobile (status item 0.5)
- [x] Step 2: overlap list (6 link cards)
- [x] Step 3: repo created
- [x] Shell: theme, AppShell, Ctrl K, ToolLayout, home, community pages, helper
- [x] Converters: audio (16), video (13), images (2 built, 15 linked), data (24), units (11), numbers and text (7), time (2)
- [x] Site pages, 4 guides, sitemap, robots, canonical, OG/Twitter, og.png, favicon
- [x] Unit tests (783 in 9 files) and browser tests (111: the 10 added for the AI-era converters pass locally; the full suite runs in CI; the WEBM recording test fails on this PC and its 4 dependents do not run there)
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
- [x] Link cards for newer iDuckIMG converters: 9 added (status 4.4, 22 Nov)
- [x] AVIF, SVG and BMP link cards now open iDuckIMG's own pages instead of /convert-image/ (status 4.5, 22 Nov)
- [x] Cloudflare Pages project, domain, Email Routing (done 13 Nov; send a real test email to hello@ still to do)
- [x] 47 how-to guides, grouped by topic
- [x] Helper chat rebuilt (full height, inline sums, follow-ups); home page always light
- [x] Security and SEO audit (AUDIT.md): headers A+, Search Console and Bing set up; owner steps listed there (account steps, DNSSEC DS at GoDaddy)
- [x] Lighthouse on the live site (mobile): 98 / 100 / 100 / 100 on 13 Nov (before the language work; a re-run on 16 Nov failed here, so refresh it in Chrome DevTools)
- [x] AI-era converters batch 1: 12 text and data converters in nine languages (status 11.1, 22 Nov)
- [x] AI-era converters batch 2: token counter (11.2), Word to Markdown and Excel to Markdown table (11.3, 22 Nov)
- [x] AI-era converters batch 3: audio for transcription, split audio, video to frames (11.4, 22 Nov)
- [x] Phone check of video limits (owner, reported done 22 Nov; not checked from here)
