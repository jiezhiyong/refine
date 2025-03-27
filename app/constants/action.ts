export enum EnumAction {
  list = 'list',
  show = 'show',
  create = 'create',
  edit = 'edit',
  delete = 'delete',
  field = 'field',
  import = 'import',
  export = 'export',
  clone = 'clone',
}

export type TAction = `${EnumAction}`;

export const ACTIONS_LIST = Object.values(EnumAction);

export const ACTIONS_MAP = {
  [EnumAction.list]: { name: '列表' },
  [EnumAction.show]: { name: '详情' },
  [EnumAction.create]: { name: '新增' },
  [EnumAction.edit]: { name: '修改' },
  [EnumAction.delete]: { name: '删除' },
  [EnumAction.field]: { name: '字段' },
  [EnumAction.import]: { name: '导入' },
  [EnumAction.export]: { name: '导出' },
  [EnumAction.clone]: { name: '克隆' },
};
