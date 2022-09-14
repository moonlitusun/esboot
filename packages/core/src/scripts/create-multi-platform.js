const path = require('path');
const fs = require('fs-extra');
const { joinExecPath } = require('../helpers/path');
const { ESBOOT_PLATFORM, ESBOOT_PAGE_TYPE } = require('../helpers/config');

const srcPath = joinExecPath('./src');
const scriptPath = path.join(srcPath, './platforms', ESBOOT_PLATFORM, `_${ESBOOT_PAGE_TYPE}`, './helpers/multi-platforms.ts');
const targetPath = path.join(srcPath, './helpers/multi-platforms.ts');

fs.copy(scriptPath, targetPath)
    .then(() => console.log('CreateMultiPlatform success!'))
    .catch((err) => console.error(`CreateMultiPlatform error: ${err}!`));
