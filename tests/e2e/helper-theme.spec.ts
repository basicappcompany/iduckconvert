import { expect, test } from '@playwright/test';

test.describe('start page is always light', () => {
  test('light even when the system is dark and dark was saved', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.addInitScript(() => localStorage.setItem('duck.theme', 'dark'));
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    // The cream page colour, not the #121212 dark one.
    const [r, g, b] = bg.match(/\d+/g)!.map(Number);
    expect(r! + g! + b!).toBeGreaterThan(600);
    await expect(page.locator('#theme-toggle')).toHaveCount(0);
  });

  test('other pages still follow the saved choice', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.addInitScript(() => localStorage.setItem('duck.theme', 'dark'));
    await page.goto('/length-converter/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await expect(page.locator('#theme-toggle')).toHaveCount(1);
  });

  test('the search window cannot make the start page dark', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/');
    await page.keyboard.press('Control+k');
    await page.getByRole('combobox').fill('switch light');
    await page.keyboard.press('Enter');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });
});

test.describe('Ask the helper', () => {
  const ready = (page: import('@playwright/test').Page) => page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);

  test('fills the screen, answers a sum, and remembers the converter', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/chat/');
    await ready(page);
    const pane = page.locator('.chat-pane');
    const box = (await pane.boundingBox())!;
    // A real chat: the pane uses most of the window height and the input sits near the bottom.
    expect(box.height).toBeGreaterThan(450);
    await page.getByLabel('Ask the helper').fill('5 km in miles');
    await page.getByRole('button', { name: 'Send' }).click();
    await expect(page.getByText('3.106855961 mi')).toBeVisible();

    await page.getByLabel('Ask the helper').fill('mp4 to mp3');
    await page.getByRole('button', { name: 'Send' }).click();
    await expect(page.getByRole('link', { name: /MP4 to MP3/ }).first()).toBeVisible();
    // A follow-up chip appears and uses what it just suggested.
    await page.getByRole('button', { name: 'How do I use it?' }).click();
    await expect(page.getByText(/Drop your video files onto the box/)).toBeVisible();
    await page.getByLabel('Ask the helper').fill('is my file uploaded?');
    await page.getByRole('button', { name: 'Send' }).click();
    await expect(page.getByText(/never leaves your device/).last()).toBeVisible();
  });

  test('starter buttons work and Start over resets', async ({ page }) => {
    await page.goto('/chat/');
    await ready(page);
    await page.getByRole('button', { name: '1250000 in words' }).click();
    await expect(page.getByText('Twelve lakh fifty thousand')).toBeVisible();
    await page.getByRole('button', { name: 'Start over' }).click();
    await expect(page.getByText('Twelve lakh fifty thousand')).toHaveCount(0);
  });

  test('no sideways scroll on a phone', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 700 });
    await page.goto('/chat/');
    await ready(page);
    await page.getByLabel('Ask the helper').fill('write 123456789012345 in indian words');
    await page.getByRole('button', { name: 'Send' }).click();
    await expect(page.getByText(/lakh/).first()).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
});
