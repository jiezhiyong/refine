import { zodResolver } from '@hookform/resolvers/zod';
import { Category, Post } from '@prisma/client';
import { GetOneResponse, RedirectAction } from '@refinedev/core';
import { useForm } from '@refinedev/react-hook-form';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { z } from 'zod';
import { CloneButton, DeleteButton, ShowButton } from '~/component-refine';
import { Combobox, Field, Form, Select } from '~/component-refine/components';
import { Input } from '~/components-shadcn/input';
import { Textarea } from '~/components-shadcn/textarea';
import { PageError } from '~/components/500';
import { dataService } from '~/services/data.server';
import { HandleFunction } from '~/types/handle';
import { POST_STATUS, POST_STATUS_LIST } from '~/types/post';
import { getDefaultTitle } from '~/utils/get-default-title';

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
  const [postRes, categoriesRes] = await Promise.all([
    dataService.getOne<Post>({
      resource: 'post',
      id: params?.id || '',
    }),
    dataService.getList<Category>({
      resource: 'category',
    }),
  ]);

  return { postRes, categoriesRes };
}

// UI
export default function PostEdit() {
  const { postRes, categoriesRes } = useLoaderData<typeof loader>();
  return <PostForm postRes={postRes} categoriesRes={categoriesRes} />;
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
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  content: z.string().min(2, {
    message: 'Content must be at least 2 characters.',
  }),
  status: z.enum([POST_STATUS.PUBLISHED, POST_STATUS.DRAFT, POST_STATUS.REJECTED], {
    errorMap: () => ({
      message: `Status must one of ${POST_STATUS_LIST.join(', ')}`,
    }),
  }),
  categoryId: z.string().or(z.number()),
});

export const PostForm = ({
  redirect = 'list',
  postRes,
  categoriesRes: { data: categories },
}: {
  redirect?: RedirectAction;
  postRes?: GetOneResponse<Post>;
  categoriesRes: { data: Category[] };
}) => {
  const { data: post } = postRes || {};

  const { ...form } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: post,
    warnWhenUnsavedChanges: true,
    refineCoreProps: {
      autoSave: {
        enabled: false,
      },
      redirect,
    },
  });

  return (
    <Form {...form}>
      <Field {...form} name="title" label="Title">
        <Input placeholder="Title" />
      </Field>

      <Field {...form} name="categoryId" label="Category">
        <Combobox options={categories.map((category) => ({ label: category.title, value: category.id }))} />
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
