import { join } from 'path';

export function joinExecPath(path: string) {
  return join(process.cwd(), path);
}

export function searchCommand(command: string) {
  return joinExecPath(`./node_modules/.bin/${command}`);
};
