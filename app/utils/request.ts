import { CrudFilters, CrudSorting, GetListParams, Pagination } from '@refinedev/core';

import { EnumResource } from '~/constants/resource';
import { TAny } from '~/types/any';
import { schemaMap } from '~/zod';

// 从 URL 参数中解析分页信息
export function getPaginationFromUrl(url: URL): Pagination {
  const limit = Number(url.searchParams.get('limit'));
  const page = Number(url.searchParams.get('page')) || 1;

  return {
    current: page,
    pageSize: limit,
  };
}

// 从 URL 参数中解析排序信息
export function getSortersFromUrl(url: URL): CrudSorting {
  const sortParam = url.searchParams.get('sort[0]');
  if (!sortParam) return [];

  const [field, order] = sortParam.split(',');
  return [
    {
      field,
      order: order.toLowerCase() as 'asc' | 'desc',
    },
  ];
}

// 从 URL 参数中解析过滤信息
export function getFiltersFromUrl(url: URL): CrudFilters {
  const searchParam = url.searchParams.get('s');
  if (!searchParam) {
    return [];
  }

  try {
    const searchObj = JSON.parse(decodeURIComponent(searchParam));
    if (!searchObj.$and) {
      return [];
    }

    return searchObj.$and.map(
      (condition: Record<string, { $eq?: string; $contL?: string; $in?: string[]; $gte?: string; $lte?: string }>) => {
        const [field] = Object.keys(condition);
        const operatorMap = {
          $eq: 'eq',
          $contL: 'contains',
          $in: 'in',
          $gte: 'gte',
          $lte: 'lte',
        } as const;

        // 找到第一个存在的操作符
        const operator = Object.keys(condition[field])[0] as keyof typeof operatorMap;
        const mappedOperator = operatorMap[operator] || 'contains';
        const value = condition[field][operator];

        return {
          field,
          operator: mappedOperator,
          value,
        };
      }
    );
  } catch (error) {
    console.error('解析过滤参数错误:', error);
    return [];
  }
}

// 从 URL 参数中解析 join 信息
export function getJoinFromUrl(url: URL) {
  // 收集所有的 join 参数
  const joinParams: string[] = [];
  for (let i = 0; ; i++) {
    const param = url.searchParams.get(`join[${i}]`);
    if (!param) break;
    joinParams.push(param);
  }

  if (joinParams.length === 0) return undefined;

  // 解析 join 参数并转换为 Prisma include 格式
  const include: Record<string, { select: Record<string, boolean> }> = {};

  joinParams.forEach((param) => {
    // 格式：relation||field1,field2,field3
    const [relation, fields] = param.split('||');
    if (!relation || !fields) return;

    // 将relation按点分割，从右向左构建嵌套的select对象
    const relationParts = relation.split('.');
    let currentSelect = {
      select: fields.split(',').reduce(
        (acc, field) => ({
          ...acc,
          [field]: true,
        }),
        {}
      ),
    };

    // 从最后一个部分开始，逐层向上构建
    for (let i = relationParts.length - 1; i > 0; i--) {
      currentSelect = {
        select: {
          [relationParts[i]]: currentSelect,
        },
      };
    }

    include[relationParts[0]] = currentSelect;
  });

  return Object.keys(include).length > 0 ? include : undefined;
}

// 定义操作符
export type FilterOperator = 'eq' | 'contains' | 'gt' | 'lt' | 'gte' | 'lte' | 'in';

// 定义过滤器类型
export interface Filter {
  field: string;
  operator: FilterOperator;
  value: TAny;
  meta?: { filterOperator?: FilterOperator };
}

// 定义排序类型
export interface Sorter {
  field: string;
  order: 'asc' | 'desc';
}

// 判断是否为有效的 ISO 日期字符串
export const isISODateString = (value: string): boolean => {
  if (!value || typeof value !== 'string') return false;

  try {
    const date = new Date(value);
    return !isNaN(date.getTime()) && value.includes('T');
  } catch {
    return false;
  }
};

// 处理日期值，支持数组和单个值
export const processDateValue = (value: TAny, operator?: FilterOperator): TAny => {
  if (Array.isArray(value)) {
    const dates = value.map((v) => {
      if (typeof v === 'string' && isISODateString(v)) {
        return new Date(v);
      }
      return v;
    });
    // 检查是否所有元素都成功转换为 Date
    const allDates = dates.every((d) => d instanceof Date);

    // 如果是日期数组，根据操作符转换查询条件
    if (allDates && dates.length) {
      if (operator === 'gte') {
        return { gte: dates[0] };
      }
      if (operator === 'lte') {
        return { lte: dates[1] };
      }

      // 默认使用日期范围
      const condition: { gte: Date; lte?: Date } = { gte: dates[0] };
      if (dates[1]) {
        condition.lte = dates[1];
      }

      return condition;
    }
    return dates;
  }

  if (typeof value === 'string' && isISODateString(value)) {
    return new Date(value);
  }
  return value;
};

