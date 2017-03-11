// @flow

import React from 'react';
import LoadingIndicator from 'react-loading-indicator';

const loadingInjector = (fetchingPropKey: string, LoadingComponent?: ReactClass<{}>) => <T>(ComposedComponent: ReactClass<T>): ReactClass<{}> => {
  function WrapperComponent(props: Object) {
    let child = <LoadingIndicator segments={10} segmentWidth={5} segmentLength={10} />;
    if (LoadingComponent) {
      child = <LoadingComponent />;
    }
    return (
      (props[fetchingPropKey]) ?
        (
          <div style={{display: 'block', textAlign: 'center'}}>
            {child}
          </div>
        ) :
        <ComposedComponent {...props} />
    );
  }
  return WrapperComponent;
};

export default loadingInjector;
