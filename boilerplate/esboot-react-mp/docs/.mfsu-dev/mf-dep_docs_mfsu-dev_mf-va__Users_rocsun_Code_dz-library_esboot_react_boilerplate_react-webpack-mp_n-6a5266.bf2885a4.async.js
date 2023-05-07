(self["webpackChunk_dz_web_esboot_react"] = self["webpackChunk_dz_web_esboot_react"] || []).push([["mf-dep_docs_mfsu-dev_mf-va__Users_rocsun_Code_dz-library_esboot_react_boilerplate_react-webpack-mp_n-6a5266"],{

/***/ "./docs/.mfsu-dev/mf-va__Users_rocsun_Code_dz-library_esboot_react_boilerplate_react-webpack-mp_node_modules_@umijs_babel-preset-umi_node_modules_@babel_runtime_helpers_esm_asyncToGenerator.js.js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./docs/.mfsu-dev/mf-va__Users_rocsun_Code_dz-library_esboot_react_boilerplate_react-webpack-mp_node_modules_@umijs_babel-preset-umi_node_modules_@babel_runtime_helpers_esm_asyncToGenerator.js.js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_rocsun_Code_dz_library_esboot_react_boilerplate_react_webpack_mp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");

/* harmony default export */ __webpack_exports__["default"] = (_Users_rocsun_Code_dz_library_esboot_react_boilerplate_react_webpack_mp_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ })

}]);