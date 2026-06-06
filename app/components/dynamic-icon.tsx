import { Lightbulb, type LucideProps } from 'lucide-react';

import { getLucideIcon, resolveLucideIconKey } from '@/utils/resolve-lucide-icon-key';

/**
 * 动态图标组件，根据字符串名称从 lucide-react 主入口解析图标
 * @param name 图标名称，如 'Pencil'、'PieChart' 等（PascalCase，与 lucide 导出名一致）
 */
export function DynamicIcon({
  name,
  ...props
}: LucideProps & {
  name?: string | null;
}) {
  if (!name) return null;

  const exportName = resolveLucideIconKey(name);
  const Icon = exportName ? getLucideIcon(exportName) : undefined;

  if (!Icon) {
    console.error(`图标 "${name}" 不存在`);
    return <Lightbulb {...props} />;
  }

  return <Icon {...props} />;
}
