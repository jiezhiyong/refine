import { deserialize, serialize } from 'superjson';

import { TAny } from '~/types/any';

/**
 * 从请求URL中获取superjson序列化的查询参数
 * @param request 请求对象
 * @returns 反序列化后的查询参数
 */
export function getQueryParamsFromRequest(request: Request): TAny {
  const url = new URL(request.url);
  const qParam = url.searchParams.get('q');
  const metaParam = url.searchParams.get('meta');

  if (!qParam) {
    return {};
  }

  try {
    // 解析查询参数
    const jsonData = JSON.parse(qParam);

    // 如果有序列化元数据，使用superjson反序列化
    if (metaParam) {
      const meta = JSON.parse(metaParam);
      if (meta.serialization) {
        return deserialize({
          json: jsonData,
          meta: meta.serialization,
        });
      }
    }

    // 没有序列化元数据，直接返回
    return jsonData;
  } catch (error) {
    console.error('解析查询参数错误:', error);
    return {};
  }
}

/**
 * 从请求体中获取superjson序列化的数据
 * @param request 请求对象
 * @returns 反序列化后的请求体数据
 */
export async function getBodyFromRequest(request: Request): Promise<TAny> {
  try {
    const body = await request.json();

    // 如果有序列化元数据，使用superjson反序列化
    if (body.meta?.serialization) {
      const { meta, ...jsonData } = body;
      return deserialize({
        json: jsonData,
        meta: meta.serialization,
      });
    }

    // 没有序列化元数据，直接返回
    return body;
  } catch (error) {
    console.error('解析请求体错误:', error);
    return {};
  }
}

/**
 * 序列化响应数据 - https://zenstack.dev/docs/reference/server-adapters/api-handlers/rpc
 * @param data 响应数据
 * @returns 序列化后的响应数据，包含 meta 字段，告知包含的特殊格式的字段，用于在客户端执行反序列化还原字段格式
 */
export function serializeResponse(data: TAny): TAny {
  // 暂不使用
  return data;

  // 使用superjson序列化数据
  const { json, meta } = serialize(data);

  // 如果有序列化元数据，添加到响应中
  if (meta) {
    return {
      data: json,
      meta: {
        serialization: meta,
      },
    };
  }

  // 没有序列化元数据，直接返回
  return {
    data: json,
  };
}

/**
 * 序列化参数并创建 URL 查询字符串
 * @param params 需要序列化的参数
 * @returns URL 查询字符串
 */
export function serializeToUrlParams(params: Record<string, TAny>): string {
  const { json, meta: serializationMeta } = serialize(params);
  const searchParams = new URLSearchParams();
  searchParams.append('q', JSON.stringify(json));

  if (serializationMeta) {
    searchParams.append('meta', JSON.stringify({ serialization: serializationMeta }));
  }

  return searchParams.toString();
}

/**
 * 序列化并创建请求体
 * @param data 需要序列化的数据
 * @returns 处理后的请求体
 */
export function serializeToRequestBody(data: Record<string, TAny>): Record<string, TAny> {
  const { json, meta: serializationMeta } = serialize(data);
  const finalBody: Record<string, TAny> = { ...(json as Record<string, TAny>) };

  if (serializationMeta) {
    finalBody.meta = { serialization: serializationMeta };
  }

  return finalBody;
}

/**
 * 处理响应数据，如果有序列化元数据则进行反序列化
 * @param data 响应数据
 * @returns 处理后的数据
 */
export function handleResponse<T = TAny>(data: TAny): T {
  if (data.meta?.serialization) {
    return deserialize({
      json: data.data,
      meta: data.meta.serialization,
    }) as T;
  }
  return data as T;
}

/**
 * 处理 meta 参数
 * @param params 原始参数
 * @param meta meta 数据
 * @returns 添加 meta 后的参数
 */
export function addMetaToParams(params: Record<string, TAny>, meta?: TAny): Record<string, TAny> {
  if (!meta) return params;

  const result = { ...params };
  if (meta.include) {
    result.include = meta.include;
  }
  if (meta.select) {
    result.select = meta.select;
  }
  return result;
}
