import webpack from 'webpack';
import { Environment } from '@@webpack/config/environment';
import getWebpackConfig from '@@webpack/config/config';

export async function runBuild() {
  const cfg = await getWebpackConfig({ env: Environment.prod });
  const compiler = webpack(cfg);

  const watching = compiler.watch(
    {
      aggregateTimeout: 300,
      poll: undefined,
    },
    (err, stats) => {
      watching.close((closeErr) => {
        // console.log('Watching Ended.');
      });

      if (err || stats?.hasErrors()) {
        process.exit(1);
      }
    }
  );
}
