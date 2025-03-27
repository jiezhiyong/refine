/* eslint-disable react-hooks/exhaustive-deps */
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { zodResolver } from '@hookform/resolvers/zod';
import { DynamicPage, Menu } from '@prisma/client';
import { FormAction, RedirectAction, useResourceParams } from '@refinedev/core';
import { useForm } from '@refinedev/react-hook-form';
import { ActionFunctionArgs, data, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useActionData, useLoaderData, useSubmit } from '@remix-run/react';
import { isEqual } from 'es-toolkit';
import { CheckCheck, Edit, GripVertical, Lightbulb, Plus, Trash2 } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm as useHookForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { PageError } from '~/components/500';
import { CodeEditor } from '~/components/refine/form/code';
import { Combobox } from '~/components/refine/form/combobox';
import { Field } from '~/components/refine/form/field';
import { FormEasy } from '~/components/refine/form/form';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '~/components/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Switch } from '~/components/ui/switch';
import { H2 } from '~/components/ui/typography';
import { EnumAction } from '~/constants/action';
import { dataService } from '~/services/data.server';
import { TAny } from '~/types/any';
import { TFormFieldItem, TTableFieldItem, TTableRecordLinkItem } from '~/types/dynamic-page';
import { dropEmptyKey } from '~/utils/drop-empty-key';
import { getRefineQueryOptions } from '~/utils/form';
import { getChangedValues } from '~/utils/get-changed-values';
import { getDefaultTitle } from '~/utils/get-default-title';
import { parseTablenameFromSql } from '~/utils/sql';
import { schemaDynamicPage, schemaJson } from '~/zod';

// meta
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export type TDynamicPage = Omit<DynamicPage, 'tableField' | 'tableRecordLinks' | 'formFields'> & {
  tableField: TTableFieldItem[];
  tableRecordLink: TTableRecordLinkItem[];
  formField: TFormFieldItem[];
};

// 加载数据
export async function loader({ request, params }: LoaderFunctionArgs) {
  const [initialData] = await Promise.all([
    dataService.findUniqueOrThrow<TDynamicPage>('dynamicPage', { where: { id: params?.id || '' } }, { request }),
  ]);

  return {
    initialData,
  };
}

/**
 * 处理菜单相关操作
 */
export async function action({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.formData();
    const params = JSON.parse(formData.get('data') as string) as Partial<TDynamicPage>;

    const { path = '', title, isActive } = params;
    const [_slash, group, category, _dynamic, name] = path.split('/');

    const menus = [
      {
        name: group,
      },
      {
        name: category,
        meta: { parent: group, icon: 'Lightbulb' },
      },
      {
        name: `dynamic/${name}`,
        list: `/${group}/${category}/dynamic/${name}`,
        meta: { parent: category },
        title,
        isActive,
        order: 1000,
      },
    ];

    // 分级创建菜单，如果已存在且三级菜单的 isActive 不同则更新
    for (const menu of menus) {
      const existingMenu = await dataService.findFirst<Menu>('menu', { where: { name: menu.name } }, { request });
      if (!existingMenu) {
        await dataService.create<Menu>('menu', { data: menu }, { request });
      } else if (menu.list && existingMenu.isActive !== isActive) {
        await dataService.update<Menu>('menu', { where: { id: existingMenu.id }, data: { isActive } }, { request });
      }
    }

    return data({ success: true }, { status: 200 });
  } catch (error) {
    return data({ error: error instanceof Error ? error.message : '操作失败' }, { status: 500 });
  }
}

// UI
export default function DynamicPageEdit() {
  const { initialData } = useLoaderData<typeof loader>();
  return <DynamicPageForm initialData={initialData} />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}

// 基础表单类型
const baseFormFieldTypes: TFormFieldItem['type'][] = ['text', 'textarea', 'switch', 'file', 'checkbox'];

// 选择表单类型
export const selectFormFieldTypes: TFormFieldItem['type'][] = ['select', 'selectMany', 'radio', 'checkboxMany'];

// 日期表单类型
export const dateFormFieldTypes: TFormFieldItem['type'][] = ['date', 'dateRange', 'dateMany'];

// 示例 tableSql 数据
const exampleTableSql = `
SELECT 
  p."id", 
  p."title", 
  c."title" AS "category",
  p."hit",
  p."status",
  p."updatedAt",
  u."name" AS "operatedBy"
FROM 
  "Post" p
JOIN 
  "Category" c ON p."categoryId" = c.id
JOIN 
  "User" u ON p."operatedById" = u.id
WHERE 
  p."deleted" IS NOT TRUE
ORDER BY 
  p."updatedAt" DESC;
`;

// 过滤数据，只保留 formSchema 中定义的字段
const filterFormData = (data: Partial<TDynamicPage> | undefined) => {
  // 处理JSON数据和数组数据，确保它们有合适的默认值
  const tableRecordLinkData = Array.isArray(data?.tableRecordLink) ? data?.tableRecordLink : [];
  const tableFieldData = Array.isArray(data?.tableField) ? data?.tableField : [];
  const formFieldData = Array.isArray(data?.formField) ? data?.formField : [];

  return {
    path: data?.path || '',
    title: data?.title || '',
    isActive: data?.isActive ?? true,
    enableCreate: data?.enableCreate ?? true,
    enableDelete: data?.enableDelete ?? true,
    enableEdit: data?.enableEdit ?? true,
    enableClone: data?.enableClone ?? true,
    db: data?.db || 'db1',
    tableSql: data?.tableSql || exampleTableSql,
    tableRecordLink: tableRecordLinkData as unknown as TTableRecordLinkItem[],
    tableField: tableFieldData as unknown as TTableFieldItem[],
    formField: formFieldData as unknown as TFormFieldItem[],
    meta: JSON.stringify(data?.meta || {}, null, 2),
  };
};

// Zod验证模式定义
// TableRecordLink验证模式
const tableRecordLinkSchema = z.object({
  name: z.string().min(1, { message: '请输入按钮名称' }),
  url: z.string().min(1, { message: '请输入URL' }),
});

