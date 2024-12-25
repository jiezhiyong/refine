/**
 * 获取 URL 查询参数 eg: ?a=1&a=2&b=3 => { a: ['1', '2'], b: '3' }
 * @param request
 * @returns
 */
export function getSearchParams(request: Request) {
  const searchParams: Record<string, string | string[]> = {};

  const url = new URL(request.url);
  for (const [key, value] of url.searchParams.entries()) {
    if (searchParams[key]) {
      if (Array.isArray(searchParams[key])) {
        searchParams[key].push(value);
      } else {
        searchParams[key] = [searchParams[key], value];
      }
    } else {
      searchParams[key] = value;
    }
  }

  return searchParams;
}
