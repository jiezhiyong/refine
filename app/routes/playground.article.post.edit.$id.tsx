import { zodResolver } from '@hookform/resolvers/zod';
import { Post } from '@prisma/client';
import { FormAction, RedirectAction, useModalReturnType, useResourceParams, useSelect } from '@refinedev/core';
import { useForm } from '@refinedev/react-hook-form';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { isEqual } from 'es-toolkit';
import { useCallback } from 'react';

import { PageError } from '~/components/500';
import { CloneButton } from '~/components/refine/buttons/clone';
import { DeleteButton } from '~/components/refine/buttons/delete';
import { ShowButton } from '~/components/refine/buttons/show';
import { Combobox } from '~/components/refine/form/combobox';
import { Field } from '~/components/refine/form/field';
import { FormEasy } from '~/components/refine/form/form';
import { SelectEasy } from '~/components/refine/form/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '~/components/ui/dialog';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { EnumAction } from '~/constants/action';
import { EnumPostStatus, POST_STATUS_LIST } from '~/constants/post';
import { EnumResource } from '~/constants/resource';
import { dataService } from '~/services/data.server';
import { TAny } from '~/types/any';
import { HandleFunction } from '~/types/handle';
import { dropEmptyKey } from '~/utils/drop-empty-key';
import { getRefineQueryOptions } from '~/utils/form';
import { getChangedValues } from '~/utils/get-changed-values';
import { getDefaultTitle } from '~/utils/get-default-title';
import { schemaPost, TSchemaPost } from '~/zod';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export const handle: HandleFunction = {
  uiTools: () => {
    return <UiTools />;
  },
};

export async function loader({ params, request }: LoaderFunctionArgs) {
  const [initialData] = await Promise.all([
    dataService.findUniqueOrThrow<Post>('post', { where: { id: params?.id || '' } }, { request }),
  ]);

  return {
    initialData,
  };
}

// UI
export default function PostEdit() {
  const { initialData } = useLoaderData<typeof loader>();
  return <PostForm initialData={initialData} />;
}

function UiTools() {
  return (
    <div className="flex items-center gap-1 text-sm">
      <ShowButton variant="ghost" size="icon" />
      <CloneButton variant="ghost" size="icon" />
      <DeleteButton variant="ghost" size="icon" className="text-destructive!" />
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}

// 过滤数据，只保留 formSchema 中定义的字段
const filterFormData = (data: Partial<Post> | undefined) => {
  return {
    title: data?.title || '',
    content: data?.content || '',
    status: (data?.status || EnumPostStatus.DRAFT) as EnumPostStatus,
    categoryId: data?.categoryId || '',
  };
};

export const PostForm = ({
  className,
  redirect = EnumAction.list,
  initialData,
  formModalClose,
  action,
}: {
  className?: string;
  redirect?: RedirectAction;
  initialData?: Post;
  formModalClose?: () => void;
  action?: FormAction;
}) => {
  const { formAction, id = initialData?.id, identifier } = useResourceParams({ action });
  const categoryOptions = useSelect({
    resource: EnumResource.category,
    pagination: { mode: 'off' },
  }).options;

  const enableAutoSave = formAction === EnumAction.edit;
  const defaultValues = filterFormData(initialData);
  const form = useForm<TSchemaPost>({
    resolver: zodResolver(schemaPost),
    defaultValues,
    warnWhenUnsavedChanges: true,
    mode: 'onChange',
    refineCoreProps: {
      resource: identifier,
      action: formAction,
      id,
      queryOptions: getRefineQueryOptions(defaultValues),
      redirect,
      autoSave: {
        enabled: enableAutoSave,
        debounce: 2000,
        invalidateOnUnmount: true,
        onFinish: (values) => {
          try {
            schemaPost.parse(values);
            if (isEqual(values, form.formState.defaultValues)) {
              throw new Error('表单内容未变化');
            }

            return beforeSubmit(values as TSchemaPost);
          } catch (error) {
            return null as TAny;
          }
        },
      },
    },
  });

  // 提交前修改数据
  const beforeSubmit = useCallback((val: TSchemaPost) => {
    const changedValues = getChangedValues(val, defaultValues);
    return dropEmptyKey(changedValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormEasy
      {...form}
      autoSave={enableAutoSave}
      beforeSubmit={beforeSubmit}
      className={className}
      formModalClose={formModalClose}
      recordItemId={initialData?.id}
    >
      <Field {...form} name="title" label="Title">
        <Input placeholder="Title" />
      </Field>

      <Field {...form} name="categoryId" label="Category">
        <Combobox options={categoryOptions} popoverProps={{ modal: Boolean(formModalClose) }} />
      </Field>

      <Field {...form} name="status" label="Status">
        <SelectEasy options={POST_STATUS_LIST.map((status) => ({ label: status, value: status }))} />
      </Field>

      <Field {...form} name="content" label="Content">
        <Textarea placeholder="Content" className="min-h-60" />
      </Field>
    </FormEasy>
  );
};

export function PostFormModal(props: useModalReturnType & { record?: Post; action?: FormAction }) {
  const { visible, close, record, action } = props;

  return (
    <Dialog open={visible} onOpenChange={close}>
      <DialogContent className="sm:max-w-6xl">
        <DialogHeader className="border-b pb-4">
          <DialogTitle>Edit Post</DialogTitle>
          <DialogDescription>This is a Demo for Edit Form on Modal.</DialogDescription>
        </DialogHeader>

        <PostForm action={action} className="p-0" formModalClose={close} initialData={record} />
      </DialogContent>
    </Dialog>
  );
}
