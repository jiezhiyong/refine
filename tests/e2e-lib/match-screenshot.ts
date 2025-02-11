import * as fs from 'fs';

import test, { expect, type Page, type PageScreenshotOptions, type TestInfo } from '@playwright/test';

/**
 * 视觉比对，判断初次没有快照时先生成快照，然后跳过本次检测
 * https://playwright.dev/docs/test-snapshots、https://playwright.dev/docs/screenshots
 */
export async function expectMatchScreenshot(props: {
  page: Page;
  testInfo: TestInfo;
  baseURL?: string;
  name?: string;
}) {
  const { page, testInfo, baseURL, name } = props;

  await page.waitForTimeout(1000);
  await page.waitForLoadState('load');

  const title = await page.title();
  const url = await page.url().replace(baseURL || '', '');
  const path = url.split('?')[0]?.replace(/\//g, '@');
  const fileName = `${name || title || path}`;
  const filePath = `${testInfo.snapshotDir}/${fileName}-${testInfo.project.name.replace(' ', '-')}-${testInfo.snapshotSuffix}.png`;

  const options: PageScreenshotOptions = {
    scale: 'device',
    fullPage: true,
    omitBackground: true,
  };

  if (fs.existsSync(filePath)) {
    await expect(page).toHaveScreenshot(`${fileName}.png`, options);
  } else {
    await page.screenshot({ path: `${filePath}.png`, ...options });
    test.skip(true, '未找到基准快照');
  }
}
