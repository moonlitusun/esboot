import path from 'path';
import { isUndefined } from '@dz-web/esboot-common/lodash';

const postcssNormalize = require('postcss-normalize');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pxtorem = require('@alitajs/postcss-plugin-px2rem');
const {
  getLocalIdent,
} = require('@dz-web/babel-plugin-react-css-modules/utils');

import type { AddFunc } from '@/cfg/types';

import {
  getCssHashRule,
  getStyleLoader,
  getMiniCssExtractPluginOptions,
  getCssLoaderOptions,
} from './utils';

interface ParseScssModuleOpts {
  modules?: boolean;
}

export const addStyleRules: AddFunc = async function (cfg, webpackCfg) {
  const {
    isDev,
    isSP,
    px2rem: px2remOptions,
    sourceMap,
    publicPath,
    rootPath,
    isMobile,
  } = cfg.config;

  const isSourceMap = isUndefined(sourceMap) ? isDev : sourceMap;
  const { enable: enablePxToRem, ...pxtoremCustom } = px2remOptions;
  const enablePxToRemByCompatibility = isUndefined(enablePxToRem)
    ? isMobile
    : enablePxToRem;

  const globalScssPathList = [path.join(rootPath, './styles/')];
  if (!isSP) {
    globalScssPathList.push(
      path.join(rootPath, './platforms/mobile/styles/'),
      path.join(rootPath, './platforms/pc/styles/')
    );
  }

  const styleLoader = getStyleLoader();
  const miniCssExtractPluginOptions = getMiniCssExtractPluginOptions();
  if (publicPath === './') miniCssExtractPluginOptions.publicPath = '../';

  const cssLoaderOptions = {
    sourceMap: isSourceMap,
    ...getCssLoaderOptions(),
  };

  const parseScssModule = (options: ParseScssModuleOpts) => {
    const { modules = false } = options;

    const cssLoaderOptionsCopy = { ...cssLoaderOptions, importLoaders: 2 };

    if (modules) {
      Object.assign(cssLoaderOptionsCopy, {
        modules: {
          namedExport: true,
          localIdentContext: rootPath,
          getLocalIdent,
          localIdentName: getCssHashRule(),
        },
      });
    }

    const miniCssExtractPluginOptions = getMiniCssExtractPluginOptions();
    if (publicPath === './') miniCssExtractPluginOptions.publicPath = '../';

    return [
      isDev
        ? styleLoader
        : {
            loader: MiniCssExtractPlugin.loader,
            options: miniCssExtractPluginOptions,
          },
      {
        loader: require.resolve('css-loader'),
        options: cssLoaderOptionsCopy,
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          sourceMap: isSourceMap,
          postcssOptions: {
            plugins: [
              enablePxToRemByCompatibility &&
                pxtorem({
                  rootValue: 200,
                  unitPrecision: 5,
                  propWhiteList: [],
                  propBlackList: [],
                  exclude: false,
                  selectorBlackList: [],
                  ignoreIdentifier: false,
                  replace: true,
                  mediaQuery: false,
                  minPixelValue: 0,
                  ...pxtoremCustom,
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
        loader: require.resolve('sass-loader'),
        options: { sourceMap: isSourceMap },
      },
    ];
  };

  webpackCfg.module.rules.push(
    {
      /* Loads CSS stylesheets. It is assumed that CSS stylesheets come only
       * from dependencies, as we use SCSS inside our own code. */
      test: /\.css$/,
      use: [
        isDev
          ? styleLoader
          : {
              loader: MiniCssExtractPlugin.loader,
              options: getMiniCssExtractPluginOptions(),
            },
        {
          loader: require.resolve('css-loader'),
          options: cssLoaderOptions,
        },
      ],
    },
    {
      test: /\.scss$/,
      oneOf: [
        {
          exclude: globalScssPathList,
          use: parseScssModule({ modules: true }),
        },
        {
          include: globalScssPathList,
          use: parseScssModule({}),
        },
      ],
    }
  );
};
