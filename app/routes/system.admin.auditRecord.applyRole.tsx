import { zodResolver } from '@hookform/resolvers/zod';
import { AuditRecord, CasbinRule, Role } from '@prisma/client';
import { BaseOption } from '@refinedev/core';
import { useForm } from '@refinedev/react-hook-form';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { t } from 'i18next';
import { useEffect, useMemo, useState } from 'react';
import { z } from 'zod';

import { PageError } from '~/components/500';
import { Field } from '~/components/refine/form/field';
import { FormEasy } from '~/components/refine/form/form';
import { SelectMulti } from '~/components/refine/form/select-multi';
import { Badge } from '~/components/ui/badge';
import { Card, CardContent } from '~/components/ui/card';
import { Checkbox } from '~/components/ui/checkbox';
import { Label } from '~/components/ui/label';
import { H2 } from '~/components/ui/typography';
import { ACTIONS_LIST, ACTIONS_MAP, EnumAction } from '~/constants/action';
import { EnumAuditChannel } from '~/constants/audit-channel';
import { EnumAuditStatus } from '~/constants/audit-status';
import { EnumLogType } from '~/constants/log';
import { EnumResource, RESOURCES_LIST } from '~/constants/resource';
import { rolePriority } from '~/constants/roles';
import { dataService } from '~/services/data.server';
import { getUser } from '~/services/session.server';
import { TAny } from '~/types/any';
import { getDefaultTitle } from '~/utils/get-default-title';

// 可以操作的资源
const resourcesList = RESOURCES_LIST.filter((resource) => resource !== EnumResource.userRole).sort();
const title = 'role:apply';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await getUser(request);
  const [{ data: roleList }, { data: casbinRuleList }, auditRecord] = await Promise.all([
    dataService.findMany<Role>('role', { select: { title: true, id: true } }, { request }),
    dataService.findMany<CasbinRule>('casbinRule', { select: { v0: true, v1: true, v2: true, v3: true } }, { request }),
    dataService.findFirst<AuditRecord>(
      'auditRecord',
      {
        where: {
          title,
          operatedById: user?.id,
        },
      },
      { request }
    ),
  ]);

  // 转换为 BaseOption
  const newRoleList = roleList
    .sort((a, b) => rolePriority[a.title] - rolePriority[b.title])
    .map((item) => ({
      label: item.title,
      value: item.id,
    }));

  const currentRoles: BaseOption[] = [];
  newRoleList.forEach((role) => {
    if (user?.roles?.includes(role.label)) {
      currentRoles.push(role);
    }
  });

  return {
    currentRoles,
    roleList: newRoleList,
    casbinRuleList,
    auditRecord,
  };
}

