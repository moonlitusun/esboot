require('dotenv').config();
const path = require('path');

const PLATFORMS = {
  MOBILE: 'mobile',
  PC: 'pc',
};

const PAGE_TYPE = {
  native: 'native',
  browser: 'browser',
};

const TPL_DICT = {
  [PLATFORMS.MOBILE]: 'template/mobile.html',
  [PLATFORMS.PC]: 'template/pc.html',
}

const {
  NODE_ENV,
  ESBOOT_CONTENT_PATH,
  ESBOOT_PLATFORM = PLATFORMS.PC,
  ESBOOT_PAGE_TYPE = PAGE_TYPE.browser,
  ESBOOT_CONTENT_PATTERN = '*'
} = process.env;

if (NODE_ENV === 'production') {
  process.env.BROWSERSLIST_ENV = `${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}-production`;
}

module.exports = {
  ESBOOT_CONTENT_PATTERN,
  ESBOOT_PLATFORM,
  ESBOOT_PAGE_TYPE,
  ESBOOT_TEMPLATE: TPL_DICT[ESBOOT_PLATFORM],
  ESBOOT_CONTENT_PATH,
  ESBOOT_IS_MOBILE: ESBOOT_PLATFORM === PLATFORMS.MOBILE,
  ESBOOT_IS_browser: ESBOOT_PAGE_TYPE === PAGE_TYPE.browser,
  ESBOOT_RELATIVE_STATIC_CONFIG_PATH: `/static-${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}.config.js`,
  ESBOOT_CONFIG_PATH: path.resolve(__dirname, `../config/esboot/esboot-${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}.config.js`),
  ESBOOT_STATIC_CONFIG_PATH: path.resolve(__dirname, `../config/static-config/static-${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}.config.js`)
};
