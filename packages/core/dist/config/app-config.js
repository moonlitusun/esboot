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

// src/config/app-config.ts
var app_config_exports = {};
__export(app_config_exports, {
  default: () => app_config_default
});
module.exports = __toCommonJS(app_config_exports);
var import_path = require("path");
var pkg = require("../../package.json");
var app_config_default = new class AppConfig {
  constructor() {
    this.pageType = "browser" /* browser */;
    this.platform = "pc" /* PC */;
    this.isMobile = false;
    this.isBrowser = true;
    this.rootPath = "";
    this.configRootPath = "";
    this.configRootPathOfPlatfrom = "";
    this.configRootPathOfPageType = "";
    this.configJSPath = "";
    this.pkg = {};
  }
  init() {
    const {
      NODE_ENV,
      ESBOOT_PLATFORM = "pc" /* PC */,
      ESBOOT_PAGE_TYPE = "browser" /* browser */
    } = process.env;
    const configRootPath = (0, import_path.resolve)(process.cwd(), `./config`);
    const configRootPathOfPlatfrom = (0, import_path.join)(configRootPath, ESBOOT_PLATFORM);
    const configRootPathOfPageType = (0, import_path.join)(
      configRootPathOfPlatfrom,
      `_${ESBOOT_PAGE_TYPE}`
    );
    if (NODE_ENV === "production") {
      process.env.BROWSERSLIST_ENV = `${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}-production`;
    }
    this.pageType = ESBOOT_PAGE_TYPE;
    this.platform = ESBOOT_PLATFORM;
    this.isMobile = ESBOOT_PLATFORM === "mobile" /* MOBILE */;
    this.isBrowser = ESBOOT_PAGE_TYPE === "browser" /* browser */;
    this.rootPath = (0, import_path.resolve)(process.cwd(), "./src");
    this.configRootPath = configRootPath;
    this.configRootPathOfPlatfrom = configRootPathOfPlatfrom;
    this.configRootPathOfPageType = configRootPathOfPageType;
    this.configJSPath = `${this.configRootPathOfPageType}/config.js`;
    this.pkg = pkg;
  }
}();
