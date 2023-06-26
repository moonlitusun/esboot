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

// src/constants/index.ts
var constants_exports = {};
__export(constants_exports, {
  DEFAULT_DEVTOOL: () => DEFAULT_DEVTOOL,
  DEFAULT_DEV_PORT: () => DEFAULT_DEV_PORT,
  DEFAULT_OUTPUT_PATH: () => DEFAULT_OUTPUT_PATH,
  USER_CONFIG_FILE: () => USER_CONFIG_FILE,
  isWins: () => isWins
});
module.exports = __toCommonJS(constants_exports);
var import_path = require("path");
var USER_CONFIG_FILE = (0, import_path.resolve)(
  process.cwd(),
  "./.esbootrc.ts"
);
var DEFAULT_DEVTOOL = "cheap-module-source-map";
var DEFAULT_OUTPUT_PATH = "dist";
var DEFAULT_DEV_PORT = 8100;
var isWins = process.platform === "win32";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DEFAULT_DEVTOOL,
  DEFAULT_DEV_PORT,
  DEFAULT_OUTPUT_PATH,
  USER_CONFIG_FILE,
  isWins
});
