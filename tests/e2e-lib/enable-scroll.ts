import { expect, type Page } from '@playwright/test';

/**
 * 页面可滚动
 * 使用普通滚动时，页面底部必须使用 <SafeAreaInsetBottom /> 才能通过测试，
 * 使用无限加载时，页面底部必须使用 <NativeInfiniteScroll /> 才能通过测试
 */
export async function expectEnableScroll(props: { page: Page; type?: 'normal' | 'infinite' }) {
  const { page, type } = props;

  await page.waitForTimeout(1000);
  if (type === 'infinite') {
    await page.getByTestId('infinite-scroll').scrollIntoViewIfNeeded();
    await expect(page.getByTestId('infinite-scroll')).toBeInViewport();
  } else {
    await page.evaluate(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
    await expect(page.getByTestId('safe-area-bottom')).toBeInViewport();
  }
}
