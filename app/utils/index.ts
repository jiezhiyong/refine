import { TAny } from '~/types/any';

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
export const processDateValue = (value: any, operator?: FilterOperator): any => {
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
export const processDateFields = (obj: Record<string, any>): Record<string, any> => {
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
    {} as Record<string, any>
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
      case 'in':
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
