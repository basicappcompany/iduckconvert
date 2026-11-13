# iDuckConvert

Free converters that run in your browser: audio, video, spreadsheets and data, units, numbers, text and time zones. Live at https://iduckconvert.com (once deployed).

```
pnpm install
pnpm dev          # http://localhost:4321
pnpm verify       # type check, lint, unit tests
pnpm build        # static site in dist/
pnpm test:e2e     # runs the real converters in Chrome against the production build
```

Cloudflare Pages: build command `pnpm build`, output directory `dist`, Node 22, framework preset Astro. No environment variables, no functions.

See `CLAUDE.md` for conventions and `docs/status.html` for project status.
