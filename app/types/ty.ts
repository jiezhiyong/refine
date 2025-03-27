import { BaseKey } from '@refinedev/core';

import { EnumLogType } from '~/constants/log';
import { TAny } from '~/types/any';

// 天元需求类型
export type TyIssues = {
  issueId: number;
  projectId: number;
  title: string;
  statusName: string;
};

// 天元数据操作类型，注意: ADD 不可用，天元缺陷识别为 DELETE
export enum OperateTypeEnum {
  ADD = 'ADD',
  MODIFY = 'MODIFY',
  DELETE = 'DELETE',
}

export type TConfigParam = string; // eg: 'frontRoute:ykcz:offline-repay'

export type TDeployServiceHistory = {
  param: TConfigParam;
};

// 天元配置发布申请记录类型
export type TyHistory = {
  id: string;
  commitTime: string;
  commitUser: string;
  configType: string;
  contentJson: string;
  env: string;
  issueId: string;
  operateType: OperateTypeEnum;
  param: string;
  deployStatus?: '3';
};

export type TConfigType = 'frontRoute' | 'unknown';
export type TContentJsonObject = Record<string, TAny> & { action?: EnumLogType; id?: string };

export type TDeployServiceBuild = {
  operateType: OperateTypeEnum;
  issueId: string;
  contentJsonObject: TContentJsonObject;
  configType: TConfigType;
  param: TConfigParam;
};

export type TAuditRecord = {
  id?: BaseKey;
  resource?: string;
  data?: Record<string, TAny>;
  dataPrevious?: Record<string, TAny>;
};
