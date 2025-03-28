import { Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';

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
  const [Icon, setIcon] = useState<React.ComponentType<React.SVGProps<SVGSVGElement>> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!name) return;
    
    setIsLoading(true);
    setHasError(false);

    // 使用异步函数加载图标
    const loadIcon = async () => {
      try {
        // 直接从 lucide-react 的特定路径导入
        const iconModule = await import(`lucide-react/dist/esm/icons/${name.toLowerCase()}`);
        setIcon(() => iconModule.default);
        setIsLoading(false);
      } catch (error) {
        console.error(`图标 "${name}" 不存在`, error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    loadIcon();
  }, [name]);

  // 如果没有提供图标名称，返回 null
  if (!name) return null;
  if (isLoading) return <Loader2 className="animate-spin" {...props} />;
  if (hasError || !Icon) return null;

  return <Icon {...props} />;
}
