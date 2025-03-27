import type { Menu, MenuTreeItem } from '~/types/menu';

/**
 * 构建菜单树
 * @param menus 菜单列表
 * @returns 菜单树
 */
export function buildMenuTree(menus: Menu[]): MenuTreeItem[] {
  // 创建菜单映射，方便查找
  const menuMap: Record<string, MenuTreeItem> = {};

  // 初始化菜单树项
  menus.forEach((menu) => {
    menuMap[menu.name] = {
      ...menu,
      children: [],
      level: 0, // 默认为顶级菜单
    };
  });

  // 构建树结构
  const rootMenus: MenuTreeItem[] = [];

  menus.forEach((menu) => {
    const parent = menu.meta?.parent;

    if (parent && menuMap[parent]) {
      // 如果有父级菜单，添加到父级的children中
      const parentItem = menuMap[parent];
      const menuItem = menuMap[menu.name];

      // 设置菜单层级
      menuItem.level = parentItem.level + 1;

      // 添加到父级的children中
      parentItem.children = parentItem.children || [];
      parentItem.children.push(menuItem);
    } else if (!parent) {
      // 如果没有父级，则为顶级菜单
      rootMenus.push(menuMap[menu.name]);
    }
  });

  // 对每个层级的菜单按order排序
  sortMenuTree(rootMenus);

  return rootMenus;
}

/**
 * 递归对菜单树进行排序
 * @param menuTree 菜单树
 */
function sortMenuTree(menuTree: MenuTreeItem[]): void {
  // 按order排序
  menuTree.sort((a, b) => {
    const orderA = a.order || 0;
    const orderB = b.order || 0;
    return orderA - orderB;
  });

  // 递归对子菜单排序
  menuTree.forEach((item) => {
    if (item.children && item.children.length > 0) {
      sortMenuTree(item.children);
    }
  });
}

/**
 * 扁平化菜单树
 * @param menuTree 菜单树
 * @returns 扁平化的菜单列表
 */
export function flattenMenuTree(menuTree: MenuTreeItem[]): MenuTreeItem[] {
  const result: MenuTreeItem[] = [];

  function flatten(items: MenuTreeItem[], _parentId: string | null = null) {
    items.forEach((item, index) => {
      // 添加当前项到结果中
      result.push({
        ...item,
        order: index, // 更新order为当前索引
      });

      // 递归处理子项
      if (item.children && item.children.length > 0) {
        flatten(item.children, item.id);
      }
    });
  }

  flatten(menuTree);
  return result;
}

/**
 * 检查是否可以将菜单拖拽到目标位置
 * @param sourceLevel 源菜单层级
 * @param targetLevel 目标菜单层级
 * @returns 是否可以拖拽
 */
export function canDrop(sourceLevel: number, targetLevel: number): boolean {
  // 父级菜单不可以拖拽到子级菜单下
  // 子级菜单可以拖拽到其他更高层级的菜单下
  return sourceLevel >= targetLevel;
}

/**
 * 获取菜单层级名称
 * @param level 菜单层级
 * @returns 层级名称
 */
export function getLevelName(level: number): string {
  switch (level) {
    case 0:
      return '一级菜单';
    case 1:
      return '二级菜单';
    case 2:
      return '三级菜单';
    case 3:
      return '四级菜单';
    default:
      return `${level + 1}级菜单`;
  }
}
