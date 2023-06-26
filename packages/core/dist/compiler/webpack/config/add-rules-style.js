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

// src/compiler/webpack/config/add-rules-style.ts
var add_rules_style_exports = {};
__export(add_rules_style_exports, {
  addCSSRules: () => addCSSRules
});
module.exports = __toCommonJS(add_rules_style_exports);
var import_path = __toESM(require("path"));
var import_mini_css_extract_plugin = __toESM(require("mini-css-extract-plugin"));
var import_postcss_normalize = __toESM(require("postcss-normalize"));
var import_config = __toESM(require("../../../config"));
var pxtorem = require("@alitajs/postcss-plugin-px2rem");
var {
  getLocalIdent
} = require("@dr.pogodin/babel-plugin-react-css-modules/utils");
async function addCSSRules(applyOpts) {
  const {
    config,
    isDev,
    userOpts: { isRelativePublicPath, pxtorem: pxtoremCustom }
  } = applyOpts;
  const { rootPath, isMobile } = import_config.default.extralConfig;
  const globalScssPathList = [
    import_path.default.join(rootPath, "./styles/"),
    import_path.default.join(rootPath, "./platforms/mobile/styles/"),
    import_path.default.join(rootPath, "./platforms/pc/styles/")
  ];
  const parseScssModule = (options) => {
    const { modules = false } = options;
    const cssLoaderOptions = {
      sourceMap: isDev
    };
    if (modules) {
      Object.assign(cssLoaderOptions, {
        importLoaders: 2,
        modules: {
          namedExport: true,
          localIdentContext: rootPath,
          getLocalIdent,
          localIdentName: "[name]__[local]__[contenthash:base64:5]"
        }
      });
    }
    return [
      isDev ? require.resolve("style-loader") : {
        loader: import_mini_css_extract_plugin.default.loader,
        options: isRelativePublicPath ? { publicPath: "../" } : {}
      },
      {
        loader: require.resolve("css-loader"),
        options: cssLoaderOptions
      },
      {
        loader: require.resolve("postcss-loader"),
        options: {
          sourceMap: isDev,
          postcssOptions: {
            plugins: [
              isMobile && pxtorem({
                rootValue: 100,
                unitPrecision: 5,
                propWhiteList: [],
                propBlackList: [],
                exclude: false,
                selectorBlackList: [],
                ignoreIdentifier: false,
                replace: true,
                mediaQuery: false,
                minPixelValue: 0,
                ...pxtoremCustom
              }),
              require("postcss-flexbugs-fixes"),
              require("postcss-preset-env")({
                autoprefixer: {
                  flexbox: "no-2009"
                },
                stage: 3
              }),
              (0, import_postcss_normalize.default)()
            ].filter(Boolean)
          }
        }
      },
      // {
      //   loader: require.resolve('lightningcss-loader'),
      //   options: {
      //     implementation: LightningCSS
      //   },
      // },
      {
        loader: require.resolve("sass-loader"),
        options: { sourceMap: isDev }
      }
    ];
  };
  config.module.rules.push(
    {
      test: /\.css$/,
      use: [require.resolve("style-loader"), require.resolve("css-loader")]
    },
    {
      test: /\.scss$/,
      exclude: globalScssPathList,
      use: parseScssModule({ modules: true })
    },
    {
      test: /\.scss$/,
      include: globalScssPathList,
      use: parseScssModule({})
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addCSSRules
});
