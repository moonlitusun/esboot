import { ApplyOpts } from './types';

export const addDevServer = async (applyOpts: ApplyOpts) => {
  const {
    config,
    isDev,
    useMfsu,
    mfsuInstance,
    userOpts: { proxy, port, host },
  } = applyOpts;

  if (!isDev) return;

  const devServer = {
    compress: true,
    hot: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    setupMiddlewares(middlewares: any[]) {
      if (useMfsu) {
        middlewares.unshift(...mfsuInstance.getMiddlewares());
      }
      return middlewares;
    },
    port: port || 8100,
    host: host || '0.0.0.0',
    proxy,
  };

  config.devServer = devServer;
};
