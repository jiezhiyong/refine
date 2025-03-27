import { zodResolver } from '@hookform/resolvers/zod';
import { BaseOption, HttpError, useCustom } from '@refinedev/core';
import { ActionFunctionArgs, data } from '@remix-run/node';
import { useActionData, useLoaderData, useSubmit } from '@remix-run/react';
import { isEqual } from 'es-toolkit';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import { toast } from 'sonner';
import { z } from 'zod';

import { PageError } from '~/components/500';
import { Empty } from '~/components/empty';
import { Combobox } from '~/components/refine/form/combobox';
import { SelectMulti } from '~/components/refine/form/select-multi';
import { Loader } from '~/components/refine/loader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '~/components/ui/chart';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { H2 } from '~/components/ui/typography';
import { db, queryTablesAll } from '~/services/db.server';
import { TAny } from '~/types/any';

// 定义数据聚合类型
const AGGREGATION_TYPES = [
  { value: 'sum', label: '求和' },
  { value: 'avg', label: '平均值' },
  { value: 'max', label: '最大值' },
  { value: 'min', label: '最小值' },
  { value: 'count', label: '计数' },
];

// 定义时间范围选项
const TIME_RANGES = [
  { value: '7d', label: '最近7天' },
  { value: '30d', label: '最近30天' },
  { value: '90d', label: '最近90天' },
];

// 定义表单验证模式
const formSchema = z.object({
  db: z.string().default('db1'),
  model: z.string().min(1, { message: '请选择数据模型' }),
  fields: z.array(z.object({ value: z.string(), label: z.string() })).min(1, { message: '请至少选择一个字段' }),
  timeRange: z.string().default('7d'),
  aggregationType: z.string().default('sum'),
});

// 定义表单类型
type FormValues = z.infer<typeof formSchema>;

// 加载器函数，获取所有模型的Int字段
export async function loader() {
  const tables = await queryTablesAll();
  return data({ tables });
}

export async function action({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.formData();
    const model = formData.get('model');

    if (!model) {
      throw new Error('模型名称不能为空');
    }

    // 根据选中的数据表，查询第一条数据
    const records: Record<string, unknown>[] = await db.$queryRawUnsafe(`SELECT * FROM "${model}" LIMIT 1`);
    const record = (records || [])[0] || {};

    // 获取Int字段
    const intFields: BaseOption[] = [];
    Object.keys(record).forEach((key) => {
      if (typeof record[key] === 'number' && !key.endsWith('Id') && key !== 'id' && key !== 'order') {
        intFields.push({ value: key, label: key });
      }
    });

    return data({ success: true, intFields, err: '' }, { status: 200 });
  } catch (error) {
    return data(
      { success: false, intFields: [], err: error instanceof Error ? error.message : '操作失败' },
      { status: 500 }
    );
  }
}

