import { AuditRecord, FrontRouteModule, FrontRouteProject } from '@prisma/client';
import { MetaQuery } from '@refinedev/core';
import { ActionFunctionArgs } from '@remix-run/node';
import { pick } from 'es-toolkit';

import { EnumAuditStatus } from '~/constants/audit-status';
import { EnumLogType } from '~/constants/log';
import { db, isPrismaModel } from '~/services/db.server';
import { TAny } from '~/types/any';
import { OperateTypeEnum, TConfigParam, TConfigType, TContentJsonObject } from '~/types/ty';
import { getRequestData } from '~/utils/get-request-data';
import { handlePrismaError } from '~/utils/prisma-error-handler';

type TFunc = 'queryOldData' | 'execute';
type TEntity = FrontRouteProject | FrontRouteModule;
type TRequestParams = {
  configType: TConfigType;
  param: TConfigParam;
  operateType: OperateTypeEnum;
  contentJson: string;
};

export async function loader() {
  return Response.json({ message: '不支持的请求方法' }, { status: 405 });
}

/**
 * 天元回调：天元配置部署成功后的回调接口，需要找 @刘建辉(ljh35206) 手动配置
 * 这里以前端路由配置作为示例，如果后续还有前端参数配置等其他数据模型，需要支持相应的动态扩展
 *
 * eg:
 * 查询版本对比数据 http://localhost:5173/api/tyCallback/queryOldData
 * 发布后回调地址  http://localhost:5173/api/tyCallback/execute
 */
export async function action({ request, params }: ActionFunctionArgs) {
  let auditRecord: AuditRecord | null = null;
  let entity: TEntity | null = null;
  let dataPrevious: TEntity | null = null;

  const requestParams = (await getRequestData(request)) as TRequestParams;
  const { func } = params as { func: TFunc };

  try {
    const { param, contentJson } = requestParams || [];

    // 通过 throw Error 来进入 catch，触发更新审核记录状态为 => 失败
    // 直接 Response.json() 也可以，但是不会触发更新审核记录状态
    ['param', 'contentJson'].forEach((key) => {
      if (!requestParams[key as keyof TRequestParams]) {
        throw new Error(`参数缺失: ${key}`);
      }
    });

    const contentJsonObject = JSON.parse(contentJson) as TContentJsonObject;
    ['auditRecordId', 'action'].forEach((key) => {
      if (!contentJsonObject[key as keyof TContentJsonObject]) {
        throw new Error(`参数缺失: ${key}`);
      }
    });

    // 注意: operateType=ADD 不可用，天元缺陷识别为 DELETE，所以这里额外用 actionType 代替
    const { auditRecordId, action: actionType } = contentJsonObject;
    auditRecord = await db.auditRecord.findUnique({
      where: { id: auditRecordId },
    });

    if (!auditRecord) {
      return Response.json({ message: `审核记录 \`${param}\` 不存在` }, { status: 404 });
    }

    const { resource, status, operatedById, data, meta, title, action } = auditRecord;
    if (title !== param) {
      throw new Error(`审核记录配置项不匹配，\`${param}\` != \`${title}\``);
    }
    if (action !== actionType) {
      throw new Error(`审核记录配置项不匹配，\`${actionType}\` != \`${action}\``);
    }

    if (![EnumAuditStatus.PENDING, EnumAuditStatus.FAILED].includes(status as EnumAuditStatus)) {
      return Response.json({ message: `审核记录 \`${param}\` 状态异常: ${status}` }, { status: 400 });
    }

    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource] as TAny;

    const { id } = meta as MetaQuery;
    if (id) {
      entity = await prismaModel.findUnique({
        where: { id },
      });
      if (!entity) {
        throw new Error(`配置 \`${param}\` 不存在`);
      }

      dataPrevious = pick(entity, Object.keys(data || {}) as (keyof TEntity)[]);
    }

    if (func === 'queryOldData') {
      return Response.json({ success: true, contentJson: JSON.stringify(dataPrevious || '{}') }, { status: 200 });
    } else if (func === 'execute') {
      await dbExecute({
        auditRecordId,
        resource,
        actionType,
        data: data as unknown as TEntity,
        dataPrevious: dataPrevious as TEntity,
        id,
        operatedById,
        prismaModel,
      });
      return Response.json({ success: true }, { status: 200 });
    } else {
      return Response.json({ message: `不支持的请求方法: ${func}` }, { status: 405 });
    }
  } catch (error: TAny) {
    if (auditRecord && func === 'execute') {
      await db.auditRecord.update({
        where: { id: auditRecord.id },
        data: {
          status: EnumAuditStatus.FAILED,
          error: error?.message,
        },
      });
    }

    return Response.json({ ...error, message: error?.message }, { status: 500 });
  }
}

// 执行数据CRUD
// 测试用例：tests/e2e/api.tyCallback.$func.spec.ts
async function dbExecute({
  auditRecordId,
  resource,
  actionType,
  data,
  dataPrevious,
  id,
  operatedById,
  prismaModel,
}: {
  auditRecordId: string;
  resource: string;
  actionType?: EnumLogType;
  data: Record<string, TAny>;
  dataPrevious: Record<string, TAny>;
  id?: string | null;
  operatedById?: string | null;
  prismaModel: TAny;
}) {
  try {
    // 操作关联用户
    if (!operatedById) {
      throw new Error(`invalid operatedById: ${operatedById}`);
    }
    const paramsOperatedBy = {
      operatedBy: {
        connect: {
          id: operatedById,
        },
      },
    };
    const paramsEntity = {
      ...data,
      ...paramsOperatedBy,
    };

    // 构建审计日志参数
    const paramsAuditLog = {
      meta: { id, dataProviderName: 'default', parent: 'frontRoute' },
      resource,
      ...paramsOperatedBy,
    };

    // 创建
    if (actionType === EnumLogType.create) {
      await prismaModel.create({
        data: paramsEntity,
      });
      await db.log.create({
        data: {
          ...paramsAuditLog,
          action: EnumLogType.create,
          data: JSON.stringify(data),
        },
      });
    }

    // 修改
    else if (actionType === EnumLogType.update) {
      if (!id) {
        throw new Error(`invalid id: ${id}`);
      }
      await prismaModel.update({
        where: {
          id,
        },
        data: paramsEntity,
      });
      await db.log.create({
        data: {
          ...paramsAuditLog,
          action: EnumLogType.update,
          data,
          dataPrevious,
        },
      });
    }

    // 删除
    else if (actionType === EnumLogType.delete) {
      if (!id) {
        throw new Error(`invalid id: ${id}`);
      }
      await prismaModel.delete({
        where: {
          id,
        },
      });
      await db.log.create({
        data: {
          ...paramsAuditLog,
          action: EnumLogType.delete,
        },
      });
    } else {
      throw new Error(`invalid actionType: ${actionType}`);
    }

    // 更新审核记录
    await db.auditRecord.update({
      where: {
        id: auditRecordId,
      },
      data: {
        status: EnumAuditStatus.RESOLVED,
        error: null,
      },
    });
  } catch (error) {
    throw handlePrismaError(error);
  }
}
