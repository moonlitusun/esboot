import appConfig from '@@/helpers/app-config';

import { ApplyOpts } from './types';

export async function addJavaScriptRules(applyOpts: ApplyOpts) {
  const { rootPath } = appConfig;

  console.log(rootPath, '<-- rootPath');
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
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: !isDev,
          plugins: [
            ...(isDev && mfsu ? mfsuInstance.getBabelPlugins() : []),
            isDev && require.resolve('react-refresh/babel'),
          ].filter(Boolean),
        },
      },
      {
        loader: require.resolve('thread-loader'),
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
        loader: require.resolve('ts-loader'),
        options: {
          happyPackMode: true,
          transpileOnly: true,
        },
      },
    ],
  });
}
