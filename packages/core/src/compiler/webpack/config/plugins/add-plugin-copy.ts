import CopyPlugin from 'copy-webpack-plugin';
import esbootConfig from '@@/config';

import { ApplyOpts } from '../types';

export const addCopyPlugin = async (applyOpts: ApplyOpts) => {
  const {
    configRootPathOfPlatfrom,
  } = esbootConfig.extralConfig;
  const { config, userOpts: { copy } } = applyOpts;

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
