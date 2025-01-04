import { createServer, build } from 'vite';
import { Bundler } from '@dz-web/esboot';
// import { error } from '@dz-web/esboot-common/helpers';
import { Environment } from '@dz-web/esboot-common/constants';

import { getCfg } from './cfg/get-cfg.mts';

export class BundlerVite extends Bundler {
  name = 'vite';

  getName() {
    return this.name;
  }

  async dev() {
    const cfg = await getCfg(this.cfg, Environment.dev);

    const server = await createServer(cfg);

    await server.listen();
    server.printUrls();
    server.bindCLIShortcuts({ print: true });
  }

  async build() {
    const cfg = await getCfg(this.cfg, Environment.prod);

    await build(cfg);
    // error('Not implemented yet, use webpack bundler instead.');
  }
}

export type { BundlerViteOptions } from './types.mts';
