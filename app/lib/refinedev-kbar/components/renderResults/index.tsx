import { type ActionId, KBarResults, useMatches } from 'kbar';
import React from 'react';

import { ResultItem } from '../resultItem';

const groupNameStyle = {
  padding: '8px 0',
  margin: '0 16px',
  fontSize: '14px',
  fontWeight: 'bold',
  opacity: 0.5,
  borderBottom: '1px solid rgba(0 0 0 / 0.1)',
};
export const RenderResults: React.FC = () => {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        return typeof item === 'string' ? (
          <div style={groupNameStyle}>Resource.{item}</div>
        ) : (
          <ResultItem action={item} active={active} currentRootActionId={rootActionId as ActionId} />
        );
      }}
    />
  );
};
