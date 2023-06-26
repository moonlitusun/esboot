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

// src/compiler/webpack/config/plugins/add-plugin-define.ts
var add_plugin_define_exports = {};
__export(add_plugin_define_exports, {
  addDefinePlugin: () => addDefinePlugin
});
module.exports = __toCommonJS(add_plugin_define_exports);
var import_webpack = __toESM(require("webpack"));
var import_config = __toESM(require("../../../../config"));
var addDefinePlugin = async (applyOpts) => {
  const { pkg } = import_config.default.extralConfig;
  const { config } = applyOpts;
  config.plugins.push(
    new import_webpack.default.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
      ENV: JSON.stringify(process.env.NODE_ENV)
    })
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addDefinePlugin
});
