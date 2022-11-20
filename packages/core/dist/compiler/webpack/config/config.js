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

// src/compiler/webpack/config/config.ts
var config_exports = {};
__export(config_exports, {
  default: () => config_default
});
module.exports = __toCommonJS(config_exports);
var import_webpack = __toESM(require("webpack"));
var import_mfsu = require("@umijs/mfsu");
var import_environment = require("./environment");
var import_add_entry = require("./add-entry");
var import_add_resolve = require("./add-resolve");
var import_add_javascript_rules = require("./add-javascript-rules");
var import_add_css_rules = require("./add-css-rules");
var import_add_plugin_inject_body = require("./add-plugin-inject-body");
var userOpts = {
  mfsu: true
};
var mfsuInstance = new import_mfsu.MFSU({
  implementor: import_webpack.default,
  buildDepWithESBuild: true
});
var getConfig = async (opts) => {
  const config = {
    entry: {},
    plugins: [],
    module: {
      rules: []
    }
  };
  const isDev = opts.env === import_environment.Environment.dev;
  const applyOpts = {
    config,
    userOpts,
    isDev,
    mfsuInstance
  };
  config.mode = isDev ? import_environment.Environment.dev : import_environment.Environment.prod;
  await (0, import_add_entry.addEntry)(applyOpts);
  await (0, import_add_resolve.addResolve)(applyOpts);
  await (0, import_add_javascript_rules.addJavaScriptRules)(applyOpts);
  await (0, import_add_css_rules.addCSSRules)(applyOpts);
  await (0, import_add_plugin_inject_body.addPluginInjectBody)(applyOpts);
  config.output = {
    publicPath: isDev ? "/" : "./",
    clean: !isDev,
    filename: isDev ? "js/[name].js" : "js/[name].[chunkhash:5].js"
  };
  config.performance = {
    hints: "warning"
  };
  return config;
};
var config_default = getConfig;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
