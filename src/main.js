// @flow

import React from 'react';

const loadingInjector = (fetchingPropKey: string) => <T>(ComposedComponent: ReactClass<T>): ReactClass<{}> => {
  function WrapperComponent(props: Object) {
    return (
      (props[fetchingPropKey]) ?
        (
          <div style={{display: 'block', textAlign: 'center'}}>
            <img src="../assets/ring.svg" />
          </div>
        ) :
        <ComposedComponent {...props} />
    );
  }
  return WrapperComponent;
};

export default loadingInjector;
