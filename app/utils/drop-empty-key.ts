import { TAny } from '~/types/any';

/**
 * 删除对象中的空键：空字符串、null、undefined
 * @param data 需要处理的数据对象
 * @returns 处理后的数据
 */
export function dropEmptyKey<T extends Record<string, TAny>>(data: T): T {
  Object.keys(data as object).forEach((key) => {
    if (!data[key] && data[key] !== 0 && data[key] !== false) {
      delete data[key];
    }
  });

  return data;
}
