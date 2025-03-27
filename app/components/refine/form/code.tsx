import { DiffEditor, DiffEditorProps, Editor, EditorProps, loader, useMonaco } from '@monaco-editor/react';
import { Eye } from 'lucide-react';
import { editor } from 'monaco-editor';
import { useEffect, useRef, useState } from 'react';
import { FieldValues, Path } from 'react-hook-form';

import { Button } from '~/components/ui/button';
import { baseUrl } from '~/config/base-url';
import { cn } from '~/lib/utils';
import { TAny } from '~/types/any';

type TEditorProps = EditorProps & DiffEditorProps;
type TCodeProps<TFieldValues extends FieldValues = FieldValues> = TEditorProps & {
  name?: Path<TFieldValues>;
  onChange?: (e: TAny) => void;
  enableToggleDiff?: boolean;
  openDiff?: boolean;
  modified?: string;
};

// 自定义配置Monaco编辑器的CDN路径
// 使用函数包装配置，确保只在组件挂载时执行一次
const configureLoader = () => {
  loader.config({
    ['paths']: { vs: `${baseUrl}/monaco-editor/vs` },
    ['vs/nls']: { availableLanguages: { '*': 'zh-cn' } },
  });
};

/**
 * Code editor
 * https://github.com/suren-atoyan/monaco-react?tab=readme-ov-file#readme、https://github.com/microsoft/monaco-editor/tree/main/src/basic-languages
 *
 * 注意：DiffEditor 没有 onChange 事件，无法在编辑时实时触发校验，直接禁止编辑
 */
function CodeEditor<TFieldValues extends FieldValues = FieldValues>({
  className,
  onChange,
  enableToggleDiff = true,
  openDiff = false,
  name,
  ...props
}: TCodeProps<TFieldValues>) {
  const monaco = useMonaco();
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const diffEditorRef = useRef<editor.IDiffEditor | null>(null);

  const [isDiff, setIsDiff] = useState<boolean | undefined>(openDiff);
  const [original] = useState<string | undefined>(props.value);
  const [modified, setModified] = useState<string | undefined>(props.modified || props.value);

  // 组件挂载时配置加载器
  useEffect(() => {
    configureLoader();

    // 组件卸载时清理资源
    return () => {
      if (editorRef.current) {
        editorRef.current.dispose();
        editorRef.current = null;
      }

      if (diffEditorRef.current) {
        diffEditorRef.current.dispose();
        diffEditorRef.current = null;
      }

      // 尝试清理 monaco 全局实例的所有编辑器模型
      if (monaco) {
        monaco.editor.getModels().forEach((model) => model.dispose());
      }
    };
  }, [monaco]);

  function handleEditorChange(value: string | undefined, _ev: editor.IModelContentChangedEvent) {
    setModified(value || '');
    onChange?.({ target: { value: value || '', name: name || 'unknown' }, type: 'change' });
  }

  function handleEditorMount(editor: editor.IStandaloneCodeEditor) {
    editorRef.current = editor;
  }

  function handleDiffEditorMount(editor: editor.IDiffEditor) {
    diffEditorRef.current = editor;
  }

  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason?.type === 'cancelation' && event.reason?.msg === 'operation is manually canceled') {
        event.preventDefault();
      }
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const baseProps = { theme: 'vs-dark', height: '30vh', ...props };
  return (
    <div className={cn('border-input overflow-hidden rounded-md border bg-[#1e1e1e] text-white shadow-xs', className)}>
      <div className="mx-2 my-1 flex min-h-[24px] justify-end">
        {enableToggleDiff && modified !== original && (
          <Button
            className="text-xs text-green-500"
            type="button"
            variant="link"
            size="sm"
            onClick={() => setIsDiff(!isDiff)}
            icon={<Eye />}
          >
            {isDiff ? '返回编辑' : '查看变更'}
          </Button>
        )}
      </div>

      <div className={cn('block', isDiff && 'hidden')}>
        <Editor {...baseProps} value={modified} onChange={handleEditorChange} onMount={handleEditorMount} />
      </div>

      {(enableToggleDiff || openDiff) && (
        <div className={cn('hidden', isDiff && 'block')}>
          <DiffEditor
            {...baseProps}
            options={{ readOnly: true }}
            original={original}
            modified={modified}
            onMount={handleDiffEditorMount}
          />
        </div>
      )}
    </div>
  );
}

export { CodeEditor };
