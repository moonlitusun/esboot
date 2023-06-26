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

// src/compiler/webpack/config/add-entry.ts
var add_entry_exports = {};
__export(add_entry_exports, {
  addEntry: () => addEntry
});
module.exports = __toCommonJS(add_entry_exports);
var import_ast = require("@umijs/ast");
var import_fs = require("fs");
var import_path = require("path");
var import_glob = require("glob");
var import_html_webpack_plugin = __toESM(require("html-webpack-plugin"));
var import_config = __toESM(require("../../../config"));
var addEntry = async (applyOpts) => {
  const {
    rootPath,
    platform,
    pageType,
    configRootPathOfPlatfrom
  } = import_config.default.extralConfig;
  const {
    ESBOOT_CONTENT_PATH = "",
    ESBOOT_CONTENT_PATTERN = "*"
  } = process.env;
  const contentRootPath = `./platforms/${platform}/_${pageType}`;
  const { config, isDev, userOpts: { port } } = applyOpts;
  const content_path = (0, import_path.join)(contentRootPath, ESBOOT_CONTENT_PATH);
  const files = await (0, import_glob.glob)(`/**/${ESBOOT_CONTENT_PATTERN}.entry.tsx`, {
    root: (0, import_path.join)(rootPath, content_path)
  });
  files.forEach((file, index) => {
    const { title, template, name } = (0, import_ast.getExportProps)((0, import_fs.readFileSync)(file, "utf-8")) || {};
    const filename = (0, import_path.basename)(file, ".entry.tsx");
    const chunkName = name || filename;
    const ensureTitle = title || filename || "ESboot APP";
    const ensureTpl = (0, import_path.join)(configRootPathOfPlatfrom, `template/${template || "index"}.html`);
    if (isDev) {
      console.log(`Page${index + 1}`, `http://localhost:${port}/${chunkName}.html`);
    }
    config.entry[chunkName] = file;
    config.plugins.push(new import_html_webpack_plugin.default({
      inject: true,
      chunks: [chunkName],
      filename: `${chunkName}.html`,
      title: ensureTitle,
      template: ensureTpl,
      hash: true
    }));
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addEntry
});
