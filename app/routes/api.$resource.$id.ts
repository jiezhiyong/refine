import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { dataService, requireUser } from '~/services';
import { TAny } from '~/types';

// 处理单个获取 getOne
export async function loader({ params }: LoaderFunctionArgs) {
  const { resource, id } = params;

  try {
    if (!resource || !id) {
      throw new Error('resource、id is required');
    }

    const data = await dataService.getOne({
      resource,
      id,
    });

    return Response.json(data);
  } catch (error: TAny) {
    return Response.json({ message: error?.message || '处理请求失败' }, { status: 500 });
  }
}

// 处理 PATCH、DELETE 请求
export async function action({ request, params }: ActionFunctionArgs) {
  await requireUser(request);

  const { resource, id } = params;

  try {
    if (!resource || !id) {
      throw new Error('resource、id is required');
    }

    const method = request.method;
    switch (method) {
      // 处理单个更新 update
      case 'PATCH': {
        const variables = await request.json();

        const data = await dataService.update({
          resource,
          id,
          variables,
        });

        return Response.json(data);
      }

      // 处理单个删除 deleteOne
      case 'DELETE': {
        const data = await dataService.deleteOne({
          resource,
          id,
        });

        return Response.json(data);
      }

      default:
        return Response.json({ message: `不支持的请求方法: ${method}` }, { status: 405 });
    }
  } catch (error: TAny) {
    return Response.json({ message: error?.message || '处理请求失败' }, { status: 500 });
  }
}
