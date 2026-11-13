# iDuckConvert build progress

Resume here in a new session. The full picture is `docs/status.html`. Base = iDuckImg (Astro 7, Preact islands, Tailwind 4, pnpm).

## Decisions
- Private repo. Never push to main after the first commit: branch, PR, merge on green CI.
- PDF conversions belong to iDuckPDF; image conversions iDuckIMG already has (HEIC/AVIF/BMP/SVG to JPG/PNG, favicon/ICO) are link cards.
- Languages: EN-US built; TR planned (no switch until it exists).
- Contact: hello@iduckconvert.com (general), feedback@iduckconvert.com (forms). Needs Cloudflare Email Routing set up by the owner.
- iDuckCalculator: not linked until iduckcalculator.com stops being a parked page.

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
- [ ] Turkish (language switch)
- [x] Cloudflare Pages project, domain, Email Routing (done 13 Nov; send a real test email to hello@ still to do)
- [ ] Phone check of video limits (owner)