// TableField验证模式
const tableFieldSchema = z.object({
  name: z.string().min(1, { message: '请输入字段名' }),
  defaultHide: z.boolean().optional(),
});

// FormField验证模式
const formFieldSchemaBase = z.object({
  name: z.string().min(1, { message: '请输入字段名' }),
  type: z.string().min(1, { message: '请选择字段类型' }),
  required: z.boolean().optional(),
  readonly: z.boolean().optional(),
  hide: z.boolean().optional(),
  label: z.string().optional(),
  description: z.string().optional(),
});

const formFieldSchemaSelect = formFieldSchemaBase.extend({
  optionsType: z.string().optional(),
  optionsStatic: z
    .array(
      z.object({
        label: z.string().min(1, { message: '标签不能为空' }),
        value: z.string().min(1, { message: '值不能为空' }),
      })
    )
    .optional(),
  optionsSql: z.string().optional(),
  optionsMap: z
    .object({
      key: z.string().optional(),
      label: z.string().optional(),
      value: z.string().optional(),
    })
    .optional(),
});

const formFieldSchemaNumber = formFieldSchemaBase.extend({
  min: z.number().optional(),
  max: z.number().optional(),
  step: z.number().optional(),
});

const formFieldSchemaDate = formFieldSchemaBase.extend({
  start: z.string().optional(),
  end: z.string().optional(),
});

const formFieldSchemaCode = formFieldSchemaBase.extend({
  language: z.string().optional(),
});

// 用于表单字段的类型定义
const formFieldSchemaAny = z.object({
  name: z.string().min(1, { message: '请输入字段名' }),
  type: z.string().min(1, { message: '请选择字段类型' }),
  required: z.boolean().optional(),
  readonly: z.boolean().optional(),
  hide: z.boolean().optional(),
  description: z.string().optional(),
  optionsType: z.string().optional(),
  optionsStatic: z
    .array(
      z.object({
        label: z.string().min(1, { message: '标签不能为空' }),
        value: z.string().min(1, { message: '值不能为空' }),
      })
    )
    .optional(),
  optionsSql: z.any().optional(),
  optionsMap: z
    .object({
      label: z.string().optional(),
      value: z.string().optional(),
    })
    .optional(),
  min: z.number().optional(),
  max: z.number().optional(),
  step: z.number().optional(),
  start: z.string().optional(),
  end: z.string().optional(),
  language: z.string().optional(),
});

// 联合验证模式，根据type字段动态选择验证模式
const formFieldSchema = z.discriminatedUnion('type', [
  formFieldSchemaBase.extend({ type: z.literal('text') }),
  formFieldSchemaBase.extend({ type: z.literal('textarea') }),
  formFieldSchemaBase.extend({ type: z.literal('switch') }),
  formFieldSchemaBase.extend({ type: z.literal('file') }),
  formFieldSchemaSelect.extend({ type: z.literal('select') }),
  formFieldSchemaSelect.extend({ type: z.literal('selectMany') }),
  formFieldSchemaSelect.extend({ type: z.literal('radio') }),
  formFieldSchemaSelect.extend({ type: z.literal('checkbox') }),
  formFieldSchemaSelect.extend({ type: z.literal('checkboxMany') }),
  formFieldSchemaNumber.extend({ type: z.literal('number') }),
  formFieldSchemaNumber.extend({ type: z.literal('slider') }),
  formFieldSchemaDate.extend({ type: z.literal('date') }),
  formFieldSchemaDate.extend({ type: z.literal('dateRange') }),
  formFieldSchemaDate.extend({ type: z.literal('dateMany') }),
  formFieldSchemaCode.extend({ type: z.literal('code') }),
]);

// 扩展DynamicPage的schema定义，添加额外字段
const schemaDynamicPageNew = schemaDynamicPage.extend({
  meta: schemaJson,
  db: z.string(),
  tableSql: z.string(),
  tableRecordLink: z.array(tableRecordLinkSchema).optional(),
  tableField: z.array(tableFieldSchema).optional(),
  formField: z.array(formFieldSchemaAny).optional(),
});

// 生成TypeScript类型定义
type TSchemaDynamicPageNew = z.infer<typeof schemaDynamicPageNew>;

// Sortable Item Components
interface SortableItemProps {
  id: string;
  children: (
    attributes: ReturnType<typeof useSortable>['attributes'],
    listeners: ReturnType<typeof useSortable>['listeners']
  ) => React.ReactNode;
}

const SortableItem = ({ id, children }: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="relative touch-none">
      {children(attributes, listeners)}
    </div>
  );
};

// TableRecordLink Item
const TableRecordLinkItem = ({
  item,
  onEdit,
  onDelete,
}: {
  item: TTableRecordLinkItem;
  onEdit: (item: TTableRecordLinkItem) => void;
  onDelete: (name: string) => void;
}) => {
  return (
    <SortableItem id={item.name}>
      {(attributes, listeners) => (
        <div className="bg-muted hover:bg-muted/50 hover:border-foreground group mb-2 flex items-center justify-between rounded-md border p-2">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground cursor-move outline-none" {...attributes} {...listeners}>
              <GripVertical size={16} />
            </span>
            <div className="space-x-2">
              <span className="font-medium">{item.name}</span>
              <span className="text-muted-foreground text-xs">{item.url}</span>
            </div>
          </div>
          <div className="flex items-center">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100"
              onClick={() => onEdit(item)}
            >
              <Edit size={14} />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-destructive! h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100"
              onClick={() => onDelete(item.name)}
            >
              <Trash2 size={14} />
            </Button>
          </div>
        </div>
      )}
    </SortableItem>
  );
};

