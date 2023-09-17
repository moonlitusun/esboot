import { merge, noop } from 'lodash';

import { Environment } from '@@webpack/config/environment';
import { USER_CONFIG_FILE } from '@@/constants';

import { defaultUserOpts } from './default-user-opts';
import runtimeConfig from './runtime-config';

export default new (class ESbootConfig {
  userOpts: any = {};
  runtimeCfg: any = {
    entry: [],
  };

  initUserConfig = (reload = false) => {
    if (reload) {
      delete require.cache[require.resolve(USER_CONFIG_FILE)];
    }

    const { default: customOpts, afterHooks } = require(USER_CONFIG_FILE);

    const isDev = process.env.NODE_ENV === Environment.dev;
    const publicPath = isDev ? '/' : './';

    const config = merge(
      defaultUserOpts,
      { publicPath, afterHooks },
      customOpts
    );
    config.isRelativePublicPath = config.publicPath === './';

    this.userOpts = config;
  };

  initRuntimeCfg = () => {
    runtimeConfig.init();
    this.runtimeCfg = runtimeConfig;
  };

  init = () => {
    this.initRuntimeCfg();
    this.initUserConfig();
  };
})();
