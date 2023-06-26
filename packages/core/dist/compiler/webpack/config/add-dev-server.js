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

// src/compiler/webpack/config/add-dev-server.ts
var add_dev_server_exports = {};
__export(add_dev_server_exports, {
  addDevServer: () => addDevServer
});
module.exports = __toCommonJS(add_dev_server_exports);
var addDevServer = async (applyOpts) => {
  const {
    config,
    isDev,
    mfsu,
    userOpts: { proxy, port, host, https, http2, open }
  } = applyOpts;
  if (!isDev)
    return;
  const devServer = {
    compress: true,
    open,
    hot: true,
    client: {
      progress: true
    },
    https,
    http2,
    historyApiFallback: {
      disableDotRule: true
    },
    setupMiddlewares(middlewares) {
      middlewares.unshift(...(mfsu == null ? void 0 : mfsu.getMiddlewares()) ?? []);
      return middlewares;
    },
    port,
    host: host || "0.0.0.0",
    proxy
  };
  config.devServer = devServer;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addDevServer
});
