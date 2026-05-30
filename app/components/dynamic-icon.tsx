import { Lightbulb, type LucideProps } from 'lucide-react';
import { type IconName, DynamicIcon as LucideDynamicIcon } from 'lucide-react/dynamic';

import { resolveLucideIconKey } from '@/utils/resolve-lucide-icon-key';

/**
 * 动态图标组件，根据字符串名称按需加载 lucide-react 图标
 * @param name 图标名称，如 'Pencil'、'PieChart' 等（PascalCase，与 lucide 导出名一致）
 */
export function DynamicIcon({
  name,
  ...props
}: LucideProps & {
  name?: string | null;
}) {
  if (!name) return null;

  const iconKey = resolveLucideIconKey(name);
  if (!iconKey) {
    console.error(`图标 "${name}" 不存在`);
    return <Lightbulb {...props} />;
  }

  return <LucideDynamicIcon name={iconKey as IconName} fallback={() => <Lightbulb {...props} />} {...props} />;
}
