import { TAny } from '~/types/any';

export interface CodeProps {
  data: TAny;
  summary?: string;
  open?: boolean;
}

/**
 * @name Code
 * @description Simple component to render out our JSON responses.
 */
export const Code = (props: CodeProps) => {
  const { data, summary, open = false } = props;

  return (
    <details open={open || !summary}>
      {summary && <summary className="cursor-pointer">{summary}</summary>}
      <code>
        <pre className="border-border/20 mt-2 border-t pt-2">{JSON.stringify(data, null, 2)}</pre>
      </code>
    </details>
  );
};
