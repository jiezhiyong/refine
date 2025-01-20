import { type BrowserContext } from '@playwright/test';

/**
 * 设置 Cookie
 */
export async function setCookie(props: { context: BrowserContext; baseURL?: string; name: string; value: string }) {
  const { context, baseURL, name, value } = props;

  const hostArr = new URL(baseURL || '').hostname.split('.').reverse();
  await context.addCookies([{ name, value, domain: `.${hostArr[1]}.${hostArr[0]}`, path: '/' }]);
}
