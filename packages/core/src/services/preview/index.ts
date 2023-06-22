import spawn from 'cross-spawn';
import { searchCommand } from '@@/helpers/path';

export const runPreview = (port: number, directory: string) => {
  spawn.sync(
    searchCommand('http-server'),
    [directory, '-p', String(port), '-c', '1'],
    {
      stdio: 'inherit',
      shell: true,
    }
  );
};
