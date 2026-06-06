import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const { icons } = LucideIcons;

/** PascalCase 名称 → lucide-react 静态导出名 */
const pascalToExportName = new Map<string, string>();

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

function isLucideIcon(value: unknown): value is LucideIcon {
  return typeof value === 'object' && value !== null;
}

/** 与 lucide 导出名不一致、但业务里使用的 PascalCase 别名 */
const PASCAL_ICON_ALIASES: Record<string, string> = {
  PieChart: 'ChartPie',
};

for (const key of Object.keys(icons)) {
  pascalToExportName.set(key, key);
  pascalToExportName.set(pascalToKebab(key), key);
}

for (const key of Object.keys(LucideIcons)) {
  if (!/^[A-Z]/.test(key)) continue;

  const value = LucideIcons[key as keyof typeof LucideIcons];
  if (!isLucideIcon(value)) continue;

  pascalToExportName.set(key, key);
}

/**
 * 将菜单/配置中的图标名解析为 lucide-react 静态导出名
 */
export function resolveLucideIconKey(name: string): string | undefined {
  if (name in icons) return name;

  const topLevel = LucideIcons[name as keyof typeof LucideIcons];
  if (isLucideIcon(topLevel)) return name;

  const alias = PASCAL_ICON_ALIASES[name];
  if (alias) {
    if (alias in icons) return alias;
    const aliasExport = LucideIcons[alias as keyof typeof LucideIcons];
    if (isLucideIcon(aliasExport)) return alias;
  }

  const fromMap = pascalToExportName.get(name);
  if (fromMap) return fromMap;

  if (name.includes('-')) {
    const fromKebab = pascalToExportName.get(name);
    if (fromKebab) return fromKebab;

    const pascal = kebabToPascal(name);
    if (pascal in icons) return pascal;

    const pascalExport = LucideIcons[pascal as keyof typeof LucideIcons];
    if (isLucideIcon(pascalExport)) return pascal;
  }

  const kebab = pascalToKebab(name);
  const fromPascal = pascalToExportName.get(kebab);
  if (fromPascal) return fromPascal;

  return undefined;
}

export function getLucideIcon(exportName: string): LucideIcon | undefined {
  const fromIcons = icons[exportName as keyof typeof icons];
  if (fromIcons) return fromIcons;

  const fromExport = LucideIcons[exportName as keyof typeof LucideIcons];
  if (isLucideIcon(fromExport)) return fromExport;

  return undefined;
}
