// src/helpers/config.ts
require("dotenv").config();
var path = require("path");
var TPL_DICT = {
  ["mobile" /* MOBILE */]: "template/mobile.html",
  ["pc" /* PC */]: "template/pc.html"
};
var {
  NODE_ENV,
  ESBOOT_PLATFORM: ESBOOT_PLATFORM_ENV = "pc" /* PC */,
  ESBOOT_PAGE_TYPE: ESBOOT_PAGE_TYPE_ENV = "browser" /* browser */,
  ESBOOT_CONTENT_PATTERN: ESBOOT_CONTENT_PATTERN_ENV = "*"
} = process.env;
if (NODE_ENV === "production") {
  process.env.BROWSERSLIST_ENV = `${ESBOOT_PLATFORM_ENV}-${ESBOOT_PAGE_TYPE_ENV}-production`;
}
module.exports = {
  ESBOOT_CONTENT_PATTERN,
  ESBOOT_PAGE_TYPE,
  ESBOOT_CONTENT_PATH: process.env.ESBOOT_CONTENT_PATH,
  ESBOOT_PLATFORM: ESBOOT_PLATFORM_ENV,
  ESBOOT_TEMPLATE: TPL_DICT[ESBOOT_PLATFORM_ENV],
  ESBOOT_IS_MOBILE: ESBOOT_PLATFORM_ENV === "mobile" /* MOBILE */,
  ESBOOT_IS_BROWSER: ESBOOT_PAGE_TYPE_ENV === "browser" /* browser */,
  ESBOOT_RELATIVE_STATIC_CONFIG_PATH: `/static-${ESBOOT_PLATFORM_ENV}-${ESBOOT_PAGE_TYPE_ENV}.config.js`,
  ESBOOT_CONFIG_PATH: path.resolve(process.cwd(), `./dev/config/esboot/esboot-${ESBOOT_PLATFORM_ENV}-${ESBOOT_PAGE_TYPE_ENV}.config.js`),
  ESBOOT_STATIC_CONFIG_PATH: path.resolve(process.cwd(), `./dev/config/static-config/static-${ESBOOT_PLATFORM_ENV}-${ESBOOT_PAGE_TYPE_ENV}.config.js`)
};
