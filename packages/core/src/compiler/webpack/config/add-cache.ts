import { merge } from 'lodash';
import { resolve } from 'path';
import { USER_CONFIG_FILE, webpackCacheDir } from '@@/constants';

export const addCache = async (applyOpts: any) => {
  const { config, isDev, cwd } = applyOpts;

  if (isDev) return;

  merge(config, {
    optimization: {
      runtimeChunk: 'single',
      moduleIds: 'deterministic',
    },
    cache: {
      type: 'filesystem',
      cacheDirectory: webpackCacheDir,
      profile: true,
      buildDependencies: {
        config: [USER_CONFIG_FILE],
      },
    },
  });
};
