'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var ComboItem = function ComboItem(props) {
  return _react2["default"].createElement(
    'li',
    {
      className: 'ref-combo-item ' + (!props.active || 'ref-combo-item-active'),
      onClick: function onClick(e) {
        if (e.target.dataset.type !== 'comboitem') {
          e.target.dataset.type = 'comboitem';
          e.target.dataset.value = props.value;
        }
      },
      'data-value': props.value,
      'data-type': 'comboitem'

    },
    props.text
  );
};
var _default = ComboItem;
exports["default"] = _default;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')["default"];

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ComboItem, 'ComboItem', '/Users/yaoxin/Downloads/workspace/aacanzhao/tinper-acs/ref-combobox/src/components/ComboItem/index.js');
  reactHotLoader.register(_default, 'default', '/Users/yaoxin/Downloads/workspace/aacanzhao/tinper-acs/ref-combobox/src/components/ComboItem/index.js');
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();