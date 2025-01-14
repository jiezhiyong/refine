import { Params } from '@remix-run/react';

/**
 * 从 loader 和 action 的 request 和 params 中合并获取所有参数。
 * 该函数不仅支持使用 URL 对象来处理 GET 请求的查询参数，还支持从 formData 中获取参数
 */
export async function getAllParams<T extends Record<string, any>>(request: Request, params: Params<string>) {
  const url = new URL(request.url);
  const searchParams = Object.fromEntries(url.searchParams.entries());

  let formDataParams = {};
  if (request.method === 'POST' || request.method === 'PUT') {
    const formData = await request.formData();
    formDataParams = Object.fromEntries(formData.entries());
  }

  return {
    ...searchParams,
    ...formDataParams,
    ...params,
  } as T;
}
