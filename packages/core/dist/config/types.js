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

// src/config/types.ts
var types_exports = {};
__export(types_exports, {
  CSSMinifier: () => CSSMinifier,
  JsMinifier: () => JsMinifier
});
module.exports = __toCommonJS(types_exports);
var JsMinifier = /* @__PURE__ */ ((JsMinifier2) => {
  JsMinifier2["terser"] = "terser";
  JsMinifier2["swc"] = "swc";
  JsMinifier2["none"] = "none";
  return JsMinifier2;
})(JsMinifier || {});
var CSSMinifier = /* @__PURE__ */ ((CSSMinifier2) => {
  CSSMinifier2["cssnano"] = "cssnano";
  CSSMinifier2["lightningcss"] = "lightningcss";
  CSSMinifier2["none"] = "none";
  return CSSMinifier2;
})(CSSMinifier || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CSSMinifier,
  JsMinifier
});
