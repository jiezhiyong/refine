import { Lightbulb, LucideIcon } from 'lucide-react';

import { TAny } from '~/types/any';

/**
 * 动态图标组件，根据字符串名称渲染对应的 lucide-react 图标
 * @param name 图标名称，如 'Pencil', 'Home' 等
 * @param props 传递给图标组件的属性
 */
export function DynamicIcon({
  name,
  ...props
}: React.ComponentPropsWithoutRef<TAny> & {
  name?: string | null;
}) {
  // 如果没有提供图标名称，返回 null
  if (!name) return null;

  // try {
  //   const modules = LucideIcons as Record<string, TAny>;
  //   const IconComponent = modules[name] as LucideIcon;
  //   return <IconComponent {...props} />;
  // } catch (error) {
  //   console.error(`图标 "${name}" 不存在`, error);
  // }

  return <Lightbulb />;
}
