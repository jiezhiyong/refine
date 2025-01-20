import { type Page, type TestInfo } from '@playwright/test';

/**
 * 生成快照
 */
export async function screenshot(props: { page: Page; testInfo: TestInfo; baseURL?: string; name?: string }) {
  const { page, testInfo, baseURL, name } = props;

  await page.waitForTimeout(1000);
  await page.waitForLoadState('load');
  const value = `${name || ''}`;
  const title = await page.title();
  const url = await page.url().replace(baseURL || '', '');
  const path = url.split('?')[0]?.replace(/\//g, '@');
  const fileName = `${value || title || path}`;
  const filePath = `${testInfo.snapshotDir}${fileName}-${testInfo.project.name.replace(' ', '-')}-${testInfo.snapshotSuffix}.png`;
  await page.screenshot({
    path: `${filePath}.png`,
    scale: 'device',
    fullPage: true,
    omitBackground: true,
  });
}
