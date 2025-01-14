import { type Page, type Route } from '@playwright/test';

type MutateDataType = {
  code?: string;
  message?: string;
  data?: Record<string, unknown>;
};

export async function mutateRequest(
  page: Page,
  routePath: string,
  mutateData: MutateDataType | ((originalData: MutateDataType) => MutateDataType),
  options: Parameters<Route['fulfill']>[0] = {}
) {
  return page.route(routePath, async (router) => {
    const originalResponse = await router.fetch();

    const originalData = await originalResponse.json();

    const newData = typeof mutateData === 'function' ? mutateData(originalData) : mutateData;

    router.fulfill({
      status: originalResponse.status(),
      headers: originalResponse.headers(),
      contentType: 'application/json',
      ...options,
      body: JSON.stringify({
        ...originalData,
        ...newData,
      }),
    });
  });
}
