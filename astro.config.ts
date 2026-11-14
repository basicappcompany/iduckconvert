import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { NOINDEX_PATHS } from './src/lib/community';
import { LAST_REVIEWED } from './src/lib/site';
import { LOCALES } from './src/i18n/locales';

export default defineConfig({
  site: 'https://iduckconvert.com',
  output: 'static',
  integrations: [
    preact(),
    // Pages that are noindex (forms, settings) stay out of the sitemap too.
    sitemap({
      filter: (page) => !NOINDEX_PATHS.some((path) => page.endsWith(path)),
      // Each translated page lists its other-language versions (hreflang) in the sitemap. English (US) is the default and has no path prefix.
      i18n: { defaultLocale: 'en', locales: Object.fromEntries(LOCALES.filter((l) => l.status !== 'planned').map((l) => [l.path || 'en', l.hreflang])) },
      // Every page carries a last-modified date (the day the text was last reviewed).
      serialize: (item) => ({ ...item, lastmod: new Date(`${LAST_REVIEWED}T00:00:00Z`).toISOString() }),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    worker: { format: 'es' },
    // ffmpeg.wasm starts its own worker from inside the package, so Vite must not pre-bundle it in dev.
    optimizeDeps: { exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util'] },
  },
});
