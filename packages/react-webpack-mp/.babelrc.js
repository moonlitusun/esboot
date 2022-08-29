const path = require('path');
const {
  generateScopedNameFactory,
} = require('@dr.pogodin/babel-plugin-react-css-modules/utils');

module.exports = {
  presets: [
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
  ],
  plugins: [
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
        generateScopedName: generateScopedNameFactory('[name]__[local]__[contenthash:base64:5]'),
        webpackHotModuleReloading: true,
        autoResolveMultipleImports: true,
        handleMissingStyleName: 'throw',
      },
    ],
    [
      "import", {
        libraryName: 'antd',
        libraryDirectory: "es",
        style: 'css',
      }
    ],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '@': path.resolve(__dirname, './src/'),
          '@mobile': path.resolve(__dirname, './src/platforms/mobile/'),
          '@mobile-native': path.resolve(__dirname, './src/platforms/mobile/native/'),
          '@mobile-browser': path.resolve(__dirname, './src/platforms/mobile/browser/'),
          '@pc': path.resolve(__dirname, './src/platforms/pc/'),
          '@pc-native': path.resolve(__dirname, './src/platforms/pc/native/'),
          '@pc-browser': path.resolve(__dirname, './src/platforms/pc/browser/'),
        },
        extensions: ['.ts', '.tsx'],
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-react-remove-prop-types'],
    },
  },
};
