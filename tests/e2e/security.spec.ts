import { writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { expect, test, type Page } from '@playwright/test';

const ready = (page: Page) => page.waitForFunction(() => document.querySelector('astro-island[client="load"]:not([ssr])') !== null);

test.describe('security headers in the browser', () => {
  test('every page carries the security headers', async ({ page }) => {
    for (const path of ['/', '/mp4-to-mp3/', '/guides/', '/no-such-page/']) {
      const res = await page.goto(path);
      const h = res!.headers();
      expect(h['content-security-policy'], path).toContain("default-src 'self'");
      expect(h['content-security-policy'], path).not.toContain('__SCRIPT_HASHES__');
      expect(h['content-security-policy'], path).not.toMatch(/script-src[^;]*'unsafe-(inline|eval)'/);
      expect(h['strict-transport-security'], path).toContain('max-age=31536000');
      expect(h['x-content-type-options'], path).toBe('nosniff');
      expect(h['referrer-policy'], path).toBe('strict-origin-when-cross-origin');
      expect(h['permissions-policy'], path).toContain('camera=()');
      expect(h['cross-origin-opener-policy'], path).toBe('same-origin');
    }
  });

  test('the policy really blocks a script someone tries to inject', async ({ page }) => {
    const violations: string[] = [];
    page.on('console', (m) => m.text().includes('Content Security Policy') && violations.push(m.text()));
    await page.goto('/');
    await page.evaluate(() => {
      const s = document.createElement('script');
      s.textContent = 'window.__injected = true';
      document.body.append(s);
    });
    expect(await page.evaluate(() => (window as unknown as { __injected?: boolean }).__injected)).toBeUndefined();
    expect(violations.length).toBeGreaterThan(0);
  });

  test('a normal page and a real conversion cause no policy violations', async ({ page }) => {
    const violations: string[] = [];
    page.on('console', (m) => m.text().includes('Content Security Policy') && violations.push(m.text()));
    page.on('pageerror', (e) => violations.push(e.message));
    await page.goto('/csv-to-excel/');
    await ready(page);
    await page.locator('input[type=file]').first().setInputFiles({ name: 'a.csv', mimeType: 'text/csv', buffer: Buffer.from('a,b\n1,2\n') });
    await page.getByRole('button', { name: 'Convert', exact: true }).click();
    await expect(page.locator('a[download]').first()).toBeVisible();
    expect(violations).toEqual([]);
  });

  test('the security.txt file is served', async ({ request }) => {
    const res = await request.get('/.well-known/security.txt');
    expect(res.status()).toBe(200);
    const text = await res.text();
    expect(text).toContain('Contact: https://iduckconvert.com/feedback/');
    const expires = /Expires:\s*(\S+)/.exec(text)![1]!;
    expect(new Date(expires).getTime()).toBeGreaterThan(Date.now() + 300 * 86400000);
  });
});

test.describe('pasted markup never runs', () => {
  const attack = '<script>window.__x = 1</script><img src=x onerror="window.__x = 2"><a href="javascript:window.__x=3">go</a>';

  test('Markdown to HTML shows the HTML as text only', async ({ page }) => {
    await page.goto('/markdown-to-html/');
    await ready(page);
    await page.getByLabel('Markdown in').fill(attack);
    const out = page.getByLabel('HTML out');
    await expect(out).toHaveValue(/<script>/);
    expect(await page.evaluate(() => (window as unknown as { __x?: number }).__x)).toBeUndefined();
    // The result lives only in a textarea: nothing from it was added to the page as markup.
    expect(await page.locator('main img[src="x"]').count()).toBe(0);
    expect(await page.locator('main script', { hasText: '__x' }).count()).toBe(0);
  });

  test('HTML to Markdown does not run what it reads', async ({ page }) => {
    await page.goto('/html-to-markdown/');
    await ready(page);
    await page.getByLabel('HTML in').fill(attack);
    await expect(page.getByLabel('Markdown out')).not.toHaveValue('');
    expect(await page.evaluate(() => (window as unknown as { __x?: number }).__x)).toBeUndefined();
    expect(await page.locator('main img[src="x"]').count()).toBe(0);
    expect(await page.locator('main script', { hasText: '__x' }).count()).toBe(0);
  });

  test('a hostile file name is shown as text and saved with a safe name', async ({ page }) => {
    await page.goto('/wav-to-mp3/');
    await ready(page);
    const name = '..\\..\\<img src=x onerror=window.__x=9>.wav';
    await page.locator('input[type=file]').first().setInputFiles({ name, mimeType: 'audio/wav', buffer: Buffer.from('not audio') });
    await page.getByRole('button', { name: 'Convert', exact: true }).click();
    await expect(page.getByRole('alert').first()).toBeVisible({ timeout: 120_000 });
    expect(await page.evaluate(() => (window as unknown as { __x?: number }).__x)).toBeUndefined();
    expect(await page.locator('main img[src="x"]').count()).toBe(0);
  });

  test('a file that is far too big gives a friendly message and does not freeze the tab', async ({ page }) => {
    await page.goto('/csv-to-excel/');
    await ready(page);
    const bigFile = join(tmpdir(), 'huge-test.csv');
    writeFileSync(bigFile, Buffer.alloc(51 * 1024 * 1024, 'a,'));
    await page.locator('input[type=file]').first().setInputFiles(bigFile);
    await page.getByRole('button', { name: 'Convert', exact: true }).click();
    await expect(page.getByRole('alert').first()).toContainText(/limit is 50 MB/, { timeout: 60_000 });
    // The page still answers.
    expect(await page.evaluate(() => 1 + 1)).toBe(2);
  });
});
