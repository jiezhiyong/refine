import { useAsyncEffect } from 'ahooks';
import { useRef } from 'react';

/**
 * 在组件挂载后执行一次传入的方法
 * @param fn 挂载时执行的函数，可以返回清理函数
 */
export function useMountEffect(fn: () => Promise<void> | void) {
  const mountedRef = useRef(false);

  useAsyncEffect(async () => {
    if (mountedRef.current) {
      return;
    }

    mountedRef.current = true;
    return fn();
  }, [fn]);
}
