import path from 'path';
import { generateScopedNameFactory } from '@dr.pogodin/babel-plugin-react-css-modules/utils';

export const presets = [
  [
    require('@babel/preset-env'),
    {
      modules: false,
      useBuiltIns: 'usage',
      corejs: { version: 3, proposals: true },
    },
  ],
  [
    require('@babel/preset-react'),
    {
      runtime: 'automatic',
    },
  ],
];

export const plugins = [
  [require('@babel/plugin-syntax-dynamic-import')],
  require('@babel/plugin-proposal-class-properties'),
  [
    require('@dr.pogodin/babel-plugin-react-css-modules'),
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
