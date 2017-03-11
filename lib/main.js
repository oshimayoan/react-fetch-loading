'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLoadingIndicator = require('react-loading-indicator');

var _reactLoadingIndicator2 = _interopRequireDefault(_reactLoadingIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadingInjector = function loadingInjector(fetchingPropKey) {
  return function (ComposedComponent) {
    function WrapperComponent(props) {
      return props[fetchingPropKey] ? _react2.default.createElement(
        'div',
        { style: { display: 'block', textAlign: 'center' } },
        _react2.default.createElement(_reactLoadingIndicator2.default, { segments: 10, segmentWidth: 5, segmentLength: 10 })
      ) : _react2.default.createElement(ComposedComponent, props);
    }
    return WrapperComponent;
  };
};

exports.default = loadingInjector;