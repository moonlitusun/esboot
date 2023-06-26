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

// src/services/mock/bridge.ts
var bridge_exports = {};
__export(bridge_exports, {
  runMockBridge: () => runMockBridge
});
module.exports = __toCommonJS(bridge_exports);
var import_path = require("path");
var import_config = __toESM(require("../../config"));
var import_exec = require("../exec");
function runMockBridge(options) {
  const { file, sampleFile } = options;
  const { platform } = import_config.default.extralConfig;
  const folderPath = `./config/${platform}`;
  const filePath = file || (0, import_path.join)(folderPath, "bridge/bridge-mock.js");
  const samplePath = sampleFile || (0, import_path.join)(folderPath, "bridge/bridge-mock-sample.js");
  (0, import_exec.runExec)(["bridge-mock", "-f", filePath, "-s", samplePath]);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  runMockBridge
});
