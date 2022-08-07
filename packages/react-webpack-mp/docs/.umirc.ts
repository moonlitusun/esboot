import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'DZ WEB TEAM',
  hash: true,
  outputPath: 'dist',
  history: {
    type: 'hash',
  },
  publicPath: '/pd/zx/',
  mode: 'site',
  mfsu: {
    development : {
      output : "./.mfsu-dev",
    },
    // production : {
    //   output : "./.mfsu-prod",
    // }
  },
  navs: [
    null,
    {
      title: '项目资源',
      children: [
        { title: '代码地址', path: 'http://git.web.dz/WebTeam/zhongxin-web' },
        { title: '任务管理', path: 'http://git.web.dz/WebTeam/zhongxin-web/issues' },
        { title: '项目文档', path: 'https://doc.dztec.net/pages/viewpage.action?pageId=5276618' },
      ],
    },
  ],
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
