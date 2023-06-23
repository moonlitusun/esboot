import { join } from 'path';
import { fork } from 'child_process';
import { program } from 'commander';

import { Environment } from '@@webpack/config/environment';

import { registry } from './registry';
import { runDev } from './dev';
import { runBuild } from './build';
import { runPreview } from './preview';
import { runLint } from './lint';
import { runCommitLint } from './lint/commit';

const cwd = process.cwd();

const pkgPath = join(__dirname, '../../package.json');
const pkg = require(pkgPath);

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

  program
    .command('preview')
    .description('Preview Projects')
    .option('-p, --port <char>')
    .option('-d, --directory <char>')
    .action(async (options) => {
      await registry({ root: cwd });

      runPreview(options.port || 8900, options.directory);
    });

  program
    .command('lint')
    .description('Lint files')
    .allowUnknownOption(true)
    .action(async (options) => {
      runLint(process.argv.slice(3));
    });

  // program
  //   .command('commitlint')
  //   .description('Lint commit message')
  //   .allowUnknownOption(true)
  //   .action(async () => {
  //     runCommitLint(process.argv.slice(3));
  //   });

  program.version(pkg.version);
  program.parse(process.argv);
};

// dead code
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
