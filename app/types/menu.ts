// 菜单类型定义
export interface Menu {
  id: string;
  name: string;
  title?: string | null;
  order?: number | null;
  isActive?: boolean | null;
  list?: string | null;
  create?: string | null;
  edit?: string | null;
  show?: string | null;
  clone?: string | null;
  meta?: {
    parent?: string;
    icon?: string;
    label?: string;
    [key: string]: string | number | boolean | undefined;
  };
  createdAt?: Date;
  updatedAt?: Date | null;
  deleted?: boolean | null;
  operatedById?: string | null;
}

// 菜单树结构项
export interface MenuTreeItem extends Menu {
  children?: MenuTreeItem[];
  level: number;
}

// 菜单排序更新参数
export interface MenuOrderUpdate {
  id: string;
  order: number;
}

// 菜单父级更新参数
export interface MenuParentUpdate {
  id: string;
  parentName: string | null;
  level: number;
}

// 菜单创建/更新参数
export interface MenuCreateUpdate {
  id?: string;
  name: string;
  title?: string;
  parentId?: string | null;
  isActive?: boolean;
  list?: string;
  create?: string;
  edit?: string;
  show?: string;
  clone?: string;
  icon?: string;
}
