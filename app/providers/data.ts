import dataProviderNestjsCrud from '@refinedev/nestjsx-crud';

export const API_URL = 'https://api.fake-rest.refine.dev';

export const dataProvider = dataProviderNestjsCrud(API_URL);
