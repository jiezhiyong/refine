/**
 * Server Sent Events (SSE) - 实现服务器到客户端的实时推送
 */

import { Link, useLoaderData, useNavigate } from '@remix-run/react';
import { getIssues, Issue } from 'public/issues';
import { cn } from '~/utils/cn';
import icons from '/public/icons.svg?url';

export async function loader() {
  return await getIssues();
}

export default function Index() {
  const issues = useLoaderData<typeof loader>();

  return (
    <>
      {issues.map((issue) => (
        <IssueLine key={issue.id} issue={issue} />
      ))}
    </>
  );
}

function IssueLine({ issue }: { issue: Issue }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/issues/${issue.id}`)}
      className="flex cursor-default justify-between gap-8 border-b border-gray-100 px-6 py-3 text-sm hover:bg-gray-50"
    >
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <div className="w-14 text-gray-400">{issue.id}</div>
        <StatusMenu issue={issue} />
        <Link
          to={`/issues/${issue.id}`}
          tabIndex={0}
          className="flex-1 cursor-default truncate font-medium text-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          {issue.title}
        </Link>
      </div>
      <div className="flex flex-shrink-0 items-center gap-3">
        <div className="text-xs text-gray-400">{issue.date}</div>
        <img alt={issue.owner.name + ' avatar'} src={issue.owner.avatarUrl} className="h-5 w-5 rounded-full" />
      </div>
    </div>
  );
}

function StatusMenu({ issue }: { issue: Issue }) {
  return (
    <button onClick={(e) => e.stopPropagation()}>
      <svg
        className={cn(
          `h-[14px] w-[14px] rounded-full`,
          issue.status === 1
            ? 'text-yellow-500'
            : issue.status === 2
              ? 'text-orange-500'
              : issue.status === 3
                ? 'text-green-600'
                : issue.status === 4
                  ? 'text-indigo-600'
                  : 'text-gray-300'
        )}
      >
        <use
          href={`${icons}#${
            issue.status === 1
              ? 'pie-1/4'
              : issue.status === 2
                ? 'pie-1/2'
                : issue.status === 3
                  ? 'pie-3/4'
                  : issue.status === 4
                    ? 'check'
                    : 'circle'
          }`}
        />
      </svg>
    </button>
  );
}
