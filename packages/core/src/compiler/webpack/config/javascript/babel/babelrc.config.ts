import path from 'path';
import { generateScopedNameFactory } from '@dr.pogodin/babel-plugin-react-css-modules/utils';

export const presets = [
  [
    '@babel/env',
    {
      modules: false,
      useBuiltIns: 'usage',
      corejs: { version: 3, proposals: true },
    },
  ],
  [
    '@babel/preset-react',
    {
      runtime: 'automatic',
    },
  ],
];

export const plugins = [
  ['@babel/plugin-syntax-dynamic-import'],
  '@babel/plugin-proposal-class-properties',
  [
    '@dr.pogodin/babel-plugin-react-css-modules',
    {
      filetypes: {
        '.scss': {
          syntax: 'postcss-scss',
        },
      },
      generateScopedName: generateScopedNameFactory(
        '[name]__[local]__[contenthash:base64:5]'
      ),
      webpackHotModuleReloading: true,
      autoResolveMultipleImports: true,
      handleMissingStyleName: 'throw',
    },
  ],
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      alias: {
        '@': path.resolve(process.cwd(), './src/'),
        '@mobile': path.resolve(process.cwd(), './src/platforms/mobile/'),
        '@mobile-native': path.resolve(
          process.cwd(),
          './src/platforms/mobile/_native/'
        ),
        '@mobile-browser': path.resolve(
          process.cwd(),
          './src/platforms/mobile/_browser/'
        ),
        '@pc': path.resolve(process.cwd(), './src/platforms/pc/'),
        '@pc-native': path.resolve(process.cwd(), './src/platforms/pc/_native/'),
        '@pc-browser': path.resolve(process.cwd(), './src/platforms/pc/_browser/'),
      },
      extensions: ['.ts', '.tsx'],
    },
  ],
];

export const env = {
  production: {
    plugins: ['transform-react-remove-prop-types'],
  },
};
