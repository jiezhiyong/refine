import type { RequestQueryBuilder } from '@nestjsx/crud-request';
import type { Pagination } from '@refinedev/core';
import { DEFAULT_PAGE_SIZE } from '~/config/pagination';

export const handlePagination = (query: RequestQueryBuilder, pagination?: Pagination) => {
  const { current = 1, pageSize = DEFAULT_PAGE_SIZE, mode = 'server' } = pagination ?? {};

  if (mode === 'server') {
    query
      .setLimit(pageSize)
      .setPage(current)
      .setOffset((current - 1) * pageSize);
  }

  return query;
};
