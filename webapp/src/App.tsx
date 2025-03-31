import { type FC } from 'react';
import LegacyParcel from './LegacyParcel';

export const App: FC = () => {
  return (
    <div className='root'>
      <div>Wrapper</div>
      <LegacyParcel />
    </div>
  );
};
