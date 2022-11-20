import webpack, { Configuration } from 'webpack';
import { MFSU } from '@umijs/mfsu';

import { Environment } from '@@webpack/config/environment';

import { addEntry } from '@@webpack/config/add-entry';
import { addResolve } from '@@webpack/config/add-resolve';

import { addJavaScriptRules } from '@@webpack/config/add-javascript-rules';
import { addCSSRules } from '@@webpack/config/add-css-rules';
import { addPluginInjectBody } from '@@webpack/config/add-plugin-inject-body';

import { ApplyOpts, CustomConfiguration, UserOpts } from './types';

export interface IOpts {
  env: Environment;
}

const userOpts: UserOpts =  {
  mfsu: true,
};

// @ts-ignore
const mfsuInstance = new MFSU({
  implementor: webpack,
  buildDepWithESBuild: true
});

const getConfig = async (opts: IOpts) => {
  const config: CustomConfiguration = {
    entry: {},
    plugins: [],
    module: {
      rules: []
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
  await addResolve(applyOpts);

  // rules
  await addJavaScriptRules(applyOpts);
  await addCSSRules(applyOpts);

  // plugins
  await addPluginInjectBody(applyOpts);

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
