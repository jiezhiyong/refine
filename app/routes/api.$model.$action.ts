import { type ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';

import { dataService, isValidDataServiceAction } from '~/services/data.server';
import { isPrismaModel } from '~/services/db.server';
import { requireUser } from '~/services/session.server';
import { TAny } from '~/types/any';
import { validateRequestSignature } from '~/utils/signature';
import { getBodyFromRequest, getQueryParamsFromRequest, serializeResponse } from '~/utils/superjson';

/**
 * 数据服务通用方法类型
 * 定义了数据服务方法的通用签名
 */
type DataServiceMethod = (model: string, args: TAny, context?: TAny) => Promise<TAny>;

/**
 * 处理 GET 请求
 * 处理查询操作：findMany, findFirst, findUnique, count
 */
export async function loader({ request, params }: LoaderFunctionArgs) {
  try {
    const { model, action } = params;

    if (!model || !action) {
      return Response.json({ message: 'model 和 action 参数都是必需的' }, { status: 400 });
    }

    // 验证 model 是否为有效的 Prisma 模型
    if (!isPrismaModel(model)) {
      return Response.json({ message: `不支持的模型: ${model}` }, { status: 400 });
    }

    // 验证 action 是否为有效的查询操作
    const validReadActions = ['findMany', 'findFirst', 'findUnique', 'count'];
    if (!validReadActions.includes(action)) {
      return Response.json({ message: `不支持的查询操作: ${action}` }, { status: 400 });
    }

    // 验证 action 是否为 dataService 的有效方法
    if (!isValidDataServiceAction(action)) {
      return Response.json({ message: `dataService 不支持的操作: ${action}` }, { status: 400 });
    }

    // 验证请求签名
    const signatureValid = await validateRequestSignature(request);
    if (!signatureValid) {
      return Response.json({ message: '请求签名无效' }, { status: 401 });
    }

    // 身份验证
    const { user } = await requireUser(request);

    // 获取查询参数
    const queryParams = getQueryParamsFromRequest(request);

    // 执行对应的 Prisma 方法
    // 权限检查已经在 dataService 内部集成，不再需要在此处单独验证
    const result = await (dataService[action] as DataServiceMethod)(model, queryParams, { user });

    // 序列化响应
    const serializedResponse = serializeResponse(result);
    return Response.json(serializedResponse);
  } catch (error: TAny) {
    return Response.json({ ...error, message: error?.message }, { status: 500 });
  }
}

/**
 * 处理 POST 请求
 * 处理写入操作：create, createMany, update, updateMany, delete, deleteMany
 */
export async function action({ request, params }: ActionFunctionArgs) {
  try {
    const { model, action } = params;

    if (!model || !action) {
      return Response.json({ message: 'model 和 action 参数都是必需的' }, { status: 400 });
    }

    // 验证 model 是否为有效的 Prisma 模型
    if (!isPrismaModel(model)) {
      return Response.json({ message: `不支持的模型: ${model}` }, { status: 400 });
    }

    // 验证 action 是否为有效的写入操作
    const validWriteActions = ['create', 'createMany', 'update', 'updateMany', 'delete', 'deleteMany'];
    if (!validWriteActions.includes(action)) {
      return Response.json({ message: `不支持的写入操作: ${action}` }, { status: 400 });
    }

    // 验证 action 是否为 dataService 的有效方法
    if (!isValidDataServiceAction(action)) {
      return Response.json({ message: `dataService 不支持的操作: ${action}` }, { status: 400 });
    }

    // 验证请求签名
    const signatureValid = await validateRequestSignature(request);
    if (!signatureValid) {
      return Response.json({ message: '请求签名无效' }, { status: 401 });
    }

    // 身份验证
    const { user } = await requireUser(request);

    // 获取请求体参数
    const requestBody = await getBodyFromRequest(request);

    // 执行数据库操作
    // 权限检查已经在 dataService 内部集成，不再需要在此处单独验证
    const result = await (dataService[action] as DataServiceMethod)(model, requestBody, { user });

    // 序列化响应
    const serializedResponse = serializeResponse(result);
    return Response.json(serializedResponse);
  } catch (error: TAny) {
    return Response.json({ ...error, message: error?.message }, { status: 500 });
  }
}
