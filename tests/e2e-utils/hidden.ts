import { expect, type Page } from '@playwright/test';

/**
 * 元素不可见
 * https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-hidden
 */
export async function expectHidden(props: { page: Page; testid: string }) {
  const { page, testid } = props;
  await expect(page.getByTestId(testid)).toBeHidden();
}
