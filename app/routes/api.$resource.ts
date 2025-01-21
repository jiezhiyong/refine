import { LoaderFunctionArgs, type ActionFunctionArgs } from '@remix-run/node';
import { dataService, requireUser } from '~/services';
import { TAny } from '~/types';
import { getFiltersFromUrl, getJoinFromUrl, getPaginationFromUrl, getSortersFromUrl } from '~/utils';

// 处理 getList 请求
export async function loader({ request, params }: LoaderFunctionArgs) {
  const { resource } = params;

  try {
    if (!resource) {
      throw new Error('resource is required');
    }

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
    return Response.json({ message: error?.message || '处理请求失败' }, { status: 500 });
  }
}

// 处理单个创建 create
// 注意：默认所有数据模型都应该关联用户
export async function action({ request, params }: ActionFunctionArgs) {
  const { user } = await requireUser(request);
  const { resource } = params;
  const { method } = request;

  try {
    if (!resource) {
      throw new Error('resource is required');
    }

    if (method !== 'POST') {
      throw new Error(`不支持的请求方法: ${method}`);
    }

    const body = await request.json();
    const created = await dataService.create({
      resource,
      variables: { ...body, userId: user?.id },
    });

    return Response.json(created);
  } catch (error: TAny) {
    return Response.json({ message: error?.message || '处理请求失败' }, { status: 500 });
  }
}
