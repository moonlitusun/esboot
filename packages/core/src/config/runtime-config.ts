import { resolve, join } from 'path';
import { pick } from 'lodash';

const pkg = require('../../package.json');

enum PLATFORMS {
  MOBILE = 'mobile',
  PC = 'pc',
}

enum PAGE_TYPE {
  native = 'native',
  browser = 'browser',
}

export default new (class RuntimeConfig {
  pageType: PAGE_TYPE = PAGE_TYPE.browser;
  platform: PLATFORMS = PLATFORMS.PC;
  isMobile: boolean = false;
  isBrowser: boolean = true;
  rootPath: string = '';
  configRootPath: string = '';
  configRootPathOfPlatfrom: string = '';
  configRootPathOfPageType: string = '';
  configJSPath: string = '';

  init() {
    const {
      NODE_ENV,
      ESBOOT_PLATFORM = PLATFORMS.PC,
      ESBOOT_PAGE_TYPE = PAGE_TYPE.browser,
    } = process.env;

    const configRootPath = resolve(process.cwd(), `./config`);
    const configRootPathOfPlatfrom = join(configRootPath, ESBOOT_PLATFORM);
    const configRootPathOfPageType = join(
      configRootPathOfPlatfrom,
      `_${ESBOOT_PAGE_TYPE}`
    );

    if (NODE_ENV === 'production') {
      process.env.BROWSERSLIST_ENV = `${ESBOOT_PLATFORM}-${ESBOOT_PAGE_TYPE}-production`;
    }

    this.pageType = ESBOOT_PAGE_TYPE as PAGE_TYPE;
    this.platform = ESBOOT_PLATFORM as PLATFORMS;
    this.isMobile = ESBOOT_PLATFORM === PLATFORMS.MOBILE;
    this.isBrowser = ESBOOT_PAGE_TYPE === PAGE_TYPE.browser;
    this.rootPath = resolve(process.cwd(), './src');
    this.configRootPath = configRootPath;
    this.configRootPathOfPlatfrom = configRootPathOfPlatfrom;
    this.configRootPathOfPageType = configRootPathOfPageType;
    this.configJSPath = `${this.configRootPathOfPageType}/config.js`;
    Object.assign(this, pick(pkg, ['version']));
  }
})();