import type { Configuration } from 'webpack';
import type { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { ApplyOpts } from '../compiler/webpack/config/types';

export interface ICopy {
  from: string;
  to: string;
}

export enum JsMinifier {
  terser = 'terser',
  // esbuild = 'esbuild',
  swc = 'swc',
  none = 'none',
}

export enum CSSMinifier {
  cssnano = 'cssnano',
  lightningcss = 'lightningcss',
  none = 'none',
}

export interface Px2rem {
  enable?: boolean;
  rootValue?: number | Record<string, number>,
  unitPrecision?: number,
  propWhiteList?: string[],
  propBlackList?: string[],
  exclude?: any,
  selectorBlackList?: string[],
  ignoreIdentifier?: boolean | string,
  replace?: boolean,
  mediaQuery?: boolean,
  minPixelValue?: number,
}

export interface UserOpts {
  analyze?: boolean;
  mfsu?: boolean;
  copy?: ICopy[] | string[];
  host?: string;
  port?: number;
  proxy?: any;
  publicPath?: string;
  externals?: Pick<Configuration, 'externals'>;
  customWebpack?: (config: Configuration, applyOpts: ApplyOpts) => Configuration;
  TSChecker?: boolean;
  analyzer?: BundleAnalyzerPlugin.options;
  devtool?: string;
  https?: any;
  http2?: any;
  open?: boolean;
  extraBabelPlugins?: string[],
  extraBabelPresets?: string[],
  extraBabelIncludes?: Array<string | RegExp>;
  pxtorem?: Px2rem;
  jsMinifier?: JsMinifier;
  jsMinifierOptions?: any;
  cssMinifier?: CSSMinifier;
  cssMinifierOptions?: any;
  alias?: Record<string, string>;
  define?: Record<string, string>;
}
