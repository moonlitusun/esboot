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

// src/compiler/webpack/config/add-resolve.ts
var add_resolve_exports = {};
__export(add_resolve_exports, {
  addResolve: () => addResolve
});
module.exports = __toCommonJS(add_resolve_exports);
var import_path = require("path");
var import_config = __toESM(require("../../../config"));
var addResolve = async (applyOpts) => {
  const { config } = applyOpts;
  const { rootPath } = import_config.default.extralConfig;
  const aliasDict = {
    "@": rootPath,
    "@mobile": (0, import_path.join)(rootPath, "./src/platforms/mobile"),
    "@mobile-native": (0, import_path.join)(rootPath, "./src/platforms/mobile/_native"),
    "@mobile-browser": (0, import_path.join)(rootPath, "./src/platforms/mobile/_browser"),
    "@pc": (0, import_path.join)(rootPath, "./src/platforms/pc"),
    "@pc-native": (0, import_path.join)(rootPath, "./src/platforms/pc/_native"),
    "@pc-browser": (0, import_path.join)(rootPath, "./src/platforms/pc/_browser")
  };
  config.resolve = {
    alias: aliasDict,
    extensions: [
      ".wasm",
      ".mjs",
      ".cjs",
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".json"
    ]
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addResolve
});
