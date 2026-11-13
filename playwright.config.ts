import { defineConfig } from '@playwright/test';

const PORT = 4173;

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 90_000,
  // WASM codecs on a busy machine can be slow; a generous wait costs nothing when things are fast.
  expect: { timeout: 40_000 },
  fullyParallel: true,
  // Each test runs real codecs in its own browser, so more than 3 at once starves them of CPU.
  workers: 3,
  retries: process.env['CI'] ? 1 : 0,
  reporter: process.env['CI'] ? 'github' : 'list',
  use: {
    baseURL: `http://localhost:${PORT}`,
    // Uses the Chrome already installed on the machine (and on GitHub's Ubuntu runners),
    // so no browser download is needed.
    channel: 'chrome',
  },
  // Tests run against the production build, which is what ships.
  webServer: {
    command: `pnpm build && pnpm preview --port ${PORT}`,
    url: `http://localhost:${PORT}/`,
    reuseExistingServer: !process.env['CI'],
    timeout: 180_000,
  },
});
