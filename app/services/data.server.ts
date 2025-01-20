import { DataProvider } from '@refinedev/core';
import { DEFAULT_PAGE_SIZE } from '~/config/pagination';
import { dataResources } from '~/config/resources';
import { Resources } from '~/constants/resource';
import { db } from '~/services/db.server';
import { PrismaFunc } from '~/types';
import { buildOrderByClause, buildWhereClause, Filter, parseRefineFilters, processDateFields } from '~/utils';

function isPrismaModel(resource: string): resource is Resources {
  return dataResources.some((r) => r.name.endsWith(resource));
}

export const dataService: DataProvider = {
  // 获取列表数据
  getList: async ({ resource, pagination, sorters, filters, meta }) => {
    const { current = 1, pageSize = DEFAULT_PAGE_SIZE } = pagination ?? {};
    const skip = (Number(current) - 1) * Number(pageSize);

    // 构建过滤条件
    const parsedFilters = filters ? parseRefineFilters(filters as Filter[]) : [];
    const where = parsedFilters.length > 0 ? buildWhereClause(parsedFilters) : {};

    // 构建排序条件
    const orderBy = sorters ? buildOrderByClause(sorters) : {};
    if (!Object.keys(orderBy).length) {
      orderBy.createdAt = 'desc';
    }

    // 确保 resource 是有效的 Prisma 模型
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource] as PrismaFunc;

    // 处理关联字段的查询条件
    const whereCondition = Object.entries(where).reduce((acc, [key, value]) => {
      if (key.includes('.')) {
        const [relation, field] = key.split('.');
        return {
          ...acc,
          [relation]: {
            [field]: value,
          },
        };
      }
      return { ...acc, [key]: value };
    }, {});

    // 处理所有查询条件中的日期字段
    const processedWhereCondition = processDateFields(whereCondition);

    const queryParams = {
      skip,
      take: Number(pageSize),
      where: processedWhereCondition,
      orderBy,
      ...meta,
    };

    const [total, items] = await Promise.all([
      prismaModel.count({ where: processedWhereCondition }),
      prismaModel.findMany(queryParams),
    ]);

    // 确保返回的数据格式符合 Refine 的期望
    const result = {
      data: items,
      total,
    };

    return result;
  },

  // 创建数据
  create: async ({ resource, variables, meta }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource] as PrismaFunc;

    const data = await prismaModel.create({
      data: variables,
      ...meta,
    });
    return {
      success: true,
      data,
    };
  },

  // 更新数据
  update: async ({ resource, id, variables, meta }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource] as PrismaFunc;

    // 先检查记录是否存在
    const existingRecord = await prismaModel.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!existingRecord) {
      throw new Error(`要更新的 \`${resource}\` 记录不存在, ID: ${id}`);
    }

    const data = await prismaModel.update({
      where: { id },
      data: variables,
      ...meta,
    });

    return {
      success: true,
      data,
    };
  },

  // 删除数据
  deleteOne: async ({ resource, id, meta }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource] as PrismaFunc;

    // 先检查记录是否存在
    const existingRecord = await prismaModel.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!existingRecord) {
      throw new Error(`要删除的 \`${resource}\` 记录不存在, ID: ${id}`);
    }

    const data = await prismaModel.delete({
      where: { id },
      ...meta,
    });

    return {
      success: true,
      data,
    };
  },

  // 获取单条数据
  getOne: async ({ resource, id, meta }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource] as PrismaFunc;

    const data = await prismaModel.findUnique({
      where: { id },
      ...meta,
    });

    if (!data) {
      throw new Error(`${resource} 中没有找到 id 为 ${id} 的数据`);
    }

    return {
      success: true,
      data,
    };
  },

  // 获取多条数据
  getMany: async ({ resource, ids, meta }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource] as PrismaFunc;

    const data = await prismaModel.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      ...meta,
    });

    return {
      success: true,
      data,
    };
  },

  // 批量创建
  createMany: async ({ resource, variables, meta }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource] as PrismaFunc;

    const data = await prismaModel.createMany({
      data: variables,
      ...meta,
    });

    return {
      success: true,
      data,
    };
  },

  // 批量删除
  deleteMany: async ({ resource, ids, meta }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource] as PrismaFunc;

    // 检查所有要删除的记录是否存在
    const existingRecords = await prismaModel.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      select: { id: true },
    });

    // 找出不存在的ID
    const existingIds = existingRecords.map((record) => record.id);
    const nonExistingIds = ids.filter((id) => !existingIds.includes(id));

    if (nonExistingIds.length > 0) {
      throw new Error(`要删除的 \`${resource}\` 记录不存在, ID: ${nonExistingIds.join(', ')}`);
    }

    const data = await prismaModel.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
      ...meta,
    });

    return {
      success: true,
      data,
    };
  },

  // 批量更新
  updateMany: async ({ resource, ids, variables, meta }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`invalid resource type: ${resource}`);
    }
    const prismaModel = db[resource] as PrismaFunc;

    // 先检查记录是否存在
    const existingRecords = await prismaModel.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      select: { id: true },
    });

    // 找出不存在的ID
    const existingIds = existingRecords.map((record) => record.id);
    const nonExistingIds = ids.filter((id) => !existingIds.includes(id));

    if (nonExistingIds.length > 0) {
      throw new Error(`要更新的 \`${resource}\` 记录不存在, ID: ${nonExistingIds.join(', ')}`);
    }

    const data = await prismaModel.updateMany({
      where: {
        id: {
          in: ids,
        },
      },
      data: variables,
      ...meta,
    });

    return {
      success: true,
      data,
    };
  },

  // 获取 API URL
  // 用 db 时不需要 API URL，但为了展示完整性保留
  getApiUrl: () => {
    return '';
  },

  // 自定义请求
  // 由于使用 db，通常不需要这个方法，但为了展示完整性保留
  custom: async () => {
    throw new Error('Custom method not implemented');
  },
};
