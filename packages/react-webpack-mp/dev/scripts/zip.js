const path = require('path');
const del = require('del');
const AdmZip = require('adm-zip');

const pkg = require(path.resolve(__dirname, '../package.json'));

const z = new AdmZip();
const entryPath = path.resolve(__dirname, '../dist/');
const outputFolder = path.resolve(__dirname, '../release/');
const outputPath = path.join(outputFolder, `./v${pkg.version}.${pkg.testVersion}.zip`);

del.sync([outputFolder]);
z.addLocalFolder(entryPath);
z.writeZip(outputPath);
