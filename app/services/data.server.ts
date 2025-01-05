import { DataProvider } from '@refinedev/core';
import { dataResources, Resources } from '~/providers';
import { db } from '~/services/db.server';
import { TAny } from '~/types/any';

// 定义操作符
export type FilterOperator = 'eq' | 'contains' | 'gt' | 'lt' | 'gte' | 'lte' | 'in';

// 类型守卫函数
function isPrismaModel(resource: string): resource is Resources {
  return dataResources.some((r) => r.name === resource);
}

// 定义过滤器类型
interface Filter {
  field: string;
  operator: FilterOperator;
  value: TAny;
}

// 定义排序类型
interface Sorter {
  field: string;
  order: 'asc' | 'desc';
}

// 处理过滤条件的函数
function buildWhereClause(filters: Filter[] = []): Record<string, TAny> {
  return filters.reduce((acc, filter) => {
    switch (filter.operator) {
      case 'eq':
        return { ...acc, [filter.field]: filter.value };
      case 'contains':
        return { ...acc, [filter.field]: { contains: filter.value } };
      case 'gt':
        return { ...acc, [filter.field]: { gt: filter.value } };
      case 'lt':
        return { ...acc, [filter.field]: { lt: filter.value } };
      case 'gte':
        return { ...acc, [filter.field]: { gte: filter.value } };
      case 'lte':
        return { ...acc, [filter.field]: { lte: filter.value } };
      case 'in':
        // 如果值已经是数组，直接使用；否则尝试将其转换为数组
        const values = Array.isArray(filter.value) ? filter.value : filter.value.toString().split(',');

        // 对于 id 字段，保持字符串类型；对于其他字段，尝试转换为数字
        const parsedValues =
          filter.field === 'id'
            ? values
            : values.map((v: unknown) => {
                const num = Number(v);
                return isNaN(num) ? v : num;
              });
        return { ...acc, [filter.field]: { in: parsedValues } };
      default:
        return acc;
    }
  }, {});
}

// 处理排序条件的函数
function buildOrderByClause(sorters: Sorter[] = []): Record<string, 'asc' | 'desc'> {
  return sorters.reduce(
    (acc, sorter) => ({
      ...acc,
      [sorter.field]: sorter.order,
    }),
    {}
  );
}

// 处理 Refine 的过滤参数格式
function parseRefineFilters(filters: Filter[]): Filter[] {
  return filters.map((filter) => {
    if (filter.field.startsWith('filter[')) {
      const [field, operator, value] = filter.value.split('||');
      return {
        field,
        operator: operator.replace('$', '') as FilterOperator,
        value,
      };
    }
    return filter;
  });
}

// 数据提供者
export const dataService: DataProvider = {
  // 获取列表数据
  getList: async ({ resource, pagination, sorters, filters, meta }) => {
    const { current = 1, pageSize = 10 } = pagination ?? {};
    const skip = (current - 1) * pageSize;

    // 构建过滤条件
    const parsedFilters = filters ? parseRefineFilters(filters as Filter[]) : [];
    const where = parsedFilters.length > 0 ? buildWhereClause(parsedFilters) : {};

    // 构建排序条件
    const orderBy = sorters ? buildOrderByClause(sorters) : {};

    // 确保 resource 是有效的 Prisma 模型
    if (!isPrismaModel(resource)) {
      throw new Error(`无效的资源类型: ${resource}`);
    }
    const prismaModel = db[resource] as unknown as {
      count: (args: TAny) => Promise<number>;
      findMany: (args: TAny) => Promise<TAny[]>;
    };

    const [total, items] = await Promise.all([
      prismaModel.count({ where }),
      prismaModel.findMany({
        skip,
        take: pageSize,
        where,
        orderBy,
        ...meta,
      }),
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
      throw new Error(`无效的资源类型: ${resource}`);
    }

    const prismaModel = db[resource] as unknown as {
      create: (args: TAny) => Promise<TAny>;
    };

    const data = await prismaModel.create({
      data: variables,
      ...meta,
    });

    return { data };
  },

  // 更新数据
  update: async ({ resource, id, variables, meta }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`无效的资源类型: ${resource}`);
    }
    const prismaModel = db[resource] as unknown as {
      update: (args: TAny) => Promise<TAny>;
    };

    const data = await prismaModel.update({
      where: { id },
      data: variables,
      ...meta,
    });

    return { data };
  },

  // 删除数据
  deleteOne: async ({ resource, id, meta }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`无效的资源类型: ${resource}`);
    }
    const prismaModel = db[resource] as unknown as {
      delete: (args: TAny) => Promise<TAny>;
    };

    const data = await prismaModel.delete({
      where: { id },
      ...meta,
    });

    return { data };
  },

  // 获取单条数据
  getOne: async ({ resource, id, meta }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`无效的资源类型: ${resource}`);
    }
    const prismaModel = db[resource] as unknown as {
      findUnique: (args: TAny) => Promise<TAny>;
    };

    const data = await prismaModel.findUnique({
      where: { id },
      ...meta,
    });

    if (!data) {
      throw new Error(`${resource} 中没有找到 id 为 ${id} 的数据`);
    }

    return { data };
  },

  // 获取 API URL
  // 用 db 时不需要 API URL
  getApiUrl: () => {
    return '';
  },

  // 获取多条数据
  getMany: async ({ resource, ids, meta }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`无效的资源类型: ${resource}`);
    }

    const prismaModel = db[resource] as unknown as {
      findMany: (args: TAny) => Promise<TAny[]>;
    };

    const data = await prismaModel.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      ...meta,
    });

    return {
      data,
    };
  },

  // 批量创建
  createMany: async ({ resource, variables, meta }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`无效的资源类型: ${resource}`);
    }

    const prismaModel = db[resource] as unknown as {
      createMany: (args: TAny) => Promise<TAny>;
    };

    const data = await prismaModel.createMany({
      data: variables,
      ...meta,
    });

    return {
      data,
    };
  },

  // 批量删除
  deleteMany: async ({ resource, ids, meta }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`无效的资源类型: ${resource}`);
    }

    const prismaModel = db[resource] as unknown as {
      deleteMany: (args: TAny) => Promise<TAny>;
    };

    const data = await prismaModel.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
      ...meta,
    });

    return {
      data,
    };
  },

  // 批量更新
  updateMany: async ({ resource, ids, variables, meta }) => {
    if (!isPrismaModel(resource)) {
      throw new Error(`无效的资源类型: ${resource}`);
    }

    const prismaModel = db[resource] as unknown as {
      updateMany: (args: TAny) => Promise<TAny>;
    };

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
      data,
    };
  },

  // 自定义请求
  // 由于使用 db，通常不需要这个方法，但为了完整性保留
  custom: async () => {
    throw new Error('Custom method not implemented');
  },
};
