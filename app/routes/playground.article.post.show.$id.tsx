import { Category, Post } from '@prisma/client';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { PageError } from '~/components/500';
import { dataService } from '~/services/data.server';
import { getDefaultTitle } from '~/utils/get-default-title';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// 页面初始化时的`GET`请求 && 表单`GET`请求
export async function loader({ params }: LoaderFunctionArgs) {
  const [postRes] = await Promise.all([
    dataService.getOne<Post & { category?: Category }>({
      resource: 'post',
      id: params?.id || '',
      meta: {
        include: {
          category: true, // 包含关联的 category 数据
        },
      },
    }),
  ]);

  return { postRes };
}

// UI
export default function PostShow() {
  const { postRes } = useLoaderData<typeof loader>();
  const { data: post } = postRes;

  return (
    <form className="flex flex-col gap-2">
      <textarea disabled value={post.title} rows={2} className="w-full border p-2" />

      <textarea disabled value={post.content} rows={10} className="w-full border p-2" />

      <select disabled className="w-full border p-2" value={post.categoryId || undefined}>
        <option>{post.category?.title}</option>
      </select>
    </form>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
