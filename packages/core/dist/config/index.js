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

// src/config/index.ts
var config_exports = {};
__export(config_exports, {
  default: () => config_default
});
module.exports = __toCommonJS(config_exports);
var import_lodash = require("lodash");
var import_environment = require("../compiler/webpack/config/environment");
var import_constants = require("../constants");
var import_default_user_opts = require("./default-user-opts");
var import_app_config = __toESM(require("./app-config"));
var config_default = new class ESbootConfig {
  constructor() {
    this.userOpts = {};
    this.extralConfig = {};
    this.initUserConfig = (reload = false) => {
      if (reload) {
        delete require.cache[require.resolve(import_constants.USER_CONFIG_FILE)];
      }
      ;
      const customOpts = require(import_constants.USER_CONFIG_FILE).default;
      const isDev = process.env.NODE_ENV === import_environment.Environment.dev;
      const publicPath = isDev ? "/" : "./";
      const config = (0, import_lodash.merge)(import_default_user_opts.defaultUserOpts, { publicPath }, customOpts);
      config.isRelativePublicPath = config.publicPath === "./";
      this.userOpts = config;
    };
    this.initExtralConfig = () => {
      import_app_config.default.init();
      this.extralConfig = import_app_config.default;
    };
    this.init = () => {
      this.initExtralConfig();
      this.initUserConfig();
    };
  }
}();
