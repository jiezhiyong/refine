import { getSession, destroySession } from '~/session';

/** 操作器 */
export const action = async ({ request }: ActionFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'));

  return redirect('/login', {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  });
};

/** 组件 */
export default function Logout() {
  return (
    <>
      <p>Are you sure you want to log out?</p>
      <Form method="post">
        <button>Logout</button>
      </Form>
      <Link to="/">Never mind</Link>
    </>
  );
}
