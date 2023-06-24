import { ApplyOpts } from './types';

export const addDevServer = async (applyOpts: ApplyOpts) => {
  const {
    config,
    isDev,
    mfsu,
    userOpts: { proxy, port, host, https, http2, open },
  } = applyOpts;

  if (!isDev) return;

  const devServer = {
    compress: true,
    open,
    hot: true,
    client: {
      progress: true,
    },
    https,
    http2,
    historyApiFallback: {
      disableDotRule: true,
    },
    setupMiddlewares(middlewares: any[]) {
      middlewares.unshift(...(mfsu?.getMiddlewares() ?? []));
      return middlewares;
    },
    port: port,
    host: host || '0.0.0.0',
    proxy,
  };

  config.devServer = devServer;
};
