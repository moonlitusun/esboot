import { DEFAULT_DEV_PORT } from '@@/constants';
import type { UserOpts } from './types';
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
  alias: {
    '@': 'src',
    '@mobile': 'src/platforms/mobile',
    '@mobile-native': 'src/platforms/mobile/_native',
    '@mobile-browser': 'src/platforms/mobile/_browser',
    '@pc': 'src/platforms/pc',
    '@pc-native': 'src/platforms/pc/_native',
    '@pc-browser': 'src/platforms/pc/_browser',
  },
} satisfies UserOpts;
