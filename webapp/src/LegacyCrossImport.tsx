import { FC } from 'react';

import { App } from '@hr-forte/legacy';

const LegacyCrossImport: FC = () => {
  return (
    <div>
      <p>This is wrapper, current mode: cross-import</p>
      <App />;
    </div>
  );
};

export default LegacyCrossImport;
