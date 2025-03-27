/**
 * 首字母大写
 */
export function getFirstLetter(str: string = ''): string {
  return str.charAt(0);
}

/**
 * 首字母大写
 */
export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
