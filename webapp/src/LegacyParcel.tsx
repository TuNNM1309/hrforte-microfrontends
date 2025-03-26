import { Spin } from 'antd';
import { useState } from 'react';
import Parcel from 'single-spa-react/parcel';

const LegacyParcel = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <div>
        <Parcel
          config={() => import('@hr-forte/legacy')}
          wrapWith='div'
          wrapClassName='hr-forte-legacy'
          parcelDidMount={() => {
            console.log('parcelDidMount');
            setIsLoading(false);
          }}
        />

        {isLoading && (
          <div>
            <Spin />
          </div>
        )}
      </div>
    </div>
  );
};

export default LegacyParcel;
