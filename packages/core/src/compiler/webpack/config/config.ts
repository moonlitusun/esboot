import webpack, { Configuration } from 'webpack';
import webpackbar from 'webpackbar';
import { resolve } from 'path';
import { MFSU } from '@umijs/mfsu';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import { Environment } from '@@webpack/config/environment';

import { addEntry } from '@@webpack/config/add-entry';
import { addDevServer } from '@@webpack/config/add-dev-server';
import { addOptimization } from '@@webpack/config/add-optimization';
import { addResolve } from '@@webpack/config/add-resolve';
import { addOutput } from '@@webpack/config/add-output';

import { addJavaScriptRules } from '@@webpack/config/javascript/add-rules-javascript';
import { addCSSRules } from '@@webpack/config/add-rules-style';
import { addAssetRules } from '@@webpack/config/add-rules-asset';

import { addInjectBodyPlugin } from '@@webpack/config/add-plugin-inject-body';
import { addDefinePlugin } from '@@webpack/config/add-plugin-define';
import { addCopyPlugin } from '@@webpack/config/add-plugin-copy';
import esbootConfig from '@@/config';

import { ApplyOpts, CustomConfiguration } from './types';

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

export interface IOpts {
  env: Environment;
}

// @ts-ignore
const mfsuInstance = new MFSU({
  implementor: webpack,
  buildDepWithESBuild: true,
});

const getWebpackConfig = async (opts: IOpts) => {
  const { extralConfig, userOpts } = esbootConfig;
  const { rootPath } = extralConfig;
  const config: CustomConfiguration = {
    entry: {},
    plugins: [],
    devServer: {},
    module: {
      rules: [],
    },
  };

  const isDev = opts.env === Environment.dev;

  const applyOpts: ApplyOpts = {
    config,
    userOpts,
    isDev,
    mfsuInstance,
  };

  config.mode = isDev ? Environment.dev : Environment.prod;

  await addEntry(applyOpts);
  await addOutput(applyOpts);
  await addResolve(applyOpts);

  // rules
  await addJavaScriptRules(applyOpts);
  await addCSSRules(applyOpts);
  await addAssetRules(applyOpts);

  // plugins
  await addInjectBodyPlugin(applyOpts);
  await addDefinePlugin(applyOpts);
  await addCopyPlugin(applyOpts);

  await addOptimization(applyOpts);
  await addDevServer(applyOpts);

  const { externals = {}, publicPath, customWebpack } = userOpts;
  const restPlugins = [
    // new webpackbar(),
    new FriendlyErrorsWebpackPlugin(),
    isDev && new ReactRefreshWebpackPlugin({ overlay: false }),
    // isDev && new ForkTsCheckerWebpackPlugin({}),
  ].filter(Boolean);

  config.plugins.push(...restPlugins);

  Object.assign(config, {
    context: rootPath,
    performance: {
      hints: isDev ? false : 'warning',
    },
    externals,
  });

  if (isDev) {
    config.devtool = 'cheap-module-source-map';
  }

  if (!isDev) {
    Object.assign(config, {
      cache: {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      },
    });

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:5].css',
        chunkFilename: 'css/[id].[contenthash:5].css',
      })
    );
  }

  return customWebpack ? customWebpack(config, applyOpts) : config;
};

export default getWebpackConfig;
