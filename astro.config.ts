import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { NOINDEX_PATHS } from './src/lib/community';
import { LOCALES } from './src/i18n/locales';

export default defineConfig({
  site: 'https://iduckimg.com',
  output: 'static',
  integrations: [
    preact(),
    // Pages that are noindex (forms, settings) stay out of the sitemap too.
    // Each translated page lists its other language versions (hreflang) in the sitemap too.
    sitemap({
      filter: (page) => !NOINDEX_PATHS.some((path) => page.endsWith(path)),
      i18n: {
        defaultLocale: 'en',
        locales: Object.fromEntries(LOCALES.filter((l) => l.status !== 'planned').map((l) => [l.path || 'en', l.hreflang])),
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    worker: { format: 'es' },
    // jSquash locates its .wasm files relative to its own module URL, which breaks
    // when Vite pre-bundles it in dev.
    optimizeDeps: {
      exclude: [
        '@jsquash/jpeg',
        '@jsquash/png',
        '@jsquash/webp',
        '@jsquash/oxipng',
        '@jsquash/resize',
      ],
    },
  },
});
