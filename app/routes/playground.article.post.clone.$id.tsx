import { Category, Post } from '@prisma/client';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { PageError } from '~/components/500';
import { dataService } from '~/services/data.server';
import { getDefaultTitle } from '~/utils/get-default-title';
import { PostForm } from './playground.article.post.edit.$id';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
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
export default function PostClone() {
  const { postRes, categoriesRes } = useLoaderData<typeof loader>();
  return <PostForm postRes={postRes} categoriesRes={categoriesRes} />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
