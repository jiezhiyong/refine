import { test as base, type Page, expect as playwrightExpect } from '@playwright/test';

// 声明扩展的固件类型
type TestFixtures = {
  page: Page;
};

// 扩展基础测试固件，添加功能：测试完成后自动关闭页面
export const test = base.extend<TestFixtures>({
  page: async ({ page }, use) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(page);
    await page.close();
  },
});

export { playwrightExpect as expect };
