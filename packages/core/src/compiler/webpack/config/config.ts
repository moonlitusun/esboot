import webpack, { Configuration } from 'webpack';
import { resolve } from 'path';
import esbuild from 'esbuild';
import { MFSU } from '@umijs/mfsu';

import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import { Environment } from '@@webpack/config/environment';

import { addEntry } from '@@webpack/config/add-entry';
import { addResolve } from '@@webpack/config/add-resolve';

import { addJavaScriptRules } from '@@webpack/config/add-rules-javascript';
import { addCSSRules } from '@@webpack/config/add-rules-style';
import { addAssetRules } from '@@webpack/config/add-rules-asset';

import { addInjectBodyPlugin } from '@@webpack/config/add-plugin-inject-body';
import { addDefinePlugin } from '@@webpack/config/add-plugin-define';
import { addCopyPlugin } from '@@webpack/config/add-plugin-copy';

import * as register from '@@/helpers/register';

import { ApplyOpts, CustomConfiguration, UserOpts } from './types';

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

export interface IOpts {
  env: Environment;
}

const userOpts: UserOpts = {
  mfsu: true,
};

// @ts-ignore
const mfsuInstance = new MFSU({
  implementor: webpack,
  buildDepWithESBuild: true,
});

const getConfig = async (opts: IOpts) => {
  const config: CustomConfiguration = {
    entry: {},
    plugins: [],
    module: {
      rules: [],
    },
  };

  register.register({
    implementor: esbuild,
  });
  register.clearFiles();
  const userCfg = require(resolve(process.cwd(), './.esbootrc.ts')).default;
  console.log(userCfg, '<-- userCfg');

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

  const restPlugins = [
    new FriendlyErrorsWebpackPlugin(),
    isDev && new ReactRefreshPlugin(),
    isDev && new ForkTsCheckerWebpackPlugin({})
  ].filter(Boolean);

  config.plugins.push(...restPlugins);

  config.output = {
    publicPath: isDev ? '/' : './',
    clean: !isDev,
    filename: isDev ? 'js/[name].js' : 'js/[name].[chunkhash:5].js',
  };

  config.performance = {
    hints: 'warning',
  };

  return config;
};

export default getConfig;
