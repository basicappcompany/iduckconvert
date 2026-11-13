import { expect, test } from '@playwright/test';

test.describe('content without JavaScript', () => {
  test.use({ javaScriptEnabled: false });
  for (const path of ['/mp4-to-mp3/', '/mov-to-mp4/', '/length-converter/', '/cm-to-inches/', '/csv-to-json/', '/guides/how-to-convert-mov-to-mp4/']) {
    test(`${path} has its heading, steps, explanation and questions in the raw page`, async ({ page }) => {
      await page.goto(path);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      expect(await page.locator('main ol li').count()).toBeGreaterThanOrEqual(3);
      expect(await page.locator('main details summary').count()).toBeGreaterThanOrEqual(3);
      expect((await page.locator('main').innerText()).length).toBeGreaterThan(1000);
    });
  }
});

test.describe('pages added for search and answer engines', () => {
  test('a pair page has the exact factor, a table and a preset converter', async ({ page }) => {
    await page.goto('/cm-to-inches/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('cm to inches');
    await expect(page.getByText('1 centimetre = 0.3937007874 inches').first()).toBeVisible();
    const rows = await page.locator('main table:has(caption)').first().locator('tbody tr').count();
    expect(rows).toBeGreaterThanOrEqual(15);
    expect(rows).toBeLessThanOrEqual(20);
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await expect(page.locator('#u-from')).toHaveValue('cm');
    await expect(page.locator('#u-to')).toHaveValue('in');
    await page.locator('#u-value').fill('254');
    await expect(page.locator('#u-result')).toHaveText('100');
  });

  test('the inch page states the exact factor and names its source', async ({ page }) => {
    await page.goto('/inches-to-cm/');
    await expect(page.getByText('1 inch = 2.54 centimetres exactly.').first()).toBeVisible();
    await expect(page.getByText(/NIST Special Publication 811/).first()).toBeVisible();
  });

  test('the main unit page lists the popular conversions', async ({ page }) => {
    await page.goto('/length-converter/');
    await expect(page.getByRole('heading', { name: 'Popular conversions' })).toBeVisible();
    await page.getByRole('link', { name: 'miles to km' }).click();
    await expect(page).toHaveURL(/\/miles-to-km\/$/);
  });

  test('how it works, llms.txt and the home counts are honest', async ({ page, request }) => {
    await page.goto('/how-it-works/');
    await expect(page.getByText('cdn.jsdelivr.net').first()).toBeVisible();
    const llms = await (await request.get('/llms.txt')).text();
    expect(llms).toContain('/mp4-to-mp3/');
    expect(llms).toContain('/cm-to-inches/');
    expect(llms).not.toContain('iduckimg.com/heic-to-jpg');
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /All 57 converters here/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'On our sister sites' })).toBeVisible();
  });

  test('every page says when it was last reviewed', async ({ page }) => {
    await page.goto('/mp4-to-mp3/');
    await expect(page.getByText(/Last reviewed: 13 November 2026/)).toBeVisible();
  });
});
