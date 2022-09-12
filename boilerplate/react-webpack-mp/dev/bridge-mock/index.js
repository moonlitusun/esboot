const { join } = require('path');
const spawn = require('cross-spawn');
const { ESBOOT_IS_MOBILE } = require('../scripts/config');
const platformsPath = join('./dev/bridge-mock', ESBOOT_IS_MOBILE ? './mobile' : './pc');
const filePath = join(platformsPath, './bridge-mock.js');
const samplePath = join(platformsPath, './bridge-mock-sample.js');

spawn(join(process.cwd(), './node_modules/.bin/bridge-mock'), ['-f', filePath, '-s', samplePath], { stdio: 'inherit' });
