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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/compiler/webpack/config/add-optimization.ts
var add_optimization_exports = {};
__export(add_optimization_exports, {
  addOptimization: () => addOptimization
});
module.exports = __toCommonJS(add_optimization_exports);
var import_terser_webpack_plugin = __toESM(require("terser-webpack-plugin"));
var import_css_minimizer_webpack_plugin = __toESM(require("css-minimizer-webpack-plugin"));
var addOptimization = async (applyOpts) => {
  const { config } = applyOpts;
  config.optimization = {
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
    minimize: true,
    minimizer: [
      new import_terser_webpack_plugin.default({
        parallel: true,
        terserOptions: {
          format: {
            comments: false
          }
        }
      }),
      new import_css_minimizer_webpack_plugin.default()
    ]
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addOptimization
});
