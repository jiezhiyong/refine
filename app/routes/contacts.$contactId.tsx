import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import type { ShouldRevalidateFunctionArgs } from '@remix-run/react';
import type { FunctionComponent } from 'react';
import { json, defer } from '@remix-run/node';
import { Form, useFetcher, useLoaderData, Await, useAsyncValue, useAsyncError } from '@remix-run/react';
import { Suspense } from 'react';
import invariant from 'tiny-invariant';
import { Button } from '~/components-shadcn/Button';
import { getContact, updateContact } from '~/data';
import type { ContactRecord } from '~/data';
import { sleep } from '~/lib/utils';
import { mergeMeta } from '~/utils/merge-meta';

export const loader = ({ params }: LoaderFunctionArgs) => {
  const { contactId } = params;

  invariant(contactId, 'Missing contactId param');
  const promise = prisma.user.findOne({ where: { id: contactId } }).then(async (user) => {
    if (!user) {
      throw new Response('Not Found', { status: 404 });
    }

    return user;
  });

  return defer({
    user: promise,
  });
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  invariant(params.contactId, 'Missing contactId param');
  const formData = await request.formData();

  return updateContact(params.contactId, {
    favorite: formData.get('favorite') === 'true',
  });
};

export default function Contact() {
  const { contact } = useLoaderData<typeof loader>();

  return (
    <div id="contact">
      <Suspense fallback={<div>Loading...</div>}>
        <Await errorElement={<div>Oops!</div>} resolve={contact}>
          <ContactDetails />
        </Await>
      </Suspense>
    </div>
  );
}

function ContactDetails() {
  const contact = useAsyncValue() as ContactRecord;
  const error = useAsyncError() as Error | null;

  return (
    <>
      <div>
        <img key={contact.avatar} alt={`${contact.first} ${contact.last} avatar`} src={contact.avatar} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter ? (
          <p>
            <a href={`https://twitter.com/${contact.twitter}`}>{contact.twitter}</a>
          </p>
        ) : null}

        {contact.notes ? <p>{contact.notes}</p> : null}

        <div>
          <Form action="edit" fetcherKey="my-key" navigate={false}>
            <Button type="submit">Edit</Button>
          </Form>

          <Form
            action="destroy"
            method="post"
            onSubmit={(event) => {
              const response = confirm('Please confirm you want to delete this record.');

              if (!response) {
                event.preventDefault();
              }
            }}
          >
            <Button type="submit">Delete</Button>
          </Form>
        </div>
      </div>
    </>
  );
}

const Favorite: FunctionComponent<{
  contact: Record<string, unknown>;
}> = ({ contact }) => {
  const fetcher = useFetcher();
  const favorite = fetcher.formData ? fetcher.formData.get('favorite') === 'true' : contact.favorite;
  const isSubmitting = fetcher.state === 'submitting';

  return (
    <fetcher.Form method="post">
      <Button
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        disabled={isSubmitting}
        name="favorite"
        value={favorite ? 'false' : 'true'}
      >
        {favorite ? '★' : '☆'}
      </Button>
    </fetcher.Form>
  );
};

/** 重新验证处理 */
export function shouldRevalidate({
  currentParams,
  nextParams,
  formMethod,
  defaultShouldRevalidate,
}: ShouldRevalidateFunctionArgs) {
  if (formMethod === 'GET' && currentParams.projectId === nextParams.projectId) {
    return false;
  }

  return defaultShouldRevalidate;
}
