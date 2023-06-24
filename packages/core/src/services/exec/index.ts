import spawn from 'cross-spawn';
import { searchCommand } from '@@/helpers/path';

export function runExec(args: any[]) {
  const command = args.slice(0, 1)[0];
  const params = args.slice(1);
  
  const childProcess = spawn(
    searchCommand(command),
    params,
    {
      stdio: ['inherit', 'inherit', 'pipe'],
      shell: true,
      cwd: process.cwd(),
    }
  );

  let errorOutput = '';
  childProcess?.stderr?.on('data', (data) => {
    errorOutput += data.toString();
  });
  
  childProcess.on('exit', (code, signal) => {
    if (code !== 0) {
      console.error(errorOutput)
      console.error(`exec ${command} failed with code ${code}, signal ${signal}`);
      process.exit(1);
    }
  });
}
