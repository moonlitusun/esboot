import { UserOpts } from '@@/config/types';
import runtimeConfig from '@@/config/runtime-config';
import { ExcludeFunctions } from './type';

type Config = ((
  runtimeCfg: ExcludeFunctions<typeof runtimeConfig>
) => UserOpts) | UserOpts;

function defineConfig(config: Config): Config {
  return config;
}

export default defineConfig;
