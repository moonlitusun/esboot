import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import { Environment } from '@@webpack/config/environment';
import getWebpackConfig from '@@webpack/config/config';

export async function runDev() {
  const cfg = await getWebpackConfig({ env: Environment.dev });
  const compiler = Webpack(cfg);
  
  const devServerOptions = { ...cfg.devServer, open: true };
  const server = new WebpackDevServer(devServerOptions, compiler);
  
  const runServer = async () => {
    console.log('Starting server...');
    await server.start();
  };
  
  runServer();
}
