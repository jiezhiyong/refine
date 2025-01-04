import { DataProvider, ResourceProps } from '@refinedev/core';
import dataProviderSimpleRest from '@refinedev/simple-rest';
import { resources } from '~/config/data-resources';
import { getBaseUrl } from '~/config/base-url';

// 根据定义的数据资源，生成数据资源配置
export const dataResources: ResourceProps[] = resources.map((name) => ({
  name,
  list: `/${name}`,
  create: `/${name}/create`,
  edit: `/${name}/edit/:id`,
  show: `/${name}/show/:id`,
  meta: { label: name, icon: '', canDelete: true },
}));

// 使用 @refinedev/simple-rest, 并配置正确的基础 URL
export const apiBase = getBaseUrl() + '/api';
export const dataProvider: DataProvider = dataProviderSimpleRest(apiBase);
