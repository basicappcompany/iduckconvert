import { expect, test } from '@playwright/test';

test.describe('how-to guides', () => {
  test('the index groups guides by topic and lists them all', async ({ page }) => {
    await page.goto('/guides/');
    await expect(page.getByRole('heading', { name: /How-to guides/ })).toBeVisible();
    const topics = page.getByRole('navigation', { name: 'Topics' }).getByRole('link');
    expect(await topics.count()).toBeGreaterThanOrEqual(6);
    const cards = page.locator('section ul.card-grid li');
    expect(await cards.count()).toBeGreaterThanOrEqual(45);
  });

  test('a guide has steps, questions, structured data and links to its converters', async ({ page }) => {
    await page.goto('/guides/how-to-convert-mov-to-mp4/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('MOV to MP4');
    await expect(page.locator('.prose ol li').first()).toBeVisible();
    await expect(page.getByRole('link', { name: /MOV to MP4/ }).first()).toBeVisible();
    const types = await page.$$eval('script[type="application/ld+json"]', (nodes) => nodes.map((n) => JSON.parse(n.textContent ?? '{}')['@type']));
    expect(types).toEqual(expect.arrayContaining(['Article', 'HowTo', 'FAQPage', 'BreadcrumbList']));
  });

  test('a converter page links to its guide, and the guide links back', async ({ page }) => {
    await page.goto('/mov-to-mp4/');
    await page.getByRole('link', { name: /Read the guide/ }).click();
    await expect(page).toHaveURL(/how-to-convert-mov-to-mp4/);
    await page.getByRole('link', { name: /MOV to MP4/ }).first().click();
    await expect(page).toHaveURL(/\/mov-to-mp4\/$/);
  });

  test('the home page shows six guides and a link to all of them', async ({ page }) => {
    await page.goto('/');
    const section = page.getByRole('region', { name: 'How-to guides' });
    await expect(section.locator('ul.card-grid li')).toHaveCount(6);
    await expect(section.getByRole('link', { name: /All \d+ how-to guides/ })).toBeVisible();
  });
});
