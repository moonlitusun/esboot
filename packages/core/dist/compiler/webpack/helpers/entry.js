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

// src/compiler/webpack/helpers/entry.ts
var entry_exports = {};
__export(entry_exports, {
  getEntryList: () => getEntryList
});
module.exports = __toCommonJS(entry_exports);
var import_ast = require("@umijs/ast");
var import_fs = require("fs");
var import_path = require("path");
var import_glob = __toESM(require("glob"));
var {
  ESBOOT_PLATFORM,
  ESBOOT_PAGE_TYPE,
  ESBOOT_TEMPLATE,
  ESBOOT_CONFIG_PATH,
  ESBOOT_CONTENT_PATH = "./",
  ESBOOT_CONTENT_PATTERN
} = require((0, import_path.resolve)(__dirname, "../../../helpers/config"));
var userConfig = require(ESBOOT_CONFIG_PATH);
var rootPath = (0, import_path.resolve)(process.cwd(), "./src");
var contentRootPath = `./platforms/${ESBOOT_PLATFORM}/_${ESBOOT_PAGE_TYPE}`;
function getEntryList() {
  const { html } = userConfig;
  if (html)
    return html;
  const content_path = (0, import_path.join)(contentRootPath, ESBOOT_CONTENT_PATH);
  const list = [];
  const files = import_glob.default.sync(`/**/${ESBOOT_CONTENT_PATTERN}.entry.tsx`, {
    root: (0, import_path.join)(rootPath, content_path)
  });
  files.forEach((file, index) => {
    const { title, template, name } = (0, import_ast.getExportProps)((0, import_fs.readFileSync)(file, "utf-8")) || {};
    const filename = (0, import_path.basename)(file, ".entry.tsx");
    const entryInfo = {
      name: name || filename,
      title: title || filename,
      entry: file
    };
    entryInfo.template = template || ESBOOT_TEMPLATE;
    list.push(entryInfo);
  });
  return list;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getEntryList
});
