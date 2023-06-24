import { merge } from 'lodash';

import { Environment } from '@@webpack/config/environment';
import { USER_CONFIG_FILE } from '@@/constants';

import { defaultUserOpts } from './default-user-opts';
import appConfig from './app-config';

export default new (class ESbootConfig {
  userOpts: any = {};
  extralConfig: any = {};

  initUserConfig = (reload = false) => {
    if (reload) {
      delete require.cache[require.resolve(USER_CONFIG_FILE)];
    };

    const customOpts = require(USER_CONFIG_FILE).default;

    const isDev = process.env.NODE_ENV === Environment.dev;
    const publicPath = isDev ? '/' : './';

    const config = merge(defaultUserOpts, { publicPath }, customOpts);
    config.isRelativePublicPath = config.publicPath === './';

    this.userOpts = config;
  };

  initExtralConfig = () => {
    appConfig.init();
    this.extralConfig = appConfig;
  }

  init = () => {
    this.initExtralConfig();
    this.initUserConfig();
  };
})();
