export const dynamicPages = [
  {
    path: '/playground/dashboard/dynamic/post',
    title: '文章管理',
    isActive: true,
    enableCreate: true,
    enableDelete: true,
    enableEdit: true,
    enableClone: true,
    db: 'db1',
    tableSql: `SELECT 
  p."id", 
  p."title", 
  c."title" AS "category", 
  p."hit", 
  p."status", 
  p."updatedAt", 
  u."name" AS "operatedBy" 
FROM 
  "Post" p 
JOIN 
  "Category" c ON p."categoryId" = c.id 
JOIN 
  "User" u ON p."operatedById" = u.id 
WHERE 
  p."deleted" IS NOT TRUE 
ORDER BY 
  p."updatedAt" DESC;`,
    tableRecordLink: [{ name: '日志', url: '/system/admin/log?id={id}&category={category}' }],
    // tableField: [
    //   { name: 'id', defaultHide: true },
    //   { name: 'title' },
    //   { name: 'category' },
    //   { name: 'hit' },
    //   { name: 'status' },
    //   { name: 'updatedAt' },
    //   { name: 'operatedBy' },
    // ],
    formField: [
      {
        label: '标题',
        name: 'title',
        type: 'text',
        required: true,
        readonly: false,
        description: '请注意保持该字段的唯一性',
      },
      { label: '启用', name: 'active', type: 'switch', description: '是否启用' },
      { label: '允许删除', name: 'enableDelete', type: 'switch', description: '是否允许删除' },
      {
        label: '价格范围',
        name: 'priceRange',
        type: 'slider',
        min: 0,
        max: 100,
        step: 1,
        description: '请选择价格范围',
      },
      {
        label: '分类',
        name: 'categoryId',
        type: 'select',
        optionsType: 'database',
        optionsSql: 'SELECT id AS value, title AS label FROM "Category" ORDER BY title ASC',
        optionsMap: { key: '', label: '', value: '' },
        description: '请选择分类',
      },
      {
        label: '角色',
        name: 'roles',
        type: 'selectMany',
        optionsType: 'static',
        optionsStatic: [
          { label: '管理员', value: 'admin' },
          { label: '编辑', value: 'editor' },
          { label: '访客', value: 'guest' },
        ],
        description: '请选择角色',
      },
      {
        label: '期数',
        name: 'periods',
        type: 'checkboxMany',
        optionsType: 'static',
        optionsStatic: [
          { label: '12期', value: '12' },
          { label: '24期', value: '24' },
          { label: '36期', value: '36' },
          { label: '48期', value: '48' },
        ],
        description: '请选择期数',
      },
      {
        label: '状态',
        name: 'status',
        type: 'radio',
        optionsType: 'static',
        optionsStatic: [
          { label: '草稿', value: 'DRAFT' },
          { label: '已发布', value: 'PUBLISHED' },
          { label: '已拒绝', value: 'REJECTED' },
        ],
        description: '请选择状态',
      },
      { label: '日期', name: 'date', type: 'date', start: '2025-03-01', end: '2025-5-31', description: '请选择日期' },
      {
        label: '日期范围',
        name: 'dateRange',
        type: 'dateRange',
        start: '2025-03-01',
        end: '2025-5-31',
        description: '请选择日期范围',
      },
      {
        label: '日期多选',
        name: 'dateMany',
        type: 'dateMany',
        start: '2025-03-01',
        end: '2025-5-31',
        description: '请选择日期多选',
      },
      { label: '头像', name: 'image', type: 'file', readonly: true, description: '请上传头像' },
      { label: '价格', name: 'price', type: 'number', min: 0, max: 1000000, description: '单位: 元' },
      { label: '内容', name: 'content', type: 'textarea', description: '请输入描述' },
      { label: 'RPC配置', name: 'rpc', type: 'code', language: 'json', description: '请输入RPC配置' },
      {
        label: '同步设置',
        name: 'sync',
        type: 'checkbox',
        description: '是否开启手机、电脑设置同步',
      },
    ],
    meta: {},
  },
];
