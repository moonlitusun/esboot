import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import kleur from 'kleur';
import { ready } from '@@/helpers/logger';
import { ApplyOpts } from './types';

export const addDevServer = async (applyOpts: ApplyOpts) => {
  const {
    config,
    isDev,
    mfsu,
    userOpts: { proxy, port, host, https, http2, open },
  } = applyOpts;

  if (!isDev) return;

  const devServer: DevServerConfiguration = {
    compress: true,
    open,
    hot: true,
    client: {
      progress: false,
      logging: 'error',
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
    port,
    host: host || '0.0.0.0',
    proxy,
    onListening(devServerInstance) {
      if (!devServerInstance) {
        throw new Error('webpack-dev-server is not defined');
      }

      const { port } = (devServerInstance.server?.address()) as any;

      ready(`started server on [::]:${port}, url: ${kleur.underline().green(`http://localhost:${port}`)} \n`);
    },
    onAfterSetupMiddleware(devServerInstance) {
      if (!devServerInstance) {
        throw new Error('webpack-dev-server is not defined');
      }
    }
  };

  config.devServer = devServer;
};
