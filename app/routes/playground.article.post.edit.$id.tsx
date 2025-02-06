import { zodResolver } from '@hookform/resolvers/zod';
import { Category, Post } from '@prisma/client';
import { GetListResponse, GetOneResponse, RedirectAction, useModalReturnType, useSelect } from '@refinedev/core';
import { useForm } from '@refinedev/react-hook-form';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useCallback } from 'react';
import { z } from 'zod';
import { CloneButton, DeleteButton, ShowButton } from '~/component-refine';
import { Combobox, Field, Form, Select } from '~/component-refine/components';
import { PageError } from '~/components';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '~/components-shadcn/dialog';
import { Input } from '~/components-shadcn/input';
import { Textarea } from '~/components-shadcn/textarea';
import { EnumAction, EnumResource } from '~/constants';
import { dataService } from '~/services';
import { HandleFunction, POST_STATUS_LIST } from '~/types';
import { getDefaultTitle } from '~/utils';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// 创建应用程序约定
export const handle: HandleFunction = {
  uiTools: () => {
    return <UiTools />;
  },
};

// 页面初始化时的`GET`请求 && 表单`GET`请求
export async function loader({ params }: LoaderFunctionArgs) {
  const [initialData, categoriesRes] = await Promise.all([
    dataService.getOne<Post>({
      resource: EnumResource.post,
      id: params?.id || '',
    }),
    dataService.getList<Category>({
      resource: EnumResource.category,
    }),
  ]);

  return {
    initialData,
    categoriesRes,
  };
}

// UI
export default function PostEdit() {
  const { initialData, categoriesRes } = useLoaderData<typeof loader>();
  return <PostForm initialData={initialData} categoriesRes={categoriesRes} />;
}

function UiTools() {
  return (
    <div className="flex items-center gap-1 text-sm">
      <ShowButton variant="ghost" size="icon" />
      <DeleteButton variant="ghost" size="icon" />
      <CloneButton variant="ghost" size="icon" />
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}

// 编辑表单
const formSchema = z.object({
  title: z.string().min(2, { message: 'Title must be at least 2 characters.' }),
  content: z.string().min(2),
  status: z.string(),
  categoryId: z.string(),
});
type TFormSchema = z.infer<typeof formSchema>;

// 过滤数据，只保留 formSchema 中定义的字段
const filterFormData = (data: Partial<Post> | undefined) => {
  if (!data) return undefined;

  return {
    title: data.title,
    content: data.content,
    status: data.status,
    categoryId: data.categoryId,
  };
};

export const PostForm = ({
  className,
  redirect = EnumAction.list,
  initialData,
  categoriesRes,
  useFormModalClose,
}: {
  className?: string;
  redirect?: RedirectAction;
  initialData?: GetOneResponse<Post>;
  categoriesRes?: GetListResponse<Category>;
  useFormModalClose?: () => void;
}) => {
  let categoryOptions = [];
  if (categoriesRes) {
    categoryOptions = categoriesRes?.data?.map((category) => ({ label: category.title, value: category.id }));
  } else {
    categoryOptions = useSelect({ resource: EnumResource.category }).options;
  }

  const { data } = initialData || {};

  const enableAutoSave = true; // 注意：autoSave 不会触发表单验证
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: filterFormData(data),
    warnWhenUnsavedChanges: true,
    refineCoreProps: {
      resource: EnumResource.post,
      action: data?.id ? EnumAction.edit : EnumAction.create,
      id: data?.id,
      queryOptions: initialData
        ? {
            queryFn: () => initialData,
            initialData: initialData,
          }
        : undefined,
      redirect,
      autoSave: {
        enabled: enableAutoSave,
        debounce: 2000,
        invalidateOnUnmount: true,
        onFinish: (values) => {
          return modifyingDataBeforeSubmission(values as TFormSchema);
        },
      },
    },
  });

  // 提交前修改数据，注意：返回新的数据对象而不是修改原对象
  const modifyingDataBeforeSubmission = useCallback((values: TFormSchema) => {
    return { ...values };
  }, []);

  return (
    <Form
      {...form}
      autoSave={enableAutoSave}
      modifyingDataBeforeSubmission={modifyingDataBeforeSubmission}
      className={className}
      useFormModalClose={useFormModalClose}
      recordItemId={data?.id}
    >
      <Field {...form} name="title" label="Title">
        <Input placeholder="Title" />
      </Field>

      <Field {...form} name="categoryId" label="Category">
        <Combobox options={categoryOptions} popoverProps={{ modal: Boolean(useFormModalClose) }} />
      </Field>

      <Field {...form} name="status" label="Status">
        <Select options={POST_STATUS_LIST.map((status) => ({ label: status, value: status }))} />
      </Field>

      <Field {...form} name="content" label="Content">
        <Textarea placeholder="Content" rows={10} />
      </Field>
    </Form>
  );
};

export function PostFormModal(props: useModalReturnType & { record?: Post }) {
  const { visible, close, record } = props;

  return (
    <Dialog open={visible} onOpenChange={close}>
      <DialogContent className="max-w-6xl">
        <DialogHeader className="border-b pb-4">
          <DialogTitle>Edit Post</DialogTitle>
          <DialogDescription>This is a Demo for Edit Form on Modal.</DialogDescription>
        </DialogHeader>

        <PostForm
          className="p-0"
          useFormModalClose={close}
          initialData={record ? { data: { ...record } } : undefined}
        />
      </DialogContent>
    </Dialog>
  );
}