// 处理查询条件中的日期字段
export const processDateFields = (obj: Record<string, TAny>): Record<string, TAny> => {
  if (!obj) return obj;

  return Object.entries(obj).reduce(
    (acc, [key, value]) => {
      if (value && typeof value === 'object') {
        // 如果是包含 in 操作符的日期数组，直接处理为日期范围
        if (value.in && Array.isArray(value.in)) {
          const processed = processDateValue(value.in);
          if (processed && typeof processed === 'object' && 'gte' in processed) {
            acc[key] = processed;
          } else {
            acc[key] = value;
          }
        } else {
          // 处理其他嵌套对象
          acc[key] = Object.entries(value).reduce((subAcc, [subKey, subValue]) => {
            const processed = processDateValue(subValue, subKey as FilterOperator);
            return { ...subAcc, [subKey]: processed };
          }, {});
        }
      } else {
        acc[key] = processDateValue(value);
      }

      return acc;
    },
    {} as Record<string, TAny>
  );
};

// 处理过滤条件的函数
export function buildWhereClause(filters: Filter[] = []): Record<string, TAny> {
  return filters.reduce((acc, filter) => {
    const meta = filter.meta as { filterOperator?: FilterOperator };
    const operator = meta?.filterOperator || filter.operator;

    switch (operator) {
      case 'eq':
        return { ...acc, [filter.field]: filter.value };
      case 'contains':
        return { ...acc, [filter.field]: { contains: filter.value } };
      case 'gt':
        return { ...acc, [filter.field]: { gt: filter.value } };
      case 'lt':
        return { ...acc, [filter.field]: { lt: filter.value } };
      case 'gte':
        return { ...acc, [filter.field]: { gte: filter.value } };
      case 'lte':
        return { ...acc, [filter.field]: { lte: filter.value } };
      case 'in': {
        // 如果值已经是数组，直接使用；否则尝试将其转换为数组
        const values = Array.isArray(filter.value) ? filter.value : filter.value.toString().split(',');

        // 对于 id 字段，保持字符串类型；对于其他字段，尝试转换为数字
        const parsedValues =
          filter.field === 'id'
            ? values
            : values.map((v: unknown) => {
                const num = Number(v);
                return isNaN(num) ? v : num;
              });
        return { ...acc, [filter.field]: { in: parsedValues } };
      }
      default:
        return acc;
    }
  }, {});
}

// 处理排序条件的函数
export function buildOrderByClause(sorters: Sorter[] = []): Record<string, 'asc' | 'desc'> {
  return sorters.reduce(
    (acc, sorter) => ({
      ...acc,
      [sorter.field]: sorter.order,
    }),
    {}
  );
}

// 处理 Refine 的过滤参数格式
export function parseRefineFilters(filters: Filter[]): Filter[] {
  return filters.map((filter) => {
    if (filter.field.startsWith('filter[')) {
      const [field, operator, value] = filter.value.split('||');
      return {
        field,
        operator: operator.replace('$', '') as FilterOperator,
        value,
      };
    }
    return filter;
  });
}

/**
 * 校验数据是否符合指定资源的校验规则
 * 目前仅在数据创建时使用，数据更新时暂时不校验，以支持字段增量更新，字段格式校验交给 Prisma 数据模型本身来做
 */
export function zodParse<TVariables>(resource: EnumResource | string, variables?: TVariables) {
  const schema = schemaMap[resource as keyof typeof schemaMap];
  if (!schema) {
    return { success: true, message: `Server Error, 未找到 ${resource} 的数据校验规则` };
  }

  try {
    schema.parse(variables || {});
  } catch (error: TAny) {
    const { name, issues } = error || {};

    const err = new Error(`Bad Request, 数据校验失败 (${name})`);
    (err as TAny).name = name;
    (err as TAny).issues = issues;

    return { status: 400, message: err.message, originalError: err };
  }

  return { success: true, message: '校验成功' };
}

export function getFieldsFromUrl(url: URL) {
  const fieldsParam = url.searchParams.get('fields');
  if (!fieldsParam) {
    return undefined;
  }
  return fieldsParam.split(',');
}

/**
 * 根据 refine-react-table.GetListParams 构建查询参数
 */
export function buildTableParams({ pagination, filters, sorters, meta }: Omit<GetListParams, 'resource'>) {
  const queryParams: Record<string, TAny> = {};

  if (meta?.include) {
    queryParams.include = meta.include;
  }
  if (meta?.select) {
    queryParams.select = meta.select;
  }

  const { current = 1, pageSize } = pagination ?? {};
  const skip = pageSize ? (Number(current) - 1) * Number(pageSize) : undefined;
  if (pageSize) {
    queryParams.skip = skip;
    queryParams.take = Number(pageSize);
  }

  // 构建过滤条件
  const parsedFilters = filters ? parseRefineFilters(filters as Filter[]) : [];
  const where = parsedFilters.length > 0 ? buildWhereClause(parsedFilters) : {};

  // 处理关联字段的查询条件
  const whereCondition = Object.entries(where).reduce((acc, [key, value]) => {
    if (key.includes('.')) {
      const [relation, field] = key.split('.');
      return {
        ...acc,
        [relation]: {
          [field]: value,
        },
      };
    }

    return { ...acc, [key]: value };
  }, {});

  // 处理所有查询条件中的日期字段
  const processedWhereCondition = processDateFields(whereCondition);
  if (Object.keys(processedWhereCondition).length) {
    queryParams.where = processedWhereCondition;
  }

  // 构建排序条件
  const orderBy = sorters ? buildOrderByClause(sorters) : {};
  if (Object.keys(orderBy).length) {
    queryParams.orderBy = orderBy;
  }

  return queryParams;
}
