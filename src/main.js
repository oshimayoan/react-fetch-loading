// @flow

import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const LoadingHOC = (fetchingPropKey: string) => <T>(ComposedComponent: ReactClass<T>): ReactClass<{}> => {
  function Loading(props: {[key: string]: boolean}) {
    return (
      (props[fetchingPropKey]) ?
        <div style={{display: 'block', textAlign: 'center'}}><CircularProgress /></div> :
        <ComposedComponent {...props} />
    );
  }
  return Loading;
};

export default LoadingHOC;
