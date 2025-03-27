import { AuditRecord } from '@prisma/client';
import { ActionFunctionArgs } from '@remix-run/node';
import { pick } from 'es-toolkit';

import { EnumAuditChannel } from '~/constants/audit-channel';
import { EnumAuditStatus } from '~/constants/audit-status';
import { EnumLogType } from '~/constants/log';
import { EnumResource } from '~/constants/resource';
import { db, isPrismaModel } from '~/services/db.server';
import { requireUser } from '~/services/session.server';
import { tyServer } from '~/services/ty.server';
import { TAny } from '~/types/any';
import { OperateTypeEnum, TAuditRecord, TDeployServiceBuild } from '~/types/ty';
import { getRequestData } from '~/utils/get-request-data';
import { validateRequestSignature } from '~/utils/signature';

export async function loader() {
  return Response.json({ message: '不支持的请求方法' }, { status: 405 });
}

export async function action({ request, params }: ActionFunctionArgs) {
  try {
    const signatureValid = await validateRequestSignature(request);
    if (!signatureValid) {
      return Response.json({ message: '请求签名无效' }, { status: 401 });
    }

    const { user } = await requireUser(request);

    const { func } = params;
    const requestParams = await getRequestData<TDeployServiceBuild & TAuditRecord>(request);

    const { operateType, param, id, resource, data, dataPrevious, contentJsonObject } = requestParams;
    if (!contentJsonObject) {
      requestParams.contentJsonObject = {};
    }

    const apiFunc = tyServer[func as keyof typeof tyServer];
    if (!apiFunc) {
      throw new Error(`函数 \`${func}\` 不存在`);
    }

    if (func === 'getMyIssues') {
      const res = await tyServer.getMyIssues(request);
      return Response.json({ data: res }, { status: 200 });
    } else if (func === 'deployServiceHistory') {
      const res = await tyServer.deployServiceHistory(request, { param });
      return Response.json({ data: res }, { status: 200 });
    }

    // 以下是发布审核逻辑 deployServiceBuild
    if (!resource || !isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource] as TAny;

    // 创建校验
    if (operateType === OperateTypeEnum.ADD) {
      const exist = await prismaModel.findUnique({
        where: { title: data?.title },
      });
      if (exist) {
        throw new Error(`\`${data?.title}\` already exist`);
      }
    }

    // 修改、删除校验
    else {
      const exist = await prismaModel.findUnique({
        where: { id },
      });
      if (!exist) {
        throw new Error(`\`${id}\` not exist`);
      }
    }

    // 删除项目时，额外的外键约束校验
    if (operateType === OperateTypeEnum.DELETE && resource === EnumResource.frontRouteProject) {
      const related = await db.frontRouteModule.count({
        where: {
          projectId: String(id),
        },
      });
      if (related > 0) {
        throw new Error(`存在与该项目关联的模块数据，不可删除`);
      }
    }

    // 配置发布申请
    let auditRecord: AuditRecord | null = null;

    const actionTypeMap: Record<string, EnumLogType> = {
      [OperateTypeEnum.ADD]: EnumLogType.create,
      [OperateTypeEnum.MODIFY]: EnumLogType.update,
      [OperateTypeEnum.DELETE]: EnumLogType.delete,
    };
    const actionType = actionTypeMap[operateType];

    const isModify = operateType === OperateTypeEnum.MODIFY;

    // 查找旧审查记录
    const oldAuditRecord = await db.auditRecord.findFirst({
      where: { title: param },
    });

    // 创建审查记录
    auditRecord = await db.auditRecord.create({
      data: {
        channel: EnumAuditChannel.TIAN_YUAN,
        meta: { parent: 'frontRoute', id },
        title: param,
        dataPrevious: isModify ? dataPrevious : undefined,
        resource: resource || 'unknown',
        data,
        status: EnumAuditStatus.PENDING,
        action: actionType,
        operatedBy: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    // 删除旧审查记录
    if (oldAuditRecord) {
      await db.auditRecord.delete({
        where: { id: oldAuditRecord.id },
      });
    }

    // 构建参数
    const props = pick(requestParams, ['operateType', 'issueId', 'contentJsonObject', 'configType', 'param']);

    // 追加审核记录ID
    props.contentJsonObject.auditRecordId = auditRecord?.id;
    props.contentJsonObject.action = actionType;

    // 注意: ADD 不可用，天元缺陷识别为 DELETE
    if (props.operateType === OperateTypeEnum.ADD) {
      props.operateType = OperateTypeEnum.MODIFY;
    }

    // 执行API
    const res = await apiFunc(request, props);
    return Response.json({ data: res }, { status: 200 });
  } catch (error: TAny) {
    return Response.json({ ...error, message: error?.message }, { status: 500 });
  }
}
