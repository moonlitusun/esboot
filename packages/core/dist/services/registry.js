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

// src/services/registry.ts
var registry_exports = {};
__export(registry_exports, {
  registry: () => registry
});
module.exports = __toCommonJS(registry_exports);
var import_path = require("path");
var import_fs = require("fs");
var import_dotenv = __toESM(require("dotenv"));
var import_dotenv_expand = __toESM(require("dotenv-expand"));
var import_config = __toESM(require("../config"));
var import_prepare = require("./prepare");
function loadEnv({ root }) {
  const load = (dotenvFile) => {
    if ((0, import_fs.existsSync)(dotenvFile)) {
      import_dotenv_expand.default.expand(
        import_dotenv.default.config({
          path: dotenvFile
        })
      );
    }
  };
  const envFile = (0, import_path.join)(root, ".env");
  const willLoadEnvs = [
    envFile,
    `${envFile}.${process.env.NODE_ENV}`,
    `${envFile}.local`
  ];
  willLoadEnvs.forEach((envFilePath) => {
    load(envFilePath);
  });
}
var registry = async ({ root }) => {
  loadEnv({ root });
  (0, import_prepare.processPrepare)();
  await import_config.default.init();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  registry
});
