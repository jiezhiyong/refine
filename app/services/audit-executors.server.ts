import { AuditRecord, AuditStatus, LogAction } from '@prisma/client';
import { BaseOption } from '@refinedev/core';

import { updateUserRoles } from '~/services/user.server';
import { TAny } from '~/types/any';

import { db, isPrismaModel } from './db.server';

/**
 * 审核执行器类型
 */
type AuditExecutorFn = (record: AuditRecord) => Promise<boolean>;

/**
 * 审核执行器映射
 */
interface AuditExecutorMap {
  [resource: string]: {
    [action in LogAction]?: AuditExecutorFn;
  };
}

/**
 * 更新审核记录状态
 * @param id 审核记录ID
 * @param status 状态
 * @param error 错误信息
 */
async function updateAuditRecordStatus(id: string, status: AuditStatus, error?: string): Promise<void> {
  await db.auditRecord.update({
    where: { id },
    data: {
      status,
      ...(error ? { error } : {}),
    },
  });
}

/**
 * 执行器包装器
 * 包装执行器函数，添加错误处理和状态更新
 * @param fn 执行器函数
 */
function executorWrapper(fn: AuditExecutorFn): AuditExecutorFn {
  return async (record: AuditRecord) => {
    try {
      // 执行具体操作
      const result = await fn(record);

      // 更新审核记录状态为已批准
      await updateAuditRecordStatus(record.id, AuditStatus.RESOLVED);

      return result;
    } catch (error) {
      // 更新审核记录状态为失败
      await updateAuditRecordStatus(record.id, AuditStatus.FAILED, error instanceof Error ? error.message : '未知错误');

      return false;
    }
  };
}

/**
 * 角色更新执行器
 * 处理角色申请的审核
 */
const executorRoleUpdate = executorWrapper(async (record: AuditRecord) => {
  const { operatedById, data } = record;

  const roles = data as BaseOption[];
  if (!roles || !Array.isArray(roles)) {
    throw new Error('无效的角色数据');
  }
  await updateUserRoles({ roleIds: roles.map((r) => r.value), userId: operatedById! });
  return true;
});

/**
 * 通用数据模型执行器
 * 根据 resource 和 action 动态执行相应的数据库操作
 */
const genericModelExecutor = executorWrapper(async (record: AuditRecord) => {
  const { resource, action, data, meta } = record;

  // 检查资源是否存在于 Prisma 模型中
  if (!isPrismaModel(resource)) {
    throw new Error(`invalid resource type: ${resource}`);
  }
  const prismaModel = db[resource] as TAny;

  // 根据操作类型执行相应的数据库操作
  switch (action) {
    case LogAction.create: {
      await prismaModel.create({
        data: {
          ...(data as object),
          operatedById: record.operatedById,
        },
      });
      break;
    }

    case LogAction.update: {
      const updateId = (meta as Record<string, string>)?.id;
      if (!updateId) {
        throw new Error('更新操作缺少目标ID');
      }
      await prismaModel.update({
        where: { id: updateId },
        data,
      });
      break;
    }

    case LogAction.delete: {
      const deleteId = (meta as Record<string, string>)?.id;
      if (!deleteId) {
        throw new Error('删除操作缺少目标ID');
      }
      await prismaModel.delete({
        where: { id: deleteId },
      });
      break;
    }

    default:
      throw new Error(`不支持的操作类型: ${action}`);
  }

  return true;
});

/**
 * 审核执行器映射表 - 自定义
 */
const executorMap: AuditExecutorMap = {
  role: {
    [LogAction.update]: executorRoleUpdate,
  },
};

/**
 * 执行审核
 * @param record 审核记录
 * @returns 执行结果，成功返回 true，失败返回 false
 */
async function executeAudit(record: AuditRecord): Promise<boolean> {
  const { resource, action } = record;

  // 先检查是否有特定的执行器
  const specificExecutor = executorMap[resource]?.[action];

  if (specificExecutor) {
    return specificExecutor(record);
  }

  // 如果没有特定执行器，尝试使用通用执行器
  return await genericModelExecutor(record);
}

export { executeAudit };
