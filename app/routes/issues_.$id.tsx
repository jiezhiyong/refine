import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { data } from '@remix-run/node';
import { useFetcher, useLoaderData } from '@remix-run/react';
import { getIssue } from 'mocks/issues';
import invariant from 'tiny-invariant';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.id, 'Missing issue id');
  const issue = await getIssue(params.id);
  if (!issue) {
    throw data('Issue not found', { status: 404 });
  }
  return issue;
};

export const meta: MetaFunction<typeof loader> = ({ data: issue }) => [
  {
    title: issue?.title || 'Not Found',
  },
];

export default function Issue() {
  const issue = useLoaderData<typeof loader>();
  const fetcher = useFetcher();

  return (
    <div className="m-4 rounded border p-3 shadow-md">
      <div
        className="min-h-[30vh] border px-4 py-2 text-xl"
        autoFocus
        onBlur={(e) => {
          const title = String(e.currentTarget.textContent).trim();
          if (title !== issue.title.trim()) {
            fetcher.submit(
              { title: String(e.target.textContent) },
              {
                action: `/issues/${issue.id}/update`,
                method: 'post',
              }
            );
          }
        }}
        contentEditable
        dangerouslySetInnerHTML={{
          __html: fetcher.submission ? (fetcher.submission.formData.get('title') as string) : issue.title,
        }}
      />
    </div>
  );
}
