// import {
//   ActionFunction,
//   unstable_composeUploadHandlers,
//   unstable_createFileUploadHandler,
//   unstable_createMemoryUploadHandler,
//   unstable_parseMultipartFormData,
// } from '@remix-run/node';
// import { Form, useActionData } from '@remix-run/react';

// export const action: ActionFunction = async ({ request }) => {
//   const uploadHandler = unstable_composeUploadHandlers(
//     unstable_createFileUploadHandler({
//       directory: 'public/uploads',
//     }),
//     unstable_createMemoryUploadHandler()
//   );

//   const formData = await unstable_parseMultipartFormData(request, uploadHandler);
//   const image = formData.get('img');
//   if (!image || typeof image === 'string') {
//     return { error: 'something wrong', imgSrc: null };
//   }

//   return { error: null, imgSrc: image.name };
// };

// export default function Index() {
//   const data = useActionData<typeof action>();

//   return (
//     <>
//       <Form method="post" encType="multipart/form-data">
//         <input type="file" name="img" accept="image/*" />
//         <button type="submit">upload image</button>
//       </Form>
//       {data?.error ? <h2>{data.error}</h2> : null}

//       {data?.imgSrc ? (
//         <>
//           <h2>uploaded image</h2>
//           <img alt="uploaded" src={data.imgSrc} />
//         </>
//       ) : null}
//     </>
//   );
// }
