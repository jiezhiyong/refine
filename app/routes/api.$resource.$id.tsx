import { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node';
import { dataService } from '~/services/data.server';

// 处理单个获取 getOne
export async function loader({ params }: LoaderFunctionArgs) {
  const { resource, id } = params;
  if (!resource || !id) {
    throw new Error('资源类型和ID是必需的');
  }

  try {
    const data = await dataService.getOne({
      resource,
      id,
    });
    return Response.json(data);
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}

// 处理 PATCH、DELETE 请求
export async function action({ request, params }: ActionFunctionArgs) {
  const { resource, id } = params;
  if (!resource || !id) {
    throw new Error('资源类型和ID是必需的');
  }

  try {
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
        throw new Error(`不支持的请求方法: ${method}`);
    }
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
