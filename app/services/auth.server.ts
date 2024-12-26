// import { Lucia } from 'lucia';
// import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
// import { PrismaClient } from '@prisma/client';
// import { RemixLucia } from 'lucia/middleware';

// const client = new PrismaClient();
// const adapter = new PrismaAdapter(client.session, client.user);

// export const lucia = new Lucia(adapter, {
//   sessionCookie: {
//     attributes: {
//       secure: process.env.NODE_ENV === 'production',
//     },
//   },
//   getUserAttributes: (attributes) => ({
//     email: attributes.email,
//     name: attributes.name,
//     role: attributes.role,
//   }),
// });

// export const auth = new RemixLucia(lucia);

// declare module 'lucia' {
//   interface Register {
//     Lucia: typeof lucia;
//     DatabaseUserAttributes: {
//       email: string;
//       name: string;
//       role: string;
//     };
//   }
// }
