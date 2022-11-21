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

// src/compiler/webpack/config/add-rules-asset.ts
var add_rules_asset_exports = {};
__export(add_rules_asset_exports, {
  addAssetRules: () => addAssetRules
});
module.exports = __toCommonJS(add_rules_asset_exports);
async function addAssetRules(applyOpts) {
  const {
    config
  } = applyOpts;
  config.module.rules.push({
    test: /\.(jpg|gif|png|ico|svg)$/,
    type: "asset",
    parser: {
      dataUrlCondition: {
        maxSize: 8 * 1024
      }
    },
    generator: {
      filename: "images/[name].[hash:8][ext]"
    }
  }, {
    test: /_svg\.svg$/,
    type: "asset/source",
    parser: {
      dataUrlCondition: {
        maxSize: 8 * 1024
      }
    },
    generator: {
      encoding: false,
      filename: "images/[name].[hash:8][ext]"
    }
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addAssetRules
});
