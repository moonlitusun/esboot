const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const pxtorem = require('@alitajs/postcss-plugin-px2rem');
const esbuild = require('esbuild')
const {
  getLocalIdent,
  // eslint-disable-next-line import/no-unresolved
} = require('@dr.pogodin/babel-plugin-react-css-modules/utils');
const getEntryList = require('./scripts/entry');
const postcssNormalize = require('postcss-normalize');
const { MFSU, esbuildLoader } = require('@umijs/mfsu');

const { ESBOOT_CONFIG_PATH, ESBOOT_RELATIVE_STATIC_CONFIG_PATH, ESBOOT_IS_MOBILE } = require('./scripts/config');
const pkg = require('./package.json');
const userConfig = require(ESBOOT_CONFIG_PATH);
const ip = require('./scripts/ip');
const entryList = getEntryList();
const mfsu = new MFSU({
  implementor: webpack,
  buildDepWithESBuild: true,
});

const smp = new SpeedMeasurePlugin();
const isDevMode = process.env.NODE_ENV === 'development';

if (isDevMode) {
  console.log(
    entryList.map((item) => ({
      ...item,
      url: `http://${ip}:${userConfig.serverPort}/${item.name}.html`,
    })),
    '<-- entryList',
  );
}

const parseScssModule = (options = {}) => {
  const { modules } = options;

  const cssLoaderOptions = {
    sourceMap: isDevMode,
  };

  if (modules) {
    Object.assign(cssLoaderOptions, {
      importLoaders: 2,
      modules: {
        namedExport: true,
        localIdentContext: path.resolve(__dirname, 'src'),
        getLocalIdent,
        localIdentName: '[name]__[local]__[contenthash:base64:5]',
      },
    });
  }

  return [
    isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: cssLoaderOptions,
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: isDevMode,
        postcssOptions: {
          plugins: [
            ESBOOT_IS_MOBILE && pxtorem({
              rootValue: 100,
              unitPrecision: 5,
              propWhiteList: [],
              propBlackList: [],
              exclude: false,
              selectorBlackList: [],
              ignoreIdentifier: false,
              replace: true,
              mediaQuery: false,
              minPixelValue: 0
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
      options: { sourceMap: isDevMode },
    },
  ];
};

const createEntry = () =>
  entryList.reduce((prev, curr) => {
    prev[curr.name] = curr.entry;
    return prev;
  }, {});

const getPlugins = () => [
  // !isDevMode && new BundleAnalyzerPlugin(),
  ...entryList.map(
    (i) =>
      new HtmlWebpackPlugin({
        inject: 'auto',
        chunks: [i.name],
        filename: `${i.name}.html`,
        title: i.title || 'ESboot App',
        template: i.template || 'template/index.html',
        templateParameters: {
          configPath: `${ESBOOT_RELATIVE_STATIC_CONFIG_PATH}?v=${pkg.version}`,
        },
        hash: true,
      }),
  ),
  new webpack.DefinePlugin({
    VERSION: JSON.stringify(pkg.version),
    ENV: JSON.stringify(process.env.NODE_ENV),
  }),
  new FriendlyErrorsWebpackPlugin(),
  new CopyPlugin({
    patterns: userConfig.copyFile,
  }),
  isDevMode && new ReactRefreshPlugin(),
  isDevMode && new ForkTsCheckerWebpackPlugin({}),
];

const getModulesRules = () => [
  {
    test: /\.(jpg|gif|png|svg|ico)$/,
    type: 'asset',
    parser: {
      dataUrlCondition: {
        maxSize: 8 * 1024,
      },
    },
    generator: {
      filename: 'images/[name].[hash:8][ext]',
    },
  },
  {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: {
      loader: esbuildLoader,
      options: {
        handler: [
          ...mfsu.getEsbuildLoaderHandler()
        ],
        target: 'esnext',
        implementation: esbuild
      }
    }
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.scss$/,
    exclude: path.resolve(__dirname, 'src/global-css/'),
    use: parseScssModule({ modules: true }),
  },
  {
    test: /\.scss$/,
    include: path.resolve(__dirname, 'src/global-css/'),
    use: parseScssModule(),
  },
];

const getDevServer = () => ({
  compress: true,
  hot: true,
  historyApiFallback: {
    disableDotRule: true,
  },
  setupMiddlewares(middlewares) {
    middlewares.unshift(...mfsu.getMiddlewares());
    return middlewares;
  },
  port: userConfig.serverPort,
  host: '0.0.0.0',
});

const baseCfg = {
  mode: isDevMode ? 'development' : 'production',
  performance: {
    hints: false,
  },
  entry: createEntry(),
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@mobile': path.resolve(__dirname, './src/platforms/mobile'),
      '@mobile-mpa': path.resolve(__dirname, './src/platforms/mobile/mpa'),
      '@mobile-spa': path.resolve(__dirname, './src/platforms/mobile/spa'),
      '@pc': path.resolve(__dirname, './src/platforms/pc'),
      '@pc-mpa': path.resolve(__dirname, './src/platforms/pc/mpa'),
      '@pc-spa': path.resolve(__dirname, './src/platforms/pc/spa'),
    },
  },
  output: {
    publicPath: '/',
    clean: !isDevMode,
    filename: isDevMode ? 'js/[name].js' : 'js/[name].[chunkhash:5].js',
  },
  plugins: getPlugins().filter(Boolean),
  module: {
    rules: getModulesRules(),
  },
};

const devCfg = {
  devServer: getDevServer(),
  devtool: 'cheap-source-map',
};

const prodCfg = {
  optimization: {
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
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  // externalsType: 'script',
  // externals: {
  //   'react': ['https://unpkg.com/react@17.0.2/umd/react.production.min.js', 'React', 'head'],
  //   'react-dom': ['https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js', 'ReactDOM', 'head'],
  //   'react-router-dom': [
  //     'https://unpkg.com/react-router-dom@6.3.0/umd/react-router-dom.production.min.js',
  //     'ReactRouterDOM',
  //     'head'
  //   ],
  //   // 'react': 'React',
  //   // 'react-dom': 'ReactDOM'
  // },
};

// const cfg = Object.assign(baseCfg, isDevMode && devCfg, !isDevMode && smp.wrap(prodCfg));
const cfg = Object.assign(baseCfg, isDevMode && devCfg, !isDevMode && prodCfg);

// See https://github.com/stephencookdev/speed-measure-webpack-plugin/issues/167
if (!isDevMode) {
  cfg.plugins.push(new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:5].css',
    chunkFilename: 'css/[id].[contenthash:5].css',
  }));
}

const getConfig = async () => {
  await mfsu.setWebpackConfig({
    config: cfg,
  });

  return cfg;
};

module.exports = isDevMode ? getConfig() : cfg;
