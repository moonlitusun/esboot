import Webpack from 'webpack';
import { Environment } from '@@webpack/config/environment';
import getWebpackConfig from '@@webpack/config/config';

export async function runBuild() {
  const cfg = await getWebpackConfig({ env: Environment.prod });
  const compiler = Webpack(cfg);

  compiler.run((err) => {
    if (err) throw err;
    process.exit(1);
  });
}
