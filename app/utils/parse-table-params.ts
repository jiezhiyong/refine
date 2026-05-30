import type { GetListParams } from '@refinedev/core';
import qs from 'qs';

export const parseTableParams = (search: string): Omit<GetListParams, 'resource'> => {
  const parsed = qs.parse(search, { ignoreQueryPrefix: true });
  const tableReady = {
    ...parsed,
    pagination: {
      currentPage: parsed.currentPage,
      pageSize: parsed.pageSize,
    },
  } as Omit<GetListParams, 'resource'> & {
    currentPage?: unknown;
    pageSize?: unknown;
  };
  delete tableReady.currentPage;
  delete tableReady.pageSize;
  return tableReady;
};
