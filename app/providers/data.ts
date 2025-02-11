import { DataProvider } from '@refinedev/core';

import { apiBase } from '~/config';
import dataProviderNestjsxCrud from '~/lib/refinedev-nestjsx-crud';

export const dataProvider: DataProvider = dataProviderNestjsxCrud(apiBase);
