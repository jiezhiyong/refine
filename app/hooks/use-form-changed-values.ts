import { useCallback, useRef } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { TAny } from '~/types/any';
import { getChangedValues as getChangedValuesUtil } from '~/utils/get-changed-values';

/**
 * 自定义钩子，用于获取表单中变更的值
 * @param form react-hook-form 的表单实例
 * @param initialValues 初始表单值
 * @returns 获取变更值的函数
 */
export function useFormChangedValues<T extends Record<string, TAny>>(form: UseFormReturn<T>, initialValues: T) {
  // 保存初始值的引用，避免重新渲染时丢失
  const initialValuesRef = useRef(initialValues);

  // 获取变更的值
  const getChangedValues = useCallback(
    (currentValues?: T) => {
      const values = currentValues || form.getValues();
      return getChangedValuesUtil(values, initialValuesRef.current);
    },
    [form]
  );

  // 检查表单是否有变更
  const hasChanges = useCallback(() => {
    const changedValues = getChangedValues();
    return Object.keys(changedValues).length > 0;
  }, [getChangedValues]);

  return {
    getChangedValues,
    hasChanges,
  };
}
