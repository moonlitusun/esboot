import { join } from 'path';
import { fork } from 'child_process';
import { program } from 'commander';

import { Environment } from '@@webpack/config/environment';

import { registry } from './registry';
import { runDev } from './dev';
import { runBuild } from './build';

const cwd = process.cwd();

const pkgPath = join(__dirname, '../../package.json');
const pkg = require(pkgPath);

const scriptsPath = {
  dev: join(__dirname, './dev/index.js'),
  build: join(__dirname, './build/index.js'),
};

export const run = () => {
  program
    .command('dev')
    .description('Start development project')
    .allowUnknownOption(true)
    .action(async () => {
      process.env.NODE_ENV = Environment.dev;
      process.env.BABEL_ENV = Environment.dev;

      await registry({ root: cwd });

      runDev();
    });

  program
    .command('build')
    .description('build project')
    .allowUnknownOption(true)
    .action(async () => {
      process.env.NODE_ENV = Environment.prod;
      process.env.BABEL_ENV = Environment.prod;

      await registry({ root: cwd });

      runBuild();
    });

  program.version(pkg.version);
  program.parse(process.argv);
};

export function forkScript(scriptPath: string) {
  const child = fork(scriptPath, {
    cwd,
    env: {
      ...process.env,
    },
    stdio: 'inherit',
  });
  child.on('exit', (code) => {
    process.exit(code || 0);
  });

  return child;
}
