#!/usr/bin/env node

const { program } = require('commander');
const pkg = require('../package.json');

program.description('esboot').version(pkg.version);

program
  .command('setup')
  .description('Init project')
  .action(() => {
    require('../src/scripts/create-env');
  });

program
  .command('generate')
  .description('Generate Files')
  .argument('<type>', 'string to split')
  .action((type) => {
    switch (type) {
      case 'env':
        require('../src/scripts/create-env');
        break;
      default:
        break;
    }
  });

program
  .command('dev')
  .description('Start Projects')
  .action(() => {
    require('../src/compiler/webpack').execDev();
  });

program
  .command('build')
  .description('Build Projects')
  .action(() => {
    require('../src/compiler/webpack').execBuild();
  });

program
  .command('analyzer')
  .description('Analyzer')
  .action(() => {
    require('../src/compiler/webpack').execAnalyzer();
  });

program
  .command('preview')
  .description('Start Projects')
  .option('-p, --port <char>')
  .action((options) => {
    require('../src/compiler/webpack').execPreview(options.port || 8900);
  });

program
  .command('docs')
  .description('DOCs')
  .argument('<action>', 'docs action')
  .action((action) => {
    require('../src/docs').execDocs(action);
  });

program.parse();

// const options = program.opts();
// if (options.debug) console.log(options);
// console.log('pizza details:');
// if (options.small) console.log('- small pizza size');
// if (options.pizzaType) console.log(`- ${options.pizzaType}`);
