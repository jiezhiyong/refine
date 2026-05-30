import dynamicIconImports from 'lucide-react/dynamicIconImports';

/** PascalCase 名称 → lucide dynamicIconImports 的 kebab-case key */
const pascalToIconKey = new Map<string, string>();

function kebabToPascal(kebab: string): string {
  return kebab
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function pascalToKebab(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

/** 与 lucide 导出名不一致、但业务里使用的 PascalCase 别名 */
const PASCAL_ICON_ALIASES: Record<string, string> = {
  PieChart: 'chart-pie',
};

for (const key of Object.keys(dynamicIconImports)) {
  pascalToIconKey.set(key, key);
  const pascal = kebabToPascal(key);
  if (!pascalToIconKey.has(pascal)) {
    pascalToIconKey.set(pascal, key);
  }
}

/**
 * 将菜单/配置中的 PascalCase 图标名解析为 lucide dynamic 导入 key
 */
export function resolveLucideIconKey(name: string): string | undefined {
  if (name in dynamicIconImports) return name;

  const alias = PASCAL_ICON_ALIASES[name];
  if (alias && alias in dynamicIconImports) return alias;

  const fromMap = pascalToIconKey.get(name);
  if (fromMap) return fromMap;

  const kebab = pascalToKebab(name);
  if (kebab in dynamicIconImports) return kebab;

  return undefined;
}
