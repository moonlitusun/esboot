import CopyPlugin from 'copy-webpack-plugin';
import appConfig from '@@/helpers/app-config';

import { ApplyOpts } from './types';

export const addCopyPlugin = async (applyOpts: ApplyOpts) => {
  const {
    rootPath,
    platform,
    pageType,
    configRootPathOfPlatfrom,
  } = appConfig;
  const { config, userOpts: { copy } } = applyOpts;

  // { from: './static/mobile-mpa', to: './static' },
  config.plugins.push(
    new CopyPlugin({
      patterns: [
        {
          from: `${configRootPathOfPlatfrom}/static`,
          to: './static'
        }
      ],
    })
  );
};
