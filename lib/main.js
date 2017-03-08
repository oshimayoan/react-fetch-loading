'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CircularProgress = require('material-ui/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingHOC = function LoadingHOC(fetchingPropKey) {
  return function (ComposedComponent) {
    function Loading(props) {
      return props[fetchingPropKey] ? _react2.default.createElement(
        'div',
        { style: { display: 'block', textAlign: 'center' } },
        _react2.default.createElement(_CircularProgress2.default, null)
      ) : _react2.default.createElement(ComposedComponent, props);
    }
    return Loading;
  };
};

exports.default = LoadingHOC;