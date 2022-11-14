import { defineConfig } from 'father';

export default defineConfig({
  // esm: { input: 'src/client' },
  cjs: { input: 'src', output: 'dist' },
  prebundle: {},
  alias: {
    '@@/': './src/',
    '@@webpack/': './src/compiler/webpack/'
  },
});
