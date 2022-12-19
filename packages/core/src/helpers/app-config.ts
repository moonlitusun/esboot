import { resolve, join } from 'path';

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
} = process.env;

const configRootPath = resolve(process.cwd(), `./config`);
const configRootPathOfPlatfrom = join(configRootPath, ESBOOT_PLATFORM);
const configRootPathOfPageType = join(
  configRootPathOfPlatfrom,
  ESBOOT_PAGE_TYPE
);

if (NODE_ENV === 'production') {
  process.env.BROWSERSLIST_ENV = `${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}-production`;
}

// const configPath = resolve(
//   process.cwd(),
//   `./config/esboot-${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}.config.js`
// );
// const userConfig = require(configPath);
// console.log(userConfig, '<-- userConfig');

const appConfig = {
  pageType: ESBOOT_PAGE_TYPE,
  platform: ESBOOT_PLATFORM,
  isMobile: ESBOOT_PLATFORM === PLATFORMS.MOBILE,
  isBrowser: ESBOOT_PAGE_TYPE === PAGE_TYPE.browser,
  rootPath: resolve(process.cwd(), './src'),
  configRootPath,
  configRootPathOfPlatfrom,
  configRootPathOfPageType,
  pkg,
  // TODO: 区分public path
  // relativeStaticConfigPath: `/static-${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}.config.js`,
  // staticConfigPath: resolve(
  //   process.cwd(),
  //   `./dev/config/static-config/static-${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}.config.js`
  // ),
  // ...userConfig,
};

export default appConfig;
