import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import postcssNormalize from 'postcss-normalize';

const pxtorem = require("@alitajs/postcss-plugin-px2rem");
const {
  getLocalIdent
} = require("@dr.pogodin/babel-plugin-react-css-modules/utils");

import config from '@@/helpers/config';

import { ApplyOpts } from './types';

const { rootPath, isMobile } = config;

const globalScssPathList = [
  path.join(rootPath, './styles/'),
  path.join(rootPath, './platforms/mobile/styles/'),
  path.join(rootPath, './platforms/pc/styles/'),
];

interface ParseScssModuleOpts {
  modules?: boolean;
}

export async function addCSSRules(applyOpts: ApplyOpts) {
  const {
    config,
    isDev,
    mfsuInstance,
    userOpts: { mfsu },
  } = applyOpts;

  const parseScssModule = (options: ParseScssModuleOpts) => {
    const { modules = false } = options;
    const cssLoaderOptions = {
      sourceMap: isDev,
    };
    if (modules) {
      Object.assign(cssLoaderOptions, {
        importLoaders: 2,
        modules: {
          namedExport: true,
          localIdentContext: rootPath,
          getLocalIdent,
          localIdentName: '[name]__[local]__[contenthash:base64:5]',
        },
      });
    }
    return [
      isDev
        ? 'style-loader'
        : {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../' },
          },
      {
        loader: 'css-loader',
        options: cssLoaderOptions,
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: isDev,
          postcssOptions: {
            plugins: [
              isMobile &&
                pxtorem({
                  rootValue: 100,
                  unitPrecision: 5,
                  propWhiteList: [],
                  propBlackList: [],
                  exclude: false,
                  selectorBlackList: [],
                  ignoreIdentifier: false,
                  replace: true,
                  mediaQuery: false,
                  minPixelValue: 0,
                }),
              require('postcss-flexbugs-fixes'),
              require('postcss-preset-env')({
                autoprefixer: {
                  flexbox: 'no-2009',
                },
                stage: 3,
              }),
              postcssNormalize(),
            ].filter(Boolean),
          },
        },
      },
      {
        loader: 'sass-loader',
        options: { sourceMap: isDev },
      },
    ];
  };

  config.module.rules.push(
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.scss$/,
      exclude: globalScssPathList,
      use: parseScssModule({ modules: true }),
    },
    {
      test: /\.scss$/,
      include: globalScssPathList,
      use: parseScssModule({}),
    }
  );
}
