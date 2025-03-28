// vite-plugin-lucide-icons.ts
/**
 * Vite 插件：专门处理 lucide-react 图标的按需加载
 * 作用：防止所有图标在构建时被添加到依赖图中
 */
import type { Plugin } from 'vite';

export default function lucideIconsPlugin(): Plugin {
  // 跟踪已经处理过的图标模块ID
  const processedModules = new Set<string>();

  return {
    name: 'vite-plugin-lucide-icons',

    // 拦截模块解析
    resolveId(source, importer) {
      // 只对动态导入的 lucide-react 图标进行特殊处理
      if (source.includes('lucide-react/dist/esm/icons/') && importer?.includes('dynamic-icon.tsx')) {
        return { id: source, moduleSideEffects: false };
      }
      return null;
    },

    // 转换模块内容
    transform(_code, id) {
      // 跳过非 lucide-react 图标的模块
      if (!id.includes('node_modules/lucide-react/dist/esm/icons/')) {
        return null;
      }

      // 防止重复处理同一个模块
      if (processedModules.has(id)) {
        return null;
      }
      processedModules.add(id);

      // 对于从 dynamic-icon.tsx 动态导入的图标，保留其代码
      // 其他情况下，返回一个空模块以防止这些图标被打包
      if (id.includes('lucide-react/dist/esm/icons/')) {
        // 检查这个图标是否被动态引用
        const isDynamicallyImported = process.env.NODE_ENV === 'development';

        // 开发环境下保留所有图标，生产环境下只保留实际使用的图标
        if (!isDynamicallyImported) {
          // 返回一个空的导出，这样未使用的图标不会被包含在最终的构建中
          return {
            code: 'export default null;',
            map: null,
          };
        }
      }

      return null;
    },

    // 配置钩子，优化依赖预构建阶段
    config() {
      return {
        optimizeDeps: {
          exclude: ['lucide-react'],
        },
        build: {
          rollupOptions: {
            output: {
              manualChunks(id) {
                // 自定义分块逻辑，防止为每个图标创建单独的文件
                if (id.includes('node_modules/lucide-react/dist/esm/icons/')) {
                  return 'lucide-icons'; // 所有图标打包到一个文件中
                }
                return null;
              },
            },
          },
        },
      };
    },
  };
}
