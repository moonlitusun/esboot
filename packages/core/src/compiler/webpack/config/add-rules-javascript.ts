import config from '@@/helpers/app-config';

import { ApplyOpts } from './types';

const { rootPath } = config;

export async function addJavaScriptRules(applyOpts: ApplyOpts) {
  const {
    config,
    isDev,
    mfsuInstance,
    userOpts: { mfsu },
  } = applyOpts;

  config.module.rules.push({
    test: /\.(t|j)sx?$/,
    include: rootPath,
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: !isDev,
          plugins: [
            ...(isDev && mfsu ? mfsuInstance.getBabelPlugins() : []),
            isDev && require.resolve('react-refresh/babel'),
          ].filter(Boolean),
        },
      },
      {
        loader: 'thread-loader',
        options: {
          workers: 4,
          workerParallelJobs: 50,
          workerNodeArgs: ['--max-old-space-size=1024'],
          poolTimeout: 2e3,
          poolParallelJobs: 50,
          name: 'my-pool',
        },
      },
      {
        loader: 'ts-loader',
        options: {
          happyPackMode: true,
          transpileOnly: true,
        },
      },
    ],
  });
}
