import { CrudFilters, CrudSorting } from '@refinedev/core';
import { DEFAULT_PAGE_SIZE } from '~/constants/pagination';

export interface TableParams {
  pagination?: {
    current: number;
    pageSize: number;
  };
  filters?: CrudFilters;
  sorters?: CrudSorting;
}

/**
 * 解析 URL 查询参数为表格所需的分页、过滤和排序参数
 * @param search URL 查询字符串
 * @returns TableParams 对象
 */
export function parseTableParams(search: string): TableParams {
  const searchParams = new URLSearchParams(search);

  // 解析分页参数
  const page = parseInt(searchParams.get('page') || '1');
  const pageSize = parseInt(searchParams.get('pageSize') || DEFAULT_PAGE_SIZE.toString());

  // 解析排序参数
  const sort = searchParams.get('sort');
  const order = searchParams.get('order');
  const sorters: CrudSorting = [];
  if (sort && order) {
    sorters.push({
      field: sort,
      order: order.toLowerCase() as 'asc' | 'desc',
    });
  }

  // 解析过滤参数
  const filters: CrudFilters = [];
  searchParams.forEach((value, key) => {
    if (key.startsWith('filter_')) {
      const field = key.replace('filter_', '');
      const operator = searchParams.get(`operator_${field}`) || 'contains';
      filters.push({
        field,
        operator: operator as any,
        value,
      });
    }
  });

  return {
    pagination: {
      current: page,
      pageSize,
    },
    filters,
    sorters,
  };
}

/**
 * 将表格参数转换为 URL 查询字符串
 * @param params TableParams 对象
 * @returns URL 查询字符串
 */
export function stringifyTableParams(params: TableParams): string {
  const searchParams = new URLSearchParams();

  // 添加分页参数
  if (params.pagination) {
    searchParams.set('page', params.pagination.current.toString());
    searchParams.set('pageSize', params.pagination.pageSize.toString());
  }

  // 添加排序参数
  if (params.sorters?.[0]) {
    searchParams.set('sort', params.sorters[0].field);
    searchParams.set('order', params.sorters[0].order);
  }

  // 添加过滤参数
  params.filters?.forEach((filter) => {
    if ('field' in filter) {
      searchParams.set(`filter_${filter.field}`, filter.value as string);
      searchParams.set(`operator_${filter.field}`, filter.operator);
    }
  });

  return searchParams.toString();
}
