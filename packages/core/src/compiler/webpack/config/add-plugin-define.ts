import webpack from 'webpack';
import appConfig from '@@/helpers/app-config';

import { ApplyOpts } from './types';

export const addDefinePlugin = async (applyOpts: ApplyOpts) => {
  const { pkg } = appConfig;

  const { config } = applyOpts;

  config.plugins.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
      ENV: JSON.stringify(process.env.NODE_ENV),
    })
  );
};
