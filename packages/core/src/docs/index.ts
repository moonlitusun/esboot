import spawn from 'cross-spawn';
import { searchCommand, joinExecPath } from '../helpers/path';

function execDocs(action: string) {
  spawn.sync(
    `${searchCommand('cross-env')} APP_ROOT=${joinExecPath, './docs'} ${searchCommand('dumi')} ${action}`,
    { stdio: 'inherit', shell: true }
  );
}

module.exports = { execDocs };
