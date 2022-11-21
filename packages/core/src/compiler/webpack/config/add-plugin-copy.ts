import CopyPlugin from 'copy-webpack-plugin';
import config from '@@/helpers/config';

import { ApplyOpts } from './types';

const { pkg } = config;

export const addCopyPlugin = async (applyOpts: ApplyOpts) => {
  const { config } = applyOpts;

  // config.plugins.push(
  //   new CopyPlugin({
  //     // patterns: userConfig.copy,
  //   })
  // );
};
