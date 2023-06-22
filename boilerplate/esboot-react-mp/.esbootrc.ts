import { defineConfig } from '@dz-web/esboot';

export default defineConfig({
  copy: [],
  mfsu: false,
  proxy: {
    '/api': {
      'target': 'http://jsonplaceholder.typicode.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
});
