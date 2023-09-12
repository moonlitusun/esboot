import webpack, { Configuration } from 'webpack';
import webpackbar from 'webpackbar';
import { resolve } from 'path';
import { MFSU } from '@umijs/mfsu';
import { noop } from 'lodash';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { Environment } from '@@webpack/config/environment';

import { addEntry } from '@@webpack/config/add-entry';
import { addDevServer } from '@@webpack/config/add-dev-server';
import { addOptimization } from '@@webpack/config/add-optimization';
import { addResolve } from '@@webpack/config/add-resolve';
import { addOutput } from '@@webpack/config/add-output';

import { addJavaScriptRules } from '@@webpack/config/javascript/add-rules-javascript';
import { addCSSRules } from '@@webpack/config/add-rules-style';
import { addAssetRules } from '@@webpack/config/add-rules-asset';

// plugins
import { addInjectBodyPlugin } from '@@webpack/config/plugins/add-plugin-inject-body';
import { addDefinePlugin } from '@@webpack/config/plugins/add-plugin-define';
import { addCopyPlugin } from '@@webpack/config/plugins/add-plugin-copy';
import { addForkTsCheckerWebpackPlugin } from '@@webpack/config/plugins/add-plugin-fork-ts-checker';
import { addBundleAnalyzerPlugin } from '@@webpack/config/plugins/add-plugin-bundle-analyzer';

import esbootConfig from '@@/config';

import { DEFAULT_DEVTOOL } from '@@/constants';

import { ApplyOpts, CustomConfiguration } from './types';

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

export interface IOpts {
  env: Environment;
}

const getWebpackConfig = async (opts: IOpts) => {
  const { userOpts } = esbootConfig;
  const config: CustomConfiguration = {
    entry: {},
    plugins: [],
    devServer: {},
    module: {
      rules: [],
    },
  };

  const isDev = opts.env === Environment.dev;

  let mfsu: MFSU | undefined;
  if (isDev && userOpts.mfsu) {
    mfsu = new MFSU({
      cwd: process.cwd(),
      tmpBase: `${process.cwd()}/node_modules/.cache/.mfsu`,
      implementor: webpack,
      depBuildConfig: {},
      buildDepWithESBuild: true,
      startBuildWorker: noop as any,
    });
  }

  const applyOpts: ApplyOpts = {
    config,
    userOpts,
    cwd: process.cwd(),
    isDev,
    mfsu,
  };

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
  await addForkTsCheckerWebpackPlugin(applyOpts);
  await addBundleAnalyzerPlugin(applyOpts);

  await addOptimization(applyOpts);
  await addDevServer(applyOpts);

  const { externals = {}, devtool, customWebpack } = userOpts;
  const restPlugins = [
    // new webpackbar(),
    new FriendlyErrorsWebpackPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean);

  config.plugins.push(...restPlugins);

  Object.assign(config, {
    mode: isDev ? Environment.dev : Environment.prod,
    performance: {
      hints: isDev ? false : 'warning',
    },
    externals,
  });

  if (devtool) {
    config.devtool = config.devtool;
  } else if (isDev) {
    config.devtool = DEFAULT_DEVTOOL;
  }

  // prod
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
  } else {
    // dev
    Object.assign(config, {
      stats: 'errors-only',
      infrastructureLogging: {
        level: 'error'
      }
    });
  }

  if (mfsu) {
    await mfsu.setWebpackConfig({ config } as any);
  }

  return customWebpack ? customWebpack(config, applyOpts) : config;
};

export default getWebpackConfig;
