import { TAny } from '~/types/any';
import { tryParse } from '~/utils/try-parse';

export function deepParse(data: TAny) {
  const { status, data: content = {}, original } = tryParse(data);

  if (!status) {
    return { status: false, original, content: {} };
  }

  Object.keys(content).forEach((key) => {
    const value = content[key] as TAny;
    if (value && String(value)?.includes('{')) {
      const res = tryParse(value);
      content[key] = res.status ? res.data : value;
    }
  });

  return { status: true, content, original };
}
