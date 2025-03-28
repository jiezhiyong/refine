import { IconName, DynamicIcon as LucideIcon } from 'lucide-react/dynamic';

import { TAny } from '~/types/any';

/**
 * 将驼峰命名转换为小写中划线命名
 * 例如: AbcXyz => abc-xyz
 */
function camelToKebabCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * 动态图标组件，根据字符串名称渲染对应的 lucide-react 图标
 * @param name 图标名称，如 'Pencil', 'Home' 等, 需要转换为小写、中华线连接
 * @param props 传递给图标组件的属性
 */
export function DynamicIcon({
  name,
  ...props
}: React.ComponentPropsWithoutRef<TAny> & {
  name?: IconName;
}) {
  // 如果没有提供图标名称，返回 null
  if (!name) return null;

  // 将图标名称转换为小写中划线格式
  const kebabName = camelToKebabCase(name);

  return <LucideIcon name={kebabName as IconName} {...props} />;
}
