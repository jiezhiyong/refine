import type { MetaDescriptor, MetaFunction } from '@remix-run/node';

/**
 * 将当前路由的 meta 和父路由的 meta 进行合并，或者重写 [-> Github Gist](https://gist.github.com/ryanflorence/ec1849c6d690cfbffcb408ecd633e069)
 * ```tsx
 * export const meta = mergeMeta(
 *   ({ data }) => [{ title: 'New Title' }],
 *   ({ matches }) => [{ name: 'author', content: 'Ryan Florence' }]
 * );
 * ```
 */
export const mergeMeta = (overrideFn: MetaFunction, appendFn?: MetaFunction): MetaFunction => {
  return (arg) => {
    // get meta from parent routes
    let mergedMeta = arg.matches.reduce((acc, match) => {
      return acc.concat(match.meta || []);
    }, [] as MetaDescriptor[]);

    // replace any parent meta with the same name or property with the override
    const overrides = overrideFn(arg);

    for (const override of overrides) {
      const index = mergedMeta.findIndex(
        (meta) =>
          ('name' in meta && 'name' in override && meta.name === override.name) ||
          ('property' in meta && 'property' in override && meta.property === override.property) ||
          ('title' in meta && 'title' in override)
      );

      if (index !== -1) {
        mergedMeta.splice(index, 1, override);
      }
    }

    // append any additional meta
    if (appendFn) {
      mergedMeta = mergedMeta.concat(appendFn(arg));
    }

    return mergedMeta;
  };
};
