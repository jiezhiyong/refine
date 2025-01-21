import { AuditLogProvider, BaseKey, MetaQuery } from '@refinedev/core';
import { EnumResource } from '~/constants';
import { TAny } from '~/types';
import { dataProvider } from './data';

export const auditLogProvider: AuditLogProvider = {
  get: async (params: {
    resource: string;
    action?: string;
    meta?: Record<number | string, any>;
    author?: Record<number | string, any>;
    metaData?: MetaQuery;
  }) => {
    const { resource, action, meta, author, metaData } = params;

    const filters = [
      {
        field: 'resource',
        operator: 'eq' as const,
        value: resource,
      },
    ];

    if (action) {
      filters.push({
        field: 'action',
        operator: 'eq' as const,
        value: action,
      });
    }

    if (meta?.id) {
      filters.push({
        field: 'meta.id',
        operator: 'eq' as const,
        value: meta.id,
      });
    }

    if (author?.id) {
      filters.push({
        field: 'userId',
        operator: 'eq' as const,
        value: author.id,
      });
    }

    const { data } = await dataProvider.getList({
      resource: EnumResource.log,
      filters,
      pagination: metaData?.pagination,
      sort: metaData?.sort,
    });

    return data;
  },

  create: async (params: {
    resource: string;
    action: string;
    data?: TAny;
    author?: Record<number | string, any>;
    previousData?: TAny;
    meta?: Record<number | string, any>;
  }) => {
    const { resource, action, data, previousData, meta } = params;

    const logEntry = {
      resource,
      action,
      data: JSON.stringify(data),
      previousData: JSON.stringify(previousData),
      meta: JSON.stringify(meta),
    };

    const response = await dataProvider.create({
      resource: EnumResource.log,
      variables: logEntry,
    });

    return response.data;
  },

  update: async (params: { id: BaseKey; name: string }) => {
    const { id, name } = params;

    const response = await dataProvider.update({
      resource: EnumResource.log,
      id,
      variables: {
        name,
        updatedAt: Date.now(),
      },
    });

    return response.data;
  },
};
