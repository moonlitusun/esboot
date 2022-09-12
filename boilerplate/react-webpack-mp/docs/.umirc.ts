import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'DZ WEB TEAM',
  hash: true,
  outputPath: 'dist',
  history: {
    type: 'hash',
  },
  publicPath: '/',
  mode: 'site',
  mfsu: {
    development : {
      output : "./.mfsu-dev",
    },
    // production : {
    //   output : "./.mfsu-prod",
    // }
  },
  themeConfig: {
    repository: {
       url: '',
       branch: 'master',
       platform: 'github',
     },
   },
  favicon: './images/project-logo.jpg',
  logo: './images/dz-logo.jpg',
});
