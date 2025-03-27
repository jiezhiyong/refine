import { AUDIT_LOG_CUSTOM_NEW, AUDIT_LOG_CUSTOM_OLD } from '~/constants/log';
import { TAny } from '~/types/any';

/**
 * 删除对象或对象数组中的自定义审计日志键
 * @param data 需要处理的数据对象或对象数组
 * @returns 处理后的数据
 */
export const dropCustomAuditLogKeys = (data: TAny | TAny[]): TAny | TAny[] => {
  if (Array.isArray(data)) {
    return data.map((item) => dropCustomAuditLogKeys(item));
  }

  if (typeof data === 'object' && data !== null) {
    const result = { ...data };
    delete result[AUDIT_LOG_CUSTOM_OLD];
    delete result[AUDIT_LOG_CUSTOM_NEW];
    return result;
  }

  return data;
};
