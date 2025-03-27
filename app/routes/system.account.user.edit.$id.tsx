import { zodResolver } from '@hookform/resolvers/zod';
import { Role, User } from '@prisma/client';
import { BaseOption, FormAction, GetListResponse, RedirectAction, useResourceParams } from '@refinedev/core';
import { useForm } from '@refinedev/react-hook-form';
import { ActionFunctionArgs, data, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { UIMatch, useFetcher, useLoaderData } from '@remix-run/react';
import { useMemo } from 'react';
import { z } from 'zod';

import { PageError } from '~/components/500';
import { DeleteButton } from '~/components/refine/buttons/delete';
import { Field } from '~/components/refine/form/field';
import { FormEasy } from '~/components/refine/form/form';
import { SelectMulti } from '~/components/refine/form/select-multi';
import { Input } from '~/components/ui/input';
import { EnumAction } from '~/constants/action';
import { AUDIT_LOG_CUSTOM_NEW, AUDIT_LOG_CUSTOM_OLD } from '~/constants/log';
import { EnumRole, rolePriority } from '~/constants/roles';
import { dataService } from '~/services/data.server';
import { requireUser } from '~/services/session.server';
import { updateUserRoles } from '~/services/user.server';
import { HandleFunction } from '~/types/handle';
import { getRefineQueryOptions } from '~/utils/form';
import { getAllParams } from '~/utils/get-all-params';
import { getDefaultTitle } from '~/utils/get-default-title';
import { schemaUser } from '~/zod';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export const handle: HandleFunction = {
  uiTools: (match: UIMatch) => {
    return <UiTools match={match} />;
  },
};

type UserWithRoles = User & { roles: { role: Pick<Role, 'id' | 'title'> }[] };

type InitialUser = {
  data: User & { roles: BaseOption[] };
};

export async function loader({ request, params }: LoaderFunctionArgs) {
  const [user, rolesData] = await Promise.all([
    dataService.findUniqueOrThrow<UserWithRoles>(
      'user',
      {
        where: { id: params?.id || '' },
        include: {
          roles: {
            select: {
              role: {
                select: { title: true, id: true },
              },
            },
          },
        },
      },
      { request }
    ),
    dataService.findMany<Role>(
      'role',
      {
        select: { title: true, id: true },
      },
      { request }
    ),
  ]);

  const { roles: userRoles, ...rest } = user;
  const newUserRoles = userRoles
    .sort((a, b) => rolePriority[a.role.title] - rolePriority[b.role.title])
    .map((item) => ({
      label: item.role.title,
      value: item.role.id,
    }));

  return {
    initialData: {
      data: { ...rest, roles: newUserRoles },
    },
    rolesData,
  };
}

export async function action({ params, request }: ActionFunctionArgs) {
  await requireUser(request);

  const mergedParams = await getAllParams<{ roleIds: string; userId: string }>(request, params);
  const { roleIds, userId } = mergedParams;

  try {
    const updatedUser = await updateUserRoles({ roleIds: roleIds.split(','), userId });

    return data({ data: updatedUser });
  } catch (error) {
    return data({ error: '更新用户角色失败' }, { status: 500 });
  }
}

// UI
export default function UserEdit() {
  const { initialData, rolesData } = useLoaderData<typeof loader>();
  return <UserForm initialData={initialData} rolesData={rolesData} />;
}

function UiTools({ match }: { match: UIMatch }) {
  const { data } = match || {};
  const { initialData } = (data as { initialData: InitialUser }) || {};
  const { data: user } = initialData || {};
  return (
    <div className="flex items-center gap-1 text-sm">
      <DeleteButton
        disabled={user?.roles.some((item) => item.label === EnumRole.administrator)}
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
const filterFormData = (data: InitialUser['data'] | undefined) => {
  return {
    avatar: data?.avatar,
    name: data?.name || '',
    email: data?.email || '',
    roles: data?.roles || [],
  };
};

const schemaUserNew = schemaUser.extend({
  roles: z.array(z.object({ label: z.string(), value: z.string() }) as z.ZodType<BaseOption>),
});
type TSchemaUserNew = z.infer<typeof schemaUserNew>;

export const UserForm = ({
  className,
  redirect = EnumAction.list,
  initialData,
  rolesData,
  action,
}: {
  className?: string;
  redirect?: RedirectAction;
  initialData: InitialUser;
  rolesData: GetListResponse<Role>;
  action?: FormAction;
}) => {
  const { data } = initialData || {};
  const { formAction, id = data?.id, identifier } = useResourceParams({ action });
  const { data: roles } = rolesData || {};

  const fetcher = useFetcher();

  const defaultValues = filterFormData(data);
  const form = useForm<TSchemaUserNew>({
    resolver: zodResolver(schemaUserNew),
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
  const beforeSubmit = async (values: TSchemaUserNew) => {
    const { roles, ...rest } = values;

    // 只处理角色更新
    const formData = new FormData();
    formData.append('userId', data.id);
    formData.append('roleIds', roles.map((role) => role.value).join(','));

    await fetcher.submit(formData, {
      method: 'post',
    });

    // 返回其他数据给 Refine 处理
    return {
      ...rest,
      [AUDIT_LOG_CUSTOM_OLD]: { permissions: data.roles.map((item) => item.label).join(', ') },
      [AUDIT_LOG_CUSTOM_NEW]: { permissions: roles.map((role) => role.label).join(', ') },
    };
  };

  const newRolesAll = useMemo(() => {
    return roles
      .sort((a, b) => rolePriority[a.title] - rolePriority[b.title])
      .map((item) => ({
        label: item.title,
        value: item.id,
      }));
  }, [roles]);

  return (
    <FormEasy {...form} beforeSubmit={beforeSubmit} className={className} recordItemId={data?.id}>
      <Field {...form} name="name" label="Name">
        <Input placeholder="Name" />
      </Field>

      <Field {...form} name="email" label="Email">
        <Input placeholder="Email" />
      </Field>

      <Field {...form} name="avatar" label="Avatar">
        <Input placeholder="Avatar" />
      </Field>

      <Field {...form} name="roles" label="Roles">
        <SelectMulti options={newRolesAll} />
      </Field>
    </FormEasy>
  );
};