// FormField Item
const FormFieldItem = ({
  item,
  onEdit,
  onDelete,
}: {
  item: TFormFieldItem;
  onEdit: (item: TFormFieldItem) => void;
  onDelete: (id: string) => void;
}) => {
  const strArray: string[] = [`type=${item.type}`];
  if (item.required) {
    strArray.push('required=true');
  }
  if (item.readonly) {
    strArray.push('readonly=true');
  }
  if (item.hide) {
    strArray.push('hide=true');
  }
  if (item.optionsType) {
    strArray.push(`optionsType=${item.optionsType}`);
  }
  if (item.label) {
    strArray.push(`label=${item.label}`);
  }
  if (item.description) {
    strArray.push(`description=${item.description}`);
  }

  return (
    <SortableItem id={item.name}>
      {(attributes, listeners) => (
        <div className="bg-muted hover:bg-muted/50 hover:border-foreground group mb-2 flex items-center justify-between rounded-md border p-2">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground cursor-move outline-none" {...attributes} {...listeners}>
              <GripVertical size={16} />
            </span>

            <div className="space-x-2">
              <span className="font-medium">{item.name}</span>
              <span className="text-muted-foreground text-xs">{strArray.join('、')}</span>
            </div>
          </div>
          <div className="flex items-center">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100"
              onClick={() => onEdit(item)}
            >
              <Edit size={14} />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-destructive! h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100"
              onClick={() => onDelete(item.name)}
            >
              <Trash2 size={14} />
            </Button>
          </div>
        </div>
      )}
    </SortableItem>
  );
};

// DraggableList component that supports DnD
interface DraggableListProps<T extends { name: string }> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onDragEnd: (items: T[]) => void;
}

function DraggableList<T extends { name: string }>({ items, renderItem, onDragEnd }: DraggableListProps<T>) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.name === active.id);
      const newIndex = items.findIndex((item) => item.name === over.id);

      const newItems = arrayMove(items, oldIndex, newIndex);
      onDragEnd(newItems);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]} // 限制只能在Y轴方向拖拽
    >
      <SortableContext items={items.map((item) => item.name)} strategy={verticalListSortingStrategy}>
        {items.map((item) => renderItem(item))}
      </SortableContext>
    </DndContext>
  );
}

