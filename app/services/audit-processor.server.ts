import { AuditRecord, AuditStatus } from '@prisma/client';

import { executeAudit } from './audit-executors.server';
import { db } from './db.server';

/**
 * 审核处理服务
 * 用于处理审核记录的状态变更和执行相应的事务
 */
/**
 * 审核处理服务
 * 用于处理审核记录的状态变更和执行相应的事务
 */
export const AuditProcessor = {
  /**
   * 审核通过
   * @param id 审核记录ID
   * @returns 处理结果
   */
  async approve(id: string): Promise<{
    success: boolean;
    message: string;
    record?: AuditRecord;
  }> {
    try {
      // 获取审核记录
      const record = await db.auditRecord.findUnique({
        where: { id },
      });

      if (!record) {
        return {
          success: false,
          message: '未找到审核记录',
        };
      }

      // 检查审核记录状态
      if (record.status !== AuditStatus.PENDING) {
        return {
          success: false,
          message: `审核记录状态不是待处理状态，当前状态: ${record.status}`,
          record,
        };
      }

      // 执行审核事务
      const success = await executeAudit(record);
      const updatedRecord = await db.auditRecord.findUnique({
        where: { id },
      });

      if (!success) {
        return {
          success: false,
          message: `审核事务执行失败: ${updatedRecord?.error || '未知错误'}`,
          record: updatedRecord || record,
        };
      }

      return {
        success: true,
        message: '审核通过并成功执行事务',
        record: updatedRecord || record,
      };
    } catch (error) {
      // 更新审核记录状态为失败
      await db.auditRecord.update({
        where: { id },
        data: {
          status: AuditStatus.FAILED,
          error: error instanceof Error ? error.message : '未知错误',
        },
      });

      return {
        success: false,
        message: `处理审核时发生错误: ${error instanceof Error ? error.message : '未知错误'}`,
      };
    }
  },

  /**
   * 审核拒绝
   * @param id 审核记录ID
   * @param reason 拒绝原因
   * @returns 处理结果
   */
  async reject(
    id: string,
    reason: string
  ): Promise<{
    success: boolean;
    message: string;
    record?: AuditRecord;
  }> {
    try {
      // 获取审核记录
      const record = await db.auditRecord.findUnique({
        where: { id },
      });

      if (!record) {
        return {
          success: false,
          message: '未找到审核记录',
        };
      }

      // 检查审核记录状态
      if (record.status !== AuditStatus.PENDING) {
        return {
          success: false,
          message: `审核记录状态不是待处理状态，当前状态: ${record.status}`,
          record,
        };
      }

      // 更新审核记录状态为拒绝
      const updatedRecord = await db.auditRecord.update({
        where: { id },
        data: {
          status: AuditStatus.REJECTED,
          error: reason || '审核被拒绝',
        },
      });

      return {
        success: true,
        message: '审核已拒绝',
        record: updatedRecord,
      };
    } catch (error) {
      return {
        success: false,
        message: `处理审核时发生错误: ${error instanceof Error ? error.message : '未知错误'}`,
      };
    }
  },
};
