import { type Page } from '@playwright/test';

/**
 * Mock接口调用
 * url: https://seapi.tcshuke.com/mock/e2e/caseList?mock=success
 */
export async function mockApi(props: { page: Page; url: string }) {
  const { page, url } = props;

  await page.route(`**/${url.match(/mock\/(.*?)\?/)?.[1]}`, async (route) => {
    await route.continue({ url });
  });
}
