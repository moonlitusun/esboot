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

// src/compiler/webpack/config/javascript/add-rules-javascript.ts
var add_rules_javascript_exports = {};
__export(add_rules_javascript_exports, {
  addJavaScriptRules: () => addJavaScriptRules
});
module.exports = __toCommonJS(add_rules_javascript_exports);
var import_config = __toESM(require("../../../../config"));
var import_babelrc = require("./babel/babelrc.config");
async function addJavaScriptRules(applyOpts) {
  const { rootPath } = import_config.default.extralConfig;
  const {
    config,
    isDev,
    mfsu,
    userOpts: { extraBabelPlugins, extraBabelPresets, extraBabelIncludes }
  } = applyOpts;
  config.module.rules.push({
    test: /\.(t|j)sx?$/,
    include: [
      rootPath,
      ...extraBabelIncludes
    ].filter(Boolean),
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          cacheDirectory: !isDev,
          presets: [
            ...extraBabelPresets,
            ...import_babelrc.presets
          ].filter(Boolean),
          env: import_babelrc.env,
          plugins: [
            ...extraBabelPlugins,
            ...import_babelrc.plugins,
            ...(mfsu == null ? void 0 : mfsu.getBabelPlugins()) ?? [],
            isDev && require.resolve("react-refresh/babel")
          ].filter(Boolean)
        }
      },
      {
        loader: require.resolve("thread-loader"),
        options: {
          workers: 4,
          workerParallelJobs: 50,
          workerNodeArgs: ["--max-old-space-size=1024"],
          poolTimeout: 2e3,
          poolParallelJobs: 50,
          name: "my-pool"
        }
      },
      {
        loader: require.resolve("ts-loader"),
        options: {
          happyPackMode: true,
          transpileOnly: true
        }
      }
    ]
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addJavaScriptRules
});
