#!/usr/bin/env node

const { program } = require('commander');
const pkg = require('../package.json');

program
  .option('-f, --file <char>')
  .option('-s, --sampleFile <char>')
  .description('esboot')
  .version(pkg.version);

program.command('generate')
.description('Gerate Files')
.argument('<type>', 'string to split')
.action((type) => {
  console.log(type);
  switch (type) {
    case 'env':
      require('./scripts/create-env');
      break;
    default: break;
  }
});

program.parse();

// const options = program.opts();
// if (options.debug) console.log(options);
// console.log('pizza details:');
// if (options.small) console.log('- small pizza size');
// if (options.pizzaType) console.log(`- ${options.pizzaType}`);

