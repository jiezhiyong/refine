/**
 * 尝试对 json string 字符串进行 parse
 */
export const tryParse = (jsonString: string | null | Record<string, unknown>) => {
  let jsonObject: Record<string, unknown> = {};
  let status = false;

  if (jsonString && typeof jsonString === 'object') {
    status = true;
    jsonObject = jsonString;
  }

  if (typeof jsonString === 'string' && jsonString.includes('{') && jsonString.includes('}')) {
    try {
      jsonObject = JSON.parse(jsonString);
      if (typeof jsonObject === 'object') {
        status = true;
      }
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
