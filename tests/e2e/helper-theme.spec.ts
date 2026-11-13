import { expect, test } from '@playwright/test';

test.describe('theme: light by default, then consistent until changed', () => {
  test('the default is light on every page, even when the system is dark', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    for (const path of ['/', '/length-converter/', '/guides/', '/about/']) {
      await page.goto(path);
      await expect(page.locator('html'), path).toHaveAttribute('data-theme', 'light');
    }
    const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    const [r, g, b] = bg.match(/\d+/g)!.map(Number);
    // The cream page colour, not the #121212 dark one.
    expect(r! + g! + b!).toBeGreaterThan(600);
  });

  test('the start page has the toggle, and a choice made there stays on every page until it is changed', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await expect(page.locator('#theme-toggle')).toHaveCount(1);
    await page.locator('#theme-toggle').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    // Same choice on another page, after a reload, and back on the start page.
    await page.goto('/length-converter/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    // Changing it back is kept too.
    await page.locator('#theme-toggle').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await page.goto('/about/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });

  test('a saved dark choice is used on every page, including the start page', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.addInitScript(() => localStorage.setItem('duck.theme', 'dark'));
    for (const path of ['/', '/length-converter/']) {
      await page.goto(path);
      await expect(page.locator('html'), path).toHaveAttribute('data-theme', 'dark');
    }
  });

  test('"match my device" is a choice that is kept too, and clearing goes back to light', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/settings/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.getByRole('radio', { name: /match my device/i }).click();
    await page.goto('/');
    // No fixed theme: the system (dark here) decides.
    expect(await page.locator('html').getAttribute('data-theme')).toBeNull();
    await page.goto('/settings/');
    await page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);
    await page.getByRole('button', { name: 'Clear saved settings' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await page.goto('/');
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
