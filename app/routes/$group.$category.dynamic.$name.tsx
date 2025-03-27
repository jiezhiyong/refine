/**
 * 注意：因为存在多应用共享同一数据库的场景，对于未在 schema.prisma 中定义但实际存在于数据库中的表，Prisma Client 无法直接对其执行常规的 CRUD 操作
 * 所以这里需要使用 Prisma 的原始 SQL 查询 db.$queryRaw、db.$executeRaw
 */
import { zodResolver } from '@hookform/resolvers/zod';
import { DynamicPage } from '@prisma/client';
import {
  BaseOption,
  BaseRecord,
  CanAccess,
  FormAction,
  HttpError,
  useCan,
  useModal,
  useResourceParams,
  useUserFriendlyName,
} from '@refinedev/core';
import { ActionFunctionArgs, data, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useActionData, useLoaderData, useNavigate, useSubmit } from '@remix-run/react';
import dayjs from 'dayjs';
import { CalendarIcon, CheckCheck, EyeIcon, Link2 } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { PermissionDenied } from '~/components/403';
import { NotFound } from '~/components/404';
import { PageError } from '~/components/500';
import { SidebarLayout } from '~/components/layout';
import { CreateButton } from '~/components/refine/buttons/create';
import { EditButton } from '~/components/refine/buttons/edit';
import { ExportButton } from '~/components/refine/buttons/export';
import { CodeEditor } from '~/components/refine/form/code';
import { Combobox } from '~/components/refine/form/combobox';
import { SelectMulti } from '~/components/refine/form/select-multi';
import { TableEasy, TableFilterProps } from '~/components/refine/table';
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
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Calendar } from '~/components/ui/calendar';
import { Checkbox } from '~/components/ui/checkbox';
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
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';
import { Slider } from '~/components/ui/slider';
import { Switch } from '~/components/ui/switch';
import { Textarea } from '~/components/ui/textarea';
import { H2 } from '~/components/ui/typography';
import { EnumAction } from '~/constants/action';
import { EnumResource } from '~/constants/resource';
import { UseTableReturnType } from '~/lib/refinedev-react-table';
import { cn } from '~/lib/utils';
import { selectFormFieldTypes } from '~/routes/playground.dashboard.dynamicPage.edit.$id';
import { dataService } from '~/services/data.server';
import { getEnhancedDb } from '~/services/db.server';
import { requireUserSession } from '~/services/session.server';
import { TAny } from '~/types/any';
import { TFormFieldItem, TTableRecordLinkItem } from '~/types/dynamic-page';
import { easyAxios } from '~/utils/axios';
import { dropEmptyKey } from '~/utils/drop-empty-key';
import { get } from '~/utils/get';
import { getChangedValues } from '~/utils/get-changed-values';
import { parseSql, parseTableFieldArrayFromSql, parseTablenameFromSql } from '~/utils/sql';
import { schemaJson } from '~/zod';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data?.config?.title || '配置化CRUD页面' }];
};

