import { zodResolver } from '@hookform/resolvers/zod';
import { Role } from '@prisma/client';
import { FormAction, RedirectAction, useResourceParams } from '@refinedev/core';
import { useForm } from '@refinedev/react-hook-form';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { UIMatch, useLoaderData } from '@remix-run/react';
import { useCallback } from 'react';

import { PageError } from '~/components/500';
import { DeleteButton } from '~/components/refine/buttons/delete';
import { Field } from '~/components/refine/form/field';
import { FormEasy } from '~/components/refine/form/form';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { EnumAction } from '~/constants/action';
import { EnumRole } from '~/constants/roles';
import { dataService } from '~/services/data.server';
import { HandleFunction } from '~/types/handle';
import { dropEmptyKey } from '~/utils/drop-empty-key';
import { getRefineQueryOptions } from '~/utils/form';
import { getChangedValues } from '~/utils/get-changed-values';
import { getDefaultTitle } from '~/utils/get-default-title';
import { schemaRole, TSchemaRole } from '~/zod';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export const handle: HandleFunction = {
  uiTools: (match: UIMatch) => {
    return <UiTools match={match} />;
  },
};

export async function loader({ request, params }: LoaderFunctionArgs) {
  const [initialData] = await Promise.all([
    dataService.findUniqueOrThrow<Role>('role', { where: { id: params?.id || '' } }, { request }),
  ]);

  return {
    initialData,
  };
}

// UI
export default function RoleEdit() {
  const { initialData } = useLoaderData<typeof loader>();
  return <RoleForm initialData={initialData} />;
}

function UiTools({ match }: { match: UIMatch }) {
  const { data } = match || {};
  const { initialData: role } = (data as { initialData: Role }) || {};

  return (
    <div className="flex items-center gap-1 text-sm">
      <DeleteButton
        disabled={role?.title === EnumRole.administrator}
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
const filterFormData = (data: Partial<Role> | undefined) => {
  return {
    title: data?.title || '',
    description: data?.description || '',
  };
};

export const RoleForm = ({
  className,
  redirect = EnumAction.list,
  initialData,
  action,
}: {
  className?: string;
  redirect?: RedirectAction;
  initialData?: Role;
  action?: FormAction;
}) => {
  const { formAction, id = initialData?.id, identifier } = useResourceParams({ action });

  const defaultValues = filterFormData(initialData);
  const form = useForm<TSchemaRole>({
    resolver: zodResolver(schemaRole),
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
  const beforeSubmit = useCallback((val: TSchemaRole) => {
    const changedValues = getChangedValues(val, defaultValues);
    return dropEmptyKey(changedValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormEasy {...form} beforeSubmit={beforeSubmit} className={className} recordItemId={initialData?.id}>
      <Field {...form} name="title" label="Title">
        <Input />
      </Field>

      <Field {...form} name="description" label="Description">
        <Textarea className="min-h-60" />
      </Field>
    </FormEasy>
  );
};
