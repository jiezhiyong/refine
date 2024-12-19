// import type { LoaderFunctionArgs } from '@remix-run/node';
// import escapeHtml from 'escape-html';

// export async function loader({ request }: LoaderFunctionArgs) {
//   const apiUrl = 'http://api.example.com/some-data.json';
//   const res = await fetch(apiUrl, {
//     headers: {
//       Authorization: `Bearer ${process.env.API_TOKEN}`,
//     },
//   });

//   const data = await res.json();

//   const prunedData = data.map((record) => ({
//     id: record.id,
//     title: record.title,
//     formattedBody: escapeHtml(record.content),
//   }));

//   return prunedData;
// }
