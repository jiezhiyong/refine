// Casbin 规则配置
export const CASBIN_POLICIES = [
  // 管理员权限
  ['p', 'administrator', '*', 'list|show|create|edit|delete|field|import|export|clone'],

  // 编辑者权限
  ['p', 'editor', '*', 'list|show|export|field'],
  ['p', 'editor', 'auditRecord', 'create'],
  ['p', 'editor', 'auditRecord/*', 'create|show|edit'],
  ['p', 'editor', 'post', 'list|export|create|field|import'],
  ['p', 'editor', 'post/*', 'show|edit|delete|field|clone'],
  ['p', 'editor', 'post/hit', 'field', 'deny'],

  // 访客权限
  ['p', 'guest', '*', 'list|show'],
  ['p', 'guest', 'auditRecord', 'create'],
  ['p', 'guest', 'auditRecord/*', 'create|show|edit'],
];
