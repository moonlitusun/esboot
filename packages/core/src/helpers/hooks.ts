import esbootConfig from '@@/config';

export function afterHooks() {
  const { userOpts, runtimeCfg } = esbootConfig;
  const { afterHooks: customAfterHooks } = userOpts;
  if (!customAfterHooks) return;

  customAfterHooks({
    ...runtimeCfg,
  });
}
