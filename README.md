# Enhanced react component for loading on fetching
This package provides a single enhanced react component, which used for injecting loading component to a component using React HOC (Higher Order Component).

## Installation
Using npm:

`npm install --save react-fetch-loading`

Using yarn:

`yarn add react-fetch-loading`

## Importing package
Using ES5:
`var loadingInjector = require('react-fetch-loading');`

Using ES6:
`import loadingInjector from 'react-fetch-loading';`

## Usage
The enhanced component `only need one prop`, which is a `boolean` for letting the enhanced component to know the fetching state, is it still fetching or done.

### Using compose:

You can composing loadingInjector using another library like `lodash` or `ramda`.
```js
let EnhancedComponent = compose(
  fetchingDataHOC(url),
  loadingInjector('isFetching'),
 )(ComponentThatNeedsLoadingIndicator);
```
or if you want to use stand-alone loadingInjector, you can simply wrap your presentational/stateless component using loadingInjector.

```js
let EnhacedComponent = loadingInjector(ComponentThatNeedsLoadingIndicator);
```

### Using react-redux:
```js
let EnhancedComponent = connect(mapStateToProps)(loadingInjector('isFetching')(ComponentThatNeedsLoadingIndicator);
```

Then you can exporting the component simply by:
```js
export default EnhancedComponent;
```

### Loading Indicator:

Currently, we only have one indicator to show. Which is coming from material-ui circular progress. We'll provide more loading indicator soon!

![](https://raw.githubusercontent.com/oshimayoan/react-fetch-loading/updatingReadme/circular.gif)
