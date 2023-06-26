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

// src/services/dev/index.ts
var dev_exports = {};
__export(dev_exports, {
  WATCH_DEBOUNCE_STEP: () => WATCH_DEBOUNCE_STEP,
  runDev: () => runDev
});
module.exports = __toCommonJS(dev_exports);
var import_webpack = __toESM(require("webpack"));
var import_chokidar = __toESM(require("chokidar"));
var import_webpack_dev_server = __toESM(require("webpack-dev-server"));
var import_lodash = require("lodash");
var import_environment = require("../../compiler/webpack/config/environment");
var import_constants = require("../../constants");
var import_config = __toESM(require("../../compiler/webpack/config/config"));
var import_config2 = __toESM(require("../../config"));
var WATCH_DEBOUNCE_STEP = 300;
async function runDev() {
  let server;
  const start = async () => {
    const cfg = await (0, import_config.default)({ env: import_environment.Environment.dev });
    const compiler = (0, import_webpack.default)(cfg);
    server = new import_webpack_dev_server.default(cfg.devServer, compiler);
    console.log("Starting server...");
    await server.start();
  };
  start();
  const watcher = import_chokidar.default.watch(import_constants.USER_CONFIG_FILE, {
    ignoreInitial: true,
    cwd: process.cwd()
  });
  watcher.on(
    "change",
    (0, import_lodash.debounce)(async () => {
      import_config2.default.initUserConfig(true);
      await server.stop();
      await start();
    }, WATCH_DEBOUNCE_STEP)
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WATCH_DEBOUNCE_STEP,
  runDev
});
