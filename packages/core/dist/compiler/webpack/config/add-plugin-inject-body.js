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

// src/compiler/webpack/config/add-plugin-inject-body.ts
var add_plugin_inject_body_exports = {};
__export(add_plugin_inject_body_exports, {
  addPluginInjectBody: () => addPluginInjectBody
});
module.exports = __toCommonJS(add_plugin_inject_body_exports);
var import_inject_body_webpack_plugin = __toESM(require("inject-body-webpack-plugin"));
var import_ip = __toESM(require("../../../helpers/ip"));
var import_config = __toESM(require("../../../helpers/config"));
var { relativeStaticConfigPath, isBrowser, pkg } = import_config.default;
var addPluginInjectBody = async (applyOpts) => {
  const { config: config2, isDev } = applyOpts;
  config2.plugins.push(new import_inject_body_webpack_plugin.default({
    position: "start",
    content: `
      <script>
        function getUrlParam(name) {
          var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
          var r = window.location.search.substr(1).match(reg);
          if (r != null) return decodeURI(r[2]);
          return null;
        }

        var theme = getUrlParam('theme');

        if (theme) {
          document.documentElement.className = theme;
        }
      <\/script>

      <script src="${relativeStaticConfigPath}?v=${process.env.BUILD_VERSION || pkg.version}"><\/script>

      ${!isBrowser && isDev ? `<script>
        window.brigeMockHost = "http://${import_ip.default}";
        window.brigeMockPort = ${process.env.BRIDGE_MOCK_PORT || 3e3};
        <\/script>` : ""}
      `
  }));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addPluginInjectBody
});
