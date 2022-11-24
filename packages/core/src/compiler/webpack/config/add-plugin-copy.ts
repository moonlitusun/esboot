import CopyPlugin from 'copy-webpack-plugin';
import config from '@@/helpers/config';

import { ApplyOpts } from './types';

const { pkg } = config;

export const addCopyPlugin = async (applyOpts: ApplyOpts) => {
  const { config, userOpts: { copy } } = applyOpts;

  // { from: './static/mobile-mpa', to: './static' },
  config.plugins.push(
    new CopyPlugin({
      patterns: copy,
    })
  );
};
