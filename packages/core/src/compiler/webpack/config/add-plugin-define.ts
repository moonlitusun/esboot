import webpack from 'webpack';
import esbootConfig from '@@/config';

import { ApplyOpts } from './types';

export const addDefinePlugin = async (applyOpts: ApplyOpts) => {
  const { pkg } = esbootConfig.extralConfig;

  const { config } = applyOpts;

  config.plugins.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
      ENV: JSON.stringify(process.env.NODE_ENV),
    })
  );
};
