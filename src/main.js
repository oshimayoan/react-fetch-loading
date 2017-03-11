// @flow

import React from 'react';
import LoadingIndicator from 'react-loading-indicator';

const loadingInjector = (fetchingPropKey: string) => <T>(ComposedComponent: ReactClass<T>): ReactClass<{}> => {
  function WrapperComponent(props: Object) {
    return (
      (props[fetchingPropKey]) ?
        (
          <div style={{display: 'block', textAlign: 'center'}}>
            <LoadingIndicator segments={10} segmentWidth={5} segmentLength={10} />
          </div>
        ) :
        <ComposedComponent {...props} />
    );
  }
  return WrapperComponent;
};

export default loadingInjector;
