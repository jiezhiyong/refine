// import { ActionFunction, data, redirect } from '@remix-run/node';
// import { Form, useActionData, useLoaderData } from '@remix-run/react';
// import { redis } from '~/services/redis.server';

// export const loader = async () => {
//   const message = await redis.get('message');
//   return { message };
// };

// export const action: ActionFunction = async ({ request }) => {
//   const formData = await request.formData();
//   const message = formData.get('message');

//   if (!message || typeof message !== 'string') {
//     return data('String only!', { status: 400 });
//   }

//   await redis.set('message', message);

//   return redirect('/');
// };

// export default function Index() {
//   const data = useLoaderData<typeof loader>();
//   const actionMessage = useActionData<typeof action>();

//   return (
//     <main>
//       <div>
//         <b>Stored Message:</b> {data.message}
//       </div>
//       <Form method="post">
//         <h2>Change the message</h2>
//         <label>
//           <div>Message</div>
//           <input name="message" defaultValue={data.message ?? ''} />
//         </label>
//         <div>
//           <button type="submit">Save</button>
//         </div>
//       </Form>
//       {actionMessage ? (
//         <p>
//           <b>{actionMessage}</b>
//         </p>
//       ) : null}
//     </main>
//   );
// }
