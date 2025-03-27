import { DataProvider } from '@refinedev/core';
import { serialize } from 'superjson';

import { apiBase } from '~/config/base-url';
import { TAny } from '~/types/any';
import { easyAxios } from '~/utils/axios';
import { buildTableParams } from '~/utils/request';
import { addMetaToParams, handleResponse, serializeToRequestBody, serializeToUrlParams } from '~/utils/superjson';

/**
 * 处理 GET 请求
 * @param url 请求 URL
 * @param params 请求参数
 * @returns 处理后的响应数据
 */
async function handleGetRequest<T = TAny>(url: string, params: Record<string, TAny>): Promise<T> {
  const queryString = serializeToUrlParams(params);
  const { data } = await easyAxios.get(`${url}?${queryString}`);
  return handleResponse<T>(data);
}

/**
 * 处理 POST 请求
 * @param url 请求 URL
 * @param body 请求体
 * @returns 处理后的响应数据
 */
async function handlePostRequest<T = TAny>(url: string, body: Record<string, TAny>): Promise<T> {
  const finalBody = serializeToRequestBody(body);
  const { data } = await easyAxios.post(url, finalBody);
  return handleResponse<T>(data);
}

/**
 * 基于 superjson 的数据提供者
 * 使用 superjson 序列化请求参数，使前端和后端都能使用相同的 Prisma 参数格式
 */
export const dataProvider: DataProvider = {
  getList: async ({ resource, pagination, filters, sorters, meta }) => {
    if (pagination?.mode === 'off') {
      delete pagination.pageSize;
    }
    const url = `${apiBase}/${resource}/findMany`;
    const queryParams = buildTableParams({ pagination, filters, sorters, meta });
    return handleGetRequest(url, queryParams);
  },

  getMany: async ({ resource, ids, meta }) => {
    const url = `${apiBase}/${resource}/findMany`;
    const queryParams = addMetaToParams({ where: { id: { in: ids } } }, meta);
    return handleGetRequest(url, queryParams);
  },

  create: async ({ resource, variables, meta }) => {
    const url = `${apiBase}/${resource}/create`;
    const requestBody = addMetaToParams({ data: variables }, meta);
    return handlePostRequest(url, requestBody);
  },

  update: async ({ resource, id, variables, meta }) => {
    const url = `${apiBase}/${resource}/update`;
    const requestBody = addMetaToParams({ where: { id }, data: variables }, meta);
    return handlePostRequest(url, requestBody);
  },

  updateMany: async ({ resource, ids, variables }) => {
    const url = `${apiBase}/${resource}/updateMany`;
    const requestBody = { where: { id: { in: ids } }, data: variables };
    return handlePostRequest(url, requestBody);
  },

  createMany: async ({ resource, variables }) => {
    const url = `${apiBase}/${resource}/createMany`;
    const requestBody = { data: variables };
    return handlePostRequest(url, requestBody);
  },

  getOne: async ({ resource, id, meta }) => {
    const url = `${apiBase}/${resource}/findUnique`;
    const queryParams = addMetaToParams({ where: { id } }, meta);
    return handleGetRequest(url, queryParams);
  },

  deleteOne: async ({ resource, id, meta }) => {
    const url = `${apiBase}/${resource}/delete`;
    const requestBody = addMetaToParams({ where: { id } }, meta);
    return handlePostRequest(url, requestBody);
  },

  deleteMany: async ({ resource, ids }) => {
    const url = `${apiBase}/${resource}/deleteMany`;
    const requestBody = { where: { id: { in: ids } } };
    return handlePostRequest(url, requestBody);
  },

  getApiUrl: () => {
    return apiBase;
  },

  custom: async ({ url, method, meta, filters, sorters, payload, query, headers }) => {
    // 构建查询参数
    const queryParams = buildTableParams({ filters, sorters, meta });

    // 构建 URL 查询参数
    const searchParams = new URLSearchParams();
    if (query) {
      Object.entries(query).forEach(([key, value]) => {
        searchParams.append(key, value as TAny);
      });
    }
    const requestUrl = `${url}?${searchParams.toString()}`;

    if (method === 'get') {
      // 使用 superjson 序列化查询参数
      const { json, meta: serializationMeta } = serialize(queryParams);
      searchParams.append('q', JSON.stringify(json));

      if (serializationMeta) {
        searchParams.append('meta', JSON.stringify({ serialization: serializationMeta }));
      }

      const { data } = await easyAxios.get(requestUrl, { headers });

      return handleResponse(data);
    } else {
      // 对于非 GET 请求
      const finalPayload = { ...((payload as Record<string, TAny>) || {}), ...queryParams };
      const requestBody = serializeToRequestBody(finalPayload);

      const { data } = await easyAxios({
        url: requestUrl,
        method,
        headers,
        data: requestBody,
      });

      return handleResponse(data);
    }
  },
};
