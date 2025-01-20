import { expect, test } from '@playwright/test';
import { setLocalStorage, setCookie, expectMatchScreenshot, expectVisible } from '../e2e-lib';

test.beforeAll(async ({ baseURL, context }) => {
  await setCookie({ baseURL, context, name: 'accessToken', value: 'abc' });
});

test.afterAll(async ({ page }) => {
  await page.close();
});

test.describe('测试示例', () => {
  test('首页标题应该正确显示', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Remix/);
  });

  test('localStorage', async ({ page, baseURL }) => {
    await setLocalStorage({
      page,
      baseURL,
      name: 'USER_ACCOUNT_INFO',
      value: { securityToken: '123' },
    });
  });

  test('页面跳转、cookie', async ({ page, baseURL, context }) => {
    await setCookie({ baseURL, context, name: 'accessToken', value: 'abc' });
    await page.goto('order-list/index?env=me');
    await page.waitForTimeout(1000);
  });

  test('视觉比对', async ({ page, baseURL }, testInfo) => {
    await page.goto('order-list/detail?orderNo=OVERDUE_ABC20251010_0&env=me');
    await expectMatchScreenshot({ page, testInfo, baseURL, name: '订单详情' });
    await page.close();
  });

  test('选择元素', async ({ page }) => {
    await page.getByTestId('abc');
    await page.getByRole('textbox').fill('example value');
    await page.locator('.abc').first();
    await page.locator('.abc').nth(2);
  });

  test('期望元素可见', async ({ page }) => {
    await expectVisible({ page, testid: 'abc' });
  });

  test('篡改接口响应 - Single', async ({ page }) => {
    await page.route('**/query_bank_card_list', async (route) => {
      await route.fulfill({
        body: JSON.stringify({
          code: '0000',
        }),
      });
    });

    await page.goto('order-list/detail?orderNo=OVERDUE_ABC20251010_0&env=me');
    await page.getByRole('button', { name: '去还款' }).click();
    await page.waitForTimeout(1000);
  });

  test('篡改接口请求 - Single', async ({ page }) => {
    await page.route('**/get_order_record_detail', async (route) => {
      await route.continue({
        url: `http://mockcloud.qa.tcshuke.com/mock/get_order_record_detail`,
      });
    });

    await page.goto('order-list/detail?orderNo=OVERDUE_ABC20251010_0&env=me');
    await page.waitForTimeout(1000);
  });

  test('篡改接口请求 - All', async ({ page }) => {
    await page.route('**/*', async (route) => {
      const request = route?.request();
      if (request.resourceType() === 'xhr' && !request.url().startsWith('blob')) {
        console.log(request.url());
      }

      await route.continue();
    });

    await page.goto('order-list/detail?orderNo=OVERDUE_ABC20251010_0&env=me');
    await page.waitForTimeout(1000);
  });
});
