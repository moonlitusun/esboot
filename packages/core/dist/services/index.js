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

// src/services/index.ts
var services_exports = {};
__export(services_exports, {
  forkScript: () => forkScript,
  run: () => run
});
module.exports = __toCommonJS(services_exports);
var import_path = require("path");
var import_child_process = require("child_process");
var import_commander = require("commander");
var import_environment = require("../compiler/webpack/config/environment");
var import_config = __toESM(require("../config"));
var import_registry = require("./registry");
var import_dev = require("./dev");
var import_build = require("./build");
var import_preview = require("./preview");
var import_lint = require("./lint");
var import_exec = require("./exec");
var import_docs = require("./docs");
var import_bridge = require("./mock/bridge");
var cwd = process.cwd();
var pkgPath = (0, import_path.join)(__dirname, "../../package.json");
var pkg = require(pkgPath);
var run = () => {
  import_commander.program.command("dev").description("Start development project").allowUnknownOption(true).action(async () => {
    process.env.NODE_ENV = import_environment.Environment.dev;
    process.env.BABEL_ENV = import_environment.Environment.dev;
    await (0, import_registry.registry)({ root: cwd });
    (0, import_dev.runDev)();
  });
  import_commander.program.command("build").description("build project").allowUnknownOption(true).action(async () => {
    process.env.NODE_ENV = import_environment.Environment.prod;
    process.env.BABEL_ENV = import_environment.Environment.prod;
    await (0, import_registry.registry)({ root: cwd });
    (0, import_build.runBuild)();
  });
  import_commander.program.command("preview").description("Preview Projects").option("-p, --port <char>").option("-d, --directory <char>").action(async (options) => {
    await (0, import_registry.registry)({ root: cwd });
    (0, import_preview.runPreview)(options.port || 8900, options.directory);
  });
  import_commander.program.command("lint").description("Lint files").allowUnknownOption(true).action(async () => {
    (0, import_lint.runLint)(process.argv.slice(3));
  });
  import_commander.program.command("docs").description("docs").allowUnknownOption(true).action(async () => {
    (0, import_docs.runDocs)(process.argv.slice(3));
  });
  import_commander.program.command("exec").description("exec commands").allowUnknownOption(true).action(async () => {
    (0, import_exec.runExec)(process.argv.slice(3));
  });
  import_commander.program.command("mock:bridge").description("Start bridge mock").option("-f, --file <char>").option("-s, --sampleFile <char>").action(async (options) => {
    await import_config.default.initExtralConfig();
    (0, import_bridge.runMockBridge)(options);
  });
  import_commander.program.version(pkg.version);
  import_commander.program.parse(process.argv);
};
function forkScript(scriptPath) {
  const child = (0, import_child_process.fork)(scriptPath, {
    cwd,
    env: {
      ...process.env
    },
    stdio: "inherit"
  });
  child.on("exit", (code) => {
    process.exit(code || 0);
  });
  return child;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  forkScript,
  run
});
