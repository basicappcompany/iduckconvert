import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Playwright owns tests/e2e (run with `pnpm test:e2e`).
    include: ['tests/unit/**/*.test.ts'],
  },
});
