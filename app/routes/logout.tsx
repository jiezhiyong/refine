import { ActionFunctionArgs } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { logout } from '~/session.server';

/** Action 处理函数 */
export const action = async ({ request }: ActionFunctionArgs) => {
  return logout(request);
};

/** 组件 */
export default function Logout() {
  return (
    <Form method="post">
      <button>Logout</button>
    </Form>
  );
}
