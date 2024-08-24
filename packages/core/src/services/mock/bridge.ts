import { join } from 'path';
import esbootConfig from '@@/config';

const importExeca = import('execa');

export async function runMockBridge(options: Record<string, string>) {
  const { $ } = await importExeca;
  const { file, sampleFile } = options;
  const { platform } = esbootConfig.compileTimeConfig;
  const folderPath = `./config/${platform}`;

  const filePath = file || join(folderPath, 'bridge/bridge-mock.js');
  const samplePath =
    sampleFile || join(folderPath, 'bridge/bridge-mock-sample.js');

  $({
    stdio: 'inherit',
    shell: false,
    cwd: process.cwd(),
  })`${require.resolve('@dz-web/bridge-mock/bin')} -f ${filePath} -s ${samplePath}`;
}
