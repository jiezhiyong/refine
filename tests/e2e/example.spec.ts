import { test, expect } from '@playwright/test';

test('首页标题应该正确显示', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Remix/);
});
