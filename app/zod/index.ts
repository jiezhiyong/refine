export * from './base';
export * from './casbin-rule';
export * from './category';
export * from './front-route-module';
export * from './front-route-project';
export * from './log';
export * from './post';
export * from './role';
export * from './user';
export * from './login-register';
export * from './audit-record';
export * from './dynamic-page';

import { schemaAuditRecord } from '~/zod/audit-record';
import { schemaCasbinRule } from '~/zod/casbin-rule';
import { schemaCategory } from '~/zod/category';
import { schemaDynamicPage } from '~/zod/dynamic-page';
import { schemaFrontRouteModule } from '~/zod/front-route-module';
import { schemaFrontRouteProject } from '~/zod/front-route-project';
import { schemaLog } from '~/zod/log';
import { schemaPost } from '~/zod/post';
import { schemaRole } from '~/zod/role';
import { schemaUser } from '~/zod/user';

// 导出所有 Schema 映射，提供给服务端使用校验
export const schemaMap = {
  post: schemaPost,
  category: schemaCategory,
  role: schemaRole,
  user: schemaUser,
  casbinRule: schemaCasbinRule,
  log: schemaLog,
  frontRouteModule: schemaFrontRouteModule,
  frontRouteProject: schemaFrontRouteProject,
  auditRecord: schemaAuditRecord,
  dynamicPage: schemaDynamicPage,
} as const;
