/**
 * 尝试对 json string 字符串进行 parse
 */
export const tryParse = (jsonString: string | null | Record<string, unknown>) => {
  let jsonObject: Record<string, unknown> | undefined = {};

  if (typeof jsonString === 'string') {
    try {
      jsonObject = JSON.parse(jsonString);
    } catch (error) {
      console.error('@tryParse', error);
    }
  } else {
    jsonObject = undefined;
  }

  return jsonObject;
};
