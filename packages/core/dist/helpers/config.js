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

// src/helpers/config.ts
var config_exports = {};
__export(config_exports, {
  default: () => config_default
});
module.exports = __toCommonJS(config_exports);
var import_path = require("path");
var pkg = require("../../package.json");
var TPL_DICT = {
  ["mobile" /* MOBILE */]: "template/mobile.html",
  ["pc" /* PC */]: "template/pc.html"
};
var {
  NODE_ENV,
  ESBOOT_PLATFORM = "pc" /* PC */,
  ESBOOT_PAGE_TYPE = "browser" /* browser */,
  ESBOOT_CONTENT_PATTERN = "*"
} = process.env;
if (NODE_ENV === "production") {
  process.env.BROWSERSLIST_ENV = `${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}-production`;
}
var configPath = (0, import_path.resolve)(process.cwd(), `./dev/config/esboot/esboot-${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}.config.js`);
var config = {
  contentPattern: ESBOOT_CONTENT_PATTERN,
  pageType: ESBOOT_PAGE_TYPE,
  contentPath: process.env.ESBOOT_CONTENT_PATH || "",
  platform: ESBOOT_PLATFORM,
  template: TPL_DICT[ESBOOT_PLATFORM],
  isMobile: ESBOOT_PLATFORM === "mobile" /* MOBILE */,
  isBrowser: ESBOOT_PAGE_TYPE === "browser" /* browser */,
  rootPath: (0, import_path.resolve)(process.cwd(), "./src"),
  relativeStaticConfigPath: `/static-${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}.config.js`,
  pkg,
  configPath,
  staticConfigPath: (0, import_path.resolve)(process.cwd(), `./dev/config/static-config/static-${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}.config.js`)
};
var config_default = config;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
