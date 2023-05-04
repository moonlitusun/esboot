import webpack, { Configuration } from 'webpack';
import { resolve } from 'path';
import { merge } from 'lodash';
import esbuild from 'esbuild';
import { MFSU } from '@umijs/mfsu';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import { Environment } from '@@webpack/config/environment';

import { addEntry } from '@@webpack/config/add-entry';
import { addDevServer } from '@@webpack/config/add-dev-server';
import { addOptimization } from '@@webpack/config/add-optimization';
import { addResolve } from '@@webpack/config/add-resolve';

import { addJavaScriptRules } from '@@webpack/config/javascript/add-rules-javascript';
import { addCSSRules } from '@@webpack/config/add-rules-style';
import { addAssetRules } from '@@webpack/config/add-rules-asset';

import { addInjectBodyPlugin } from '@@webpack/config/add-plugin-inject-body';
import { addDefinePlugin } from '@@webpack/config/add-plugin-define';
import { addCopyPlugin } from '@@webpack/config/add-plugin-copy';

import * as register from '@@/helpers/register';

import { defaultUserOpts } from '@@webpack/constants/user-opts';

import { ApplyOpts, CustomConfiguration, UserOpts } from './types';

import appConfig from '@@/helpers/app-config';

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

export interface IOpts {
  env: Environment;
}

// @ts-ignore
const mfsuInstance = new MFSU({
  implementor: webpack,
  buildDepWithESBuild: true,
});

const getConfig = async (opts: IOpts) => {
  const { rootPath } = appConfig;
  const config: CustomConfiguration = {
    entry: {},
    plugins: [],
    devServer: {},
    module: {
      rules: [],
    },
  };

  register.register({
    implementor: esbuild,
  });
  register.clearFiles();
  const customOpts = require(resolve(process.cwd(), './.esbootrc.ts')).default;
  const userOpts = merge(defaultUserOpts, customOpts);

  console.log(userOpts, '<-- userOpts');

  const isDev = opts.env === Environment.dev;

  const applyOpts: ApplyOpts = {
    config,
    userOpts,
    isDev,
    mfsuInstance,
  };

  config.mode = isDev ? Environment.dev : Environment.prod;

  await addEntry(applyOpts);
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

  const restPlugins = [
    new FriendlyErrorsWebpackPlugin(),
    isDev && new ReactRefreshPlugin(),
    // isDev && new ForkTsCheckerWebpackPlugin({}),
  ].filter(Boolean);

  config.plugins.push(...restPlugins);
  Object.assign(config, {
    context: rootPath,
    output: {
      publicPath: isDev ? '/' : './',
      clean: !isDev,
      filename: isDev ? 'js/[name].js' : 'js/[name].[chunkhash:5].js',
    },
    performance: {
      hints: isDev ? false : 'warning',
    }
  })

  if (isDev) {
    config.devtool = 'cheap-module-source-map';
  }

  if (!isDev) {
    config.plugins.push(new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:5].css",
      chunkFilename: "css/[id].[contenthash:5].css"
    }));
  }

  return config;
};

export default getConfig;
