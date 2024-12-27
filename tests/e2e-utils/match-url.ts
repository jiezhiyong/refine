import { expect, type Page } from '@playwright/test';

/**
 * 页面跳转正常、参数正常
 * eg: await expectMatchUrl({ page, url: 'order-list/result?orderNo&type=abc' });
 */
export async function expectMatchUrl(props: { page: Page; url: string }) {
  const { page, url } = props;

  await page.waitForTimeout(1000);
  const urlArr = url.split('?');
  const path = urlArr[0];
  const keys = urlArr[1];
  const currentUrl = page.url();
  const currentQuerys = new URL(currentUrl).searchParams;
  const matchQueryArr = keys?.split('&') || [];

  expect(currentUrl).toContain(path);

  for (let i = 0; i < matchQueryArr?.length; i++) {
    let key = matchQueryArr[i];
    const expectedValue = matchQueryArr[i]?.split('=')[1];
    if (expectedValue) {
      key = key?.split('=')[0];
    }
    const currentValue = currentQuerys.get(key!);
    if (expectedValue) {
      expect(currentValue).toBe(expectedValue);
    } else {
      expect(currentValue).not.toBeNull();
      expect(currentValue).not.toBe('');
    }
  }
}
