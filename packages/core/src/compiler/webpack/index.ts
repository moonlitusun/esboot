import { resolve } from 'path';
import spawn from 'cross-spawn';
import { searchCommand } from '@@/helpers/path';
import getConfig from '@@webpack/config/config';
import { Environment } from '@@webpack/config/environment';
import dotenv from 'dotenv';

const webpackCfgOption = `--config ${resolve(
  __dirname,
  './webpack.config.js'
)}`;

export async function execDev() {
  dotenv.config();
  // spawn.sync(
  //   `${searchCommand('cross-env')} NODE_ENV=development ${searchCommand(
  //     'webpack-dev-server'
  //   )} ${webpackCfgOption}`,
  //   { stdio: 'inherit', shell: true }
  // );
  const opts = {
    env: Environment.dev,
  };

  const cfg = await getConfig(opts);

  console.log(cfg, '<-- cfg');
  // console.log(JSON.stringify(cfg, '', 2), '<-- config');
}

function execBuild() {
  spawn.sync(
    `${searchCommand('cross-env')} NODE_ENV=production ${searchCommand(
      'webpack'
    )} ${webpackCfgOption}`,
    { stdio: 'inherit', shell: true }
  );
}

function execAnalyzer() {
  spawn.sync(
    `${searchCommand('cross-env')} NODE_ENV=production ${searchCommand(
      'webpack'
    )} ${webpackCfgOption} --profile --json=stats.json && ${searchCommand(
      'webpack-bundle-analyzer'
    )} ./stats.json`,
    { stdio: 'inherit', shell: true }
  );
}

function execPreview(port: number) {
  spawn.sync(searchCommand('http-server'), ['dist', '-p', String(port), '-c', '1'], {
    stdio: 'inherit',
    shell: true,
  });
}
