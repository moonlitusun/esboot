import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { ready } from '@dz-web/esboot-common/helpers';
import kleur from '@dz-web/esboot-common/kleur';
import { ip } from 'address';

import type { MFSU } from '@/cfg/helpers/mfsu';
import type { AddFunc } from '@/cfg/types';

const getServerType = (https: boolean, http2: boolean) => {
  if (http2) return 'spdy';
  if (https) return 'https';
  return 'http';
};

export const addDevServer: AddFunc<{ mfsu: MFSU }> = async function (
  cfg,
  webpackCfg,
  options
) {
  const {
    isDev,
    server: { port, open, host, proxy, http2, https },
  } = cfg.config;

  if (!isDev) return;

  const { mfsu } = options!;
  const isHttps = !!https || !!http2;

  const devServer: DevServerConfiguration = {
    compress: true,
    open,
    hot: true,
    client: {
      progress: false,
      logging: 'error',
      overlay: false,
    },
    historyApiFallback: {
      disableDotRule: true,
    },
    setupMiddlewares(middlewares: any[]) {
      if (mfsu) {
        middlewares.unshift(...(mfsu.getMiddlewares() ?? []));
      }
      return middlewares;
    },
    port,
    server: getServerType(!!https, !!http2),
    host: host || '0.0.0.0',
    onListening(devServerInstance) {
      if (!devServerInstance) {
        throw new Error('webpack-dev-server is not defined');
      }

      const { port } = devServerInstance.server?.address() as any;
      ready(
        `started server on [::]:${port}, url: ${kleur
          .underline()
          .green(`${isHttps ? 'https' : 'http'}://${ip()}:${port}`)} \n`
      );
    },
  };
  if (proxy) devServer.proxy = proxy;

  webpackCfg.devServer = devServer;
};
