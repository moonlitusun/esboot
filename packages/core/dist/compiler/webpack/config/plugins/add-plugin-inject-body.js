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

// src/compiler/webpack/config/plugins/add-plugin-inject-body.ts
var add_plugin_inject_body_exports = {};
__export(add_plugin_inject_body_exports, {
  addInjectBodyPlugin: () => addInjectBodyPlugin
});
module.exports = __toCommonJS(add_plugin_inject_body_exports);
var import_path = require("path");
var import_inject_body_webpack_plugin = __toESM(require("inject-body-webpack-plugin"));
var import_ip = __toESM(require("../../../../helpers/ip"));
var import_config = __toESM(require("../../../../config"));
var getVersion = () => {
  const pkg = require((0, import_path.join)(process.cwd(), "package.json"));
  return pkg.version;
};
var addInjectBodyPlugin = async (applyOpts) => {
  const { isBrowser, isMobile } = import_config.default.extralConfig;
  const { config, isDev, userOpts: { publicPath } } = applyOpts;
  const isInjectBridgeMock = !isBrowser && isMobile && isDev;
  config.plugins.push(
    // @ts-ignore
    new import_inject_body_webpack_plugin.default({
      position: "start",
      content: `
      <script src="${publicPath}config.js?v=${process.env.BUILD_VERSION || getVersion()}">
      </script>

      ${isInjectBridgeMock ? `<script>
        window.brigeMockHost = "http://${import_ip.default}";
        window.brigeMockPort = ${process.env.BRIDGE_MOCK_PORT || 3e3};
        </script>` : ""}
      `
    })
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addInjectBodyPlugin
});
