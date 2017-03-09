// @flow

import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const loadingInjector = (fetchingPropKey: string) => <T>(ComposedComponent: ReactClass<T>): ReactClass<{}> => {
  function WrapperComponent(props: {[key: string]: boolean}) {
    return (
      (props[fetchingPropKey]) ?
        <div style={{display: 'block', textAlign: 'center'}}><CircularProgress /></div> :
        <ComposedComponent {...props} />
    );
  }
  return WrapperComponent;
};

export default loadingInjector;
