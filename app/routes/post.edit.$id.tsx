import { Category, Post } from '@prisma/client';
import { useDelete } from '@refinedev/core';
import { useForm } from '@refinedev/react-hook-form';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Button } from '~/components-shadcn/button';
import PageError from '~/components/500';
import { dataProvider } from '~/providers/data';
import { getDefaultTitle } from '~/utils/get-default-title';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// 页面初始化时的`GET`请求 && 表单`GET`请求
export async function loader({ params }: LoaderFunctionArgs) {
  const [postRes, categoriesRes] = await Promise.all([
    dataProvider.getOne<Post>({
      resource: 'post',
      id: params?.id || '',
    }),
    dataProvider.getList<Category>({
      resource: 'category',
    }),
  ]);

  return { postRes, categoriesRes };
}

// UI
export default function PostEdit() {
  const { postRes, categoriesRes } = useLoaderData<typeof loader>();
  const { data: post } = postRes;
  const { data: categories } = categoriesRes;
  const { mutate: deletePost } = useDelete();

  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: post,
    warnWhenUnsavedChanges: true,
    refineCoreProps: { queryOptions: { queryFn: () => postRes, initialData: postRes } },
  });

  return (
    <form onSubmit={handleSubmit(onFinish)} className="flex flex-col gap-2">
      <div>
        <textarea
          {...register('title', { required: true })}
          defaultValue={post.title}
          rows={2}
          className="w-full border p-2"
        />
        {errors.title && <p className="text-destructive">This field is required</p>}
      </div>

      <div>
        <textarea
          {...register('content', { required: true })}
          defaultValue={post.content}
          rows={10}
          className="w-full border p-2"
        />
        {errors.content && <p className="text-destructive">This field is required</p>}
      </div>

      <div>
        <select
          {...register('categoryId', { required: true })}
          className="w-full border p-2"
          defaultValue={post.categoryId || undefined}
        >
          <option value="">请选择分类</option>
          {categories?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
        {errors.categoryId && <p className="text-destructive">This field is required</p>}
      </div>

      <div className="flex gap-2">
        <Button type="submit" loading={formLoading}>
          Save
        </Button>
        <Button variant={'destructive'} onClick={() => deletePost({ resource: 'post', id: post.id })}>
          Delete
        </Button>
      </div>
    </form>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
