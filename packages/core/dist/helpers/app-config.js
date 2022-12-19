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

// src/helpers/app-config.ts
var app_config_exports = {};
__export(app_config_exports, {
  default: () => app_config_default
});
module.exports = __toCommonJS(app_config_exports);
var import_path = require("path");
var pkg = require("../../package.json");
var {
  NODE_ENV,
  ESBOOT_PLATFORM = "pc" /* PC */,
  ESBOOT_PAGE_TYPE = "browser" /* browser */
} = process.env;
var configRootPath = (0, import_path.resolve)(process.cwd(), `./config`);
var configRootPathOfPlatfrom = (0, import_path.join)(configRootPath, ESBOOT_PLATFORM);
var configRootPathOfPageType = (0, import_path.join)(configRootPathOfPlatfrom, ESBOOT_PAGE_TYPE);
if (NODE_ENV === "production") {
  process.env.BROWSERSLIST_ENV = `${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}-production`;
}
var appConfig = {
  pageType: ESBOOT_PAGE_TYPE,
  platform: ESBOOT_PLATFORM,
  isMobile: ESBOOT_PLATFORM === "mobile" /* MOBILE */,
  isBrowser: ESBOOT_PAGE_TYPE === "browser" /* browser */,
  rootPath: (0, import_path.resolve)(process.cwd(), "./src"),
  configRootPath,
  configRootPathOfPlatfrom,
  configRootPathOfPageType,
  pkg
};
var app_config_default = appConfig;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
