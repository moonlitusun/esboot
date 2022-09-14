const spawn = require('cross-spawn');
const { searchCommand, joinExecPath } = require('../helpers/path');

function execDocs(action) {
  spawn.sync(
    `${searchCommand('cross-env')} APP_ROOT=${joinExecPath, './docs'} ${searchCommand('dumi')} ${action}`,
    { stdio: 'inherit', shell: true }
  );
}

module.exports = { execDocs };
