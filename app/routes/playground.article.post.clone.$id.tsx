import { Post } from '@prisma/client';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { PageError } from '~/components/500';
import { dataService } from '~/services/data.server';
import { getDefaultTitle } from '~/utils/get-default-title';

import { PostForm } from './playground.article.post.edit.$id';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export async function loader({ params, request }: LoaderFunctionArgs) {
  const [initialData] = await Promise.all([
    dataService.findUniqueOrThrow<Post>('post', { where: { id: params?.id || '' } }, { request }),
  ]);

  return { initialData };
}

// UI
export default function PostClone() {
  const { initialData } = useLoaderData<typeof loader>();
  return <PostForm initialData={initialData} />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
