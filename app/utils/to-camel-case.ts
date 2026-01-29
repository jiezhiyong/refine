/**
 * 将字符串转换为小驼峰格式
 *
 * 支持以下转换：
 * 1. 空格分隔的词组，如：'Casbin rule' => 'casbinRule'
 * 2. 下划线分隔的词组，如：'casbin_rule' => 'casbinRule'
 * 3. 短横线分隔的词组，如：'casbin-rule' => 'casbinRule'
 *
 * @param str - 需要转换的字符串
 * @returns 转换后的小驼峰格式字符串
 * @throws 如果输入为空或非字符串类型
 */
export const toCamelCase = (str: string): string => {
  // 参数验证
  if (!str) {
    throw new Error('输入不能为空');
  }
  if (typeof str !== 'string') {
    throw new Error('输入必须为字符串类型');
  }

  // 先将字符串转换为小写
  return (
    str
      .toLowerCase()
      // 将短横线和空格都转换为下划线，统一处理
      .replace(/[-\s]/g, '_')
      // 将下划线后面的字母转换为大写
      .replace(/_([a-z])/g, (_, char) => char.toUpperCase())
  );
};
