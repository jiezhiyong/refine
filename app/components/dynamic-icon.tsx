import { Lightbulb, type LucideIcon, type LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { useEffect, useState } from 'react';

import { resolveLucideIconKey } from '@/utils/resolve-lucide-icon-key';

type DynamicIconName = keyof typeof dynamicIconImports;

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
  const [Icon, setIcon] = useState<LucideIcon | null>(null);

  const iconKey = name ? resolveLucideIconKey(name) : undefined;

  useEffect(() => {
    if (!iconKey) {
      setIcon(null);
      return;
    }

    let isCurrent = true;

    setIcon(null);
    dynamicIconImports[iconKey as DynamicIconName]()
      .then((mod) => {
        if (isCurrent) {
          setIcon(() => mod.default);
        }
      })
      .catch((error: unknown) => {
        console.error(error);
      });

    return () => {
      isCurrent = false;
    };
  }, [iconKey]);

  if (!name) return null;

  if (!iconKey) {
    console.error(`图标 "${name}" 不存在`);
    return <Lightbulb {...props} />;
  }

  if (!Icon) {
    return <Lightbulb {...props} />;
  }

  return <Icon {...props} />;
}
