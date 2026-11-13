# iDuckConvert build progress

Resume here in a new session. Tick items as they land. Base = iDuckImg (Astro 7, Preact islands, Tailwind 4, pnpm). Sister sites: iduckpdf.com (Expo web), iduckimg.com (Astro).

## Decisions
- Repo is private (same as iduckpdf). Never push to main after the first commit: branch, PR, merge on green CI.
- PDF conversions belong to iDuckPDF; image conversions iDuckIMG already has (HEIC/AVIF/BMP/SVG to JPG/PNG, favicon/ICO) link out.
- Languages: EN-US and TR only.
- iDuckCalculator: no repo found under basicappcompany; links point to iduckcalculator.com (verify it is live).

## Checklist
- [x] Step 0: GitHub account check (basicappcompany, basicappcompany@gmail.com primary and verified)
- [x] Step 1a: sister repos cloned and read (iDuckImg conventions in its CLAUDE.md)
- [ ] Step 1b: live-site visual study (home, tool, settings, about, roadmap, request, feedback, donate, privacy, terms; dark, light, mobile)
- [ ] Step 2: overlap list
- [x] Step 3: repo created
- [ ] Shell: theme, AppShell, palette, ToolLayout, home, community pages
- [ ] Converters: audio, video, images, data and documents, units, numbers and text, time
- [ ] Site pages, guides, SEO files, og.png
- [ ] Tests, CI, Cloudflare settings