export default function DashboardDiscover() {
  // 获取加载的数据
  const { tables = [] } = useLoaderData<typeof loader>();

  // 获取 action 返回的数据，包括可能的错误信息
  const actionData = useActionData<typeof action>();
  const submit = useSubmit();

  // 监听 actionData 变化，显示错误或成功消息
  useEffect(() => {
    if (actionData?.err) {
      toast.error('获取数据失败', { description: actionData?.err });
    }
  }, [actionData?.err]);

  // 表单状态
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      db: 'db1',
      model: 'Post',
      fields: [
        { value: 'like', label: 'like' },
        { value: 'hit', label: 'hit' },
      ],
      timeRange: TIME_RANGES[0].value,
      aggregationType: AGGREGATION_TYPES[0].value,
    },
  });

  // 获取当前选择的模型
  const selectedModel = form.watch('model');
  const selectedFields = form.watch('fields');
  const selectedTimeRange = form.watch('timeRange');
  const selectedAggregationType = form.watch('aggregationType');

  // 字段选项状态
  const [fieldOptions, setFieldOptions] = useState<{ value: string; label: string }[]>([]);

  // 图表数据状态
  const [chartData, setChartData] = useState<TAny[]>([]);

  // 当模型选择变化时，更新字段选项
  useEffect(() => {
    if (selectedModel) {
      const formData = new FormData();
      formData.append('model', selectedModel);
      submit(formData, { method: 'post' });

      // const fields = getFieldsByModel(selectedModel);
      // setFieldOptions(fields);
      // const fieldValues = fields.map((field) => field.value);
      // const newSelectedFields = selectedFields.filter((field) => fieldValues.includes(field.value));
      // form.setValue('fields', newSelectedFields);
    } else {
      setFieldOptions([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedModel, form]);

  // 当 actionData.intFields 变化时，更新字段选项
  // 同时默认选中新、旧 intFields 中都存在的字段
  useEffect(() => {
    const intFields = actionData?.intFields || [];
    if (!isEqual(intFields, fieldOptions)) {
      setFieldOptions(intFields);

      const intFieldValues = intFields.map((field) => field.value);
      const newSelectedFields = selectedFields.filter((field) => intFieldValues.includes(field.value));
      form.setValue('fields', newSelectedFields);
    }
  }, [actionData?.intFields, fieldOptions, form, selectedFields]);

  // 计算开始日期
  const startDate = useMemo(() => {
    const now = new Date();
    const days = Number(selectedTimeRange.replace('d', ''));
    const startDate = new Date(now);
    startDate.setDate(now.getDate() - days);
    startDate.setHours(0, 0, 0, 0);
    return startDate.toISOString();
  }, [selectedTimeRange]);

  // 计算结束日期（今天的结束）
  const endDate = useMemo(() => {
    const now = new Date();
    now.setHours(23, 59, 59, 999);
    return now.toISOString();
  }, []);

  // 使用 refine 的 useCustom 钩子查询数据
  const { error, isError, isFetching, isLoading } = useCustom<TAny[], HttpError>({
    url: '/api/discover',
    method: 'get',
    config: {
      query: {
        resource: selectedModel,
        startDate,
        endDate,
        fields: selectedFields.map((field) => field.value).join(','),
        aggregationType: selectedAggregationType,
      },
    },
    queryOptions: {
      enabled: !!selectedModel && !!selectedFields.length,
      queryKey: [selectedFields, selectedTimeRange, selectedAggregationType],
      onSuccess: ({ data }) => {
        if (data) {
          setChartData(data);
        }
      },
    },
  });

  // 生成图表配置
  const generateChartConfig = () => {
    const config: ChartConfig = {};

    selectedFields.forEach((field) => {
      config[field.value] = {
        label: field.label,
        color: getRandomColor(field.value),
      };
    });

    return config;
  };

  // 生成随机颜色
  // 使用字段名作为种子生成固定的颜色
  const getRandomColor = (seed: string) => {
    const hash = seed.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);

    return `hsl(${hash % 360}, 70%, 50%)`;
  };

  // 渲染图表
  const renderChart = () => {
    const chartConfig = generateChartConfig();
    return (
      <Card className="mt-8 flex flex-1 flex-col">
        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
          <div className="grid flex-1 gap-1 text-center sm:text-left">
            <CardTitle className="capitalize">数据图表 - {selectedModel}</CardTitle>
            <CardDescription>{selectedFields.map((f) => f.label).join(', ') || '...'}</CardDescription>
          </div>
          <Select
            value={selectedTimeRange}
            onValueChange={(value) => {
              form.setValue('timeRange', value);
            }}
          >
            <SelectTrigger className="w-[160px] rounded-lg sm:ml-auto" aria-label="选择时间范围">
              <SelectValue placeholder="最近90天" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {TIME_RANGES.map((range) => (
                <SelectItem key={range.value} value={range.value} className="rounded-lg">
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="relative flex-1 px-2 pt-4 sm:px-6 sm:pt-6">
          {isFetching && (
            <div className="absolute flex size-full justify-center">
              <div className="flex min-h-40 w-20">
                <Loader />
              </div>
            </div>
          )}

          {!isFetching && isError && (
            <div className="flex h-full min-h-[350px] justify-center">
              <div className="flex items-center">
                <Empty className="text-destructive" message={error?.message} />
              </div>
            </div>
          )}

          {!selectedFields.length && (
            <div className="flex h-full min-h-[350px] justify-center">
              <div className="flex items-center">
                <Empty className="text-destructive" message="请选择数据字段" />
              </div>
            </div>
          )}

          {!isLoading && chartData.length !== 0 && !isError && !!selectedFields.length && (
            <ChartContainer config={chartConfig} className="aspect-auto h-full min-h-[350px] w-full">
              {(() => {
                return (
                  <AreaChart data={chartData}>
                    <defs>
                      {selectedFields.map((field) => (
                        <linearGradient key={field.value} id={`fill${field.value}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={getRandomColor(field.value)} stopOpacity={0.8} />
                          <stop offset="95%" stopColor={getRandomColor(field.value)} stopOpacity={0.1} />
                        </linearGradient>
                      ))}
                    </defs>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      minTickGap={32}
                      tickFormatter={(value) => {
                        const date = new Date(value);
                        return date.toLocaleDateString('zh-CN', {
                          month: 'short',
                          day: 'numeric',
                        });
                      }}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={
                        <ChartTooltipContent
                          labelFormatter={(value) => {
                            return new Date(value).toLocaleDateString('zh-CN', {
                              month: 'short',
                              day: 'numeric',
                            });
                          }}
                          indicator="dot"
                        />
                      }
                    />

                    {selectedFields.map(
                      (field) =>
                        field.value !== 'date' &&
                        field.value !== 'createdAt' && (
                          <Area
                            key={field.value}
                            dataKey={field.value}
                            type="natural"
                            fill={`url(#fill${field.value})`}
                            stroke={getRandomColor(field.value)}
                            stackId="a"
                          />
                        )
                    )}
                    <ChartLegend content={<ChartLegendContent />} />
                  </AreaChart>
                );
              })()}
            </ChartContainer>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="flex flex-1 flex-col px-8 pt-8 pb-4">
      <H2>
        <span>数据可视化</span>
        <p className="text-muted-foreground text-sm font-normal">
          选择数据模型、字段和聚合方式，生成动态数据图表（仅限 Int 类型字段）
        </p>
      </H2>

      <Form {...form}>
        <form className="mt-8 flex gap-4 *:flex-1">
          {/* 数据源选择 */}
          <FormField
            control={form.control}
            name="db"
            render={({ field }) => (
              <FormItem>
                <FormLabel>数据源</FormLabel>
                <FormControl>
                  <Combobox
                    className="sm:w-auto"
                    options={[
                      { label: '数据库 A', value: 'db1' },
                      { label: '数据库 B', value: 'db2' },
                    ]}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 数据模型选择 */}
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormLabel>数据模型</FormLabel>
                <FormControl>
                  <Combobox
                    className="sm:w-auto"
                    options={tables.sort()}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 字段多选 */}
          {selectedModel && (
            <FormField
              control={form.control}
              name="fields"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>数据字段</FormLabel>
                  <FormControl>
                    <SelectMulti
                      className="sm:w-auto md:w-auto"
                      disabled={fieldOptions.length === 0}
                      options={fieldOptions}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder={
                        fieldOptions.length === 0
                          ? '所选数据表暂无数据、或没有可用的 `Int` 类型字段'
                          : '选择要展示的字段（支持多选）'
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {/* 聚合方式选择 */}
          <FormField
            control={form.control}
            name="aggregationType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>聚合方式</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="选择聚合方式" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {AGGREGATION_TYPES.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      {/* 渲染图表 */}
      {renderChart()}
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
