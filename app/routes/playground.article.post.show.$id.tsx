import { Category, Post, Prisma, User } from '@prisma/client';
import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import dayjs from 'dayjs';
import { CalendarIcon, ClockIcon, LeafyGreen, MailIcon } from 'lucide-react';

import { PageError } from '~/components/500';
import { CloneButton } from '~/components/refine/buttons/clone';
import { DeleteButton } from '~/components/refine/buttons/delete';
import { EditButton } from '~/components/refine/buttons/edit';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Badge } from '~/components/ui/badge';
import { H1, Image, P } from '~/components/ui/typography';
import { EnumPostStatus, POST_STATUS_MAP } from '~/constants/post';
import { dataService } from '~/services/data.server';
import { TAny } from '~/types/any';
import { HandleFunction } from '~/types/handle';
import { getDefaultTitle } from '~/utils/get-default-title';

export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

export const handle: HandleFunction = {
  uiTools: () => {
    return <UiTools />;
  },
};

export async function loader({ params, request }: LoaderFunctionArgs) {
  const args: Prisma.PostFindUniqueOrThrowArgs = {
    where: { id: params?.id || '' },
    include: {
      operatedBy: true,
      category: true,
    },
  };
  const [initialData] = await Promise.all([
    dataService.findUniqueOrThrow<Post & { category?: Category; operatedBy?: User }>('post', args, { request }),
  ]);

  return { initialData };
}

// UI
export default function PostShow() {
  const { initialData: data } = useLoaderData<typeof loader>();

  return (
    <article className="px-8 pt-8 pb-4">
      <header className="mb-8">
        <H1 className="relative mb-4 inline-flex gap-3 text-4xl font-bold">
          <span>{data.title}</span>
          <div className="inline-flex shrink-0 items-start pt-3.5">
            <Badge className="tracking-wide" variant={POST_STATUS_MAP[data.status as EnumPostStatus]?.badge as TAny}>
              {data.status}
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
            <AvatarImage src={data.operatedBy?.avatar || '?'} alt={data.operatedBy?.name || ''} />
            <AvatarFallback>{data.operatedBy?.name?.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{data.operatedBy?.name}</p>
            <p className="text-muted-foreground flex items-center text-sm">
              <MailIcon className="mr-2 h-4 w-4" />
              {data.operatedBy?.email}
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
      <CloneButton variant="ghost" size="icon" />
      <DeleteButton variant="ghost" size="icon" className="text-destructive!" />
    </div>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
