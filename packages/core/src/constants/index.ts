import { resolve } from 'path';

export const USER_CONFIG_FILE = resolve(
  process.cwd(),
  './.esbootrc.ts'
);

export const DEFAULT_DEVTOOL = 'cheap-module-source-map';
export const DEFAULT_OUTPUT_PATH = 'dist';
export const DEFAULT_DEV_PORT = 8100;
export const isWins = process.platform === 'win32';