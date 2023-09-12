import Webpack from 'webpack';
import kleur from 'kleur';
import chokidar from 'chokidar';
import WebpackDevServer from 'webpack-dev-server';
import { debounce } from 'lodash';

import { Environment } from '@@webpack/config/environment';
import { USER_CONFIG_FILE } from '@@/constants';
import getWebpackConfig from '@@webpack/config/config';
import esbootConfig from '@@/config';

export const WATCH_DEBOUNCE_STEP = 300;

export async function runDev() {
  let server: WebpackDevServer;

  const start = async () => {
    const cfg = await getWebpackConfig({ env: Environment.dev });
    const compiler = Webpack(cfg);
    const { version } = esbootConfig.extralConfig.pkg;

    server = new WebpackDevServer(cfg.devServer, compiler);

    console.log(
      `🚀 ${kleur.bold().bgGreen().black('  ESBoot  ')} v${version} \n`
    );

    try {
      await server.start();
    } catch (err) {
      console.log(err, '<-- err');
    }
  };

  start();

  const watcher = chokidar.watch(USER_CONFIG_FILE, {
    ignoreInitial: true,
    cwd: process.cwd(),
  });

  watcher.on(
    'change',
    debounce(async () => {
      esbootConfig.initUserConfig(true);
      await server.stop();

      await start();
    }, WATCH_DEBOUNCE_STEP)
  );
}
