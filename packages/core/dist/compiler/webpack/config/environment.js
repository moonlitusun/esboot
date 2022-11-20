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

// src/compiler/webpack/config/environment.ts
var environment_exports = {};
__export(environment_exports, {
  Environment: () => Environment
});
module.exports = __toCommonJS(environment_exports);
var Environment = /* @__PURE__ */ ((Environment2) => {
  Environment2["dev"] = "development";
  Environment2["prod"] = "production";
  return Environment2;
})(Environment || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Environment
});
