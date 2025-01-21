import { TAny } from '~/types';

const moduleCache: Record<string, TAny> = {};

/**
 * 单例模式
 * 由于开发服务器会重新加载（require）打包后的代码，需要做一些特殊处理来确保某些数据能够在重新加载后保持持久化
 * 生产环境中使用模块级缓存
 */
export const singleton = <Value>(name: string, valueFactory: () => Value): Value => {
  if (process.env.NODE_ENV === 'production') {
    moduleCache[name] ??= valueFactory();
    return moduleCache[name];
  }

  const g = global as TAny;
  g.__singletons ??= {};
  g.__singletons[name] ??= valueFactory();
  return g.__singletons[name];
};
