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

// src/compiler/webpack/config/add-output.ts
var add_output_exports = {};
__export(add_output_exports, {
  addOutput: () => addOutput
});
module.exports = __toCommonJS(add_output_exports);
var import_path = require("path");
var import_constants = require("../../../constants");
var addOutput = async (applyOpts) => {
  const {
    config,
    isDev,
    cwd,
    userOpts: { outputPath, publicPath }
  } = applyOpts;
  config.output = {
    publicPath,
    clean: !isDev,
    path: (0, import_path.resolve)(cwd, outputPath || import_constants.DEFAULT_OUTPUT_PATH),
    filename: isDev ? "js/[name].js" : "js/[name].[chunkhash:5].js"
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addOutput
});
