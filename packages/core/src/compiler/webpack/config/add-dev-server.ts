import { ApplyOpts } from './types';

export const addDevServer = async (applyOpts: ApplyOpts) => {
  const {
    config,
    isDev,
    mfsuInstance,
    userOpts: { mfsu },
  } = applyOpts;

  if (isDev) return;

  config.devServer = {
    compress: true,
    hot: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    setupMiddlewares(middlewares: any[]) {
      if (mfsu) {
        middlewares.unshift(...mfsuInstance.getMiddlewares());
      }
      return middlewares;
    },
    port: 8100,
    host: '0.0.0.0',
  };
};
