import webpack from 'webpack';
import config from '@@/helpers/app-config';

import { ApplyOpts } from './types';

const { pkg } = config;

export const addDefinePlugin = async (applyOpts: ApplyOpts) => {
  const { config } = applyOpts;

  config.plugins.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
      ENV: JSON.stringify(process.env.NODE_ENV),
    })
  );
};
