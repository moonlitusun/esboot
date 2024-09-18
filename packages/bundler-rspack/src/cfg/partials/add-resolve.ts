import { join } from 'path';
import type { Configuration } from '@dz-web/esboot';
import type { AddFunc } from '@/cfg/types';

export const addResolve: AddFunc = async function (cfg, rspackCfg) {
  const { alias } = cfg.config;
  const customAlias: Configuration['alias'] = {};

  for (let k in alias) {
    const value = join(process.cwd(), `./${alias[k]}/`);

    customAlias[k] = value;
  }

  rspackCfg.resolve = {
    alias: customAlias,
    extensions: [
      '.wasm',
      '.mjs',
      '.cjs',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
    ],
  };
};