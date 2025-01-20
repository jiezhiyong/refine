import { expect, type Page } from '@playwright/test';

/**
 * 元素可见性
 * https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-visible
 */
export async function expectVisible(props: { page: Page; testid: string }) {
  const { page, testid } = props;
  await expect(page.getByTestId(testid)).toBeVisible();
}
