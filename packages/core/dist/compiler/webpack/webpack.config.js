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

// src/compiler/webpack/webpack.config.ts
var webpack_config_exports = {};
__export(webpack_config_exports, {
  default: () => webpack_config_default
});
module.exports = __toCommonJS(webpack_config_exports);
var import_webpack_chain = __toESM(require("webpack-chain"));
var import_environment = require("./helpers/environment");
var getConfig = (opts) => {
  const config = new import_webpack_chain.default();
  const applyOpts = {
    config
  };
  const isDev = opts.env === import_environment.Environment.dev;
  config.mode(isDev ? import_environment.Environment.dev : import_environment.Environment.prod);
  config.entry("index").add("src/index.js").end().output.path("dist").filename("[name].bundle.js");
  config.performance.hints(false);
  return config.toConfig();
};
var webpack_config_default = getConfig;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
