import { AuditLogProvider, BaseKey, MetaQuery } from '@refinedev/core';
import { dataProvider } from './data';
import { TAny } from '~/types/any';

export const auditLogProvider: AuditLogProvider = {
  get: async (params: {
    resource: string;
    action?: string;
    meta?: Record<string, TAny>;
    author?: Record<string, TAny>;
    metaData?: MetaQuery;
  }) => {
    const { resource, action, meta, author, metaData } = params;

    const { data } = await dataProvider.getList({
      resource: 'logs',
      filters: [
        {
          field: 'resource',
          operator: 'eq',
          value: resource,
        },
        {
          field: 'meta.id',
          operator: 'eq',
          value: meta?.id,
        },
      ],
    });

    return data;
  },

  create: (params: {
    resource: string;
    action: string;
    data?: TAny;
    author?: {
      name?: string;
      [key: string]: TAny;
    };
    previousData?: TAny;
    meta?: Record<string, TAny>;
  }) => {
    return dataProvider.create({
      resource: 'logs',
      variables: params,
    });
  },

  update: async (params: { id: BaseKey; name: string }) => {
    const { id, name } = params;
    const { data } = await dataProvider.update({
      resource: 'logs',
      id,
      variables: { name },
    });
    return data;
  },
};
