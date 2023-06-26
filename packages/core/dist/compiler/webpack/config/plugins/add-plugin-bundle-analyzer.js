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

// src/compiler/webpack/config/plugins/add-plugin-bundle-analyzer.ts
var add_plugin_bundle_analyzer_exports = {};
__export(add_plugin_bundle_analyzer_exports, {
  addBundleAnalyzerPlugin: () => addBundleAnalyzerPlugin
});
module.exports = __toCommonJS(add_plugin_bundle_analyzer_exports);
var import_webpack_bundle_analyzer = require("webpack-bundle-analyzer");
var addBundleAnalyzerPlugin = async (applyOpts) => {
  const {
    config,
    userOpts: { analyze },
    isDev
  } = applyOpts;
  if (!isDev && analyze) {
    config.plugins.push(
      new import_webpack_bundle_analyzer.BundleAnalyzerPlugin({
        analyzerMode: "server",
        analyzerPort: process.env.ANALYZE_PORT || 8888,
        openAnalyzer: false,
        logLevel: "info",
        defaultSizes: "parsed",
        ...analyze
      })
    );
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addBundleAnalyzerPlugin
});
