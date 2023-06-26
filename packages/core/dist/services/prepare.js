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

// src/services/prepare.ts
var prepare_exports = {};
__export(prepare_exports, {
  processPrepare: () => processPrepare
});
module.exports = __toCommonJS(prepare_exports);
var import_esbuild = __toESM(require("esbuild"));
var register = __toESM(require("../helpers/register"));
var import_node = require("../constants/node");
function checkNodeVersion() {
  const v = parseInt(process.version.slice(1));
  if (v < import_node.MIN_NODE_VERSION) {
    console.error(
      `Your node version ${v} is not supported, please upgrade to ${import_node.MIN_NODE_VERSION}.`
    );
    process.exit(1);
  }
}
function setNodeTitle(name) {
  if (process.title === "node") {
    process.title = name || import_node.FRAMEWORK_NAME;
  }
}
function setNoDeprecation() {
  process.noDeprecation = "1";
}
function registerTypescript() {
  register.register({
    implementor: import_esbuild.default
  });
  register.clearFiles();
}
var processPrepare = () => {
  checkNodeVersion();
  setNodeTitle();
  setNoDeprecation();
  registerTypescript();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  processPrepare
});
