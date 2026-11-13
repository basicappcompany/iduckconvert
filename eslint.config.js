import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default [
  { ignores: ['dist/', '.astro/', 'node_modules/', 'public/'] },
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  // The build and test scripts run in Node, so process, console and the like exist there.
  { files: ['scripts/**/*.mjs'], languageOptions: { globals: { process: 'readonly', console: 'readonly' } } },
];
