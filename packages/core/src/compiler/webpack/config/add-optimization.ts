import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

import { ApplyOpts } from './types';

export const addOptimization = async (applyOpts: ApplyOpts) => {
  const { config } = applyOpts;

  config.optimization = {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: "all",
      name: "vendor",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/
        }
      }
    },
    emitOnErrors: true,
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          format: {
            comments: false
          }
        }
      }),
      new CssMinimizerPlugin()
    ]
  }
};
