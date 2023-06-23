import { DEFAULT_DEV_PORT } from '@@/constants';
import { ApplyOpts } from './types';

export const addDevServer = async (applyOpts: ApplyOpts) => {
  const {
    config,
    isDev,
    mfsu,
    userOpts: { proxy, port, host },
  } = applyOpts;

  if (!isDev) return;

  const devServer = {
    compress: true,
    open: false,
    hot: true,
    client: {
      progress: true,
    },
    historyApiFallback: {
      disableDotRule: true,
    },
    setupMiddlewares(middlewares: any[]) {
      middlewares.unshift(...(mfsu?.getMiddlewares() ?? []));
      return middlewares;
    },
    port: port || DEFAULT_DEV_PORT,
    host: host || '0.0.0.0',
    proxy,
  };

  config.devServer = devServer;
};
