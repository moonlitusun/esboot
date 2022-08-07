const { join } = require('path');
const spawn = require('cross-spawn');
const { ESBOOT_IS_MOBILE } = require('../scripts/config');
const platformsPath = join('./dev/bridge-mock', ESBOOT_IS_MOBILE ? './mobile' : './pc');
const filePath = join(platformsPath, './bridge-mock.js');
const samplePath = join(platformsPath, './bridge-mock-sample.js');

const child = spawn(join(process.cwd(), './node_modules/.bin/bridge-mock'), ['-f', filePath, '-s', samplePath]);
process.stdin.pipe(child.stdin);

child.stdout.on("data", data => {
  console.log(`Bridge-mock stdout:\n${data}`);
})

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