// UI
export default function UserEdit() {
  const { roleList, casbinRuleList, currentRoles, auditRecord } = useLoaderData<typeof loader>();
  return (
    <RoleApplyForm
      roleList={roleList}
      casbinRuleList={casbinRuleList}
      currentRoles={currentRoles}
      auditRecord={auditRecord}
    />
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}

const schemaRoleApply = z.object({
  roles: z.array(z.object({ label: z.string(), value: z.string() }) as z.ZodType<BaseOption>),
});
type TSchemaRoleApply = z.infer<typeof schemaRoleApply>;

// 定义权限状态接口
interface ResourcePermission {
  resource: string;
  actions: string[];
  hasAllActions: boolean;
  hasSomeActions: boolean;
}

// 处理Casbin规则，获取角色的权限
function processRolePermissions(
  casbinRules: CasbinRule[],
  selectedRoles: BaseOption[]
): Record<string, ResourcePermission> {
  // 初始化结果对象
  const result: Record<string, ResourcePermission> = {};

  // 初始化所有资源的权限
  resourcesList.forEach((resource) => {
    result[resource] = {
      resource,
      actions: [],
      hasAllActions: false,
      hasSomeActions: false,
    };
  });

  // 如果没有选择角色，返回空权限
  if (!selectedRoles || selectedRoles.length === 0) {
    return result;
  }

  // 获取选中角色的名称列表
  const roleNames = selectedRoles.map((role) => role.label);

  // 遍历所有Casbin规则
  casbinRules.forEach((rule) => {
    // 只处理选中角色的规则
    if (roleNames.includes(rule.v0)) {
      // 通配符规则 - 适用于所有资源
      if (rule.v1 === '*') {
        const actions = rule.v2.split('|');

        // 更新所有资源的权限
        resourcesList.forEach((resource) => {
          // 合并权限，确保不重复
          const currentActions = new Set([...result[resource].actions, ...actions]);
          result[resource].actions = Array.from(currentActions);

          // 更新权限状态
          result[resource].hasSomeActions = result[resource].actions.length > 0;
          result[resource].hasAllActions = result[resource].actions.length === ACTIONS_LIST.length;
        });
      }

      // 特定资源规则
      else {
        // 处理资源/子资源格式 (如 post/*)
        const [mainResource] = rule.v1.split('/');

        // 确保资源在我们的列表中
        if (resourcesList.includes(mainResource as TAny)) {
          // 如果规则被拒绝（v3 === 'deny'），则跳过
          if (rule.v3 === 'deny') return;

          const actions = rule.v2.split('|');

          // 合并权限，确保不重复
          const currentActions = new Set([...result[mainResource].actions, ...actions]);
          result[mainResource].actions = Array.from(currentActions);

          // 更新权限状态
          result[mainResource].hasSomeActions = result[mainResource].actions.length > 0;
          result[mainResource].hasAllActions = result[mainResource].actions.length === ACTIONS_LIST.length;
        }
      }
    }
  });

  return result;
}

const RoleApplyForm = ({
  roleList,
  casbinRuleList,
  auditRecord,
  currentRoles,
}: {
  roleList: BaseOption[];
  casbinRuleList: CasbinRule[];
  auditRecord: AuditRecord | null;
  currentRoles: BaseOption[];
}) => {
  const { id } = auditRecord || {};
  const [selectedRoles, setSelectedRoles] = useState<BaseOption[]>(currentRoles);

  const form = useForm<TSchemaRoleApply>({
    resolver: zodResolver(schemaRoleApply),
    defaultValues: {
      roles: currentRoles,
    },
    warnWhenUnsavedChanges: true,
    mode: 'onChange',
    refineCoreProps: {
      id,
      resource: EnumResource.auditRecord,
      action: id ? EnumAction.edit : EnumAction.create,
    },
  });

  // 监听表单值变化
  useEffect(() => {
    const subscription = form.watch((value) => {
      if (value.roles) {
        setSelectedRoles(value.roles as BaseOption[]);
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  // 计算当前选择角色的权限
  const resourcePermissions = useMemo(() => {
    return processRolePermissions(casbinRuleList, selectedRoles);
  }, [casbinRuleList, selectedRoles]);

  // 提交前修改数据
  const beforeSubmit = async (values: TSchemaRoleApply) => {
    const { roles } = values;
    return {
      meta: { parent: 'account' },
      title,
      dataPrevious: currentRoles,
      resource: EnumResource.role,
      data: roles,
      status: EnumAuditStatus.PENDING,
      action: EnumLogType.update,
      channel: EnumAuditChannel.SELF,
      error: null,
    };
  };

  return (
    <FormEasy {...form} beforeSubmit={beforeSubmit} className="space-y-4">
      <H2 className="mb-8">
        <span>权限变更申请</span>
        <p className="text-muted-foreground text-sm font-normal">选择角色，分配资源与相关操作的权限</p>
      </H2>

      <Field {...form} name="roles" label="Roles">
        <SelectMulti options={roleList} />
      </Field>

      <Label>当前所选角色拥有的资源、操作权限</Label>
      <div className="mt-2 space-y-4 space-x-4">
        {resourcesList.map((resource) => {
          const permission = resourcePermissions[resource];
          const { hasAllActions, hasSomeActions, actions } = permission;
          const newActions = actions.sort().reverse();

          /**
           * - 如果有所有权限，完全选中
           * - 如果有部分权限，半选中
           * - 如果没有权限，不选中
           */
          const isChecked = hasAllActions || hasSomeActions;
          const isIndeterminate = hasSomeActions && !hasAllActions;

          return (
            <Card key={resource} className="inline-block min-w-[300px]">
              <CardContent className="space-y-2 divide-y divide-dashed pb-3">
                <div className="flex items-center gap-2 pt-3 pb-2">
                  <Checkbox
                    data-state={isIndeterminate ? 'indeterminate' : isChecked ? 'checked' : 'unchecked'}
                    className="pointer-events-none"
                    checked={isChecked}
                  />

                  <span className="capitalize">
                    {resource} - {t(`menus.${resource}`)}
                  </span>
                </div>

                {hasAllActions && <Badge className="bg-green-500">All</Badge>}
                {!hasSomeActions && <Badge className="bg-destructive">Null</Badge>}
                {!hasAllActions && hasSomeActions && (
                  <div className="mt-3 flex items-center gap-2">
                    {newActions.map((action) => (
                      <Badge key={action} variant="secondary" className="border-green-500">
                        {ACTIONS_MAP[action as EnumAction].name}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </FormEasy>
  );
};
