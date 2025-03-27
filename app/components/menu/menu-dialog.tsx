import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCheck } from 'lucide-react';
import { useCallback, useEffect, useMemo } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Combobox } from '~/components/refine/form/combobox';
import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '~/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Switch } from '~/components/ui/switch';
import type { Menu, MenuCreateUpdate } from '~/types/menu';
import { getLevelName } from '~/utils/menu';

// 表单验证模式
const formSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, '菜单名称不能为空'),
  title: z.string().optional(),
  parentId: z.string().nullable().optional(),
  isActive: z.boolean().default(true),
  list: z.string().optional(),
  create: z.string().optional(),
  edit: z.string().optional(),
  show: z.string().optional(),
  clone: z.string().optional(),
  isActiveList: z.boolean().default(true),
  isActiveCreate: z.boolean().default(false),
  isActiveEdit: z.boolean().default(false),
  isActiveShow: z.boolean().default(false),
  isActiveClone: z.boolean().default(false),
  icon: z.string().optional(),
});

// 组件属性
interface MenuDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
  onSuccess: () => void;
  onSave?: (menuData: MenuCreateUpdate) => void;
  menu: Menu | null;
  menus: Menu[];
}

/**
 * 菜单对话框组件
 */
export function MenuDialog({ open, onOpenChange, onClose, onSuccess, onSave, menu, menus }: MenuDialogProps) {
  const isEditMode = !!menu;

  // 初始化表单
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: '',
      name: '',
      title: '',
      parentId: null,
      isActive: true,
      list: '',
      create: '',
      edit: '',
      show: '',
      clone: '',
      isActiveList: true,
      isActiveCreate: false,
      isActiveEdit: false,
      isActiveShow: false,
      isActiveClone: false,
      icon: '',
    },
  });

  // 单独监听菜单名称
  const name = form.watch('name');

  // 单独监听父级菜单ID
  const parentId = form.watch('parentId');

  // 使用 useWatch 监听路径字段，确保UI更新
  const watchedPaths = useWatch({
    control: form.control,
    name: ['list', 'create', 'edit', 'show', 'clone'],
  });

  // 构建可选的父级菜单列表
  // 获取一级和二级菜单作为可选的父级
  const parentOptions = useMemo(() => {
    const options: { id: string; name: string; title: string; level: number }[] = [];

    // 添加一级菜单
    menus.forEach((menu) => {
      if (!menu.meta?.parent) {
        options.push({
          id: menu.id,
          name: menu.name,
          title: menu.title || menu.name,
          level: 0,
        });
      }
    });

    // 添加二级菜单
    menus.forEach((menu) => {
      if (menu.meta?.parent && menu.meta?.icon) {
        const parentMenu = menus.find((m) => m.name === menu.meta?.parent);
        if (parentMenu) {
          options.push({
            id: menu.id,
            name: menu.name,
            title: menu.title || menu.name,
            level: 1,
          });
        }
      }
    });

    return options;
  }, [menus]);

  // 获取当前选择的父级菜单层级
  const selectedParentLevel = useMemo(() => {
    if (!parentId) return -1;

    const parent = parentOptions.find((option) => option.id === parentId);
    return parent ? parent.level : -1;
  }, [parentId, parentOptions]);

  // 当菜单数据变化时，更新表单
  useEffect(() => {
    if (menu) {
      // 查找父级菜单ID
      let parentId: string | null = null;

      if (menu.meta?.parent) {
        const parentName = menu.meta.parent;
        const parentMenu = menus.find((m) => m.name === parentName);
        if (parentMenu) {
          parentId = parentMenu.id;
        }
      }

      const isActiveList = menu.list ? true : false;
      const isActiveCreate = menu.create ? true : false;
      const isActiveEdit = menu.edit ? true : false;
      const isActiveShow = menu.show ? true : false;
      const isActiveClone = menu.clone ? true : false;

      form.reset({
        id: menu.id,
        name: menu.name,
        title: menu.title || '',
        parentId,
        isActive: menu.isActive ?? true,
        list: menu.list || '',
        create: menu.create || '',
        edit: menu.edit || '',
        show: menu.show || '',
        clone: menu.clone || '',
        isActiveList,
        isActiveCreate,
        isActiveEdit,
        isActiveShow,
        isActiveClone,
        icon: menu.meta?.icon || '',
      });
    } else {
      form.reset({
        id: '',
        name: '',
        title: '',
        parentId: null,
        isActive: true,
        list: '',
        create: '',
        edit: '',
        show: '',
        clone: '',
        isActiveList: true,
        isActiveCreate: false,
        isActiveEdit: false,
        isActiveShow: false,
        isActiveClone: false,
        icon: '',
      });
    }
  }, [menu, menus, form]);

  // 监听父级菜单层级变化，自动设置或移除图标

  useEffect(() => {
    // 二级菜单，设置默认图标
    if (selectedParentLevel === 0) {
      form.setValue('icon', menu?.meta?.icon || 'Lightbulb');
    } else if (selectedParentLevel !== 0) {
      // 非二级菜单，清除图标
      form.setValue('icon', '');
    }
  }, [selectedParentLevel, form, menu]);

  // 动态生成路径
  const generateRoutes = useCallback(() => {
    // 如果没有名称，返回空路径
    if (!name) return { list: '', create: '', edit: '', show: '', clone: '' };

    // 构建路径段数组
    const pathSegments = [];

    // 如果有父级菜单
    if (parentId) {
      const parent = parentOptions.find((option) => option.id === parentId);

      if (!parent) return { list: '', create: '', edit: '', show: '', clone: '' };

      if (parent.level === 0) {
        // 二级菜单: /一级菜单/当前菜单
        pathSegments.push(parent.name);
      } else if (parent.level === 1) {
        // 三级菜单: /一级菜单/二级菜单/当前菜单
        // 查找一级菜单(祖父)
        const grandParentName = menus.find((m) => m.id === parent.id)?.meta?.parent;
        if (grandParentName) {
          const grandParent = menus.find((m) => m.name === grandParentName);
          if (grandParent) {
            pathSegments.push(grandParent.name);
          }
        }
        // 添加二级菜单(父级)
        pathSegments.push(parent.name);
      }
    }

    // 添加当前菜单名称
    pathSegments.push(name);

    // 生成基础路径
    const basePath = `/${pathSegments.join('/')}`;

    // 统一生成所有路径
    return {
      list: basePath,
      create: `${basePath}/create`,
      edit: `${basePath}/edit/:id`,
      show: `${basePath}/show/:id`,
      clone: `${basePath}/clone/:id`,
    };
  }, [name, parentId, parentOptions, menus]);

  // 监听表单字段变化并更新路径
  useEffect(() => {
    const routes = generateRoutes();

    form.setValue('list', routes.list);
    form.setValue('create', routes.create);
    form.setValue('edit', routes.edit);
    form.setValue('show', routes.show);
    form.setValue('clone', routes.clone);
  }, [form, generateRoutes, name, parentId]);

  // 处理表单提交
  const onSubmit = useCallback(
    (values: z.infer<typeof formSchema>) => {
      // 根据开关状态决定是否保存路径
      const data: MenuCreateUpdate = {
        ...values,
        // 只保存启用的路径
        list: values.isActiveList ? values.list : undefined,
        create: values.isActiveCreate ? values.create : undefined,
        edit: values.isActiveEdit ? values.edit : undefined,
        show: values.isActiveShow ? values.show : undefined,
        clone: values.isActiveClone ? values.clone : undefined,
        // 非二级菜单不设置图标
        icon: selectedParentLevel === 0 ? values.icon : undefined,
      };

      if (onSave) {
        // 使用外部保存处理函数
        if (isEditMode && menu) {
          onSave({
            ...data,
            id: menu.id,
          });
        } else {
          onSave(data);
        }
      } else {
        // 默认行为，提交成功后关闭对话框
        toast.success(isEditMode ? '菜单更新成功' : '菜单创建成功');
        onSuccess();
      }
    },
    [isEditMode, menu, onSave, onSuccess, selectedParentLevel]
  );

  // 判断是否正在提交
  const isSubmitting = form.formState.isSubmitting;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{isEditMode ? '编辑菜单' : '新增菜单'}</DialogTitle>
          <DialogDescription />
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* 父级菜单 */}
            <FormField
              control={form.control}
              name="parentId"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>父级菜单</FormLabel>
                  <FormControl>
                    <Combobox
                      options={[
                        { value: 'null', label: '无 (作为一级菜单)' },
                        ...parentOptions.map((option) => ({
                          value: option.id,
                          label: `${getLevelName(option.level)} - ${option.title}`,
                        })),
                      ]}
                      placeholder="选择父级菜单"
                      value={field.value === null ? 'null' : field.value || ''}
                      onChange={(value) => field.onChange(value === 'null' ? null : value)}
                      disabled={form.formState.isSubmitting}
                      popoverProps={{ modal: true }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              {/* 菜单名称 */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>菜单名称, 当前菜单级别：{getLevelName(selectedParentLevel + 1)}</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入菜单名称" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 菜单标题 */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>菜单标题</FormLabel>
                    <FormControl>
                      <Input placeholder="请输入菜单标题" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 菜单图标 */}
              <FormField
                control={form.control}
                name="icon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>菜单图标</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={selectedParentLevel !== 0 ? '仅限二级菜单可设置图标' : '请输入图标名称'}
                        disabled={selectedParentLevel !== 0 || form.formState.isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              {/* 是否激活列表页 */}
              <FormField
                control={form.control}
                name="isActiveList"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                    <FormLabel className="flex-1">{watchedPaths[0] || 'N/A'}</FormLabel>
                    <FormLabel>列表</FormLabel>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* 是否激活创建页 */}
              <FormField
                control={form.control}
                name="isActiveCreate"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                    <FormLabel className="flex-1">{watchedPaths[1] || 'N/A'}</FormLabel>
                    <FormLabel>创建</FormLabel>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* 是否激活编辑页 */}
              <FormField
                control={form.control}
                name="isActiveEdit"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                    <FormLabel className="flex-1">{watchedPaths[2] || 'N/A'}</FormLabel>
                    <FormLabel>编辑</FormLabel>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* 是否激活详情页 */}
              <FormField
                control={form.control}
                name="isActiveShow"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                    <FormLabel className="flex-1">{watchedPaths[3] || 'N/A'}</FormLabel>
                    <FormLabel>详情</FormLabel>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* 是否激活克隆页 */}
              <FormField
                control={form.control}
                name="isActiveClone"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                    <FormLabel className="flex-1">{watchedPaths[4] || 'N/A'}</FormLabel>
                    <FormLabel>克隆</FormLabel>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose}>
                取消
              </Button>
              <Button type="submit" disabled={isSubmitting} icon={<CheckCheck />}>
                {isSubmitting ? '保存中...' : '保存'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
