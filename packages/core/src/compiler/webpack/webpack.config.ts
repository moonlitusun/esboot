import webpack, { Configuration } from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import Config from 'webpack-chain';

const config = new Config();

const applyOpts = {
  config,
};

config
  .entry('index')
  .add('src/index.js')
  .end()
  .output.path('dist')
  .filename('[name].bundle.js');

export default config.toConfig();
