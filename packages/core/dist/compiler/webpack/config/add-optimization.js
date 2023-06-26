var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/compiler/webpack/config/add-optimization.ts
var add_optimization_exports = {};
__export(add_optimization_exports, {
  addOptimization: () => addOptimization
});
module.exports = __toCommonJS(add_optimization_exports);
var import_terser_webpack_plugin = __toESM(require("terser-webpack-plugin"));
var import_lodash = require("lodash");
var import_css_minimizer_webpack_plugin = __toESM(require("css-minimizer-webpack-plugin"));
var import_lightningcss = __toESM(require("lightningcss"));
var import_lightningcss_loader = require("lightningcss-loader");
var import_types = require("../../../config/types");
var addOptimization = async (applyOpts) => {
  const {
    config,
    userOpts: {
      jsMinifier,
      jsMinifierOptions,
      cssMinifier,
      cssMinifierOptions
    },
    isDev
  } = applyOpts;
  if (isDev)
    return;
  const minimizer = [];
  switch (jsMinifier) {
    case import_types.JsMinifier.terser:
      const terserMinifyOptions = {
        format: {
          comments: false
        }
      };
      minimizer.push(
        new import_terser_webpack_plugin.default({
          minify: import_terser_webpack_plugin.default.terserMinify,
          parallel: true,
          terserOptions: (0, import_lodash.merge)(terserMinifyOptions, jsMinifierOptions)
        })
      );
      break;
    case import_types.JsMinifier.swc:
      const swcMinifyOptions = {};
      minimizer.push(
        new import_terser_webpack_plugin.default({
          minify: import_terser_webpack_plugin.default.swcMinify,
          parallel: true,
          terserOptions: (0, import_lodash.merge)(swcMinifyOptions, jsMinifierOptions)
        })
      );
      break;
    default:
      break;
  }
  switch (cssMinifier) {
    case import_types.CSSMinifier.cssnano:
      minimizer.push(new import_css_minimizer_webpack_plugin.default(cssMinifierOptions));
      break;
    case import_types.CSSMinifier.lightningcss:
      minimizer.push(
        new import_lightningcss_loader.LightningCssMinifyPlugin({
          implementation: import_lightningcss.default,
          ...cssMinifierOptions
        })
      );
      break;
    default:
      break;
  }
  config.optimization = {
    runtimeChunk: "single",
    moduleIds: "deterministic",
    splitChunks: {
      chunks: "all",
      name: "vendor",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/
        }
      }
    },
    emitOnErrors: true,
    usedExports: true,
    sideEffects: false,
    minimize: true,
    minimizer
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addOptimization
});
