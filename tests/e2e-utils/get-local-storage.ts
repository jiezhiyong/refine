import { type Page } from '@playwright/test';

/**
 * 获取 localStorage
 */
export async function getLocalStorage(page: Page, key: string) {
  return await page.waitForFunction(() => {
    try {
      return JSON.parse(localStorage[key]);
    } catch (error) {
      console.error(error);
      return localStorage[key];
    }
  });
}
