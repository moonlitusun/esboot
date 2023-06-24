import type { JsMinifyOptions as SwcOptions } from '@swc/core';
import TerserPlugin from 'terser-webpack-plugin';
import { merge } from 'lodash';

import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import LightningCSS from 'lightningcss';
import { LightningCssMinifyPlugin } from 'lightningcss-loader';

import { ApplyOpts } from './types';
import { JsMinifier, CSSMinifier } from '@@/config/types';

export const addOptimization = async (applyOpts: ApplyOpts) => {
  const {
    config,
    userOpts: {
      jsMinifier,
      jsMinifierOptions,
      cssMinifier,
      cssMinifierOptions,
    },
  } = applyOpts;

  const minimizer = [];

  switch (jsMinifier) {
    case JsMinifier.terser:
      const terserMinifyOptions = {
        format: {
          comments: false,
        },
      };

      minimizer.push(
        new TerserPlugin({
          minify: TerserPlugin.terserMinify,
          parallel: true,
          terserOptions: merge(terserMinifyOptions, jsMinifierOptions),
        })
      );

      break;
    case JsMinifier.swc:
      const swcMinifyOptions = {};

      minimizer.push(
        new TerserPlugin<SwcOptions>({
          minify: TerserPlugin.swcMinify,
          parallel: true,
          terserOptions: merge(swcMinifyOptions, jsMinifierOptions),
        })
      );
      break;
    default:
      break;
  }

  switch (cssMinifier) {
    case CSSMinifier.cssnano:
      minimizer.push(new CssMinimizerPlugin(cssMinifierOptions));

      break;
    case CSSMinifier.lightningcss:
      minimizer.push(
        new LightningCssMinifyPlugin({
          implementation: LightningCSS,
          ...cssMinifierOptions,
        })
      );
      break;
    default:
      break;
  }

  config.optimization = {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: 'all',
      name: 'vendor',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
    emitOnErrors: true,
    usedExports: true,
    minimize: true,
    minimizer,
  };
};
