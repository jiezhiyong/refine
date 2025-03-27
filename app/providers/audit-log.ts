import { AuditLogProvider, BaseKey, MetaQuery } from '@refinedev/core';

import { EnumResource } from '~/constants/resource';
import { TAny } from '~/types/any';

import { dataProvider } from './data';

export const auditLogProvider: AuditLogProvider = {
  get: async (params: {
    resource: string;
    action?: string;
    meta?: Record<number | string, TAny>;
    author?: Record<number | string, TAny>;
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
    author?: Record<number | string, TAny>;
    previousData?: TAny;
    meta?: Record<number | string, TAny>;
  }) => {
    const { resource, action, data, previousData: dataPrevious, meta } = params;

    // 追加自定义字段
    const { AUDIT_LOG_CUSTOM_OLD = {}, AUDIT_LOG_CUSTOM_NEW = {}, ...restData } = data || {};
    const variables: Record<string, TAny> = {
      resource,
      action,
      meta,
    };

    const dataNew = { ...restData, ...AUDIT_LOG_CUSTOM_NEW };
    if (Object.keys(dataNew).length) {
      variables.data = dataNew;
    }

    const dataPreviousNew = { ...dataPrevious, ...AUDIT_LOG_CUSTOM_OLD };
    if (Object.keys(dataPreviousNew).length) {
      variables.dataPrevious = dataPreviousNew;
    }

    const response = await dataProvider.create({
      resource: EnumResource.log,
      variables,
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
