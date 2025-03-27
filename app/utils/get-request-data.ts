import { TAny } from '~/types/any';

// 根据 Content-Type 选择正确的解析方法
export const getRequestData = async <T extends Record<string, TAny>>(request: Request): Promise<T> => {
  const contentType = request.headers.get('content-type');
  let data: T;

  if (contentType?.includes('application/json')) {
    data = await request.json();
  } else if (
    contentType?.includes('application/x-www-form-urlencoded') ||
    contentType?.includes('multipart/form-data')
  ) {
    const formData = await request.formData();
    data = Object.fromEntries(formData) as T;
  } else {
    // 对于 text/plain，尝试解析为 JSON
    const text = await request.text();
    try {
      data = JSON.parse(text);
    } catch {
      data = { value: text } as unknown as T;
    }
  }

  return data;
};
