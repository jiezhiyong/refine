import { type Page } from '@playwright/test';

/**
 * 设置 localStorage
 */
export async function setLocalStorage(props: {
  page: Page;
  baseURL?: string;
  name: string;
  value: Record<string, unknown> | string;
}) {
  const { page, baseURL = '', name, value } = props;

  if (page.url() !== baseURL) {
    await page.goto(baseURL);
  }

  const newValue = typeof value === 'object' ? JSON.stringify(value) : value;
  await page.evaluate(
    ([key, val]) => {
      localStorage.setItem(key, val);
    },
    [name, newValue]
  );
}
