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

// src/compiler/webpack/config/javascript/babel/babelrc.config.ts
var babelrc_config_exports = {};
__export(babelrc_config_exports, {
  env: () => env,
  plugins: () => plugins,
  presets: () => presets
});
module.exports = __toCommonJS(babelrc_config_exports);
var import_path = __toESM(require("path"));
var import_utils = require("@dr.pogodin/babel-plugin-react-css-modules/utils");
var presets = [
  [
    require("@babel/preset-env"),
    {
      modules: false,
      useBuiltIns: "usage",
      corejs: { version: 3, proposals: true }
    }
  ],
  [
    require("@babel/preset-react"),
    {
      runtime: "automatic"
    }
  ]
];
var plugins = [
  [require("@babel/plugin-syntax-dynamic-import")],
  require("@babel/plugin-proposal-class-properties"),
  [
    require("@dr.pogodin/babel-plugin-react-css-modules"),
    {
      filetypes: {
        ".scss": {
          syntax: "postcss-scss"
        }
      },
      generateScopedName: (0, import_utils.generateScopedNameFactory)(
        "[name]__[local]__[contenthash:base64:5]"
      ),
      webpackHotModuleReloading: true,
      autoResolveMultipleImports: true,
      handleMissingStyleName: "throw"
    }
  ],
  [
    require.resolve("babel-plugin-module-resolver"),
    {
      alias: {
        "@": import_path.default.resolve(process.cwd(), "./src/"),
        "@mobile": import_path.default.resolve(process.cwd(), "./src/platforms/mobile/"),
        "@mobile-native": import_path.default.resolve(
          process.cwd(),
          "./src/platforms/mobile/_native/"
        ),
        "@mobile-browser": import_path.default.resolve(
          process.cwd(),
          "./src/platforms/mobile/_browser/"
        ),
        "@pc": import_path.default.resolve(process.cwd(), "./src/platforms/pc/"),
        "@pc-native": import_path.default.resolve(process.cwd(), "./src/platforms/pc/_native/"),
        "@pc-browser": import_path.default.resolve(process.cwd(), "./src/platforms/pc/_browser/")
      },
      extensions: [".ts", ".tsx"]
    }
  ]
];
var env = {
  production: {
    plugins: ["transform-react-remove-prop-types"]
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  env,
  plugins,
  presets
});
