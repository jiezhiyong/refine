import { isEqual } from 'es-toolkit';

import { TAny } from '~/types/any';

/**
 * 获取表单中变更的值，过滤掉未变更的值
 * @param currentValues 当前表单值
 * @param defaultValues 初始表单值
 * @returns 仅包含变更部分的对象
 */
export function getChangedValues<T extends Record<string, TAny>>(currentValues: T, defaultValues: T): Partial<T> {
  const changedValues = {} as Partial<T>;

  Object.keys(currentValues).forEach((key) => {
    if (!isEqual(currentValues[key], defaultValues[key])) {
      (changedValues as Record<string, TAny>)[key] = currentValues[key];
    }
  });

  return changedValues;
}
