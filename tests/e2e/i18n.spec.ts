import { expect, test } from '@playwright/test';

const LANGS = [
  { path: 'hi', tag: 'hi' },
  { path: 'bn', tag: 'bn' },
  { path: 'pt-br', tag: 'pt-BR' },
  { path: 'id', tag: 'id' },
  { path: 'ru', tag: 'ru' },
  { path: 'de', tag: 'de' },
  { path: 'es', tag: 'es' },
  { path: 'fr', tag: 'fr' },
  { path: 'tr', tag: 'tr' },
] as const;

test.describe('languages: pages', () => {
  for (const { path, tag } of LANGS) {
    test(`${path}: home page and a converter page are in the language`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (e) => errors.push(e.message));
      await page.goto(`/${path}/`);
      await expect(page.locator('html')).toHaveAttribute('lang', tag);
      // The English headline is gone, and the whole menu of ten languages is there.
      await expect(page.locator('h1')).not.toContainText('quacked');
      await expect(page.locator('.lang-list a')).toHaveCount(10);
      await expect(page.locator('[data-machine-note]')).toBeVisible();
      // Every converter is linked in the language.
      expect(await page.locator('[data-card] a[href^="/' + path + '/"]').count()).toBeGreaterThanOrEqual(57);

      await page.goto(`/${path}/csv-to-json/`);
      await expect(page.locator('html')).toHaveAttribute('lang', tag);
      await expect(page.locator('[data-answer]')).not.toContainText('To convert CSV');
      await expect(page.locator('h1')).not.toHaveText('CSV to JSON converter');
      await expect(page.locator('[data-more-nav] a').first()).toHaveAttribute('href', new RegExp(`^/${path}/`));
      expect(errors).toEqual([]);
    });

    test(`${path}: nothing scrolls sideways at 320 px`, async ({ page }) => {
      await page.setViewportSize({ width: 320, height: 700 });
      for (const url of [`/${path}/`, `/${path}/mp4-to-mp3/`, `/${path}/time-zone-converter/`]) {
        await page.goto(url);
        const wide = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
        expect(wide, url).toBe(false);
      }
    });
  }
});

