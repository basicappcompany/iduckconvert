import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { NOINDEX_PATHS } from './src/lib/community';

export default defineConfig({
  site: 'https://iduckconvert.com',
  output: 'static',
  integrations: [
    preact(),
    // Pages that are noindex (forms, settings) stay out of the sitemap too.
    sitemap({ filter: (page) => !NOINDEX_PATHS.some((path) => page.endsWith(path)) }),
  ],
  vite: {
    plugins: [tailwindcss()],
    worker: { format: 'es' },
    // ffmpeg.wasm starts its own worker from inside the package, so Vite must not pre-bundle it in dev.
    optimizeDeps: { exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util'] },
  },
});
