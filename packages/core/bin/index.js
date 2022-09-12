#!/usr/bin/env node

const { program } = require('commander');
const pkg = require('../package.json');

program
  .option('-f, --file <char>')
  .option('-s, --sampleFile <char>')
  .description('esboot')
  .version(pkg.version);

program.command('generate')
.description('Generate Files')
.argument('<type>', 'string to split')
.action((type) => {
  switch (type) {
    case 'env':
      require('../lib/scripts/create-env');
      break;
    default: break;
  }
});

program.command('dev')
.description('Start Projects')
.action(() => {
  require('../lib/compiler/webpack').execDev();
});

program.command('build')
.description('Build Projects')
.action(() => {
  require('../lib/compiler/webpack').execBuild();
});

program.command('analyzer')
.description('Analyzer')
.action(() => {
  require('../lib/compiler/webpack').execAnalyzer();
});

program.command('preview')
.description('Start Projects')
.option('-p, --port <char>')
.action((options) => {
  require('../lib/compiler/webpack').execPreview(options.port || 8900);
});

program.command('docs')
.description('DOCs')
.argument('<action>', 'docs action')
.action((action) => {
  require('../lib/docs').execDocs(action);
});

program.parse();

// const options = program.opts();
// if (options.debug) console.log(options);
// console.log('pizza details:');
// if (options.small) console.log('- small pizza size');
// if (options.pizzaType) console.log(`- ${options.pizzaType}`);

