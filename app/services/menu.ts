import { Prisma } from '@prisma/client';
import { ResourceProps } from '@refinedev/core';
import { ResourceMeta } from 'node_modules/@refinedev/core/dist/contexts/resource/types';

import { db } from '~/services/db.server';
import { TAny } from '~/types/any';
import type { Menu, MenuCreateUpdate, MenuOrderUpdate, MenuParentUpdate } from '~/types/menu';
import { dropEmptyKey } from '~/utils/drop-empty-key';

/**
 * 获取所有菜单
 * @returns 菜单列表
 */
export async function getMenus(): Promise<Menu[]> {
  const menus = await db.menu.findMany({
    where: {
      deleted: false,
    },
    orderBy: [{ order: 'asc' }, { createdAt: 'asc' }],
  });

  return menus.map((menu) => ({
    ...menu,
    meta: menu.meta as Menu['meta'],
  }));
}

/**
 * 获取所有菜单资源 - refine格式
 * @returns 菜单资源列表
 */
export async function getRefineMenusResources(): Promise<ResourceProps[]> {
  const menus = await db.menu.findMany({
    where: {
      deleted: false,
      isActive: true,
    },
    orderBy: [{ order: 'asc' }],
    select: {
      name: true,
      title: true,
      list: true,
      create: true,
      edit: true,
      show: true,
      clone: true,
      meta: true,
    },
  });

  (menus as Menu[]).forEach((menu) => {
    menu = dropEmptyKey(menu);

    if (!menu.meta) {
      menu.meta = {};
    }

    if (menu.title) {
      (menu.meta as ResourceMeta).label = menu.title;
      delete menu.title;
    }

    menu.meta = dropEmptyKey(menu.meta as ResourceMeta) as TAny;
    if (Object.keys(menu.meta as ResourceMeta).length === 0) {
      delete menu.meta;
    }
  });

  return menus as ResourceProps[];
}

/**
 * 更新菜单排序
 * @param updates 排序更新数据
 */
export async function updateMenuOrder(updates: MenuOrderUpdate[]): Promise<void> {
  // 使用事务确保所有更新操作要么全部成功，要么全部失败
  await db.$transaction(
    updates.map((update) =>
      db.menu.update({
        where: { id: update.id },
        data: { order: update.order },
      })
    )
  );
}

/**
 * 更新菜单父级
 * @param update 父级更新数据
 */
export async function updateMenuParent(update: MenuParentUpdate): Promise<void> {
  const { id, parentName } = update;

  // 获取当前菜单信息
  const menu = await db.menu.findUnique({
    where: { id },
    select: {
      name: true,
      list: true,
      create: true,
      edit: true,
      show: true,
      clone: true,
      meta: true,
    },
  });

  if (!menu) {
    throw new Error('菜单不存在');
  }

  // 更新菜单的meta.parent
  const meta = (menu.meta as Record<string, unknown>) || {};

  if (parentName) {
    meta.parent = parentName;
  } else {
    delete meta.parent;
  }

  // 更新菜单
  await db.menu.update({
    where: { id },
    data: {
      meta: meta as unknown as Prisma.InputJsonValue,
    },
  });

  // 如果是移动到新的父级，需要更新路径
  if (parentName) {
    // 更新路径逻辑根据实际情况实现
    // 这里只是示例，实际实现可能需要更复杂的逻辑
  }
}

/**
 * 创建菜单
 * @param data 菜单数据
 * @returns 创建的菜单
 */
export async function createMenu(data: MenuCreateUpdate): Promise<Menu> {
  const { name, title, parentId, isActive, list, create, edit, show, clone, icon } = data;

  // 获取父级菜单（如果有）
  let parentName = null;
  if (parentId) {
    const parentMenu = await db.menu.findUnique({
      where: { id: parentId },
      select: { name: true, meta: true },
    });

    if (!parentMenu) {
      throw new Error('父级菜单不存在');
    }

    parentName = parentMenu.name;
  }

  // 构建meta数据
  const meta: Record<string, string | number | boolean | undefined> = {};

  if (parentName) {
    meta.parent = parentName;
  }

  if (icon) {
    meta.icon = icon;
  }

  // 创建菜单
  const menu = await db.menu.create({
    data: {
      name,
      title,
      isActive: isActive ?? true,
      list,
      create,
      edit,
      show,
      clone,
      meta,
    },
  });

  return {
    ...menu,
    meta: menu.meta as Menu['meta'],
  };
}

