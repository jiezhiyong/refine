import { useCan } from '@refinedev/core';
import { data } from '@remix-run/node';
import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { useActionData, useLoaderData, useSubmit } from '@remix-run/react';
import { Plus } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';

import { MenuDialog } from '~/components/menu/menu-dialog';
import { MenuTree, type MenuTreeItem } from '~/components/menu/menu-tree';
import { Loader } from '~/components/refine/loader';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '~/components/ui/alert-dialog';
import { Button } from '~/components/ui/button';
import { H2 } from '~/components/ui/typography';
import { EnumAction } from '~/constants/action';
import { EnumResource } from '~/constants/resource';
import { createMenu, deleteMenu, getMenus, updateMenu, updateMenuOrder, updateMenuParent } from '~/services/menu';
import type { Menu, MenuCreateUpdate, MenuOrderUpdate, MenuParentUpdate } from '~/types/menu';

/**
 * 获取菜单列表
 */
export async function loader(_: LoaderFunctionArgs) {
  try {
    const menus = await getMenus();
    return data({ menus });
  } catch (error) {
    console.error('获取菜单列表失败:', error);
    return data({ error: '获取菜单列表失败' }, { status: 500 });
  }
}

/**
 * 处理菜单相关操作
 */
export async function action({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.formData();
    const action = formData.get('action') as string;

    // 更新菜单排序
    if (action === 'updateOrder') {
      const updatesJson = formData.get('updates') as string;
      const updates = JSON.parse(updatesJson) as MenuOrderUpdate[];
      await updateMenuOrder(updates);
      return data({ success: true });
    }

    // 更新菜单父级
    if (action === 'updateParent') {
      const updateJson = formData.get('update') as string;
      const update = JSON.parse(updateJson) as MenuParentUpdate;
      await updateMenuParent(update);
      return data({ success: true });
    }

    // 更新菜单活动状态
    if (action === 'toggleActive') {
      const id = formData.get('id') as string;
      const name = formData.get('name') as string;
      const isActive = formData.get('isActive') === 'true';
      await updateMenu({ id, name, isActive });
      return data({ success: true });
    }

    // 创建菜单
    if (action === 'create') {
      const menuJson = formData.get('menu') as string;
      const menuData = JSON.parse(menuJson) as MenuCreateUpdate;
      const menu = await createMenu(menuData);
      return data({ menu });
    }

    // 更新菜单
    if (action === 'update') {
      const menuJson = formData.get('menu') as string;
      const menuData = JSON.parse(menuJson) as MenuCreateUpdate;
      const menu = await updateMenu(menuData);
      return data({ menu });
    }

    // 删除菜单
    if (action === 'delete') {
      const id = formData.get('id') as string;
      await deleteMenu(id);
      return data({ success: true });
    }

    return data({ error: '无效的操作' }, { status: 400 });
  } catch (error) {
    console.error('菜单操作失败,', error);
    return data({ error: error instanceof Error ? error.message : '操作失败' }, { status: 500 });
  }
}

/**
 * 菜单管理页面
 */
