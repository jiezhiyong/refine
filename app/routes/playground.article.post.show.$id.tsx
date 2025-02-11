import { Category, Post, User } from '@prisma/client';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import dayjs from 'dayjs';
import { CalendarIcon, ClockIcon, LeafyGreen, MailIcon } from 'lucide-react';

import { CloneButton, DeleteButton, EditButton } from '~/component-refine';
import { PageError } from '~/components';
import { Avatar, AvatarFallback, AvatarImage } from '~/components-shadcn/avatar';
import { Badge } from '~/components-shadcn/badge';
import { H1, Image, P } from '~/components-shadcn/typography';
import { EnumResource } from '~/constants';
import { dataService } from '~/services';
import { HandleFunction, POST_STATUS_MAP, PostStatus, TAny } from '~/types';
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
  const [initialData] = await Promise.all([
    dataService.getOne<Post & { category?: Category; user?: User }>({
      resource: EnumResource.post,
      id: params?.id || '',
      meta: {
        include: {
          user: true,
          category: true,
        },
      },
    }),
  ]);

  return { initialData };
}

// UI
export default function PostShow() {
  const { initialData } = useLoaderData<typeof loader>();
  const { data } = initialData;

  return (
    <article className="px-8 pt-8 pb-4">
      <header className="mb-8">
        <H1 className="relative mb-4 inline-flex gap-3 text-4xl font-bold">
          <span>{data.title}</span>
          <div className="inline-flex shrink-0 items-start pt-3.5">
            <Badge className="tracking-wide" variant={POST_STATUS_MAP[data.status as PostStatus]?.badge as TAny}>
              {data.status?.charAt(0)?.toUpperCase() + data.status?.slice(1)?.toLowerCase()}
            </Badge>
          </div>
        </H1>

        <div className="text-muted-foreground mb-8 flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center">
            <LeafyGreen className="mr-2 h-4 w-4" />
            <span>Category: {data.category?.title}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>Created: {new Date(data.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="mr-2 h-4 w-4" />
            <span>Updated: {dayjs(data.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={data.user?.avatar || ''} alt={data.user?.name || ''} />
            <AvatarFallback>{data.user?.name?.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{data.user?.name}</p>
            <p className="text-muted-foreground flex items-center text-sm">
              <MailIcon className="mr-2 h-4 w-4" />
              {data.user?.email}
            </p>
          </div>
        </div>
      </header>

      <div className="prose mb-8 max-w-none">
        <P>{data.content}</P>
      </div>

      <Image src={''} alt={data.title} className="h-[700px]" />
    </article>
  );
}

function UiTools() {
  return (
    <div className="flex items-center gap-1 text-sm">
      <EditButton variant="ghost" size="icon" />
      <DeleteButton variant="ghost" size="icon" />
      <CloneButton variant="ghost" size="icon" />
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
