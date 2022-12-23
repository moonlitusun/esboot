import { resolve, join } from 'path';
import dotenv from 'dotenv';

const pkg = require('../../package.json');

enum PLATFORMS {
  MOBILE = 'mobile',
  PC = 'pc',
}

enum PAGE_TYPE {
  native = 'native',
  browser = 'browser',
}

export default new (class AppConfig {
  pageType: PAGE_TYPE = PAGE_TYPE.browser;
  platform: PLATFORMS = PLATFORMS.PC;
  isMobile: boolean = false;
  isBrowser: boolean = true;
  rootPath: string = '';
  configRootPath: string = '';
  configRootPathOfPlatfrom: string = '';
  configRootPathOfPageType: string = '';
  pkg: Record<string, string> = {};

  init() {
    dotenv.config();

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
      console.log(
        process.env.BROWSERSLIST_ENV,
        '<-- process.env.BROWSERSLIST_ENV'
      );
      process.env.BROWSERSLIST_ENV = `${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}-production`;
    }

    this.pageType == ESBOOT_PAGE_TYPE;
    this.platform = ESBOOT_PLATFORM as PLATFORMS;
    this.isMobile = ESBOOT_PLATFORM === PLATFORMS.MOBILE;
    this.isBrowser = ESBOOT_PAGE_TYPE === PAGE_TYPE.browser;
    this.rootPath = resolve(process.cwd(), './src');
    this.configRootPath = configRootPath;
    this.configRootPathOfPlatfrom = configRootPathOfPlatfrom;
    this.configRootPathOfPageType = configRootPathOfPageType;
    this.pkg = pkg;
  }
})();
