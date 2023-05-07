(self["webpackChunk_dz_web_esboot_react"] = self["webpackChunk_dz_web_esboot_react"] || []).push([["mf-dep_docs_mfsu-dev_mf-va__Users_rocsun_Code_dz-library_esboot_react_boilerplate_react-webpack-mp_n-09d6ce"],{

/***/ "./docs/.mfsu-dev/mf-va__Users_rocsun_Code_dz-library_esboot_react_boilerplate_react-webpack-mp_node_modules_@umijs_preset-dumi_lib_plugins_features_demo_getDemoRenderArgs.js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./docs/.mfsu-dev/mf-va__Users_rocsun_Code_dz-library_esboot_react_boilerplate_react-webpack-mp_node_modules_@umijs_preset-dumi_lib_plugins_features_demo_getDemoRenderArgs.js ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_rocsun_Code_dz_library_esboot_react_boilerplate_react_webpack_mp_node_modules_umijs_preset_dumi_lib_plugins_features_demo_getDemoRenderArgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs */ "./node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs.js");

/* harmony default export */ __webpack_exports__["default"] = (_Users_rocsun_Code_dz_library_esboot_react_boilerplate_react_webpack_mp_node_modules_umijs_preset_dumi_lib_plugins_features_demo_getDemoRenderArgs__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

function _react() {
  const data = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

  _react = function _react() {
    return data;
  };

  return data;
}

function _theme() {
  const data = __webpack_require__(/*! dumi/theme */ "./node_modules/@umijs/preset-dumi/lib/theme/index.js");

  _theme = function _theme() {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

const InlineRender = props => {
  return props.render();
};
/**
 * return demo preview arguments for single page route
 * @return [props, children] or [children]
 */


var _default = (props, demos) => {
  let result = [];
  const uuid = props.match.params.uuid;
  const inline = props.location.query.wrapper === undefined;
  const demo = demos[uuid];

  if (demo) {
    const previewerProps = _objectSpread(_objectSpread({}, demo.previewerProps), {}, {
      // disallowed matryoshka
      hideActions: (demo.previewerProps.hideActions || []).concat(['EXTERNAL'])
    });

    if (props.location.query.capture !== undefined) {
      // unchain refer
      previewerProps.motions = (previewerProps.motions || []).slice(); // unshift autoplay motion

      previewerProps.motions.unshift('autoplay'); // append capture motion if not exist

      if (previewerProps.motions.every(motion => !motion.startsWith('capture'))) {
        // compatible with qiankun app
        previewerProps.motions.push('capture:[id|=root]');
      }
    }

    if (inline) {
      // return demo component with motions handler
      result = [_react().default.createElement(InlineRender, {
        render: () => {
          (0, _theme().useMotions)(previewerProps.motions || [], typeof window !== 'undefined' ? document.documentElement : null);
          return _react().default.createElement('div', {}, _react().default.createElement(demo.component));
        }
      })];
    } else {
      // return demo component with previewer props, for render demo via Previewer.tsx in theme
      result = [previewerProps, _react().default.createElement(demo.component)];
    }
  }

  return result;
};

exports.default = _default;

/***/ })

}]);