import { test, expect } from '@playwright/test';

test.describe('GitHub user search', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders empty state on load', async ({ page }) => {
    await expect(page.getByPlaceholder('Введите username тут')).toBeVisible();
    // await expect(page.getByText(/search/i)).toBeVisible();
  });

  test('searches for user and shows card', async ({ page }) => {
    await page.getByPlaceholder('Введите username тут').fill('torvalds');
    await page.keyboard.press('Enter');

    await expect(page.getByText(/loading/i)).toBeVisible();
    await expect(page.getByRole('heading', { name: /linus/i })).toBeVisible({ timeout: 5000 });
    await expect(page.getByText(/followers/i)).toBeVisible();
  });

  test('shows not found on invalid user', async ({ page }) => {
    await page.getByPlaceholder('Введите username тут').fill('thisuserdoesnotexistxyz');
    await page.keyboard.press('Enter');

    await expect(page.getByText(/loading/i)).toBeVisible();
    await expect(page.getByText(/not found/i)).toBeVisible({ timeout: 5000 });
  });
});