// 新增、编辑表记录链接
const TableRecordLinkDialog = ({
  isOpen,
  onClose,
  onSave,
  initialData,
  resourceTable,
  tableRecordLinkItems,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: TTableRecordLinkItem) => void;
  initialData?: TTableRecordLinkItem;
  resourceTable: string;
  tableRecordLinkItems: TTableRecordLinkItem[];
}) => {
  // 增强 tableRecordLinkSchema，添加条件验证逻辑
  const extendedTableRecordLinkSchema = tableRecordLinkSchema.superRefine((data, ctx) => {
    if (tableRecordLinkItems.some((item) => item.name === data.name && item.name !== initialData?.name)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '字段名已存在',
        path: ['name'],
      });
      return;
    }
  });

  const form = useHookForm<z.infer<typeof extendedTableRecordLinkSchema>>({
    resolver: zodResolver(extendedTableRecordLinkSchema),
    defaultValues: {
      name: initialData?.name || '',
      url: initialData?.url || '',
    },
    mode: 'onChange',
  });

  // 表单重置
  useEffect(() => {
    if (isOpen) {
      form.reset({
        name: initialData?.name || '',
        url: initialData?.url || '',
      });
    }
  }, [form, initialData, isOpen]);

  // 表单提交
  const onSubmit = (data: z.infer<typeof tableRecordLinkSchema>) => {
    onSave(data);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{initialData ? '编辑 Table 表记录链接' : '添加 Table 表记录链接'}</DialogTitle>
          <DialogDescription>除增、改、删之外的额外按钮，展示在 Table 表记录的右侧</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>按钮名称 *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription className="text-xs">请确保名称唯一，将作为路由参数</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL *</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="eg: /a/b/c?id={id}&category={category.title}" />
                  </FormControl>
                  <FormDescription className="text-xs">
                    使用变量 {'{key}'} 引用 `基本配置 - 资源表` 中指定的 `{resourceTable || '尚未填写'}` 表记录字段
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button variant="outline" type="button" onClick={onClose}>
                取消
              </Button>
              <Button type="submit" icon={<CheckCheck />}>
                保存
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

// TableField Item
// const TableFieldItem = ({
//   item,
//   onEdit,
//   onDelete,
// }: {
//   item: TTableFieldItem;
//   onEdit: (item: TTableFieldItem) => void;
//   onDelete: (id: string) => void;
// }) => {
//   return (
//     <SortableItem id={item.name}>
//       {(attributes, listeners) => (
//         <div className="bg-muted hover:bg-muted/50 hover:border-foreground group mb-2 flex items-center justify-between rounded-md border p-2">
//           <div className="flex items-center gap-2">
//             <span className="text-muted-foreground cursor-move outline-none" {...attributes} {...listeners}>
//               <GripVertical size={16} />
//             </span>
//             <div className="space-x-2">
//               <span className="font-medium">{item.name}</span>
//               {item.defaultHide && <span className="text-muted-foreground text-xs">默认隐藏</span>}
//             </div>
//           </div>
//           <div className="flex items-center">
//             <Button
//               type="button"
//               variant="ghost"
//               size="icon"
//               className="h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100"
//               onClick={() => onEdit(item)}
//             >
//               <Edit size={14} />
//             </Button>
//             <Button
//               type="button"
//               variant="ghost"
//               size="icon"
//               className="text-destructive! h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100"
//               onClick={() => onDelete(item.name)}
//             >
//               <Trash2 size={14} />
//             </Button>
//           </div>
//         </div>
//       )}
//     </SortableItem>
//   );
// };

// 新增、编辑表字段
// const TableFieldDialog = ({
//   isOpen,
//   onClose,
//   onSave,
//   initialData,
//   tableFieldItems,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
//   onSave: (data: TTableFieldItem) => void;
//   initialData?: TTableFieldItem;
//   tableFieldItems: TTableFieldItem[];
// }) => {
//   // 增强 tableFieldSchema，添加条件验证逻辑
//   const extendedTableFieldSchema = tableFieldSchema.superRefine((data, ctx) => {
//     if (tableFieldItems.some((item) => item.name === data.name && item.name !== initialData?.name)) {
//       ctx.addIssue({
//         code: z.ZodIssueCode.custom,
//         message: '字段名已存在',
//         path: ['name'],
//       });
//       return;
//     }
//   });

//   const form = useHookForm<z.infer<typeof extendedTableFieldSchema>>({
//     resolver: zodResolver(extendedTableFieldSchema),
//     defaultValues: {
//       name: initialData?.name || '',
//       defaultHide: initialData?.defaultHide || false,
//     },
//     mode: 'onChange',
//   });

//   // 表单重置
//   useEffect(() => {
//     if (isOpen) {
//       form.reset({
//         name: initialData?.name || '',
//         defaultHide: initialData?.defaultHide || false,
//       });
//     }
//   }, [form, initialData, isOpen]);

//   // 表单提交
//   const onSubmit = (data: z.infer<typeof tableFieldSchema>) => {
//     onSave(data);
//     onClose();
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>{initialData ? '编辑表记录字段' : '添加表记录字段'}</DialogTitle>
//           <DialogDescription>控制 Table 表记录的字段显示</DialogDescription>
//         </DialogHeader>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-2">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>字段名 *</FormLabel>
//                   <FormControl>
//                     <Input {...field} />
//                   </FormControl>
//                   <FormDescription className="text-xs">
//                     请确保字段名唯一，将作为表记录的显示字段；支持访问嵌套属性, eg: category.title
//                   </FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="defaultHide"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>默认隐藏 (可选)</FormLabel>
//                   <FormControl>
//                     <Switch checked={field.value} onCheckedChange={field.onChange} />
//                   </FormControl>
//                   <FormDescription className="text-xs">隐藏后，表记录将默认不显示该字段</FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <DialogFooter>
//               <Button variant="outline" type="button" onClick={onClose}>
//                 取消
//               </Button>
//               <Button type="submit" icon={<CheckCheck />}>
//                 保存
//               </Button>
//             </DialogFooter>
//           </form>
//         </Form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// 新增、编辑表单字段
const FormFieldDialog = ({
  isOpen,
  onClose,
  onSave,
  initialData,
  formFieldItems,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: TFormFieldItem) => void;
  initialData?: TFormFieldItem;
  formFieldItems: TFormFieldItem[];
}) => {
  // 增强 formFieldSchema，添加条件验证逻辑
  const extendedFormFieldSchema = formFieldSchema.superRefine((data, ctx) => {
    // 验证字段的唯一性
    if (formFieldItems.some((item) => item.name === data.name && item.name !== initialData?.name)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '字段名已存在',
        path: ['name'],
      });
      return;
    }

    // 验证选择类型字段的额外配置
    if (selectFormFieldTypes.includes(data.type)) {
      // 使用类型断言，告诉TypeScript这里的data有optionsType属性
      const selectData = data as z.infer<typeof formFieldSchemaSelect>;

      // 验证数据源类型必选
      if (!selectData.optionsType) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: '请选择下拉选项数据来源',
          path: ['optionsType'],
        });
        return;
      }

      // 对于静态选项，验证至少有一个有效选项
      if (selectData.optionsType === 'static') {
        if (
          !selectData.optionsStatic ||
          !selectData.optionsStatic.length ||
          !selectData.optionsStatic.some((opt) => opt.label && opt.value)
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: '请至少添加一个有效的静态选项',
            path: ['optionsStatic'],
          });
        }
        return;
      }

      // 对于数据库选项，验证必须输入 optionsSql
      if (selectData.optionsType === 'database' && !selectData.optionsSql) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: '请输入有效的 `SQL` 查询语句',
          path: ['optionsSql'],
        });
        return;
      }
    }

    // 数字类型验证 min < max
    if (data.type === 'number' || data.type === 'slider') {
      const numberData = data as z.infer<typeof formFieldSchemaNumber>;
      if (numberData.min !== undefined && numberData.max !== undefined && numberData.min > numberData.max) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: '最小值不能大于最大值',
          path: ['min'],
        });
      }
    }

    // 日期类型验证 start < end
    if (dateFormFieldTypes.includes(data.type)) {
      const dateData = data as z.infer<typeof formFieldSchemaDate>;
      if (dateData.start && dateData.end && dateData.start > dateData.end) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: '开始日期不能晚于结束日期',
          path: ['start'],
        });
      }
    }
  });

  // 创建表单实例
  const defaultValues = getInitialFormValues(initialData);
  const form = useHookForm<z.infer<typeof formFieldSchema>>({
    resolver: zodResolver(extendedFormFieldSchema),
    defaultValues,
    mode: 'onChange',
  });

  // 根据字段类型获取初始表单值的辅助函数
  function getInitialFormValues(data?: TFormFieldItem) {
    const baseValues = {
      name: data?.name || '',
      type: data?.type || '',
      required: data?.required || false,
      readonly: data?.readonly || false,
      hide: data?.hide || false,
      label: data?.label || '',
      description: data?.description || '',
    };

    // 如果没有初始数据或类型是普通文本类型，直接返回基础值
    if (!data || baseFormFieldTypes.includes(data.type)) {
      return baseValues as z.infer<typeof formFieldSchema>;
    }

    // 根据字段类型返回特定的初始值
    switch (data.type) {
      case 'select':
      case 'selectMany':
      case 'radio':
      case 'checkboxMany':
        return {
          ...baseValues,
          type: data.type,
          optionsType: data.optionsType as string,
          optionsStatic: data.optionsStatic || (data.optionsType === 'static' ? [{ label: '', value: '' }] : undefined),
          optionsSql: data.optionsSql,
          optionsMap: data.optionsMap,
        } as z.infer<typeof formFieldSchemaSelect> & { type: typeof data.type };
      case 'number':
      case 'slider':
        return {
          ...baseValues,
          type: data.type,
          min: data.min,
          max: data.max,
          step: data.step,
        } as z.infer<typeof formFieldSchemaNumber> & { type: typeof data.type };
      case 'date':
      case 'dateRange':
      case 'dateMany':
        return {
          ...baseValues,
          type: data.type,
          start: data.start,
          end: data.end,
        } as z.infer<typeof formFieldSchemaDate> & { type: typeof data.type };
      case 'code':
        return {
          ...baseValues,
          type: data.type,
          language: data.language || 'json',
        } as z.infer<typeof formFieldSchemaCode> & { type: 'code' };
      default:
        return baseValues as z.infer<typeof formFieldSchema>;
    }
  }

  // 获取当前表单值
  const { watch, setValue } = form;
  const type = watch('type');
  const optionsType = watch('optionsType');
  const isSelectType = selectFormFieldTypes.includes(type);

  // 使用useMemo包装options的初始化逻辑，确保引用稳定性
  const watchedOptionsStatic = watch('optionsStatic');
  const optionsStatic = useMemo(() => watchedOptionsStatic || [{ label: '', value: '' }], [watchedOptionsStatic]);

  // 如果静态选项至少填写一个，就清空错误
  useEffect(() => {
    if (optionsStatic.filter((opt) => opt.label && opt.value).length > 0) {
      form.clearErrors('optionsStatic');
    }
  }, [optionsStatic, form]);

  // 表单重置
  useEffect(() => {
    if (isOpen) {
      form.reset(defaultValues);
    } else {
      form.reset({});
    }
  }, [isOpen]);

  // 添加选项
  const addOption = () => {
    setValue('optionsStatic', [...optionsStatic, { label: '', value: '' }]);
  };

  // 删除选项
  const removeOption = (index: number) => {
    setValue(
      'optionsStatic',
      optionsStatic.filter((_, idx) => idx !== index)
    );
  };

  // 表单提交
  const onSubmit = (data: z.infer<typeof formFieldSchema> & { optionsSql?: string }) => {
    onSave(data as TFormFieldItem);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-6xl">
        <DialogHeader>
          <DialogTitle>{initialData ? '编辑 Form 表单字段' : '新增 Form 表单字段'}</DialogTitle>
          <DialogDescription>配置表单字段属性</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 py-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>字段名 *</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription className="text-xs">请确保名称唯一，将作为表单字段的名称</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <Label className="block">字段限制 (可选)</Label>
              <div className="flex gap-2">
                <div className="inline-flex flex-row items-center justify-between gap-2 rounded-lg border px-3 py-[7px]">
                  <FormField
                    control={form.control}
                    name="required"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormLabel>必填</FormLabel>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="inline-flex flex-row items-center justify-between gap-2 rounded-lg border px-3 py-[7px]">
                  <FormField
                    control={form.control}
                    name="readonly"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center gap-2 space-y-0">
                        <FormLabel>只读</FormLabel>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                {/* <div className="inline-flex flex-row items-center justify-between gap-2 rounded-lg border px-3 py-[7px]">
                  <FormField
                    control={form.control}
                    name="hide"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center gap-2 space-y-0">
                        <FormLabel>隐藏</FormLabel>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div> */}
              </div>
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>字段类型 *</FormLabel>
                    <FormControl>
                      <Combobox
                        className="sm:w-full"
                        popoverProps={{ modal: true }}
                        options={[
                          { label: 'Text - 文本', value: 'text' },
                          { label: 'Number - 数字', value: 'number' },
                          { label: 'Slider - 滑块', value: 'slider' },
                          { label: 'Date - 日期', value: 'date' },
                          { label: 'DateRange - 日期范围', value: 'dateRange' },
                          { label: 'DateMany - 日期多选', value: 'dateMany' },
                          { label: 'Select - 下拉', value: 'select' },
                          { label: 'SelectMany - 下拉多选', value: 'selectMany' },
                          { label: 'Checkbox - 复选框', value: 'checkbox' },
                          { label: 'Radio - 单选', value: 'radio' },
                          { label: 'Switch - 开关', value: 'switch' },
                          { label: 'Textarea - 文本域', value: 'textarea' },
                          { label: 'Code - 代码', value: 'code' },
                          { label: 'File - 文件', value: 'file' },
                        ]}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="label"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>标签 (可选)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>描述 (可选)</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* <FormField
              control={form.control}
              name="validateRegex"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>校验正则 (可选)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            {/* <FormField
              control={form.control}
              name="valueFormat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>值格式化 (可选)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            {/* 选择类型字段的特殊配置 */}
            {isSelectType && (
              <div className="col-span-2 space-y-2">
                <FormField
                  control={form.control}
                  name="optionsType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>下拉选项数据来源 *</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="选择 Select 选项数据来源" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="static">Static - 静态</SelectItem>
                            <SelectItem value="database">Database - 数据库</SelectItem>
                            <SelectItem value="api" disabled>
                              API - 接口
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription className="text-xs">
                        静态指手动维护选项数据、数据库指从数据库中动态查询、API指从接口获取数据
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* 静态选项配置 */}
            {isSelectType && optionsType === 'static' && (
              <div className="col-span-2">
                <div className="mb-1 flex items-center justify-between">
                  <Label>静态选项 *</Label>
                  <Button
                    type="button"
                    size="sm"
                    variant="link"
                    onClick={addOption}
                    className="cursor-pointer gap-1 px-0! text-xs text-green-600"
                  >
                    <Plus className="h-3 w-3" />
                    添加静态选项
                  </Button>
                </div>

                <div className="space-y-2">
                  {optionsStatic.map((option, idx) => (
                    <div key={idx} className="grid grid-cols-2 items-center gap-4">
                      <Input
                        value={option.label}
                        placeholder="标签"
                        onChange={(e) => {
                          const newOptions = [...optionsStatic];
                          newOptions[idx].label = e.target.value;
                          setValue('optionsStatic', newOptions);
                        }}
                        className="flex-1"
                      />
                      <div className="flex gap-2">
                        <Input
                          value={option.value}
                          placeholder="值"
                          onChange={(e) => {
                            const newOptions = [...optionsStatic];
                            newOptions[idx].value = e.target.value;
                            setValue('optionsStatic', newOptions);
                          }}
                          className="flex-1"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          className="text-destructive! h-8 w-8 border-dashed p-0"
                          size="icon"
                          disabled={optionsStatic.length === 1}
                          onClick={() => removeOption(idx)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <FormMessage className="mt-2">
                  {isSelectType ? (form.formState.errors as TAny).optionsStatic?.message : undefined}
                </FormMessage>
              </div>
            )}

            {/* 数据库选项配置 */}
            {isSelectType && optionsType === 'database' && (
              <>
                <div className="col-span-2 space-y-2">
                  <FormField
                    control={form.control}
                    name="optionsSql"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SQL 查询语句</FormLabel>
                        <FormControl>
                          <CodeEditor
                            language="sql"
                            height="100px"
                            value={field.value || ''}
                            onChange={(val) => {
                              setValue('optionsSql', val.target.value, { shouldValidate: true, shouldDirty: true });
                            }}
                          />
                        </FormControl>
                        <FormDescription className="text-xs">SQL 查询语句，用于查询选项数据</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* optionsType === 'api' 时，optionsMap可以用于数据字段转换 */}
                {/* <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="optionsMap"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>字段映射 (可选)</FormLabel>
                        <div className="flex items-center gap-2">
                          <Input
                            placeholder="数据取值, eg: data.list"
                            value={field.value?.key || ''}
                            onChange={(e) => setValue('optionsMap', { ...(field.value || {}), key: e.target.value })}
                          />
                          <Input
                            placeholder="显示的字段, eg: title"
                            value={field.value?.label || ''}
                            onChange={(e) => setValue('optionsMap', { ...(field.value || {}), label: e.target.value })}
                          />
                          <Input
                            placeholder="保存的字段, eg: id"
                            value={field.value?.value || ''}
                            onChange={(e) => setValue('optionsMap', { ...(field.value || {}), value: e.target.value })}
                          />
                        </div>
                        <FormDescription className="text-xs">
                          用于数据字段转换，指定数据取值、显示的字段、保存的字段
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div> */}
              </>
            )}

            {/* 数字类型配置 */}
            {(type === 'number' || type === 'slider') && (
              <>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="min"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>最小值</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            value={field.value === undefined ? '' : field.value}
                            onChange={(e) => {
                              const val = e.target.value ? parseInt(e.target.value) : undefined;
                              field.onChange(val);
                            }}
                          />
                        </FormControl>
                        <FormDescription className="text-xs">限制输入的最小值</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="max"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>最大值</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            value={field.value === undefined ? '' : field.value}
                            onChange={(e) => {
                              const val = e.target.value ? parseInt(e.target.value) : undefined;
                              field.onChange(val);
                            }}
                          />
                        </FormControl>
                        <FormDescription className="text-xs">限制输入的最大值</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </>
            )}

            {/* 滑块类型配置 */}
            {(type === 'slider' || type === 'number') && (
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="step"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>步长 (可选)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={1}
                          step={1}
                          {...field}
                          value={field.value === undefined ? '' : field.value}
                          onChange={(e) => {
                            const val = e.target.value ? parseInt(e.target.value) : undefined;
                            field.onChange(val);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            {/* 日期类型配置 */}
            {dateFormFieldTypes.includes(type) && (
              <>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="start"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>开始日期</FormLabel>
                        <FormControl>
                          <Input type="text" {...field} placeholder="2026-01-01" />
                        </FormControl>
                        <FormDescription className="text-xs">限制输入的开始时间</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="end"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>结束日期</FormLabel>
                        <FormControl>
                          <Input type="text" {...field} placeholder="2030-12-31" />
                        </FormControl>
                        <FormDescription className="text-xs">限制输入的结束时间</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </>
            )}

            {/* 代码类型配置 */}
            {type === 'code' && (
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>程序语言</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="如：javascript, python, sql等" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}

            <div className="col-span-2 flex justify-end gap-2 pt-4">
              <Button variant="outline" type="button" onClick={onClose}>
                取消
              </Button>
              <Button type="submit" icon={<CheckCheck />}>
                保存
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export const DynamicPageForm = ({
  className,
  redirect = EnumAction.list,
  initialData,
  action,
}: {
  className?: string;
  redirect?: RedirectAction;
  initialData?: TDynamicPage | null;
  action?: FormAction;
}) => {
  const { tableRecordLink = [], formField = [] } = initialData || {};
  const { formAction, id = initialData?.id, identifier } = useResourceParams({ action });

  const enableAutoSave = formAction === EnumAction.edit;
  const defaultValues = filterFormData(initialData || {});

  // 获取 action 返回的数据，包括可能的错误信息
  const actionData = useActionData<{ error?: string; success?: boolean }>();
  const submit = useSubmit();

  const form = useForm<TSchemaDynamicPageNew>({
    resolver: zodResolver(schemaDynamicPageNew),
    defaultValues,
    warnWhenUnsavedChanges: true,
    mode: 'onChange',
    refineCoreProps: {
      resource: identifier,
      action: formAction,
      id,
      queryOptions: getRefineQueryOptions(defaultValues),
      redirect,
      autoSave: {
        enabled: enableAutoSave,
        debounce: 2000,
        invalidateOnUnmount: true,
        onFinish: (values) => {
          try {
            schemaDynamicPageNew.parse(values);
            if (isEqual(values, form.formState.defaultValues)) {
              throw new Error('表单内容未变化');
            }

            return beforeSubmit(values as TSchemaDynamicPageNew);
          } catch (error) {
            return null as TAny;
          }
        },
      },
    },
  });

  // watch
  const resourceTable = parseTablenameFromSql(form.watch('tableSql'));

  // const [tableFieldItems, setTableFieldItems] = useState<TTableFieldItem[]>(tableField);
  // const [isTableFieldDialogOpen, setIsTableFieldDialogOpen] = useState(false);
  // const [editingTableFieldItem, setEditingTableFieldItem] = useState<TTableFieldItem | undefined>(undefined);

  const [tableRecordLinkItems, setTableRecordLinkItems] = useState<TTableRecordLinkItem[]>(tableRecordLink);
  const [isTableRecordLinkDialogOpen, setIsTableRecordLinkDialogOpen] = useState(false);
  const [editingTableRecordLinkItem, setEditingTableRecordLinkItem] = useState<TTableRecordLinkItem | undefined>(
    undefined
  );

  const [formFieldItems, setFormFieldItems] = useState<TFormFieldItem[]>(formField);
  const [isFormFieldDialogOpen, setIsFormFieldDialogOpen] = useState(false);
  const [editingFormFieldItem, setEditingFormFieldItem] = useState<TFormFieldItem | undefined>(undefined);

  // 更新表字段
  // useEffect(() => {
  //   if (!isEqual(tableFieldItems, form.getValues('tableField'))) {
  //     form.setValue('tableField', tableFieldItems, { shouldDirty: true });

  //     if (formAction === EnumAction.edit) {
  //       form.refineCore.onFinishAutoSave({ tableField: tableFieldItems });
  //     }
  //   }
  // }, [tableFieldItems, form, formAction]);

  // 更新表单字段
  useEffect(() => {
    if (!isEqual(tableRecordLinkItems, form.getValues('tableRecordLink'))) {
      form.setValue('tableRecordLink', tableRecordLinkItems, { shouldDirty: true });

      if (formAction === EnumAction.edit) {
        form.refineCore.onFinishAutoSave({ tableRecordLink: tableRecordLinkItems });
      }
    }
  }, [tableRecordLinkItems, form, formAction]);

  // 更新表单字段
  useEffect(() => {
    if (!isEqual(formFieldItems, form.getValues('formField'))) {
      form.setValue('formField', formFieldItems, { shouldDirty: true });

      if (formAction === EnumAction.edit) {
        form.refineCore.onFinishAutoSave({ formField: formFieldItems });
      }
    }
  }, [formFieldItems, form, formAction]);

  // 提交前修改数据
  const beforeSubmit = useCallback((val: TSchemaDynamicPageNew) => {
    const changedValues = formAction === EnumAction.edit ? getChangedValues(val, defaultValues) : val;

    if (changedValues.meta) {
      changedValues.meta = JSON.parse(changedValues.meta);
    }

    return dropEmptyKey(changedValues);
  }, []);

  // 表格记录链接操作
  const handleAddTableRecordLink = () => {
    setEditingTableRecordLinkItem(undefined);
    setIsTableRecordLinkDialogOpen(true);
  };

  const handleTableRecordLinkDelete = (name: string) => {
    setTableRecordLinkItems((prev) => prev.filter((item) => item.name !== name));
  };

  const handleSaveTableRecordLink = (data: TTableRecordLinkItem) => {
    if (editingTableRecordLinkItem) {
      setTableRecordLinkItems((prev) =>
        prev.map((item) => (item.name === editingTableRecordLinkItem.name ? data : item))
      );
    } else {
      setTableRecordLinkItems((prev) => [...prev, data]);
    }

    setIsTableRecordLinkDialogOpen(false);
    setEditingTableRecordLinkItem(undefined);
  };

  // 表格字段操作
  // const handleAddTableField = () => {
  //   setEditingTableFieldItem(undefined);
  //   setIsTableFieldDialogOpen(true);
  // };

  // 表格字段删除
  // const handleTableFieldDelete = (name: string) => {
  //   setTableFieldItems((prev) => prev.filter((item) => item.name !== name));
  // };

  // 表格字段保存
  // const handleSaveTableField = (data: TTableFieldItem) => {
  //   if (editingTableFieldItem) {
  //     setTableFieldItems((prev) => prev.map((item) => (item.name === editingTableFieldItem.name ? data : item)));
  //   } else {
  //     setTableFieldItems((prev) => [...prev, data]);
  //   }

  //   setIsTableFieldDialogOpen(false);
  //   setEditingTableFieldItem(undefined);
  // };

  // 表单字段操作
  const handleAddFormField = () => {
    setEditingFormFieldItem(undefined);
    setIsFormFieldDialogOpen(true);
  };

  const handleFormFieldDelete = (name: string) => {
    setFormFieldItems((prev) => prev.filter((item) => item.name !== name));
  };

  const handleSaveFormField = (data: TFormFieldItem) => {
    if (editingFormFieldItem) {
      setFormFieldItems((prev) => prev.map((item) => (item.name === editingFormFieldItem.name ? data : item)));
    } else {
      setFormFieldItems((prev) => [...prev, data]);
    }

    setIsFormFieldDialogOpen(false);
    setEditingFormFieldItem(undefined);
  };

  // 同步创建、或更新菜单
  const handleSyncMenu = useCallback(() => {
    const values = form.getValues();
    const formData = new FormData();

    formData.append('data', JSON.stringify({ path: values.path, title: values.title, isActive: values.isActive }));
    submit(formData, { method: 'post' });
  }, [submit, form]);

  // 监听 actionData 变化，显示错误或成功消息
  useEffect(() => {
    if (actionData) {
      if (actionData.error) {
        toast.error('同步菜单操作失败', { description: actionData.error });
      } else if (actionData.success) {
        toast.success('同步菜单操作成功', { description: 'success' });
      }
    }
  }, [actionData]);

  return (
    <>
      <FormEasy
        {...form}
        autoSave={enableAutoSave}
        beforeSubmit={beforeSubmit}
        className={className}
        recordItemId={initialData?.id}
      >
        <H2 className="flex items-end border-none">
          <div className="flex-1">
            <span>配置化CRUD页面</span>
            <p className="text-muted-foreground text-sm font-normal">
              通过配置要展示的数据模型、查询语句、增删改查等交互，自动生成CRUD页面
            </p>
          </div>
          <Button icon={<Lightbulb />} type="button" variant="outline" onClick={handleSyncMenu}>
            同步创建、或更新菜单
          </Button>
        </H2>

        <Card>
          <CardHeader>
            <CardTitle>基本配置</CardTitle>
            <CardDescription>配置化CRUD最基本配置</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="path"
                render={({ field }) => {
                  const [_slash = '', group = '', category = '', _dynamic = '', name = ''] = field.value.split('/');
                  return (
                    <FormItem>
                      <FormLabel>页面路径</FormLabel>
                      <div className="grid grid-cols-3 gap-3">
                        <FormField
                          control={form.control}
                          name="path"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-y-0">
                              <FormControl>
                                <Input
                                  placeholder="eg: playground"
                                  value={group}
                                  onChange={(e) => field.onChange(`/${e.target.value}/${category}/dynamic/${name}`)}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="path"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-y-0">
                              <FormControl>
                                <Input
                                  placeholder="eg: dashboard"
                                  value={category}
                                  onChange={(e) => field.onChange(`/${group}/${e.target.value}/dynamic/${name}`)}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="path"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-y-0">
                              <FormControl>
                                <Input
                                  placeholder="eg: post"
                                  value={name}
                                  onChange={(e) => field.onChange(`/${group}/${category}/dynamic/${e.target.value}`)}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormDescription>
                        实际地址: {`/${group || 'group'}/${category || 'category'}/dynamic/${name || 'name'}`}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <Field {...form} name="title" label="页面标题" description="页面、以及菜单展示的标题">
                <Input placeholder="eg: 文章" />
              </Field>

              <Field {...form} name="db" label="数据源">
                <Combobox
                  className="sm:w-auto"
                  options={[
                    { label: '数据库 A', value: 'db1' },
                    { label: '数据库 B', value: 'db2' },
                  ]}
                />
              </Field>
            </div>

            <Field {...form} name="tableSql" label="表SQL查询语句">
              <CodeEditor language="sql" height="20vh" />
            </Field>

            <FormField
              control={form.control}
              name="isActive"
              render={({ field }) => (
                <FormItem className="mr-3 inline-flex flex-row items-center justify-between rounded-lg border px-3 py-[5px]">
                  <div className="space-y-0.5">
                    <FormLabel>是否启用</FormLabel>
                  </div>
                  <FormControl>
                    <Switch checked={!!field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>功能控制（可选）</CardTitle>
            <CardDescription>控制是否支持新增、编辑、删除 `基本配置 - 资源表` {resourceTable}</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <FormField
              control={form.control}
              name="enableCreate"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border px-3 py-[5px]">
                  <div className="space-y-0.5">
                    <FormLabel>支持新增</FormLabel>
                  </div>
                  <FormControl>
                    <Switch checked={!!field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="enableEdit"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border px-3 py-[5px]">
                  <div className="space-y-0.5">
                    <FormLabel>支持编辑</FormLabel>
                  </div>
                  <FormControl>
                    <Switch checked={!!field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="enableClone"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border px-3 py-[5px]">
                  <div className="space-y-0.5">
                    <FormLabel>支持克隆</FormLabel>
                  </div>
                  <FormControl>
                    <Switch checked={!!field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="enableDelete"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border px-3 py-[5px]">
                  <div className="space-y-0.5">
                    <FormLabel>支持删除</FormLabel>
                  </div>
                  <FormControl>
                    <Switch checked={!!field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* <Card>
          <CardHeader>
            <CardTitle>Table 表记录字段（可选）</CardTitle>
            <CardDescription>控制 Table 表记录的字段显示、排序</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field {...form} name="tableField" label="" className="gap-0">
              <div className="flex flex-col">
                <DraggableList
                  items={tableFieldItems}
                  onDragEnd={(items) => setTableFieldItems(items)}
                  renderItem={(item) => (
                    <TableFieldItem
                      key={item.name}
                      item={item}
                      onEdit={() => {
                        setEditingTableFieldItem(item);
                        setIsTableFieldDialogOpen(true);
                      }}
                      onDelete={handleTableFieldDelete}
                    />
                  )}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleAddTableField}
                  icon={<Plus />}
                  className="border-dashed hover:border-green-500"
                >
                  添加表记录字段
                </Button>
              </div>
            </Field>
          </CardContent>
        </Card> */}

        <Card>
          <CardHeader>
            <CardTitle>Table 表记录按钮（可选）</CardTitle>
            <CardDescription>除增、改、删之外的额外按钮，展示在表记录的右侧</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field {...form} name="tableRecordLink" label="" className="gap-0">
              <div className="flex flex-col">
                <DraggableList
                  items={tableRecordLinkItems}
                  onDragEnd={(items) => setTableRecordLinkItems(items)}
                  renderItem={(item) => (
                    <TableRecordLinkItem
                      key={item.name}
                      item={item}
                      onEdit={() => {
                        setEditingTableRecordLinkItem(item);
                        setIsTableRecordLinkDialogOpen(true);
                      }}
                      onDelete={handleTableRecordLinkDelete}
                    />
                  )}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleAddTableRecordLink}
                  icon={<Plus />}
                  className="border-dashed hover:border-green-500"
                >
                  添加表记录按钮
                </Button>
              </div>
            </Field>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Form 表单字段（可选）</CardTitle>
            <CardDescription>控制新增、编辑表单时字段的显示、排序</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field {...form} name="formField" label="" className="gap-0">
              <div className="flex flex-col">
                <DraggableList
                  items={formFieldItems}
                  onDragEnd={(items) => setFormFieldItems(items)}
                  renderItem={(item) => (
                    <FormFieldItem
                      key={item.name}
                      item={item}
                      onDelete={handleFormFieldDelete}
                      onEdit={() => {
                        setEditingFormFieldItem(item);
                        setIsFormFieldDialogOpen(true);
                      }}
                    />
                  )}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleAddFormField}
                  icon={<Plus />}
                  className="border-dashed hover:border-green-500"
                >
                  添加表单字段
                </Button>
              </div>
            </Field>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>额外配置 - Meta（可选）</CardTitle>
            <CardDescription>支持配置自定义的JSON信息</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Field {...form} name="meta" label="" className="gap-0">
              <CodeEditor language="json" height="20vh" />
            </Field>
          </CardContent>
        </Card>
      </FormEasy>

      {/* <TableFieldDialog
        isOpen={isTableFieldDialogOpen}
        onClose={() => setIsTableFieldDialogOpen(false)}
        onSave={handleSaveTableField}
        initialData={editingTableFieldItem}
        tableFieldItems={tableFieldItems}
      /> */}

      <TableRecordLinkDialog
        isOpen={isTableRecordLinkDialogOpen}
        onClose={() => setIsTableRecordLinkDialogOpen(false)}
        onSave={handleSaveTableRecordLink}
        initialData={editingTableRecordLinkItem}
        resourceTable={resourceTable}
        tableRecordLinkItems={tableRecordLinkItems}
      />

      <FormFieldDialog
        isOpen={isFormFieldDialogOpen}
        onClose={() => setIsFormFieldDialogOpen(false)}
        onSave={handleSaveFormField}
        initialData={editingFormFieldItem}
        formFieldItems={formFieldItems}
      />
    </>
  );
};
