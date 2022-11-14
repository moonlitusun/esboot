import webpack, { Configuration } from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import Config from 'webpack-chain';

import { Environment } from '@@webpack/helpers/environment';

export interface IOpts {
  env: Environment;
}

const getConfig = (opts: IOpts) => {
  const config = new Config();
  const applyOpts = {
    config,
  };

  const isDev = opts.env === Environment.dev;
  config.mode(isDev ? Environment.dev : Environment.prod);

  config
    .entry('index')
    .add('src/index.js')
    .end()
    .output.path('dist')
    .filename('[name].bundle.js');

  config
    .performance
    .hints(false);

  return config.toConfig();
};

export default getConfig;
