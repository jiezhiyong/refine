import { type Page } from '@playwright/test';

import { TAny } from '~/types/any';

/**
 * 进入指定页面后 获取指定接口的数据
 * https://playwright.dev/docs/network#variations
 * TODO: 后续针对不同环境需加入加解密操作
 */
export async function getResponse(page: Page, functionCode: string) {
  const protocol = await getRequestParams(page, functionCode, 'protocol');
  if (protocol?.env === 'me') {
    // console.log('当前是本地环境，无需解密');
  }

  const responsePromise = page.waitForResponse(`**/${functionCode}`);
  const response = await responsePromise;
  const res: Response = await response.json();

  if (res?.code === '0000') {
    return res?.data;
  } else {
    throw new Error(res?.message);
  }
}

type Response = { code: string; data: TAny; message: string };

/**
 * 获取请求参数中的某个值
 * @param page 页面实例
 * @param functionCode 接口CODE
 * @param key 要获取的值
 */
async function getRequestParams(page: Page, functionCode: string, key: 'clientInfo' | 'protocol' | 'param' = 'param') {
  const request = await page.waitForRequest(`**/${functionCode}`);
  const data = request.postDataJSON();
  return data[key];
}
