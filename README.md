# Enhanced react component for loading on fetching
This package provides a single enhanced react component, which used for injecting loading component to a component using React HOC (Higher Order Component).

## Installation
Using npm:

`npm install --save react-fetch-loading`

Using yarn:

`yarn add react-fetch-loading`

## Usage
The enhanced component `only need one prop`, which is a `boolean` for letting the enhanced component to know the fetching state, is it still fetching or done.
### Using compose:
```
let EnhancedContactList = compose(
  fetchingData(url),
  LoadingHOC('isFetching'),
 )(ContactList);
```

### Using react-redux:
```
let ChatListContainer = connect(mapStateToProps)(LoadingHOC('isFetching')(ChatListComponent);
```
