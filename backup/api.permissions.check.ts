// import { ActionFunctionArgs } from '@remix-run/node';
// import { EnumRole } from '~/constants/roles';
// import { checkPermission } from '~/services/casbin-permission.server';
// import { getUser } from '~/services/session.server';

// export async function action({ request }: ActionFunctionArgs) {
//   if (request.method !== 'POST') {
//     return Response.json({ error: 'Method not allowed' }, { status: 405 });
//   }

//   const { object, action } = await request.json();

//   const user = await getUser(request);
//   const role = user?.role;

//   if (!role) {
//     return Response.json({ permitted: false });
//   }

//   // 管理员
//   if (role === EnumRole.administrator) {
//     return Response.json({ permitted: true });
//   }

//   // 其他角色
//   const permitted = await checkPermission(role, object, action);

//   return Response.json({ permitted });
// }
