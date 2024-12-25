import { useSearchParams } from '@remix-run/react';

/**
 * 更新搜索参数
 * @returns function updateSearchParams
 */
export function useUpdateSearchParams() {
  const [, setSearchParams] = useSearchParams();

  return (params: Record<string, string | null | undefined | boolean | number>) => {
    setSearchParams(
      (prev) => {
        for (const [key, value] of Object.entries(params)) {
          if (value) {
            prev.set(key, value.toString());
          } else {
            prev.delete(key);
          }
        }
        return prev;
      },
      { replace: true }
    );
  };
}
