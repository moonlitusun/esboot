import { join } from 'path';
import { exec } from '@dz-web/esboot-common/execa';

import type { Configuration } from '@/cfg/types';

export async function mockBridge(
  options: Record<string, string>,
  config: Configuration
) {
  const { file, sampleFile } = options;
  const { configRootPath, MPConfiguration, isSP, cwd } = config;

  const rootPath = isSP
    ? configRootPath
    : MPConfiguration!.configRootPathOfPlatfrom;

  const folderPath = join(rootPath, 'bridge');

  const filePath = file || join(folderPath, 'bridge-mock.js');
  const samplePath = sampleFile || join(folderPath, 'bridge-mock-sample.js');

  exec(
    `${require.resolve('@dz-web/bridge-mock/bin')} -f ${filePath} -s ${samplePath}`,
    {
      options: {
        cwd,
      },
    }
  );
}