export default function MenuPage() {
  const loaderData = useLoaderData<typeof loader>();

  // 获取 action 返回的数据，包括可能的错误信息
  const actionData = useActionData<{ error?: string; success?: boolean }>();

  // 使用useMemo确保菜单数据的稳定性
  const menus = useMemo(() => {
    return 'menus' in loaderData ? (loaderData.menus as Menu[]) : [];
  }, [loaderData]);

  const submit = useSubmit();
  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<Menu | null>(null);
  const [menuTree, setMenuTree] = useState<MenuTreeItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { data: createPermission } = useCan({
    resource: EnumResource.menu,
    action: EnumAction.create,
  });

  // 处理菜单树结构
  useEffect(() => {
    if (!menus.length) return;

    // 构建菜单树
    const buildMenuTree = (menuItems: Menu[]): MenuTreeItem[] => {
      // 构建树结构
      const buildTree = (parentName: string | null, level: number): MenuTreeItem[] => {
        const children = menuItems.filter((menu) => {
          if (level === 0) {
            return !menu.meta?.parent;
          }
          return menu.meta?.parent === parentName;
        });

        return children.map((menu) => {
          const item: MenuTreeItem = {
            ...menu,
            level,
            children: buildTree(menu.name, level + 1),
          };
          return item;
        });
      };

      return buildTree(null, 0);
    };

    setMenuTree(buildMenuTree(menus));
    setIsLoading(false);
  }, [menus]);

  // 监听 actionData 变化，显示错误或成功消息
  useEffect(() => {
    if (actionData) {
      if (actionData.error) {
        toast.error('菜单操作失败', { description: actionData.error });
      } else if (actionData.success) {
        toast.success('菜单操作成功');
      }
    }
  }, [actionData]);

  // 处理菜单排序
  const handleReorder = useCallback(
    async (items: MenuTreeItem[]) => {
      // 递归获取所有菜单项
      const getAllItems = (treeItems: MenuTreeItem[]): MenuTreeItem[] => {
        const result: MenuTreeItem[] = [];

        treeItems.forEach((item, index) => {
          result.push({
            ...item,
            order: index,
          });

          if (item.children && item.children.length > 0) {
            result.push(...getAllItems(item.children));
          }
        });

        return result;
      };

      // 获取所有菜单项并更新排序
      const allItems = getAllItems(items);

      try {
        const updates = allItems.map((item) => ({
          id: item.id,
          order: item.order || 0,
        }));

        const formData = new FormData();
        formData.append('action', 'updateOrder');
        formData.append('updates', JSON.stringify(updates));

        submit(formData, { method: 'post' });

        // 更新本地菜单树
        setMenuTree(items);
      } catch (error) {
        console.error('更新菜单排序失败', error);
        toast.error(`更新失败: ${error instanceof Error ? error.message : '未知错误'}`);
      }
    },
    [submit]
  );

  // 处理编辑菜单
  const handleEditMenu = useCallback((menu: MenuTreeItem) => {
    setSelectedMenu(menu);
    setOpen(true);
  }, []);

  // 处理添加菜单
  const handleAddMenu = useCallback(() => {
    setSelectedMenu(null);
    setOpen(true);
  }, []);

  // 删除确认对话框状态
  const [deleteAlert, setDeleteAlert] = useState<{ isOpen: boolean; menu: MenuTreeItem | null }>({
    isOpen: false,
    menu: null,
  });

  // 打开删除确认对话框
  const openDeleteAlert = useCallback((menu: MenuTreeItem) => {
    setDeleteAlert({ isOpen: true, menu });
  }, []);

  // 关闭删除确认对话框
  const closeDeleteAlert = useCallback(() => {
    setDeleteAlert({ isOpen: false, menu: null });
  }, []);

  // 处理删除菜单
  const handleDeleteMenu = useCallback(() => {
    const { menu } = deleteAlert;
    if (!menu) return;

    const formData = new FormData();
    formData.append('action', 'delete');
    formData.append('id', menu.id);

    submit(formData, { method: 'post' });
    closeDeleteAlert();
  }, [deleteAlert, submit, closeDeleteAlert]);

  // 对话框关闭后的处理
  const handleDialogSuccess = useCallback(() => {
    setOpen(false);
    setSelectedMenu(null);
  }, []);

  // 处理菜单创建或更新
  const handleSaveMenu = useCallback(
    (menuData: MenuCreateUpdate) => {
      const formData = new FormData();

      if (menuData.id) {
        // 更新菜单
        formData.append('action', 'update');
      } else {
        // 创建菜单
        formData.append('action', 'create');
      }

      formData.append('menu', JSON.stringify(menuData));
      submit(formData, { method: 'post' });

      setOpen(false);
      setSelectedMenu(null);
    },
    [submit]
  );

  // 处理菜单活动状态切换
  const handleToggleActive = useCallback(
    (menu: MenuTreeItem, isActive: boolean) => {
      const formData = new FormData();
      formData.append('action', 'toggleActive');
      formData.append('id', menu.id);
      formData.append('name', menu.name);
      formData.append('isActive', String(isActive));

      submit(formData, { method: 'post' });
    },
    [submit]
  );

  return (
    <div className="flex flex-1 flex-col px-8 pt-8 pb-4">
      <H2 className="mb-6 flex items-center justify-between">
        <span>菜单管理</span>
        <Button onClick={handleAddMenu} disabled={!createPermission?.can}>
          <Plus className="h-4 w-4" />
          添加菜单
        </Button>
      </H2>

      {isLoading ? (
        <div className="flex size-full justify-center">
          <div className="flex w-20">
            <Loader />
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {menuTree.length === 0 ? (
            <div className="text-muted-foreground py-8 text-center">暂无菜单，请点击右上角添加菜单按钮创建</div>
          ) : (
            <MenuTree
              items={menuTree}
              onReorder={handleReorder}
              onEditMenu={handleEditMenu}
              onDeleteMenu={openDeleteAlert}
              onToggleActive={handleToggleActive}
            />
          )}
        </div>
      )}

      <MenuDialog
        open={open}
        onOpenChange={setOpen}
        onClose={() => setOpen(false)}
        onSuccess={handleDialogSuccess}
        onSave={handleSaveMenu}
        menu={selectedMenu}
        menus={menus}
      />

      {/* 菜单删除确认对话框 */}
      <AlertDialog open={deleteAlert.isOpen} onOpenChange={(isOpen) => !isOpen && closeDeleteAlert()}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>确认删除菜单</AlertDialogTitle>
            <AlertDialogDescription>
              确定要删除菜单&ldquo;{deleteAlert.menu?.title || deleteAlert.menu?.name}&rdquo;吗？此操作不可撤销。
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteMenu} variant="destructive">
              确认删除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
