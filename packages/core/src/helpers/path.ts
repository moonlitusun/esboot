import { join } from 'path';

export function joinExecPath(path: string) {
  return join(__dirname, '../../', path);
}

export function searchCommand(command: string) {
  return joinExecPath(`./node_modules/.bin/${command}`);
};
