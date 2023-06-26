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

// src/compiler/webpack/config/config.ts
var config_exports = {};
__export(config_exports, {
  default: () => config_default
});
module.exports = __toCommonJS(config_exports);
var import_webpack = __toESM(require("webpack"));
var import_webpackbar = __toESM(require("webpackbar"));
var import_mfsu = require("@umijs/mfsu");
var import_lodash = require("lodash");
var import_mini_css_extract_plugin = __toESM(require("mini-css-extract-plugin"));
var import_react_refresh_webpack_plugin = __toESM(require("@pmmmwh/react-refresh-webpack-plugin"));
var import_environment = require("./environment");
var import_add_entry = require("./add-entry");
var import_add_dev_server = require("./add-dev-server");
var import_add_optimization = require("./add-optimization");
var import_add_resolve = require("./add-resolve");
var import_add_output = require("./add-output");
var import_add_rules_javascript = require("./javascript/add-rules-javascript");
var import_add_rules_style = require("./add-rules-style");
var import_add_rules_asset = require("./add-rules-asset");
var import_add_plugin_inject_body = require("./plugins/add-plugin-inject-body");
var import_add_plugin_define = require("./plugins/add-plugin-define");
var import_add_plugin_copy = require("./plugins/add-plugin-copy");
var import_add_plugin_fork_ts_checker = require("./plugins/add-plugin-fork-ts-checker");
var import_add_plugin_bundle_analyzer = require("./plugins/add-plugin-bundle-analyzer");
var import_config = __toESM(require("../../../config"));
var import_constants = require("../../../constants");
var FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
var getWebpackConfig = async (opts) => {
  const { userOpts } = import_config.default;
  const config = {
    entry: {},
    plugins: [],
    devServer: {},
    module: {
      rules: []
    }
  };
  const isDev = opts.env === import_environment.Environment.dev;
  let mfsu;
  if (isDev && userOpts.mfsu) {
    mfsu = new import_mfsu.MFSU({
      cwd: process.cwd(),
      tmpBase: `${process.cwd()}/node_modules/.cache/.mfsu`,
      implementor: import_webpack.default,
      depBuildConfig: {},
      buildDepWithESBuild: true,
      startBuildWorker: import_lodash.noop
    });
  }
  const applyOpts = {
    config,
    userOpts,
    cwd: process.cwd(),
    isDev,
    mfsu
  };
  config.mode = isDev ? import_environment.Environment.dev : import_environment.Environment.prod;
  await (0, import_add_entry.addEntry)(applyOpts);
  await (0, import_add_output.addOutput)(applyOpts);
  await (0, import_add_resolve.addResolve)(applyOpts);
  await (0, import_add_rules_javascript.addJavaScriptRules)(applyOpts);
  await (0, import_add_rules_style.addCSSRules)(applyOpts);
  await (0, import_add_rules_asset.addAssetRules)(applyOpts);
  await (0, import_add_plugin_inject_body.addInjectBodyPlugin)(applyOpts);
  await (0, import_add_plugin_define.addDefinePlugin)(applyOpts);
  await (0, import_add_plugin_copy.addCopyPlugin)(applyOpts);
  await (0, import_add_plugin_fork_ts_checker.addForkTsCheckerWebpackPlugin)(applyOpts);
  await (0, import_add_plugin_bundle_analyzer.addBundleAnalyzerPlugin)(applyOpts);
  await (0, import_add_optimization.addOptimization)(applyOpts);
  await (0, import_add_dev_server.addDevServer)(applyOpts);
  const { externals = {}, devtool, customWebpack } = userOpts;
  const restPlugins = [
    new import_webpackbar.default(),
    new FriendlyErrorsWebpackPlugin(),
    isDev && new import_react_refresh_webpack_plugin.default()
  ].filter(Boolean);
  config.plugins.push(...restPlugins);
  Object.assign(config, {
    // context: rootPath,
    performance: {
      hints: isDev ? false : "warning"
    },
    externals
  });
  if (devtool) {
    config.devtool = config.devtool;
  } else if (isDev) {
    config.devtool = import_constants.DEFAULT_DEVTOOL;
  }
  if (!isDev) {
    Object.assign(config, {
      cache: {
        type: "filesystem",
        buildDependencies: {
          config: [__filename]
        }
      }
    });
    config.plugins.push(
      new import_mini_css_extract_plugin.default({
        filename: "css/[name].[contenthash:5].css",
        chunkFilename: "css/[id].[contenthash:5].css"
      })
    );
  }
  if (mfsu) {
    await mfsu.setWebpackConfig({ config });
  }
  return customWebpack ? customWebpack(config, applyOpts) : config;
};
var config_default = getWebpackConfig;
