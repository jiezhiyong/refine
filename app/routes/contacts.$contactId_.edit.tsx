import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, useFetcher, useLoaderData, useNavigate, useNavigation } from '@remix-run/react';
import invariant from 'tiny-invariant';
import { Button } from '~/components-shadcn/Button';
import { getContact, updateContact } from '~/data';
import { prisma } from '~/.server/db';

/** Action 处理函数 */
export const action = async ({ params, request }: ActionFunctionArgs) => {
  invariant(params.contactId, 'Missing contactId param');

  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  await updateContact(params.contactId, updates);

  return redirect(`/contacts/${params.contactId}`);
};

/** 加载器 */
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { contact } = params;

  invariant(contactId, 'Missing contactId param');
  const user = await prisma.user.findOne({ where: { id: contactId } });

  if (!contact) {
    throw new Response('Not Found', { status: 404 });
  }

  return json({ user });
};

export default function EditContact() {
  const navigation = useNavigation();
  const { contact } = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Form key={contact.id} id="contact-form" method="post">
      <p>
        <span>Name</span>
        <input aria-label="First name" defaultValue={contact.first} name="first" placeholder="First" type="text" />
        <input aria-label="Last name" defaultValue={contact.last} name="last" placeholder="Last" type="text" />
      </p>
      <label>
        <span>Twitter</span>
        <input defaultValue={contact.twitter} name="twitter" placeholder="@jack" type="text" />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          aria-label="Avatar URL"
          defaultValue={contact.avatar}
          name="avatar"
          placeholder="https://example.com/avatar.jpg"
          type="text"
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea defaultValue={contact.notes} name="notes" rows={6} />
      </label>
      <p>
        <Button disabled={isSubmitting} type="submit">
          Save
        </Button>
        <Button type="button" onClick={() => navigate(-1)}>
          Cancel
        </Button>
      </p>
    </Form>
  );
}
