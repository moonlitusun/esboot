export const addOutput = async (applyOpts: any) => {
  const { config, isDev, userOpts: { outputPath, publicPath } } = applyOpts;

  const output: Record<string, any> = {
    publicPath,
    clean: !isDev,
    filename: isDev ? 'js/[name].js' : 'js/[name].[chunkhash:5].js',
  }

  if (outputPath) output.path = outputPath;

  config.output = output;
};
