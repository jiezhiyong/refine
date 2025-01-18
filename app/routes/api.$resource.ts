import { LoaderFunctionArgs, type ActionFunctionArgs } from '@remix-run/node';
import { dataService } from '~/services/data.server';
import type { CrudFilters, CrudSorting, Pagination } from '@refinedev/core';
import { TAny } from '~/types/any';
import { getSession } from '~/services/session.server';
import { DEFAULT_PAGE_SIZE } from '~/config/pagination';

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
    const join = getJoinFromUrl(url);

    const res = await dataService.getList({
      resource,
      pagination,
      sorters,
      filters,
      meta: join ? { include: join } : {},
    });

    return Response.json(res);
  } catch (error: TAny) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}

// 处理单个创建 create
// 注意：默认所有数据模型都应该关联用户
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
        const session = await getSession(request.headers.get('Cookie'));
        const user = session.get('user');

        const created = await dataService.create({
          resource,
          variables: { ...body, userId: user?.id },
        });
        return Response.json(created);
      }

      default:
        throw new Error(`不支持的请求方法: ${method}`);
    }
  } catch (error: TAny) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}

// 从 URL 参数中解析分页信息
function getPaginationFromUrl(url: URL): Pagination {
  const limit = Number(url.searchParams.get('limit')) || DEFAULT_PAGE_SIZE;
  const page = Number(url.searchParams.get('page')) || 1;

  return {
    current: page,
    pageSize: limit,
  };
}

// 从 URL 参数中解析排序信息
function getSortersFromUrl(url: URL): CrudSorting {
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
function getFiltersFromUrl(url: URL): CrudFilters {
  const searchParam = url.searchParams.get('s');
  if (!searchParam) return [];

  try {
    const searchObj = JSON.parse(decodeURIComponent(searchParam));
    if (!searchObj.$and) return [];

    return searchObj.$and.map((condition: Record<string, { $eq?: string; $contL?: string; $in?: string[] }>) => {
      const [field] = Object.keys(condition);
      const operatorMap = {
        $eq: 'eq',
        $contL: 'contains',
        $in: 'in',
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
    });
  } catch (error) {
    console.error('解析过滤参数错误:', error);
    return [];
  }
}

// 从 URL 参数中解析 join 信息
function getJoinFromUrl(url: URL) {
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

    include[relation] = {
      select: fields.split(',').reduce(
        (acc, field) => ({
          ...acc,
          [field]: true,
        }),
        {}
      ),
    };
  });

  return Object.keys(include).length > 0 ? include : undefined;
}
