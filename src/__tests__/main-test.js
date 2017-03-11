// @flow

import React from 'react';
import loadingInjector from '../main';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('loadingInjector', () => {
  const Component = (props: Object) => {
    return <h1 {...props}/>;
  };
  let WrappedComponent = loadingInjector('isFetching')(Component);

  it('should return wrapped component', () => {
    let isFetching = false;
    let container = shallow(
      <WrappedComponent isFetching={isFetching} />
    );
    expect(toJson(container)).toMatchSnapshot();
  });

  it('should return loading component', () => {
    let isFetching = true;
    let container = shallow(
      <WrappedComponent isFetching={isFetching} />
    );
    expect(toJson(container)).toMatchSnapshot();
  });
});
