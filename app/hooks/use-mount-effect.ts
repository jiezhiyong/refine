import { useEffect, useRef } from 'react';

/**
 * 在组件挂载后执行一次传入的方法
 * @param fn 挂载时执行的函数，可以返回清理函数
 */
export function useMountEffect(fn: () => (() => void) | void) {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (mountedRef.current) {
      return;
    }

    mountedRef.current = true;
    return fn();
  }, [fn]);
}
