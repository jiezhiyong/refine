import { LoaderFunctionArgs, type ActionFunctionArgs } from '@remix-run/node';
import { dataService } from '~/services/data.server';
import type { CrudFilters, CrudOperators, CrudSorting, Pagination } from '@refinedev/core';

// 处理 getList 请求
export async function loader({ request, params }: LoaderFunctionArgs) {
  const { resource } = params;
  if (!resource) {
    throw new Error('资源类型是必需的');
  }

  try {
    const url = new URL(request.url);

    const pagination = getPaginationFromUrl(url);
    const sorters = getSortersFromUrl(url);
    const filters = getFiltersFromUrl(url);

    const res = await dataService.getList({
      resource,
      pagination,
      sorters,
      filters,
      meta: {},
    });

    return Response.json(res?.data || []);
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}

// 处理单个创建 create
export async function action({ request, params }: ActionFunctionArgs) {
  const { resource } = params;
  if (!resource) {
    throw new Error('资源类型是必需的');
  }

  try {
    const method = request.method;
    const body = await request.json();

    switch (method) {
      case 'POST': {
        const created = await dataService.create({
          resource,
          variables: body,
        });
        return Response.json(created);
      }

      default:
        throw new Error(`不支持的请求方法: ${method}`);
    }
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}

// 从 URL 参数中解析分页信息
function getPaginationFromUrl(url: URL): Pagination {
  const current = Number(url.searchParams.get('page')) || 1;
  const pageSize = Number(url.searchParams.get('limit')) || 10;
  return {
    current,
    pageSize,
  };
}

// 从 URL 参数中解析排序信息
function getSortersFromUrl(url: URL): CrudSorting {
  const sort = url.searchParams.get('sort');
  const order = url.searchParams.get('order');

  if (!sort || !order) return [];

  return [
    {
      field: sort,
      order: order.toLowerCase() as 'asc' | 'desc',
    },
  ];
}

// 从 URL 参数中解析过滤信息
function getFiltersFromUrl(url: URL): CrudFilters {
  const filters: CrudFilters = [];

  // NestJS CRUD 过滤语法
  for (const [key, value] of url.searchParams.entries()) {
    if (!['page', 'limit', 'offset', 'sort', 'order'].includes(key)) {
      // 支持常见的过滤操作符
      const [field, operator = 'eq'] = key.split('_');
      filters.push({
        field,
        operator: operator as Exclude<CrudOperators, 'or' | 'and'>,
        value,
      });
    }
  }

  return filters;
}
