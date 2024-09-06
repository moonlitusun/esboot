import { join } from 'path';
import type { Configuration } from '@dz-web/esboot';

import type { AddFunc } from '@/cfg/types.mts';

export const addResolve: AddFunc = async function (cfg, viteCfg) {
  const { alias, cwd } = cfg.config;
  const customAlias: Configuration['alias'] = {};

  for (let k in alias) {
    const value = join(cwd, `./${alias[k]}/`);

    customAlias[k] = value;
  }

  viteCfg.resolve = {
    alias: customAlias,
  };
};