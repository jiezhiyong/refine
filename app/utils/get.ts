/**
 * Safely traverses nested object properties
 * @param source The object to traverse
 * @param path Array of property keys to access
 * @returns The value at the specified path or undefined
 */
const getNestedValue = (source: unknown, path: string[]): unknown => {
  // Return undefined for null/undefined sources
  if (source == null) {
    return undefined;
  }

  // Get the current property
  const [head, ...tail] = path;

  // Return the source if there's no path left
  if (!head) {
    return source;
  }

  // Get the value at the current key
  const value = typeof source === 'object' ? (source as Record<string, unknown>)[head] : undefined;

  // If we have more path segments and the current value exists, continue traversing
  if (tail.length && value != null) {
    return getNestedValue(value, tail);
  }

  // Otherwise return the current value
  return value;
};

/**
 * Gets the value at path of object
 * @param source The object to query
 * @param path The path of the property to get (dot-notation string)
 * @param defaultValue The value returned for undefined/null resolved values
 * @returns The value at the specified path or the default value
 */
export const get = <T, D = undefined>(source: unknown, path: string, defaultValue?: D): T | D => {
  if (!path) {
    return (source as T) ?? (defaultValue as D);
  }

  const result = getNestedValue(source, path.split('.'));
  return (result !== undefined && result !== null ? result : defaultValue) as T | D;
};
