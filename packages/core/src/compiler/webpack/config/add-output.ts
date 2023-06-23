import { resolve } from 'path';
import { DEFAULT_OUTPUT_PATH } from '@@/constants';

export const addOutput = async (applyOpts: any) => {
  const {
    config,
    isDev,
    cwd,
    userOpts: { outputPath, publicPath },
  } = applyOpts;

  config.output = {
    publicPath,
    clean: !isDev,
    path: resolve(cwd, outputPath || DEFAULT_OUTPUT_PATH),
    filename: isDev ? 'js/[name].js' : 'js/[name].[chunkhash:5].js',
  };
};
