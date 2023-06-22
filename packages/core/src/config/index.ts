import { merge } from 'lodash';
import { resolve } from 'path';

import { Environment } from '@@webpack/config/environment';

import { defaultUserOpts } from './default-user-opts';
import appConfig from './app-config';

export default new (class ESbootConfig {
  userOpts: any = {};
  extralConfig: any = {};

  init = () => {
    appConfig.init();
    this.extralConfig = appConfig;

    const customOpts = require(resolve(
      process.cwd(),
      './.esbootrc.ts'
    )).default;

    const isDev = process.env.NODE_ENV === Environment.dev;
    const publicPath = isDev ? '/' : './';

    const config = merge(defaultUserOpts, { publicPath }, customOpts);
    config.isRelativePublicPath = config.publicPath === './';

    this.userOpts = config;
  }
})();
