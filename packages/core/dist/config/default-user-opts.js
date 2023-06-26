var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/config/default-user-opts.ts
var default_user_opts_exports = {};
__export(default_user_opts_exports, {
  defaultUserOpts: () => defaultUserOpts
});
module.exports = __toCommonJS(default_user_opts_exports);
var import_constants = require("../constants");
var import_types = require("./types");
var defaultUserOpts = {
  mfsu: true,
  copy: [],
  proxy: {},
  https: false,
  http2: false,
  TSChecker: false,
  outputPath: "dist",
  open: false,
  port: import_constants.DEFAULT_DEV_PORT,
  extraBabelPlugins: [],
  extraBabelPresets: [],
  extraBabelIncludes: [],
  pxtorem: {},
  jsMinifier: import_types.JsMinifier.terser,
  jsMinifierOptions: {},
  cssMinifier: import_types.CSSMinifier.cssnano,
  cssMinifierOptions: {}
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultUserOpts
});
