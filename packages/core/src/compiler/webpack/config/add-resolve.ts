import { join } from 'path';
import config from '@@/helpers/config';

const { rootPath } = config;

const aliasDict: Record<string, string> = {
  '@': rootPath,
  '@mobile': join(rootPath, './src/platforms/mobile'),
  '@mobile-native': join(rootPath, './src/platforms/mobile/_native'),
  '@mobile-browser': join(rootPath, './src/platforms/mobile/_browser'),
  '@pc': join(rootPath, './src/platforms/pc'),
  '@pc-native': join(rootPath, './src/platforms/pc/_native'),
  '@pc-browser': join(rootPath, './src/platforms/pc/_browser'),
};

export const addResolve = async (applyOpts: any) => {
  const { config } = applyOpts;

  config.resolve = {
    alias: aliasDict,
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
