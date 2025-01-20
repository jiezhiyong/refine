import { useSearchParams } from '@remix-run/react';
import { useDebounceFn } from 'ahooks';

/**
 * 防抖提交
 * @returns function debounceSubmit
 */
export function useDebounceSubmit() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { run: debounceSubmit } = useDebounceFn(
    (searchParamsNew: URLSearchParams) => setSearchParams(searchParamsNew, { replace: true }),
    { wait: 300 }
  );

  return (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);

    // 创建一个新的 URLSearchParams 实例，避免修改原有的实例
    const searchParamsNew = new URLSearchParams(searchParams);

    // 获取所有的表单键
    const formKeys = new Set(Array.from(formData.keys()));

    // 先清除所有将要更新的键的旧值
    formKeys.forEach((key) => {
      searchParamsNew.delete(key);
    });

    // 重新添加所有值
    formData.forEach((value, key) => {
      if (value) {
        searchParamsNew.append(key, value.toString());
      }
    });

    debounceSubmit(searchParamsNew);
  };
}