export async function loader({ request, params }: LoaderFunctionArgs) {
  await requireUserSession(request);

  const { group, category, name } = params;

  // 查找匹配的配置化CRUD页面
  const config = await dataService.findFirst<DynamicPage>(
    'dynamicPage',
    { where: { path: `/${group}/${category}/dynamic/${name}`, isActive: true } },
    { request }
  );

  // 如果没找到匹配的配置，返回404
  if (!config) {
    console.error('配置化CRUD页面不存在、或未激活');
    return Response.json({ message: '配置化CRUD页面不存在、或未激活' }, { status: 404 });
  }

  // 获取表名和查询条件
  const { tableSql } = config || {};

  // 执行配置的查询
  const db = await getEnhancedDb({ request });

  // 从 tableSql 中获取 FROM 表名
  const resourceTable = parseTablenameFromSql(tableSql);

  // 查询数据
  const [resList, resTotal] = await Promise.all([
    db.$queryRawUnsafe(tableSql),
    db.$queryRawUnsafe(`SELECT COUNT(*) FROM "${resourceTable}" WHERE "deleted" IS NOT TRUE;`),
  ]);

  const total = Array.isArray(resTotal) && resTotal.length > 0 ? Number(resTotal[0].count) : 0;
  return data({
    config,
    tableData: { data: resList, total },
    resourceTable,
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const params = JSON.parse(formData.get('data') as string) as {
    resourceTable: string;
    id?: string;
    ids?: string[];
    type: 'deleteMany' | 'deleteOne' | 'create' | 'edit';
  };
  const { type, resourceTable, ids, id, ...rest } = params;

  try {
    if (!type) {
      throw new Error('type is required');
    }
    if (!resourceTable) {
      throw new Error('resourceTable is required');
    }

    const db = await getEnhancedDb({ request });

    // 删除多条
    if (type === 'deleteMany' && ids?.length) {
      const idsStr = ids.map((id) => `'${id}'`).join(',');
      await db.$executeRawUnsafe(`DELETE FROM "${resourceTable}" WHERE id IN (${idsStr})`);
    }

    // 删除单条
    else if (type === 'deleteOne' && id) {
      await db.$executeRawUnsafe(`DELETE FROM "${resourceTable}" WHERE id = '${id}'`);
    }

    // 创建
    // TODO: 对于 PrimaryKey（自增、uuid、cuid等），如何自动生成？
    else if (type === 'create') {
      const fields = Object.keys(rest)
        .map((key) => `"${key}"`)
        .join(', ');
      const values = Object.values(rest).map((value) => `'${value}'`);
      console.log(`INSERT INTO "${resourceTable}" (${fields}) VALUES (${values.join(', ')}) RETURNING *`);
      await db.$executeRawUnsafe(
        `INSERT INTO "${resourceTable}" (${fields}) VALUES (${values.join(', ')}) RETURNING *`
      );
    }

    // 更新
    else if (type === 'edit' && id) {
      const set = Object.entries(rest).map(([key, value]) => `${key} = '${value}'`);
      await db.$executeRawUnsafe(`UPDATE "${resourceTable}" SET ${set.join(', ')} WHERE id = '${id}'`);
    }

    // 其他情况
    else {
      throw new Error('Invalid parameters');
    }

    return data({ success: true, err: '', type }, { status: 200 });
  } catch (error) {
    return data({ success: false, err: error instanceof Error ? error.message : '操作失败', type }, { status: 500 });
  }
}

/**
 * 根据配置化显示不同CRUD页面内容
 */
export default function DynamicPageIndex() {
  const { tableData = { data: [], total: 0 }, config = {}, resourceTable } = useLoaderData<typeof loader>();

  const actionData = useActionData<typeof action>();
  const submit = useSubmit();
  const useModalReturn = useModal();
  const friendly = useUserFriendlyName();
  const navigate = useNavigate();

  // 监听 actionData 变化，显示错误或成功消息
  useEffect(() => {
    const { err, success, type } = actionData || {};
    if (!actionData) return;

    if (!success || err) {
      toast.error(`${type} 操作失败`, { description: err || 'unknown' });
      return;
    }

    toast.success(`${type} 操作成功`, { description: 'success' });
    if (type === 'deleteMany') {
      tableRef.current?.resetRowSelection();
    } else if (['create', 'edit'].includes(type || '')) {
      closeDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionData]);

  const { tableRecordLink = [], tableSql, formField = [] } = config || {};
  const { data: deletePermission } = useCan({ resource: resourceTable, action: EnumAction.delete });

  const recordRef = useRef<TAny>(undefined);
  const actionRef = useRef<FormAction>(undefined);
  const tableRef = useRef<UseTableReturnType<BaseRecord, HttpError>>(undefined);

  // 删除确认对话框
  const [deleteAlertOpen, setDeleteAlertOpen] = useState<boolean>(false);

  const bulkDeleteAction = (table: UseTableReturnType<BaseRecord, HttpError>) => {
    const rows = table.getSelectedRowModel().rows;
    const label = `Delete Selected (${rows.length}) ${friendly('Row', rows.length > 1 ? 'plural' : 'singular')}`;
    return {
      className: 'text-destructive!',
      label,
      disabled: !deletePermission?.can,
      onClick: () => {
        tableRef.current = table;

        const formData = new FormData();
        const data = {
          type: 'deleteMany',
          resourceTable,
          ids: rows.map((row) => row.original.id),
        };
        formData.append('data', JSON.stringify(data));
        submit(formData, { method: 'post' });
      },
    };
  };

  const tableFieldArray: string[] = useMemo(() => parseTableFieldArrayFromSql(tableSql), [tableSql]);
  const tableRecordLinkArray = (Array.isArray(tableRecordLink)
    ? tableRecordLink
    : []) as unknown as TTableRecordLinkItem[];
  const formFieldArray = (Array.isArray(formField) ? formField : []) as unknown as TFormFieldItem[];

  // 创建动态列定义
  // 如果 tableField 存在且长度大于1，则使用 tableField 生成列定义，否则使用接口返回的数据模型的字段生成列定义
  const generateColumns = () => {
    const useTableField = tableFieldArray && tableFieldArray.length > 1;

    if (!useTableField && !tableData.data.length) {
      return [];
    }

    const columnsList = useTableField
      ? tableFieldArray.map((name) => ({ name }))
      : Object.keys(tableData.data[0]).map((key) => ({ name: key }));

    const columns = columnsList.map(({ name }) => {
      const headerName = name.charAt(0).toUpperCase() + name.slice(1);

      let valueType = 'string';
      const value = get(tableData.data[0], name);
      if (typeof value === 'number') {
        valueType = 'number';
      } else if (typeof value === 'boolean') {
        valueType = 'boolean';
      } else if (value instanceof Date || (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value))) {
        valueType = 'date';
      } else if (typeof value === 'object') {
        valueType = 'object';
      }

      let filter = undefined;
      if (valueType === 'date') {
        filter = (props: TableFilterProps) => <TableEasy.Filter.DateRangePicker {...props} />;
      } else if (valueType === 'string') {
        filter = (props: TableFilterProps) => <TableEasy.Filter.Search {...props} />;
      }

      return (
        <TableEasy.Column
          key={name}
          header={headerName}
          accessorKey={name}
          id={name}
          meta={valueType === 'string' ? { filterOperator: 'contains' } : undefined}
          enableSorting={valueType !== 'object'}
          enableHiding={true}
          filter={filter}
          cell={({ row: { original } }) => {
            // 获取当前行的值, 例如：abc.name
            const value: TAny = get(original, name);

            // 根据不同类型展示不同格式
            if (value === null || value === undefined) {
              return <span className="text-muted-foreground">-</span>;
            } else if (valueType === 'boolean') {
              return value ? 'true' : 'false';
            } else if (valueType === 'date') {
              return dayjs(value).format('YYYY-MM-DD HH:mm:ss');
            } else if (valueType === 'object') {
              return (
                <Popover>
                  <PopoverTrigger className="text-link cursor-pointer" asChild>
                    <Button variant="ghost" size="icon">
                      <EyeIcon className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto">
                    <pre className="text-sm">{JSON.stringify(value, null, 2)}</pre>
                  </PopoverContent>
                </Popover>
              );
            }

            return value.toLocaleString();
          }}
        />
      );
    });

    // 添加选择列
    if (config.enableDelete) {
      columns.unshift(
        <TableEasy.Column
          key="checkbox"
          accessorKey="id"
          id="checkbox"
          header={({ table }) => <TableEasy.CheckAll table={table} options={[bulkDeleteAction(table)]} />}
          cell={({ row }) => (
            <Checkbox
              className="ml-2"
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
              key={`checkbox-${row.original.id}`}
            />
          )}
        />
      );
    }

    const { enableDelete, enableEdit, enableClone, tableRecordLink } = config;

    // 添加操作列
    const enableActions = enableEdit || enableClone || enableDelete || tableRecordLink?.length;
    columns.push(
      <TableEasy.Column
        key="actions"
        header="Actions"
        accessorKey="id"
        id="actions"
        cell={({ row: { original } }: { row: { original: Record<string, unknown> } }) =>
          enableActions ? (
            <TableEasy.Actions row={original} resource={resourceTable}>
              {getActions(original, tableRecordLinkArray)}
            </TableEasy.Actions>
          ) : (
            'N/A'
          )
        }
      />
    );

    return columns;
  };

  // 获取操作列
  const getActions = (original: Record<string, unknown>, tableRecordLinkArray: TTableRecordLinkItem[]) => {
    const actions: React.ReactNode[] = [];

    if (config.enableEdit) {
      actions.push(
        <TableEasy.EditAction
          key="edit"
          onClick={() => {
            recordRef.current = original;
            actionRef.current = EnumAction.edit;
            useModalReturn.show();
          }}
        />
      );
    }

    if (config.enableClone) {
      actions.push(
        <TableEasy.CloneAction
          key="clone"
          onClick={() => {
            recordRef.current = original;
            actionRef.current = EnumAction.clone;
            useModalReturn.show();
          }}
        />
      );
    }

    if (config.enableDelete) {
      actions.push(
        <TableEasy.DeleteAction
          key="delete"
          onClick={() => {
            recordRef.current = original;
            setDeleteAlertOpen(true);
          }}
        />
      );
    }

    // 添加记录链接
    // 替换链接中的所有参数占位符，eg: /system/admin/log?id={id}&category={category.title}
    if (tableRecordLinkArray.length > 0) {
      tableRecordLinkArray.forEach((link) => {
        actions.push(
          <TableEasy.ShowAction
            key={link.name}
            title={link.name}
            icon={<Link2 />}
            onClick={() => {
              let processedUrl = link.url;
              const paramMatches = processedUrl.match(/\{([^}]+)\}/g);

              if (paramMatches) {
                paramMatches.forEach((param) => {
                  const fieldName = param.substring(1, param.length - 1);
                  const value = get(original, fieldName);
                  processedUrl = processedUrl.replace(param, String(value || ''));
                });
              }

              navigate(processedUrl);
            }}
          />
        );
      });
    }

    return actions;
  };

  // 生成列
  const columns = generateColumns();

  // 生成工具栏
  const toolbar = [
    <EditButton key="edit" resource={EnumResource.dynamicPage} recordItemId={config.id}>
      编辑配置
    </EditButton>,
    <ExportButton key="export" resource={resourceTable} />,
  ];

  if (config.enableCreate) {
    toolbar.push(
      <CreateButton
        key="create"
        resource={resourceTable}
        onClick={() => {
          recordRef.current = undefined;
          actionRef.current = 'create';
          useModalReturn.show();
        }}
      />
    );
  }

  // 初始隐藏的列
  const columnVisibility = useMemo(() => {
    const obj: Record<string, boolean> = {};
    tableFieldArray
      .filter((field) => field.match(/Id|id$/))
      .forEach((field) => {
        obj[field] = false;
      });
    return obj;
  }, [tableFieldArray]);

  // 从 tableSql 获取初始排序 eg: ORDER BY p."updatedAt" DESC
  const tableSorting = useMemo(() => {
    const { orderBy } = parseSql(tableSql);
    const key = tableFieldArray.find((field) => orderBy.includes(field));

    return key ? [{ id: key, desc: orderBy.includes('DESC') }] : undefined;
  }, [tableSql, tableFieldArray]);

  // 删除记录
  const handleDeleteRecord = () => {
    const formData = new FormData();
    formData.append('data', JSON.stringify({ type: 'deleteOne', resourceTable, id: recordRef.current?.id }));
    submit(formData, { method: 'post' });
  };

  const [allOptionsMap, setAllOptionsMap] = useState<Record<string, BaseOption[]>>({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!useModalReturn.visible) {
      return;
    }

    // 为所有 type="select" 的字段获取选项
    const obj: Record<string, BaseOption[]> = {};
    formFieldArray
      ?.filter((item) => selectFormFieldTypes.includes(item.type))
      ?.forEach(async (item) => {
        // 静态选项
        if (item.optionsStatic) {
          obj[item.name] = item.optionsStatic;
        }

        // 数据库选项
        if (item.optionsType === 'database') {
          obj[item.name] = await queryOptionsWidthSql(item);
        }

        // 处理其他类型 api
        // ...
      });

    setAllOptionsMap(obj);

    setTimeout(() => {
      setShow(true);
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useModalReturn.visible]);

  // 从数据库获取选项
  const queryOptionsWidthSql = useCallback(async (item: TFormFieldItem) => {
    if (!item.optionsSql) {
      return [];
    }

    const { data: res } = await easyAxios.post('/api/sql', {
      sql: item.optionsSql,
      pagination: { mode: 'off' },
    });

    const data = res.data;

    if (!Array.isArray(data)) {
      return [];
    }

    return data;
  }, []);

  const closeDialog = () => {
    setShow(false);
    useModalReturn.close();
  };

  // 如果没有配置，返回404
  if (!config.id) {
    return <NotFound />;
  }

  return (
    <CanAccess fallback={<PermissionDenied />}>
      <SidebarLayout>
        <H2>
          <span>配置化CRUD页面 - </span>
          <span className="capitalize">{resourceTable}</span>
          <p className="text-muted-foreground text-sm font-normal">
            由配置化CRUD页面生成, 支持配置要展示的数据模型、查询语句、增删改查等交互
          </p>
        </H2>

        {/* 动态页面配置CRUD表格 */}
        <TableEasy
          enableSorting
          enableFilters
          enableHiding
          toolbar={toolbar}
          initialState={{
            columnVisibility,
            sorting: tableSorting,
          }}
          refineCoreProps={{
            meta: {},
            resource: resourceTable,
            queryOptions: {
              initialData: { data: tableData.data, total: tableData.total },
              queryFn: async ({ queryKey = [] }) => {
                const params = (queryKey as [string, ...TAny[]])[3];
                const { filters, pagination, sorters } = params || {};
                const { data: res } = await easyAxios.post('/api/sql', {
                  sql: tableSql,
                  filters,
                  pagination,
                  sorters,
                });
                return { data: res?.data || [], total: res?.total || 0 };
              },
            },
          }}
        >
          {columns}
        </TableEasy>
      </SidebarLayout>

      {/* 记录删除确认对话框 */}
      <AlertDialog open={deleteAlertOpen} onOpenChange={(isOpen) => !isOpen && setDeleteAlertOpen(false)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>确认删除记录</AlertDialogTitle>
            <AlertDialogDescription>确定要删除该记录吗？此操作不可撤销。</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>取消</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteRecord} variant="destructive">
              确认删除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* 动态页面配置CRUD表单弹窗 */}
      <Dialog open={show} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-5xl">
          <DialogHeader className="border-b pb-4">
            <DialogTitle>
              {actionRef.current === EnumAction.edit ? `编辑 ${resourceTable}` : `新增 ${resourceTable}`}
            </DialogTitle>
            <DialogDescription>表单由CRUD配置化功能生成</DialogDescription>
          </DialogHeader>

          <DynamicForm
            action={actionRef.current}
            formModalClose={closeDialog}
            initialData={recordRef.current}
            config={config}
            allOptionsMap={allOptionsMap}
            resourceTable={resourceTable}
          />
        </DialogContent>
      </Dialog>
    </CanAccess>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}

// 过滤数据，只保留 formSchema 中定义的字段
const getDefaultValues = (
  data: Partial<Record<string, TAny>> | undefined = {},
  formFieldArray: TFormFieldItem[],
  allOptionsMap: Record<string, BaseOption[]>
) => {
  return formFieldArray.reduce(
    (acc, field) => {
      const { name, type } = field;
      const options = allOptionsMap[name] || [];

      if (type === 'text' || type === 'textarea' || type === 'file' || type === 'code' || type === 'date') {
        acc[name] = data[name] || '';
      } else if (type === 'number') {
        acc[name] = data[name] || 0;
      } else if (type === 'slider') {
        acc[name] = data[name] || [1, 90];
      } else if (['select', 'radio'].includes(type)) {
        acc[name] = {
          label: options.find((option) => option.value === data[name])?.label || '',
          value: data[name] || '',
        };
      } else {
        acc[name] = data[name] || undefined;
      }
      return acc;
    },
    {} as Record<string, TAny>
  );
};

// 初始化zod schema
const initSchemaDynamicForm: (formFieldArray: TFormFieldItem[]) => z.ZodObject<z.ZodRawShape> = (
  formFieldArray: TFormFieldItem[]
) => {
  return z.object(
    formFieldArray.reduce((schema, field) => {
      const { name, type, required, min, max, step } = field;
      let fieldSchema;

      // 根据不同类型的字段创建对应的验证规则
      switch (type) {
        case 'text':
        case 'textarea':
          fieldSchema = z.string();
          break;
        case 'code':
          fieldSchema = schemaJson;
          break;
        case 'number':
          fieldSchema = z.number();
          if (typeof min === 'number') fieldSchema = fieldSchema.min(min);
          if (typeof max === 'number') fieldSchema = fieldSchema.max(max);
          if (typeof step === 'number') fieldSchema = fieldSchema.step(step);
          break;
        case 'switch':
        case 'checkbox':
          fieldSchema = z.boolean();
          break;
        case 'select':
        case 'radio':
          fieldSchema = z.object({ label: z.string(), value: z.string().or(z.number()) });
          break;
        case 'selectMany':
        case 'checkboxMany':
          fieldSchema = z.array(z.object({ label: z.string(), value: z.string().or(z.number()) }));
          break;
        case 'date':
          fieldSchema = z.string();
          break;
        case 'dateRange':
          fieldSchema = z.object({
            from: z.string(),
            to: z.string(),
          });
          break;
        case 'dateMany':
          fieldSchema = z.array(z.string());
          break;
        case 'file':
          fieldSchema = z.any();
          break;
        case 'slider':
          fieldSchema = z.array(z.number());
          break;
        default:
          fieldSchema = z.any();
      }

      // 处理必填字段
      if (required) {
        fieldSchema = fieldSchema.refine((val) => val !== undefined && val !== null && val !== '', {
          message: `${name} 是必填项`,
        });
      } else {
        fieldSchema = fieldSchema.optional();
      }

      return { ...schema, [name]: fieldSchema };
    }, {})
  );
};

// 动态页面配置CRUD表单
const DynamicForm = ({
  initialData,
  formModalClose,
  action,
  config,
  allOptionsMap = {},
  resourceTable,
}: {
  initialData?: TAny;
  formModalClose: () => void;
  action?: FormAction;
  config?: DynamicPage;
  allOptionsMap?: Record<string, BaseOption[]>;
  resourceTable: string;
}) => {
  const { formAction, id = initialData?.id } = useResourceParams({ action });
  const { formField } = config || {};

  // 转换 formField 为数组
  const formFieldArray = (Array.isArray(formField) ? formField : []) as unknown as TFormFieldItem[];

  // 遍历 formFieldArray，根据 name、type、required 生成对应的zod schema
  const schemaDynamicPage = initSchemaDynamicForm(formFieldArray);

  const submit = useSubmit();
  const defaultValues = getDefaultValues(initialData, formFieldArray, allOptionsMap);
  const form = useForm<z.infer<typeof schemaDynamicPage>>({
    resolver: zodResolver(schemaDynamicPage),
    defaultValues,
    mode: 'onChange',
  });

  // 渲染日期选择器
  const formatStr: string = 'YYYY-MM-DD';
  const renderDatePicker = useCallback(
    (item: TFormFieldItem) => {
      const { name, type, label, description, readonly, start, end } = item;
      const modeMap = {
        date: 'single',
        dateMany: 'multiple',
        dateRange: 'range',
      };

      return (
        <FormField
          key={name}
          control={form.control}
          name={name}
          disabled={readonly}
          render={({ field }) => {
            const { value, onChange } = field || {};
            let valueFormat: Date | Date[] | { from?: Date; to?: Date } | undefined = undefined;
            let labelFormat: string[] | undefined = undefined;
            if (Array.isArray(value)) {
              valueFormat = value.map((v) => new Date(v));
              labelFormat = value.map((v) => dayjs(v).format(formatStr));
            } else if (value?.from || value?.to) {
              valueFormat = {
                from: value.from ? new Date(value.from) : undefined,
                to: value.to ? new Date(value.to) : undefined,
              };
              labelFormat = [value.from, value.to];
            } else if (value) {
              valueFormat = new Date(value);
              labelFormat = [value];
            }

            return (
              <FormItem className="flex flex-col">
                <FormLabel>
                  {label || name}
                  {description && <FormDescription className="inline-block">&nbsp;- {description}</FormDescription>}
                </FormLabel>

                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'h-auto w-[500px] gap-1 pl-3 text-left font-normal',
                          !value && 'text-muted-foreground',
                          type === 'dateMany' && 'w-full'
                        )}
                      >
                        {value ? (
                          labelFormat?.map((v) => (
                            <Badge key={v} variant="secondary">
                              {v}
                            </Badge>
                          ))
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      defaultMonth={new Date()}
                      mode={(modeMap[type as keyof typeof modeMap] as TAny) || 'default'}
                      selected={valueFormat as TAny}
                      onSelect={(date: TAny) => {
                        if (Array.isArray(date)) {
                          onChange(date.map((d) => dayjs(d).format(formatStr)));
                        } else if (date?.from || date?.to) {
                          onChange({
                            from: dayjs(date.from).format(formatStr),
                            to: dayjs(date.to).format(formatStr),
                          });
                        } else {
                          onChange(dayjs(date).format(formatStr));
                        }
                      }}
                      disabled={readonly || ((date) => date > new Date(end || '') || date < new Date(start || ''))}
                      initialFocus
                      numberOfMonths={type === 'date' ? 2 : 3}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            );
          }}
        />
      );
    },
    [form.control]
  );

  // 渲染单选组
  const renderRadioGroup = useCallback(
    (item: TFormFieldItem) => {
      const { name, label, description, readonly } = item;
      const options = allOptionsMap[name] || [];
      return (
        <FormField
          key={name}
          control={form.control}
          name={name}
          disabled={readonly}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {label || name}
                {description && <FormDescription className="inline-block">&nbsp;-&nbsp;{description}</FormDescription>}
              </FormLabel>
              <FormControl>
                <RadioGroup
                  disabled={readonly}
                  defaultValue={field.value?.value}
                  onValueChange={(value) =>
                    field.onChange({
                      label: options.find((option) => option.value === value)?.label || 'unknown',
                      value,
                    })
                  }
                  className="flex gap-6 rounded-md border px-3 py-3.5"
                >
                  {!options.length && <div className="text-muted-foreground">No options available</div>}
                  {options.map((option) => (
                    <FormItem className="flex items-center space-y-0" key={option.value}>
                      <FormControl>
                        <RadioGroupItem value={option.value} />
                      </FormControl>
                      <FormLabel className="font-normal">{option.label}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    },
    [form.control, allOptionsMap]
  );

  // 渲染复选框
  const renderCheckbox = useCallback(
    (item: TFormFieldItem) => {
      const { name, label, description, readonly } = item;
      return (
        <FormField
          key={name}
          control={form.control}
          name={name}
          disabled={readonly}
          render={({ field }) => (
            <FormItem>
              <div className="flex gap-3 rounded-md border p-3">
                <FormControl>
                  <Checkbox
                    disabled={readonly}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-[2px]"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>{label || name}</FormLabel>
                  {description && <FormDescription>{description}</FormDescription>}
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    },
    [form.control]
  );

  // 渲染复选组
  const renderCheckboxGroup = useCallback(
    (item: TFormFieldItem) => {
      const { name, label, description, readonly } = item;
      const options = allOptionsMap[name] || [];
      return (
        <FormField
          key={name}
          disabled={readonly}
          control={form.control}
          name={name}
          render={() => (
            <FormItem>
              <FormLabel className="text-base">
                {label || name}
                {description && <FormDescription className="inline-block">&nbsp;-&nbsp;{description}</FormDescription>}
              </FormLabel>
              <div className="flex gap-6 rounded-md border p-3">
                {!options.length && <div className="text-muted-foreground">No options available</div>}
                {options.map((option) => (
                  <FormField
                    key={option.value}
                    control={form.control}
                    name={name}
                    render={({ field }) => {
                      const values = (field.value || []) as BaseOption[];
                      return (
                        <FormItem key={option.value} className="flex flex-row items-center space-y-0">
                          <FormControl>
                            <Checkbox
                              disabled={readonly}
                              checked={values.find((elem) => elem?.value === option.value) !== undefined}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...values, { label: option.label, value: option.value }])
                                  : field.onChange(values.filter((elem) => elem?.value !== option.value));
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">{option.label}</FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    },
    [form.control, allOptionsMap]
  );

  // 渲染滑动条
  const renderSlider = useCallback(
    (item: TFormFieldItem) => {
      const { name, label, description, readonly, min, max, step } = item;
      return (
        <FormField
          key={name}
          control={form.control}
          name={name}
          disabled={readonly}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {label || name}
                {description && <FormDescription className="inline-block">&nbsp;-&nbsp;{description}</FormDescription>}
              </FormLabel>
              <FormControl className="mt-12 w-[70%]">
                <Slider
                  disabled={readonly}
                  value={field.value}
                  onValueChange={field.onChange}
                  minStepsBetweenThumbs={step}
                  min={min}
                  max={max}
                  step={step}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    },
    [form.control]
  );

  // 渲染开关
  const renderSwitch = useCallback(
    (item: TFormFieldItem) => {
      const { name, label, description, readonly } = item;
      return (
        <FormField
          key={name}
          control={form.control}
          name={name}
          disabled={readonly}
          render={({ field }) => (
            <FormItem className="mr-2 inline-block flex-row items-center justify-between gap-3 rounded-lg border px-3 pt-2.5 pb-2">
              <FormLabel className="mb-2 block">
                {label || name}
                {description && <FormDescription className="inline-block">&nbsp;-&nbsp;{description}</FormDescription>}
              </FormLabel>
              <FormControl>
                <Switch disabled={readonly} checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    },
    [form.control]
  );

  // 渲染选择框
  const renderSelect = useCallback(
    (item: TFormFieldItem) => {
      const { name, label, description, readonly } = item;
      const options = allOptionsMap[name] || [];
      return (
        <FormField
          key={name}
          control={form.control}
          name={name}
          disabled={readonly}
          render={({ field }) => (
            <FormItem>
              <div className="space-y-0.5">
                <FormLabel>{label || name}</FormLabel>
                {description && <FormDescription className="inline-block">&nbsp;-&nbsp;{description}</FormDescription>}
              </div>
              <FormControl>
                <Combobox
                  disabled={readonly}
                  options={options}
                  popoverProps={{ modal: true }}
                  value={field.value?.value}
                  onChange={(value) =>
                    field.onChange({
                      label: options.find((option) => option.value === value)?.label || 'unknown',
                      value,
                    })
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    },
    [form.control, allOptionsMap]
  );

  // 渲染数字框
  const renderNumber = useCallback(
    (item: TFormFieldItem) => {
      const { name, label, description, readonly, min, max, step } = item;
      return (
        <FormField
          key={name}
          control={form.control}
          name={name}
          disabled={readonly}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {label || name}
                {description && <FormDescription className="inline-block">&nbsp;-&nbsp;{description}</FormDescription>}
              </FormLabel>
              <FormControl>
                <Input
                  disabled={readonly}
                  type="number"
                  min={min}
                  max={max}
                  step={step}
                  value={field.value}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    },
    [form.control]
  );

  // 渲染文本框
  const renderText = useCallback(
    (item: TFormFieldItem) => {
      const { name, label, description, readonly } = item;
      return (
        <FormField
          key={name}
          control={form.control}
          name={name}
          disabled={readonly}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {label || name}
                {description && <FormDescription className="inline-block">&nbsp;-&nbsp;{description}</FormDescription>}
              </FormLabel>
              <FormControl>
                <Input disabled={readonly} value={field.value} onChange={(e) => field.onChange(e.target.value)} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    },
    [form.control]
  );

  // 渲染文件框
  const renderFile = useCallback(
    (item: TFormFieldItem) => {
      const { name, label, description, readonly } = item;
      return (
        <FormField
          key={name}
          control={form.control}
          name={name}
          disabled={readonly}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {label || name}
                {description && <FormDescription className="inline-block">&nbsp;-&nbsp;{description}</FormDescription>}
              </FormLabel>
              <FormControl>
                <Input
                  disabled={readonly}
                  type="file"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    },
    [form.control]
  );

  // 渲染文件框
  const renderTextarea = useCallback(
    (item: TFormFieldItem) => {
      const { name, label, description, readonly } = item;
      return (
        <FormField
          key={name}
          control={form.control}
          name={name}
          disabled={readonly}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {label || name}
                {description && <FormDescription className="inline-block">&nbsp;-&nbsp;{description}</FormDescription>}
              </FormLabel>
              <FormControl>
                <Textarea
                  disabled={readonly}
                  className="min-h-20"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    },
    [form.control]
  );

  // 渲染多选下拉框
  const renderSelectMany = useCallback(
    (item: TFormFieldItem) => {
      const { name, label, description, readonly } = item;
      const options = allOptionsMap[name];
      return (
        <FormField
          key={name}
          control={form.control}
          name={name}
          disabled={readonly}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {label || name}
                {description && <FormDescription className="inline-block">&nbsp;-&nbsp;{description}</FormDescription>}
              </FormLabel>
              <FormControl>
                <SelectMulti
                  disabled={readonly}
                  options={options}
                  popoverProps={{ modal: true }}
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    },
    [form.control, allOptionsMap]
  );

  // 渲染代码字段
  const renderCode = useCallback(
    (item: TFormFieldItem) => {
      const { name, label, description, readonly, language = 'json' } = item;
      return (
        <FormField
          key={name}
          control={form.control}
          name={name}
          disabled={readonly}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {label || name}
                {description && <FormDescription className="inline-block">&nbsp;-&nbsp;{description}</FormDescription>}
              </FormLabel>
              <FormControl>
                <CodeEditor
                  options={{ readOnly: readonly }}
                  language={language}
                  height="20vh"
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    },
    [form.control]
  );

  // 根据字段配置的类型渲染字段
  const renderFormField = (item: TFormFieldItem) => {
    switch (item.type) {
      case 'text':
        return renderText(item);
      case 'textarea':
        return renderTextarea(item);
      case 'file':
        return renderFile(item);
      case 'selectMany':
        return renderSelectMany(item);
      case 'code':
        return renderCode(item);
      case 'number':
        return renderNumber(item);
      case 'select':
        return renderSelect(item);
      case 'radio':
        return renderRadioGroup(item);
      case 'switch':
        return renderSwitch(item);
      case 'slider':
        return renderSlider(item);
      case 'date':
      case 'dateRange':
      case 'dateMany':
        return renderDatePicker(item);
      case 'checkbox':
        return renderCheckbox(item);
      case 'checkboxMany':
        return renderCheckboxGroup(item);
      default:
        return null;
    }
  };

  // 提交前修改数据
  const beforeSubmit = useCallback(
    (val: z.infer<typeof schemaDynamicPage>) => {
      const changedValues = getChangedValues(val, defaultValues);

      Object.keys(val).forEach((key) => {
        const type = formFieldArray.find((field) => field.name === key)?.type || '';
        if (['select', 'radio'].includes(type)) {
          changedValues[key] = val[key].value;
        }
      });

      return dropEmptyKey(changedValues);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [defaultValues]
  );

  // 表单提交
  const onSubmit = (data: z.infer<typeof schemaDynamicPage>) => {
    const values = beforeSubmit(data);

    const formData = new FormData();
    formData.append('data', JSON.stringify({ ...values, type: formAction, id, resourceTable }));
    submit(formData, { method: 'post' });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-2">
        {formFieldArray.map((item) => renderFormField(item))}

        <DialogFooter>
          <Button variant="outline" type="button" onClick={formModalClose}>
            取消
          </Button>
          <Button type="submit" icon={<CheckCheck />}>
            保存
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};
