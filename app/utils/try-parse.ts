/**
 * 尝试对 json string 字符串进行 parse
 */
export const tryParse = (jsonString: string | null | Record<string, unknown>) => {
  let jsonObject: Record<string, unknown> = {};
  let status = false;

  if (typeof jsonString === 'string' && jsonString.includes('{') && jsonString.includes('}')) {
    try {
      jsonObject = JSON.parse(jsonString);
      status = true;
    } catch (error) {
      // ignore
    }
  }

  return {
    status,
    data: status ? jsonObject : undefined,
    original: jsonString,
  };
};
