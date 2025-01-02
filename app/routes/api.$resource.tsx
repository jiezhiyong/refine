import { LoaderFunctionArgs, type ActionFunctionArgs } from '@remix-run/node';
import { dataService } from '~/services/data.server';
import type { CrudFilters, CrudOperators, CrudSorting, Pagination } from '@refinedev/core';

// 从 URL 参数中解析分页信息
const getPaginationFromUrl = (url: URL): Pagination => {
  const current = Number(url.searchParams.get('page')) || 1;
  const pageSize = Number(url.searchParams.get('limit')) || 10;
  return {
    current,
    pageSize,
  };
};

// 从 URL 参数中解析排序信息
const getSortersFromUrl = (url: URL): CrudSorting => {
  const sort = url.searchParams.get('sort');
  const order = url.searchParams.get('order');

  if (!sort || !order) return [];

  return [
    {
      field: sort,
      order: order.toLowerCase() as 'asc' | 'desc',
    },
  ];
};

// 从 URL 参数中解析过滤信息
const getFiltersFromUrl = (url: URL): CrudFilters => {
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
};

// 处理 GET 请求
export async function loader({ request, params }: LoaderFunctionArgs) {
  const { resource } = params;
  if (!resource) {
    throw new Error('资源类型是必需的');
  }

  const url = new URL(request.url);

  // 处理 getMany 请求
  const ids = url.searchParams.get('ids');
  if (ids) {
    const data = await dataService.getMany!({
      resource,
      ids: ids.split(','),
    });
    return Response.json(data);
  }

  // 处理 getOne 请求
  const id = url.searchParams.get('id');
  if (id) {
    const data = await dataService.getOne({
      resource,
      id,
    });
    return Response.json(data);
  }

  // 处理 getList 请求
  const data = await dataService.getList({
    resource,
    pagination: getPaginationFromUrl(url),
    sorters: getSortersFromUrl(url),
    filters: getFiltersFromUrl(url),
    meta: {},
  });
  return Response.json(data);
}

// 处理 POST、PATCH、DELETE 请求
export async function action({ request, params }: ActionFunctionArgs) {
  const { resource } = params;
  if (!resource) {
    throw new Error('资源类型是必需的');
  }

  const method = request.method;
  const body = await request.json();

  switch (method) {
    case 'POST': {
      // 处理批量创建
      if (Array.isArray(body)) {
        const created = await dataService.createMany!({
          resource,
          variables: body,
        });
        return Response.json(created);
      }
      // 处理单个创建
      const created = await dataService.create({
        resource,
        variables: body,
      });
      return Response.json(created);
    }

    case 'PATCH': {
      const { ids } = body;

      // 处理批量更新
      if (ids) {
        const updated = await dataService.updateMany!({
          resource,
          ids,
          variables: body.variables,
        });
        return Response.json(updated);
      }

      // 处理单个更新
      const { id, ...variables } = body;
      if (!id) {
        throw new Error('更新操作需要提供 ID');
      }
      const updated = await dataService.update({
        resource,
        id,
        variables,
      });

      return Response.json(updated);
    }

    case 'DELETE': {
      const { ids } = body;

      // 处理批量删除
      if (ids) {
        const deleted = await dataService.deleteMany!({
          resource,
          ids,
        });
        return Response.json(deleted);
      }

      // 处理单个删除
      const { id } = body;
      if (!id) {
        throw new Error('删除操作需要提供 ID');
      }
      const deleted = await dataService.deleteOne({
        resource,
        id,
      });

      return Response.json(deleted);
    }

    default:
      throw new Error(`不支持的请求方法: ${method}`);
  }
}
