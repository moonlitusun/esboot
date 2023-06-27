import { DEFAULT_DEV_PORT } from '@@/constants';
import { JsMinifier, CSSMinifier } from './types';

export const defaultUserOpts = {
  mfsu: true,
  analyze: false,
  copy: [],
  proxy: {},
  https: false,
  http2: false,
  TSChecker: false,
  outputPath: 'dist',
  open: false,
  port: DEFAULT_DEV_PORT,
  extraBabelPlugins: [],
  extraBabelPresets: [],
  extraBabelIncludes: [],
  pxtorem: {},
  jsMinifier: JsMinifier.terser,
  jsMinifierOptions: {},
  cssMinifier: CSSMinifier.cssnano,
  cssMinifierOptions: {},
};
