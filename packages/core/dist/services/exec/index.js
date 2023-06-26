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

// src/services/exec/index.ts
var exec_exports = {};
__export(exec_exports, {
  runExec: () => runExec
});
module.exports = __toCommonJS(exec_exports);
var import_cross_spawn = __toESM(require("cross-spawn"));
var import_path = require("../../helpers/path");
var import_constants = require("../../constants");
function runExec(args) {
  var _a;
  const command = args.slice(0, 1)[0];
  const params = args.slice(1);
  const childProcess = (0, import_cross_spawn.default)(
    (0, import_path.searchCommand)(command),
    params,
    {
      /**
       * FIXME: 此处的处理有一些问题
       * 
       * 在mac上error使用inherit会导致子进程不退出，然后husky拦截不到报错，还能提交代码，所以手动监听了exit事件
       * 
       * 在wins上面用inherit子进程可以触发拦截，但是看不到报错信息了，所以用了pipe。
       */
      stdio: ["inherit", "inherit", import_constants.isWins ? "inherit" : "pipe"],
      shell: true,
      cwd: process.cwd()
    }
  );
  childProcess.on("error", (err) => {
    console.error(`Failed to start child process: ${err}`);
    process.exit(1);
  });
  if (!import_constants.isWins) {
    let errorOutput = "";
    (_a = childProcess == null ? void 0 : childProcess.stderr) == null ? void 0 : _a.on("data", (data) => {
      errorOutput += data.toString();
    });
    childProcess.on("exit", (code, signal) => {
      if (code !== 0) {
        console.error(errorOutput);
        console.error(`exec ${command} failed with code ${code}, signal ${signal}`);
        process.exit(1);
      }
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  runExec
});
