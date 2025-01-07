import { Category } from '@prisma/client';
import { useForm } from '@refinedev/react-hook-form';
import { MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Button } from '~/components-shadcn/button';
import { PageError } from '~/components/500';
import { dataService } from '~/services/data.server';
import { getDefaultTitle } from '~/utils/get-default-title';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// 页面初始化时的`GET`请求 && 表单`GET`请求
export async function loader() {
  const [categoriesRes] = await Promise.all([
    dataService.getList<Category>({
      resource: 'category',
    }),
  ]);

  return { categoriesRes };
}

// UI
export default function PostCreate() {
  const { categoriesRes } = useLoaderData<typeof loader>();
  const { data: categories } = categoriesRes;

  const {
    refineCore: { onFinish, formLoading },
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    warnWhenUnsavedChanges: true,
  });

  return (
    <form onSubmit={handleSubmit(onFinish)} className="flex flex-col gap-2">
      <div>
        <textarea {...register('title', { required: true })} rows={2} className="w-full border p-2" />
        {errors.title && <p className="text-destructive">This field is required</p>}
      </div>

      <div>
        <textarea {...register('content', { required: true })} rows={10} className="w-full border p-2" />
        {errors.content && <p className="text-destructive">This field is required</p>}
      </div>

      <div>
        <select {...register('categoryId', { required: true })} className="w-full border p-2">
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
      </div>
    </form>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
