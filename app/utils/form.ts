import { GetOneResponse } from '@refinedev/core';

/**
 * 便捷方法
 * 用来组装 useForm 的 refineCoreProps.queryOptions 参数
 */
export const getRefineQueryOptions = <T>(defaultValues?: T) => {
  if (!defaultValues) return undefined;

  const initialData: GetOneResponse<T> = { data: defaultValues };
  return {
    queryFn: () => initialData,
    initialData,
  };
};
