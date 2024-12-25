import { useSearchParams, useSubmit } from '@remix-run/react';
import { useDebounceFn } from 'ahooks';

/**
 * 防抖提交
 * @returns function debounceSubmit
 */
export function useDebounceSubmit() {
  const [searchParams] = useSearchParams();

  const submit = useSubmit();
  const { run: debounceSubmit } = useDebounceFn((formData: FormData) => submit(formData, { replace: true }), {
    wait: 300,
  });

  return (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, key) => {
      if (!value) {
        formData.delete(key);
      }
    });

    searchParams.forEach((value, key) => {
      if (!formData.has(key)) {
        formData.append(key, value);
      }
    });

    debounceSubmit(formData);
  };
}
