'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadingInjector = function loadingInjector(fetchingPropKey) {
  return function (ComposedComponent) {
    function WrapperComponent(props) {
      return props[fetchingPropKey] ? _react2.default.createElement(
        'div',
        { style: { display: 'block', textAlign: 'center' } },
        _react2.default.createElement('img', { src: '../assets/ring.svg' })
      ) : _react2.default.createElement(ComposedComponent, props);
    }
    return WrapperComponent;
  };
};

exports.default = loadingInjector;