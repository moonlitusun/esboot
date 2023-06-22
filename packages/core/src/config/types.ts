import type { Configuration } from 'webpack';

import { ApplyOpts } from '../compiler/webpack/config/types';

export interface ICopy {
  from: string;
  to: string;
}

export interface EsbootConfig {
  copy?: ICopy[] | string[];
}

export interface UserOpts {
  mfsu?: boolean;
  copy?: any;
  host?: string;
  port?: number;
  proxy?: any;
  publicPath?: string;
  externals?: Pick<Configuration, 'externals'>;
  customWebpack?: (config: Configuration, applyOpts: ApplyOpts) => Configuration;
  devtool?: string;
  TSChecker?: boolean;
}
