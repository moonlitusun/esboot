// import { resolve } from 'path';
// import Webpack from 'webpack';
// import spawn from 'cross-spawn';
// import WebpackDevServer from 'webpack-dev-server';
// import { searchCommand } from '@@/helpers/path';
// import getConfig from '@@webpack/config/config';
// import { Environment } from '@@webpack/config/environment';
// import appConfig from '@@/helpers/app-config';

// const webpackCfgOption = `--config ${resolve(
//   __dirname,
//   './webpack.config.js'
// )}`;

// export async function execDev() {
//   const opts = {
//     env: Environment.dev,
//   };
//   process.env.NODE_ENV = opts.env;

//   appConfig.init();
//   const cfg = await getConfig(opts);
//   const compiler = Webpack(cfg);

//   const devServerOptions = { ...cfg.devServer, open: true };
//   const server = new WebpackDevServer(devServerOptions, compiler);

//   const runServer = async () => {
//     console.log('Starting server...');
//     await server.start();
//   };

//   runServer();

//   console.log(cfg, '<-- cfg');
// }

// export async function execBuild() {
//   const opts = {
//     env: Environment.prod,
//   };
//   process.env.NODE_ENV = opts.env;

//   appConfig.init();

//   const cfg = await getConfig(opts);
//   const compiler = Webpack(cfg);

//   compiler.run((err, stats) => {
//     // ...

//     compiler.close((closeErr) => {
//       // ...
//     });
//   });

//   // spawn.sync(
//   //   `${searchCommand('cross-env')} NODE_ENV=production ${searchCommand(
//   //     'webpack'
//   //   )} ${webpackCfgOption}`,
//   //   { stdio: 'inherit', shell: true }
//   // );
// }

// function execAnalyzer() {
//   spawn.sync(
//     `${searchCommand('cross-env')} NODE_ENV=production ${searchCommand(
//       'webpack'
//     )} ${webpackCfgOption} --profile --json=stats.json && ${searchCommand(
//       'webpack-bundle-analyzer'
//     )} ./stats.json`,
//     { stdio: 'inherit', shell: true }
//   );
// }

// function execPreview(port: number) {
//   spawn.sync(
//     searchCommand('http-server'),
//     ['dist', '-p', String(port), '-c', '1'],
//     {
//       stdio: 'inherit',
//       shell: true,
//     }
//   );
// }
