import { resolve } from 'path';
import spawn from 'cross-spawn';
import { searchCommand } from '../../helpers/path';
import { run } from './index2';
import config from './webpack.config';

const webpackCfgOption = `--config ${resolve(
  __dirname,
  './webpack.config.js'
)}`;

export function execDev() {
  // spawn.sync(
  //   `${searchCommand('cross-env')} NODE_ENV=development ${searchCommand(
  //     'webpack-dev-server'
  //   )} ${webpackCfgOption}`,
  //   { stdio: 'inherit', shell: true }
  // );
  console.log(config, '<-- config');
  run();
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
