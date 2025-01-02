import { DataProvider, ResourceProps } from '@refinedev/core';
import { Resources, resources } from '~/config/data-resources';
import { db } from '~/services/db.server';
import { TAny } from '~/types/any';

// 定义操作符
export type FilterOperator = 'eq' | 'contains' | 'gt' | 'lt' | 'gte' | 'lte';

// 类型守卫函数
function isPrismaModel(resource: string): resource is Resources {
  return resources.includes(resource as Resources);
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

// 根据定义的数据资源，生成数据资源配置
export const dataResources: ResourceProps[] = resources.map((name) => ({
  name,
  list: `/${name}`,
  create: `/${name}/create`,
  edit: `/${name}/edit/:id`,
  show: `/${name}/show/:id`,
  meta: { label: name, icon: '', canDelete: true },
}));

// 数据提供者
export const dataService: DataProvider = {
  // 获取列表数据
  getList: async ({ resource, pagination, sorters, filters, meta }) => {
    const { current = 1, pageSize = 10 } = pagination ?? {};
    const skip = (current - 1) * pageSize;

    // 构建过滤条件
    const where = filters ? buildWhereClause(filters as Filter[]) : {};

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

    const [total, data] = await Promise.all([
      prismaModel.count({ where }),
      prismaModel.findMany({
        skip,
        take: pageSize,
        where,
        orderBy,
        ...meta,
      }),
    ]);

    return {
      data,
      total,
    };
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

    return {
      data,
    };
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

    return {
      data,
    };
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

    return {
      data,
    };
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

    return {
      data,
    };
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
      findMany: (args: TAny) => Promise<TAny>;
    };

    const data = await prismaModel.findMany({
      where: {
        id: { in: ids },
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
        id: { in: ids },
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
        id: { in: ids },
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
