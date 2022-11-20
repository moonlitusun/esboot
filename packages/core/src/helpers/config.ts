import { resolve } from 'path';

const pkg = require('../../package.json');

enum PLATFORMS {
  MOBILE = 'mobile',
  PC = 'pc',
}

enum PAGE_TYPE {
  native = 'native',
  browser = 'browser',
}

const TPL_DICT = {
  [PLATFORMS.MOBILE]: 'template/mobile.html',
  [PLATFORMS.PC]: 'template/pc.html',
};

const {
  NODE_ENV,
  ESBOOT_PLATFORM = PLATFORMS.PC,
  ESBOOT_PAGE_TYPE = PAGE_TYPE.browser,
  ESBOOT_CONTENT_PATTERN = '*',
} = process.env;

if (NODE_ENV === 'production') {
  process.env.BROWSERSLIST_ENV = `${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}-production`;
}

const configPath = resolve(
  process.cwd(),
  `./dev/config/esboot/esboot-${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}.config.js`
);
// const userConfig = require(configPath);
// console.log(userConfig, '<-- userConfig');

const config = {
  contentPattern: ESBOOT_CONTENT_PATTERN,
  pageType: ESBOOT_PAGE_TYPE,
  contentPath: process.env.ESBOOT_CONTENT_PATH || '',
  platform: ESBOOT_PLATFORM,
  template: TPL_DICT[ESBOOT_PLATFORM as PLATFORMS],
  isMobile: ESBOOT_PLATFORM === PLATFORMS.MOBILE,
  isBrowser: ESBOOT_PAGE_TYPE === PAGE_TYPE.browser,
  rootPath: resolve(process.cwd(), './src'),
  // TODO: 区分public path
  relativeStaticConfigPath: `/static-${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}.config.js`,
  pkg,
  configPath,
  staticConfigPath: resolve(
    process.cwd(),
    `./dev/config/static-config/static-${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}.config.js`
  ),
  // ...userConfig,
};

export default config;
