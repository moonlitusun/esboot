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

// src/compiler/webpack/config/add-plugin-define.ts
var add_plugin_define_exports = {};
__export(add_plugin_define_exports, {
  addDefinePlugin: () => addDefinePlugin
});
module.exports = __toCommonJS(add_plugin_define_exports);
var import_webpack = __toESM(require("webpack"));
var import_config = __toESM(require("../../../helpers/config"));
var { pkg } = import_config.default;
var addDefinePlugin = async (applyOpts) => {
  const { config: config2 } = applyOpts;
  config2.plugins.push(new import_webpack.default.DefinePlugin({
    VERSION: JSON.stringify(pkg.version),
    ENV: JSON.stringify(process.env.NODE_ENV)
  }));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addDefinePlugin
});