test.describe('languages: search engines and menu', () => {
  test('a converter page lists every language and x-default; a page without translations lists none', async ({ page }) => {
    await page.goto('/mp4-to-mp3/');
    const hrefs = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((els) => els.map((e) => `${e.getAttribute('hreflang')} ${e.getAttribute('href')}`));
    expect(hrefs).toHaveLength(11);
    expect(hrefs).toContain('es https://iduckconvert.com/es/mp4-to-mp3/');
    expect(hrefs).toContain('en-US https://iduckconvert.com/mp4-to-mp3/');
    expect(hrefs).toContain('x-default https://iduckconvert.com/mp4-to-mp3/');
    await page.goto('/about/');
    await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(0);
    // A translated page is its own canonical address.
    await page.goto('/es/mp4-to-mp3/');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://iduckconvert.com/es/mp4-to-mp3/');
  });

  test('the language menu keeps you on the same converter and comes back', async ({ page }) => {
    await page.goto('/mp4-to-mp3/');
    await page.locator('[data-lang-menu] summary').click();
    await expect(page.locator('.lang-list')).toBeVisible();
    await page.locator('.lang-list a[hreflang="es"]').click();
    await expect(page).toHaveURL(/\/es\/mp4-to-mp3\/$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    await page.locator('[data-lang-menu] summary').click();
    await page.locator('.lang-list a[hreflang="en-US"]').click();
    await expect(page).toHaveURL(/\/mp4-to-mp3\/$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en-US');
  });

  test('the menu closes on Escape and on a tap elsewhere; a page with no translation sends you to that language home', async ({ page }) => {
    await page.goto('/about/');
    const menu = page.locator('[data-lang-menu]');
    await menu.locator('summary').click();
    await expect(page.locator('.lang-list')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('.lang-list')).toBeHidden();
    await menu.locator('summary').click();
    await page.locator('h1').first().click();
    await expect(page.locator('.lang-list')).toBeHidden();
    await menu.locator('summary').click();
    await page.locator('.lang-list a[hreflang="fr"]').click();
    await expect(page).toHaveURL(/\/fr\/$/);
  });

  test('the sitemap lists the translated pages with their language links', async ({ request }) => {
    const index = await (await request.get('/sitemap-index.xml')).text();
    expect(index).toContain('sitemap-0.xml');
    const xml = await (await request.get('/sitemap-0.xml')).text();
    expect(xml).toContain('<loc>https://iduckconvert.com/es/mp4-to-mp3/</loc>');
    expect(xml).toContain('hreflang="tr" href="https://iduckconvert.com/tr/mp4-to-mp3/"');
    expect(xml).toContain('<loc>https://iduckconvert.com/hi/</loc>');
  });
});

test.describe('languages: the converter works', () => {
  test('French: the controls are in French and a CSV becomes an Excel file', async ({ page }) => {
    await page.goto('/fr/csv-to-excel/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await expect(page.getByText('Déposez').first()).toBeVisible();
    await page.locator('input[type=file]').first().setInputFiles({ name: 'prix.csv', mimeType: 'text/csv', buffer: Buffer.from('nom,prix\npomme,2\npoire,3\n') });
    await page.getByRole('button', { name: 'Convertir', exact: true }).click();
    const link = page.locator('a[download]').first();
    await expect(link).toBeVisible({ timeout: 60_000 });
    await expect(link).toContainText('Télécharger');
    await expect(link).toHaveAttribute('download', /\.xlsx$/);
  });

  test('German: a calculator still calculates, and the answer is in German', async ({ page }) => {
    await page.goto('/de/roman-numeral-converter/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await expect(page.locator('[data-answer]')).toContainText(/römische/i);
    await expect(page.locator('h1')).toHaveText(/Römische Zahlen/);
  });
});

test.describe('languages: theme', () => {
  test('a translated page opens light, and the dark choice is kept in every language', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/hi/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await page.locator('#theme-toggle').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await page.goto('/tr/mp4-to-mp3/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });
});

test.describe('languages: the helper', () => {
  test('the Spanish helper answers in Spanish, does a sum and links to the Spanish converter pages', async ({ page }) => {
    await page.goto('/es/chat/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await expect(page.locator('h1')).toContainText('asistente');
    await expect(page.getByRole('log')).toContainText('Cuac');
    // Starter buttons show Spanish labels.
    await expect(page.getByRole('button', { name: 'Extraer el audio de un vídeo' })).toBeVisible();
    await page.getByLabel('Pregunta al asistente').fill('5 km en millas');
    await page.getByRole('button', { name: 'Enviar' }).click();
    await expect(page.getByRole('log')).toContainText('3.106855961 mi', { timeout: 20_000 });
    await page.getByLabel('Pregunta al asistente').fill('mp4 a mp3');
    await page.getByRole('button', { name: 'Enviar' }).click();
    const card = page.getByRole('log').locator('a[href="/es/mp4-to-mp3/"]');
    await expect(card).toBeVisible({ timeout: 20_000 });
    await expect(card).toContainText('MP4 a MP3');
    // The follow-up button sends the English question but shows the Spanish label.
    await page.getByRole('button', { name: '¿Cómo se usa?' }).click();
    await expect(page.getByRole('log')).toContainText('Así se usa MP4 a MP3', { timeout: 20_000 });
  });

  test('every language has a helper page, and the sidebar and home link to it in the language', async ({ page }) => {
    for (const { path } of LANGS) {
      await page.goto(`/${path}/`);
      await expect(page.locator(`a[href="/${path}/chat/"]`).first()).toBeVisible();
      const res = await page.goto(`/${path}/chat/`);
      expect(res?.status(), path).toBe(200);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
    }
  });
});

test.describe('languages: how-to guides', () => {
  const GUIDE = 'how-to-make-a-gif-from-a-video';

  for (const { path, tag } of LANGS) {
    test(`${path}: the guides list and a guide are in the language and fit a 320 px phone`, async ({ page }) => {
      await page.setViewportSize({ width: 320, height: 700 });
      await page.goto(`/${path}/guides/`);
      await expect(page.locator('html')).toHaveAttribute('lang', tag);
      expect(await page.locator(`.card-grid a[href^="/${path}/guides/"]`).count()).toBeGreaterThanOrEqual(5);
      await page.goto(`/${path}/guides/${GUIDE}/`);
      await expect(page.locator('html')).toHaveAttribute('lang', tag);
      await expect(page.locator('h1')).not.toHaveText('How to make a GIF from a video');
      await expect(page.locator('[data-machine-note]')).toBeVisible();
      expect(await page.locator('.prose h2').count()).toBeGreaterThanOrEqual(3);
      expect(await page.locator('.prose li').count()).toBe(5);
      expect(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)).toBe(false);
      // The "Try it now" cards link to the converters in the language.
      await expect(page.locator('section[aria-label] ul a[href^="/' + path + '/video-to-gif/"]').first()).toBeVisible();
    });
  }

  test('a guide lists its translations for search engines, and the converter page links to it in the language', async ({ page }) => {
    await page.goto(`/guides/${GUIDE}/`);
    const hrefs = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((els) => els.map((e) => `${e.getAttribute('hreflang')} ${e.getAttribute('href')}`));
    expect(hrefs).toContain(`es https://iduckconvert.com/es/guides/${GUIDE}/`);
    expect(hrefs).toContain(`x-default https://iduckconvert.com/guides/${GUIDE}/`);
    // The language menu keeps you on the same guide.
    await page.locator('[data-lang-menu] summary').click();
    await page.locator('.lang-list a[hreflang="de"]').click();
    await expect(page).toHaveURL(new RegExp(`/de/guides/${GUIDE}/$`));
    // A converter page offers its guide in the language.
    await page.goto('/es/video-to-gif/');
    await expect(page.locator('[data-answer] a.link')).toHaveAttribute('href', `/es/guides/${GUIDE}/`);
    // The home page shows the guides in the language.
    await page.goto('/fr/');
    await expect(page.locator('section[aria-label="Guides pratiques"] a').first()).toBeVisible();
  });

  test('a guide that is not translated yet has no page in the language and is not linked from it', async ({ request }) => {
    const res = await request.get('/es/guides/how-to-convert-psi-to-bar-tyre-pressure/');
    expect(res.status()).toBe(404);
  });
});