/**
 * 更新菜单
 * @param data 菜单数据
 * @returns 更新的菜单
 */
export async function updateMenu(data: MenuCreateUpdate): Promise<Menu> {
  const { id, name, title, parentId, isActive, list, create, edit, show, clone, icon } = data;

  if (!id) {
    throw new Error('菜单ID不能为空');
  }

  // 获取当前菜单
  const currentMenu = await db.menu.findUnique({
    where: { id },
    select: { name: true, meta: true },
  });

  if (!currentMenu) {
    throw new Error('菜单不存在');
  }

  // 获取父级菜单（如果有）
  let parentName = null;
  if (parentId) {
    const parentMenu = await db.menu.findUnique({
      where: { id: parentId },
      select: { name: true },
    });

    if (!parentMenu) {
      throw new Error('父级菜单不存在');
    }

    parentName = parentMenu.name;
  }

  // 构建meta数据
  const meta = (currentMenu.meta as Record<string, unknown>) || {};

  if (parentName) {
    meta.parent = parentName;
  } else if (parentId === null) {
    delete meta.parent;
  }

  if (icon) {
    meta.icon = icon;
  }

  // 如果isActive属性被更新，则需要同步更新所有子菜单的状态
  // 注意：EnumResource.menu 不可被禁用，否则将导致菜单管理页面无法访问
  const updateResult: Menu = await db.$transaction(async (tx) => {
    // 检查是否需要同步更新子菜单的激活状态
    if (isActive !== undefined) {
      // 获取所有子菜单，将其激活状态与父菜单同步
      await updateChildMenusActive(currentMenu.name, isActive, tx);
    }

    // 更新当前菜单
    const menu = await tx.menu.update({
      where: { id },
      data: {
        name,
        title,
        isActive,
        list,
        create,
        edit,
        show,
        clone,
        meta: meta as unknown as Prisma.InputJsonValue,
      },
    });

    return {
      ...menu,
      meta: menu.meta as Menu['meta'],
    };
  });

  return updateResult;
}

/**
 * 递归更新所有子菜单的激活状态
 * @param parentName 父菜单名称
 * @param isActive 是否激活
 * @param tx 事务对象，用于保证数据一致性
 */
async function updateChildMenusActive(
  parentName: string,
  isActive: boolean,
  tx?: Prisma.TransactionClient
): Promise<void> {
  const prisma = tx || db;

  // 查找所有以parentName为父菜单的菜单项
  const childMenus = await prisma.menu.findMany({
    where: {
      deleted: false,
      meta: {
        path: ['parent'],
        equals: parentName,
      },
    },
    select: {
      id: true,
      name: true,
    },
  });

  // 如果没有子菜单，直接返回
  if (childMenus.length === 0) {
    return;
  }

  // 批量更新所有子菜单的激活状态
  await prisma.menu.updateMany({
    where: {
      id: { in: childMenus.map((menu) => menu.id) },
    },
    data: { isActive },
  });

  // 递归处理每个子菜单的子菜单
  for (const childMenu of childMenus) {
    await updateChildMenusActive(childMenu.name, isActive, tx);
  }
}

/**
 * 删除菜单
 * @param id 菜单ID
 */
export async function deleteMenu(id: string): Promise<void> {
  // 获取要删除的菜单
  const menu = await db.menu.findUnique({
    where: { id },
    select: { name: true },
  });

  if (!menu) {
    throw new Error('菜单不存在');
  }

  // 检查是否有子菜单
  const childMenus = await db.menu.findMany({
    where: {
      meta: {
        path: ['parent'],
        equals: menu.name,
      },
    },
  });

  if (childMenus.length > 0) {
    throw new Error('该菜单下有子菜单，无法删除');
  }

  // 逻辑删除菜单
  await db.menu.update({
    where: { id },
    data: { deleted: true },
  });
}
