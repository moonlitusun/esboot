var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// src/scripts/create-multi-platform.ts
var import_path = __toESM(require("path"));
var import_fs_extra = __toESM(require("fs-extra"));
var import_path2 = require("../helpers/path");
var { ESBOOT_PLATFORM, ESBOOT_PAGE_TYPE } = require("../helpers/config");
var srcPath = (0, import_path2.joinExecPath)("./src");
var scriptPath = import_path.default.join(srcPath, "./platforms", ESBOOT_PLATFORM, `_${ESBOOT_PAGE_TYPE}`, "./helpers/multi-platforms.ts");
var targetPath = import_path.default.join(srcPath, "./helpers/multi-platforms.ts");
import_fs_extra.default.copy(scriptPath, targetPath).then(() => console.log("CreateMultiPlatform success!")).catch((err) => console.error(`CreateMultiPlatform error: ${err}!`));
