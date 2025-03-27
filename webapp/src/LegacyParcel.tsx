import { useState } from 'react';
import Parcel from 'single-spa-react/parcel';

const LegacyParcel = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <p>This is wrapper, current mode: parcel</p>
      <Parcel
        config={() => import('@hr-forte/legacy')}
        wrapWith='div'
        wrapClassName='hr-forte-legacy'
        parcelDidMount={() => {
          setIsLoading(false);
        }}
      />

      {isLoading && <div>loading...</div>}
    </div>
  );
};

export default LegacyParcel;
