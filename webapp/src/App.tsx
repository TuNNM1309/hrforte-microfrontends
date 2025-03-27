import { useState, type FC } from 'react';
import LegacyCrossImport from './LegacyCrossImport';
import LegacyParcel from './LegacyParcel';

export const App: FC = () => {
  const [mode, setMode] = useState<'cross-import' | 'parcel'>('cross-import');
  return (
    <div>
      <div>
        <button
          style={{ marginRight: '8px' }}
          onClick={() => setMode('cross-import')}
        >
          Cross Import
        </button>
        <button onClick={() => setMode('parcel')}>Parcel</button>
      </div>

      {mode === 'cross-import' ? <LegacyCrossImport /> : <LegacyParcel />}
    </div>
  );
};
