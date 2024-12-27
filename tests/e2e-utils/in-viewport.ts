import { expect, type Page } from '@playwright/test';

/**
 * 元素在可视区域内
 * https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-in-viewport
 */
export async function expectInViewport(props: { page: Page; testid: string }) {
  const { page, testid } = props;
  await expect(page.getByTestId(testid)).toBeInViewport();
}
