import { zodResolver } from '@hookform/resolvers/zod';
import { CasbinRule } from '@prisma/client';
import { FormAction, RedirectAction, useResourceParams, useSelect } from '@refinedev/core';
import { useForm } from '@refinedev/react-hook-form';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { UIMatch, useLoaderData } from '@remix-run/react';
import { useCallback } from 'react';

import { PageError } from '~/components/500';
import { DeleteButton } from '~/components/refine/buttons/delete';
import { Combobox } from '~/components/refine/form/combobox';
import { Field } from '~/components/refine/form/field';
import { FormEasy } from '~/components/refine/form/form';
import { SelectEasy } from '~/components/refine/form/select';
import { SelectMulti } from '~/components/refine/form/select-multi';
import { Input } from '~/components/ui/input';
import { ACTIONS_LIST, EnumAction } from '~/constants/action';
import { EnumResource } from '~/constants/resource';
import { EnumRole } from '~/constants/roles';
import { dataService } from '~/services/data.server';
import { HandleFunction } from '~/types/handle';
import { dropEmptyKey } from '~/utils/drop-empty-key';
import { getRefineQueryOptions } from '~/utils/form';
import { getChangedValues } from '~/utils/get-changed-values';
import { getDefaultTitle } from '~/utils/get-default-title';
import { schemaCasbinRule, TSchemaCasbinRule } from '~/zod';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export const handle: HandleFunction = {
  uiTools: (match: UIMatch) => {
    return <UiTools match={match} />;
  },
};

export async function loader({ params, request }: LoaderFunctionArgs) {
  const [initialData] = await Promise.all([
    dataService.findUniqueOrThrow<CasbinRule>(
      'casbinRule',
      {
        where: {
          id: params.id,
        },
      },
      { request }
    ),
  ]);

  return { initialData };
}

// UI
export default function CasbinRuleEdit() {
  const { initialData } = useLoaderData<typeof loader>();
  return <CasbinRuleForm initialData={initialData} />;
}

function UiTools({ match }: { match: UIMatch }) {
  const { data } = match || {};
  const { initialData: permission } = (data as { initialData: CasbinRule }) || {};

  return (
    <div className="flex items-center gap-1 text-sm">
      <DeleteButton
        disabled={permission?.v0 === EnumRole.administrator}
        variant="ghost"
        size="icon"
        className="text-destructive!"
      />
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}

// 过滤数据，只保留 formSchema 中定义的字段
const filterFormData = (data: Partial<CasbinRule> | undefined | null) => {
  return {
    ptype: data?.ptype || 'p',
    v0: data?.v0 || '',
    v1: data?.v1 || '',
    v2: data?.v2 || '',
    v3: data?.v3 || '',
  };
};

export const CasbinRuleForm = ({
  className,
  redirect = EnumAction.list,
  initialData,
  action,
}: {
  className?: string;
  redirect?: RedirectAction;
  initialData?: CasbinRule | null;
  action?: FormAction;
}) => {
  const { formAction, id = initialData?.id, identifier } = useResourceParams({ action });

  const roleOptions = useSelect({
    resource: EnumResource.role,
    pagination: { mode: 'off' },
  }).options.map((item) => ({
    label: item.label,
    value: item.label,
  }));

  const defaultValues = filterFormData(initialData);
  const form = useForm<TSchemaCasbinRule>({
    resolver: zodResolver(schemaCasbinRule),
    defaultValues,
    warnWhenUnsavedChanges: true,
    mode: 'onChange',
    refineCoreProps: {
      resource: identifier,
      action: formAction,
      id,
      queryOptions: getRefineQueryOptions(defaultValues),
      redirect,
    },
  });

  // 提交前修改数据
  const beforeSubmit = useCallback((val: TSchemaCasbinRule) => {
    const changedValues = getChangedValues(val, defaultValues);
    return dropEmptyKey(changedValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormEasy {...form} beforeSubmit={beforeSubmit} className={className} recordItemId={initialData?.id}>
      <Field {...form} name="ptype" label="Policy Type">
        <SelectEasy
          options={[
            { label: 'policy', value: 'p' },
            { label: 'role', value: 'g' },
          ]}
        />
      </Field>

      <Field {...form} name="v0" label="Subject、Role">
        <Combobox options={roleOptions} />
      </Field>

      <Field {...form} name="v1" label="Object、User">
        <Input placeholder="*、post、post/*" />
      </Field>

      <Field {...form} name="v2" label="Action">
        <SelectMulti
          options={ACTIONS_LIST.map((key) => ({ label: key, value: key }))}
          valueFormatInput={(value) => {
            if (Array.isArray(value)) {
              return value;
            }
            return value
              .split('|')
              .filter((action: string) => action)
              .map((action: string) => ({ label: action, value: action }));
          }}
          valueFormatOutput={(value) => {
            if (typeof value === 'string') {
              return value;
            }
            return value.map((item) => item.value).join('|');
          }}
        />
      </Field>

      <Field {...form} name="v3" label="Effect">
        <SelectEasy
          options={[
            { label: 'allow', value: 'allow' },
            { label: 'deny', value: 'deny' },
          ]}
        />
      </Field>
    </FormEasy>
  );
};
