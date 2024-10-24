"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4387],{647:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>t});var i=s(6070),l=s(8355);const c={slug:"esboot-3",title:"ESBoot 3",authors:["Roc"],tags:["Release"],date:new Date("2024-09-18T00:00:00.000Z")},d=void 0,r={permalink:"/blog/esboot-3",source:"@site/blog/release/esboot-3.md",title:"ESBoot 3",description:"Release ESBoot 3 note!",date:"2024-09-18T00:00:00.000Z",tags:[{inline:!0,label:"Release",permalink:"/blog/tags/release"}],readingTime:6.325,hasTruncateMarker:!0,authors:[{name:"Roc",title:"Maintainer",imageURL:"https://avatars.githubusercontent.com/u/22940470?s=400&u=0bf5b6b7f50d2e9cbd556cdc5696abc8493b8cd4&v=4",key:"Roc",page:null}],frontMatter:{slug:"esboot-3",title:"ESBoot 3",authors:["Roc"],tags:["Release"],date:"2024-09-18T00:00:00.000Z"},unlisted:!1},o={authorsImageUrls:[void 0]},t=[{value:"\u66f4\u65b0\u4e86\u4ec0\u4e48",id:"\u66f4\u65b0\u4e86\u4ec0\u4e48",level:2},{value:"\u91cd\u6784\u4ee3\u7801",id:"\u91cd\u6784\u4ee3\u7801",level:3},{value:"\u652f\u6301\u591aBundler",id:"\u652f\u6301\u591abundler",level:3},{value:"\u66f4\u65b0\u90e8\u5206\u4f9d\u8d56\u5230\u6700\u65b0\u7684\u7a33\u5b9a\u7248\u672c",id:"\u66f4\u65b0\u90e8\u5206\u4f9d\u8d56\u5230\u6700\u65b0\u7684\u7a33\u5b9a\u7248\u672c",level:3},{value:"\u66f4\u5408\u7406\u7684\u4ee3\u7801\u7ed3\u6784",id:"\u66f4\u5408\u7406\u7684\u4ee3\u7801\u7ed3\u6784",level:2},{value:"packages",id:"packages",level:3},{value:"Bundlers",id:"bundlers",level:3},{value:"ESBoot",id:"esboot",level:3},{value:"Lint",id:"lint",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Other Tools",id:"other-tools",level:3},{value:"Bundler",id:"bundler",level:2},{value:"webpack",id:"webpack",level:3},{value:"vite",id:"vite",level:3},{value:"rspack",id:"rspack",level:3},{value:"\u9879\u76ee\u6587\u6863",id:"\u9879\u76ee\u6587\u6863",level:2},{value:"ESBoot Browser",id:"esboot-browser",level:2},{value:"ESBoot \u6587\u6863\u66f4\u65b0",id:"esboot-\u6587\u6863\u66f4\u65b0",level:2},{value:"\u4f9d\u8d56\u66f4\u65b0",id:"\u4f9d\u8d56\u66f4\u65b0",level:2},{value:"commander",id:"commander",level:3},{value:"webpack-dev-server",id:"webpack-dev-server",level:3},{value:"babel",id:"babel",level:3},{value:"husky",id:"husky",level:3},{value:"command",id:"command",level:2},{value:"prepare",id:"prepare",level:3},{value:"exec_git_hooks",id:"exec_git_hooks",level:3},{value:"preview",id:"preview",level:3},{value:"Config",id:"config",level:2},{value:"\u79fb\u9664\u73af\u5883\u53d8\u91cf<code>ESBOOT_PROJECT_TYPE</code>\uff0c\u589e\u52a0<code>isSP</code>\u914d\u7f6e",id:"\u79fb\u9664\u73af\u5883\u53d8\u91cfesboot_project_type\u589e\u52a0issp\u914d\u7f6e",level:3},{value:"\u66f4\u65b0jsminifier/cssminifier",id:"\u66f4\u65b0jsminifiercssminifier",level:3},{value:"\u79fb\u9664ForkTsCheckerWebpackPlugin",id:"\u79fb\u9664forktscheckerwebpackplugin",level:3},{value:"<code>customWebpack =&gt; customConfig</code>",id:"customwebpack--customconfig",level:3},{value:"\u589e\u52a0 <code>minimize</code>",id:"\u589e\u52a0-minimize",level:3},{value:"\u589e\u52a0 <code>server</code> \u914d\u7f6e",id:"\u589e\u52a0-server-\u914d\u7f6e",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"stylintconfig",id:"stylintconfig",level:3},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:2},{value:"\u91cd\u6784\u63d2\u4ef6\u673a\u5236",id:"\u91cd\u6784\u63d2\u4ef6\u673a\u5236",level:3},{value:"\u5185\u7f6e\u652f\u6301tailwindcss",id:"\u5185\u7f6e\u652f\u6301tailwindcss",level:3},{value:"\u5de5\u5177",id:"\u5de5\u5177",level:2},{value:"\u6dfb\u52a0vscode-extension-esboot",id:"\u6dfb\u52a0vscode-extension-esboot",level:3},{value:"ESLint\u89c4\u5219\u66f4\u65b0",id:"eslint\u89c4\u5219\u66f4\u65b0",level:2},{value:"\u589e\u52a0\u89c4\u5219\uff0c\u7981\u6b62\u5f15\u7528\u975e\u81ea\u5df1\u5e73\u53f0\u7684\u4ee3\u7801",id:"\u589e\u52a0\u89c4\u5219\u7981\u6b62\u5f15\u7528\u975e\u81ea\u5df1\u5e73\u53f0\u7684\u4ee3\u7801",level:3},{value:"\u79fb\u9664Hooks\u4f7f\u7528",id:"\u79fb\u9664hooks\u4f7f\u7528",level:2},{value:"\u5176\u4ed6\u529f\u80fd",id:"\u5176\u4ed6\u529f\u80fd",level:2},{value:"\u5f85\u5b8c\u6210\u529f\u80fd",id:"\u5f85\u5b8c\u6210\u529f\u80fd",level:2},{value:"Feature",id:"feature",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Vitest",id:"vitest",level:4},{value:"Bugs",id:"bugs",level:3},{value:"\u4ecev2\u8fc1\u79fb\u5230v3",id:"\u4ecev2\u8fc1\u79fb\u5230v3",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Release ESBoot 3 note!"}),"\n",(0,i.jsx)(n.h2,{id:"\u66f4\u65b0\u4e86\u4ec0\u4e48",children:"\u66f4\u65b0\u4e86\u4ec0\u4e48"}),"\n",(0,i.jsx)(n.h3,{id:"\u91cd\u6784\u4ee3\u7801",children:"\u91cd\u6784\u4ee3\u7801"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u66f4\u6709\u6269\u5c55\u6027\u7684\u67b6\u6784\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u4f18\u5316\u4ee3\u7801\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u91cd\u6784plugin\u673a\u5236\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6dfb\u52a0\u66f4\u591afeature\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6839\u636ev2\u7ecf\u9a8c\u79fb\u9664\u90e8\u5206\u8fc7\u65f6feature\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u652f\u6301\u591abundler",children:"\u652f\u6301\u591aBundler"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"webpack\u7684\u5b58\u6863\u3002"}),"\n",(0,i.jsx)(n.li,{children:"vite\u5360\u6709\u7387\u7684\u63d0\u5347\u3002"}),"\n",(0,i.jsx)(n.li,{children:"rust\u57fa\u5efa\u7684\u5174\u8d77\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u66f4\u65b0\u90e8\u5206\u4f9d\u8d56\u5230\u6700\u65b0\u7684\u7a33\u5b9a\u7248\u672c",children:"\u66f4\u65b0\u90e8\u5206\u4f9d\u8d56\u5230\u6700\u65b0\u7684\u7a33\u5b9a\u7248\u672c"}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u5e74\u4e00\u66f4\u65b0\uff0c\u9501\u6b7b\u7248\u672c\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u66f4\u5408\u7406\u7684\u4ee3\u7801\u7ed3\u6784",children:"\u66f4\u5408\u7406\u7684\u4ee3\u7801\u7ed3\u6784"}),"\n",(0,i.jsx)(n.h3,{id:"packages",children:"packages"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:".\n\u251c\u2500\u2500 bundler-common\n\u251c\u2500\u2500 bundler-rspack\n\u251c\u2500\u2500 bundler-vite\n\u251c\u2500\u2500 bundler-webpack\n\u251c\u2500\u2500 common\n\u251c\u2500\u2500 esboot\n\u251c\u2500\u2500 esboot-browser\n\u251c\u2500\u2500 eslint-plugin-esboot\n\u251c\u2500\u2500 lint\n\u251c\u2500\u2500 plugin-vitest\n\u2514\u2500\u2500 vscode-extension-esboot\n\n12 directories.\n"})}),"\n",(0,i.jsx)(n.h3,{id:"bundlers",children:"Bundlers"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bundler-common"}),": Bundler\u901a\u7528\u5de5\u5177"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bundler-rspack"}),": Bundler Rspack"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bundler-vite"}),": Bundler Vite"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bundler-webpack"}),": Bundler Webpack"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"esboot",children:"ESBoot"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"common"}),": esboot\u901a\u7528\u5de5\u5177"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"esboot"}),": \u5165\u53e3\uff0c\u6ce8\u518ccli\uff0c\u8c03\u7528bundler"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"esboot-browser"}),": \u6d4f\u89c8\u5668\u7aef\u5de5\u5177"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"lint",children:"Lint"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eslint-plugin-esboot"}),": eslint\u63d2\u4ef6"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lint"}),": lint\u76f8\u5173"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"plugin",children:"Plugin"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"plugin-vitest"}),": vitest\u63d2\u4ef6"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"other-tools",children:"Other Tools"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"vscode-extension-esboot"}),": vscode\u63d2\u4ef6"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bundler",children:"Bundler"}),"\n",(0,i.jsxs)(n.p,{children:["\u5206\u6790\u51fa\u4e00\u5957\u5e38\u7528\u7684config\uff0c\u81ea\u5b9a\u4e49\u914d\u7f6e\u4f7f\u7528",(0,i.jsx)(n.code,{children:"customConfig"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"webpack",children:"webpack"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"100%"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5b9e\u73b0v2\u7684\u6240\u6709\u529f\u80fd\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u91cd\u65b0\u5b9e\u73b0",(0,i.jsx)(n.code,{children:"langjsonpick"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u653e\u5f03",(0,i.jsx)(n.code,{children:"webpack-chain"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"vite",children:"vite"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"80%"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u652f\u6301SPA"}),"\n",(0,i.jsxs)(n.li,{children:["\u652f\u6301",(0,i.jsx)(n.code,{children:"styleName"})]}),"\n",(0,i.jsx)(n.li,{children:"\u5e73\u6ed1\u652f\u6301webapck\u914d\u7f6e\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"rspack",children:"rspack"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5f00\u53d110%"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u9879\u76ee\u6587\u6863",children:"\u9879\u76ee\u6587\u6863"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u57fa\u4e8ev2 doc\u7684\u4f7f\u7528\u8bbe\u8ba1\u4e3a\u66f4\u7b80\u6d01\u7684doc\u8bbe\u8ba1\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u66f4\u597d\u770b\u7684\u4e3b\u9898\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6dfb\u52a0changelog\u652f\u6301\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"esboot-browser",children:"ESBoot Browser"}),"\n",(0,i.jsxs)(n.p,{children:["\u589e\u52a0",(0,i.jsx)(n.code,{children:"esboot-browser"}),"\u5305\uff0c\u5c01\u88c5\u5e38\u7528\u7684\u6d4f\u89c8\u5668\u7aef\u5de5\u5177\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"esboot-\u6587\u6863\u66f4\u65b0",children:"ESBoot \u6587\u6863\u66f4\u65b0"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u66f4\u5408\u7406\u7684\u6587\u6863\u7ed3\u6784\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u8865\u5145\u66f4\u591a\u6587\u6863\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u4f18\u5148\u8bb2\u8ff0ESBoot\u7684\u7acb\u610f\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6dfb\u52a0\u6700\u4f73\u5b9e\u8df5"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4f9d\u8d56\u66f4\u65b0",children:"\u4f9d\u8d56\u66f4\u65b0"}),"\n",(0,i.jsx)(n.p,{children:"\u53ea\u8bb0\u5f55\u5927\u7248\u672c\u66f4\u65b0\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"commander",children:"commander"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"Command 11.0.0 => 12.0.0"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/tj/commander.js/releases/tag/v12.0.0",children:"https://github.com/tj/commander.js/releases/tag/v12.0.0"})}),"\n",(0,i.jsx)(n.h3,{id:"webpack-dev-server",children:"webpack-dev-server"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"4 => 5"})}),"\n",(0,i.jsx)(n.p,{children:"\u4fee\u6539\u4e86\u597d\u591aapi\uff0chttps\uff0chttp\u8fd9\u79cd\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"babel",children:"babel"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u79fb\u9664",(0,i.jsx)(n.a,{href:"https://babeljs.io/docs/babel-plugin-syntax-dynamic-import",children:"@babel/plugin-syntax-dynamic-import"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This plugin is included in @babel/preset-env, in ES2020\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u79fb\u9664",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types",children:"babel-plugin-transform-react-remove-prop-types"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u73b0\u5728\u5df2\u7ecf\u4e0d\u7528\u5199prop type"}),"\n",(0,i.jsx)(n.h3,{id:"husky",children:"husky"}),"\n",(0,i.jsxs)(n.p,{children:["\u6700\u65b0\u662f9\uff0c\u6539\u6210\u4e86",(0,i.jsx)(n.code,{children:"husky init"}),"\u547d\u4ee4\uff0c\u4f46\u662f\u53d1\u73b0\u5347\u7ea7\u4e5f\u6ca1\u6709\u4ec0\u4e48\u7528\u5904\uff0c\u5c31\u61d2\u5f97\u5347\u7ea7\u4e86\uff0c\u8fd8\u662f\u75288."]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f46\u662f\u6709\u4e2a\u65b0\u7684\u66f4\u65b0\uff0c",(0,i.jsx)(n.code,{children:".husky"}),"\u76ee\u5f55\u653e\u5230\u4e86",(0,i.jsx)(n.code,{children:"config"}),"\u76ee\u5f55\u4e0b\uff0c\u6839\u76ee\u5f55\u53c8\u4f1a\u5c11\u4e00\u4e2a\u6587\u4ef6\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"command",children:"command"}),"\n",(0,i.jsx)(n.h3,{id:"prepare",children:"prepare"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"postinstall + g-alias"})," => ",(0,i.jsx)(n.code,{children:"prepare"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"prepare"}),"\u5c31\u662f\u53bb\u751f\u6210\u4e00\u4e9blint\u89c4\u5219\u3001ts\u89c4\u5219\u8fd9\u4e9b/husky\u5b89\u88c5\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"postinstall"}),"\u6709\u4e9b\u8bed\u4e49\u4e0d\u660e\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"g-alias"}),"\u662f\u521a\u5f00\u59cb\u8bbe\u8ba1\u4e0d\u5168\uff0c\u53ea\u8003\u8651\u4e86\u751f\u6210",(0,i.jsx)(n.code,{children:"alias"}),"\u540e\u9762\u53d1\u73b0\u9700\u8981\u51c6\u5907\u7684\u4e1c\u897f\u8d8a\u6765\u8d8a\u591a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"exec_git_hooks",children:"exec_git_hooks"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"commitlint / lint-staged"})," => ",(0,i.jsx)(n.code,{children:"exec_git_hooks"})]}),"\n",(0,i.jsx)(n.p,{children:"Git hooks\u7684\u4e24\u4e2a\u94a9\u5b50\u547d\u4ee4\u66f4\u65b0\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5c01\u88c5\u7684\u66f4\u5185\u655b\uff0c\u66f4\u8bed\u4e49\u5316\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"preview",children:"preview"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4f7f\u7528",(0,i.jsx)(n.code,{children:"pnpx"}),"\u542f\u52a8\uff0c\u4ee3\u66ff\u76f4\u63a5\u4e0b\u8f7d\u5305\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,i.jsxs)(n.h3,{id:"\u79fb\u9664\u73af\u5883\u53d8\u91cfesboot_project_type\u589e\u52a0issp\u914d\u7f6e",children:["\u79fb\u9664\u73af\u5883\u53d8\u91cf",(0,i.jsx)(n.code,{children:"ESBOOT_PROJECT_TYPE"}),"\uff0c\u589e\u52a0",(0,i.jsx)(n.code,{children:"isSP"}),"\u914d\u7f6e"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e4b\u95f4\u7528\u6765\u533a\u5206\u662f",(0,i.jsx)(n.code,{children:"SP"}),"\u8fd8\u662f",(0,i.jsx)(n.code,{children:"MP"}),"\uff0c\u73b0\u5728\u5728",(0,i.jsx)(n.code,{children:".esbootrc"}),"\u4e2d\u6dfb\u52a0",(0,i.jsx)(n.code,{children:"isSP"}),"\u914d\u7f6e\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u539f\u56e0\uff1a\u5c3d\u91cf\u51cf\u5c11\u73af\u5883\u53d8\u91cf\uff0c\u6ca1\u6709\u7c7b\u578b\u58f0\u660e\uff0c\u53ef\u8bfb\u6027\u4e5f\u4e0d\u597d\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u66f4\u65b0jsminifiercssminifier",children:"\u66f4\u65b0jsminifier/cssminifier"}),"\n",(0,i.jsx)(n.p,{children:"\u79fb\u9664lightningcss/swc(build\u4e0d\u9700\u8981\u90a3\u4e48\u5feb\uff0c\u53cd\u800c\u4e0b\u5305\u8981\u592a\u4e45\u4e86)\uff0c\u56fa\u5b9a\u7528TerserPlugin\u548cnano\u3002(\u653e\u5f03webpack\u91cc\u4f7f\u7528rust\uff0c\u76f4\u63a5\u5bfb\u6c42vite\u6216\u8005rspack)\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53bb\u6389\u4e86rust\u5305\u56e0\u4e3a\u53d1\u73b0\u5bf9\u6253\u5305\u7684\u65f6\u95f4\u5176\u5b9e\u5e76\u4e0d\u654f\u611f\uff0c\u53cd\u800c\u5bf9\u4e0b\u5305\u7684\u65f6\u95f4\u654f\u611f\uff0c\u800c\u4e14\u914d\u7f6e\u4f7f\u7528\u7684\u4e0d\u591a\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u79fb\u9664forktscheckerwebpackplugin",children:"\u79fb\u9664ForkTsCheckerWebpackPlugin"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ForkTsCheckerWebpackPlugin"}),"\u56e0\u4e3a\u6fc0\u8fdb\u7684\u7b56\u7565\uff0c\u6240\u4ee5\u51e0\u4e4e\u4e0d\u4f1a\u4f7f\u7528\uff0c\u6240\u4ee5\u5b9e\u73b0\u540e\u6682\u65f6\u79fb\u9664\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"customwebpack--customconfig",children:(0,i.jsx)(n.code,{children:"customWebpack => customConfig"})}),"\n",(0,i.jsxs)(n.p,{children:["\u73b0\u5728\u6709\u591a\u4e2a",(0,i.jsx)(n.code,{children:"bundler"}),"\uff0c",(0,i.jsx)(n.code,{children:"customConfig"}),"\u8fd9\u4e2a\u914d\u7f6e\u66f4\u62bd\u8c61\u4e00\u4e9b\u3002"]}),"\n",(0,i.jsxs)(n.h3,{id:"\u589e\u52a0-minimize",children:["\u589e\u52a0 ",(0,i.jsx)(n.code,{children:"minimize"})]}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u6765\u63a7\u5236\u662f\u5426\u538b\u7f29\u4ee3\u7801\u3002"}),"\n",(0,i.jsxs)(n.h3,{id:"\u589e\u52a0-server-\u914d\u7f6e",children:["\u589e\u52a0 ",(0,i.jsx)(n.code,{children:"server"})," \u914d\u7f6e"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5c06",(0,i.jsx)(n.code,{children:"server"}),"\u7684\u914d\u7f6e\u72ec\u7acb\u51fa\u6765\uff0c\u7ed3\u6784\u66f4\u6e05\u6670\uff0c\u5305\u542b",(0,i.jsx)(n.code,{children:"host"}),"\u3001",(0,i.jsx)(n.code,{children:"https"}),"\u3001",(0,i.jsx)(n.code,{children:"open"}),"\u3001",(0,i.jsx)(n.code,{children:"port"}),"\u3001",(0,i.jsx)(n.code,{children:"proxy"}),"\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"server?: {\n  host?: string;\n  https?: boolean;\n  open?: boolean;\n  port?: number;\n  proxy?: Proxy[];\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,i.jsx)(n.h3,{id:"stylintconfig",children:"stylintconfig"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"stylintconfig \u5730\u5740\u4fee\u6539\uff0c\u7248\u672c\u9501\u6b7b"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u63d2\u4ef6",children:"\u63d2\u4ef6"}),"\n",(0,i.jsx)(n.h3,{id:"\u91cd\u6784\u63d2\u4ef6\u673a\u5236",children:"\u91cd\u6784\u63d2\u4ef6\u673a\u5236"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"240927"})}),"\n",(0,i.jsx)(n.p,{children:"\u66f4\u5408\u7406\u7684\u67b6\u6784\u8bbe\u8ba1\uff0c\u66f4\u5177\u6269\u5c55\u6027\u7684API\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5185\u7f6e\u652f\u6301tailwindcss",children:"\u5185\u7f6e\u652f\u6301tailwindcss"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"240810"})}),"\n",(0,i.jsx)(n.p,{children:"tailwindcss\u521a\u5f00\u59cb\u62bd\u6210\u63d2\u4ef6\u662f\u56e0\u4e3a\u53ea\u662f\u4e00\u4e2a\u5b9e\u9a8c\u6027\u7684\u529f\u80fd\uff0c\u7ecf\u8fc7\u591a\u4e2a\u9879\u76ee\u7684\u5b9e\u9a8c\u53d1\u73b0\u5f88\u597d\u7528\uff0c\u6240\u4ee5v3\u7248\u672c\u5185\u7f6e\u652f\u6301\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5de5\u5177",children:"\u5de5\u5177"}),"\n",(0,i.jsx)(n.h3,{id:"\u6dfb\u52a0vscode-extension-esboot",children:"\u6dfb\u52a0vscode-extension-esboot"}),"\n",(0,i.jsx)(n.p,{children:"\u521d\u6b65\u652f\u6301GUI\u64cd\u4f5c\u73af\u5883\u53d8\u91cf\uff0c\u540e\u7eed\u4f1a\u6dfb\u52a0\u66f4\u591a\u529f\u80fd(\u770b\u60c5\u51b5)\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u56e0\u4e3a\u73af\u5883\u53d8\u91cf\u6ca1\u6709\u7c7b\u578b\u63d0\u793a\uff0c\u4f46\u662f\u67d0\u4e9b\u60c5\u51b5\u5f88\u9700\u8981\u3002\u4f46\u662f\u73b0\u6709\u7684\u73af\u5883\u53d8\u91cf\u6211\u90fd\u8bb0\u4e0d\u4f4f\uff0c\u53cd\u6b63\u6211\u8bb0\u4e0d\u4f4f\uff0c\u7279\u522b\u662f\u53ea\u60f3\u542f\u52a8\u67d0\u4e9b\u9875\u9762\u7684\u65f6\u5019\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"eslint\u89c4\u5219\u66f4\u65b0",children:"ESLint\u89c4\u5219\u66f4\u65b0"}),"\n",(0,i.jsx)(n.h3,{id:"\u589e\u52a0\u89c4\u5219\u7981\u6b62\u5f15\u7528\u975e\u81ea\u5df1\u5e73\u53f0\u7684\u4ee3\u7801",children:"\u589e\u52a0\u89c4\u5219\uff0c\u7981\u6b62\u5f15\u7528\u975e\u81ea\u5df1\u5e73\u53f0\u7684\u4ee3\u7801"}),"\n",(0,i.jsxs)(n.p,{children:["\u5df2\u7ecf\u63d0\u524d\u5728",(0,i.jsx)(n.code,{children:"esboot v2"}),"\u4e0a\u5b9e\u73b0\u4e86\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u79fb\u9664hooks\u4f7f\u7528",children:"\u79fb\u9664Hooks\u4f7f\u7528"}),"\n",(0,i.jsxs)(n.p,{children:["\u4e4b\u524d\u4f7f\u7528\u7684",(0,i.jsx)(n.code,{children:"afterHooks"}),"\u662f\u4e00\u4e2a\u6ca1\u6709\u7ecf\u8fc7\u6df1\u601d\u719f\u8651\u7684\u8bbe\u8ba1\uff0c\u5728",(0,i.jsx)(n.code,{children:"v3"}),"\u4e2d\u79fb\u9664\u3002\u5b8c\u5168\u4f7f\u7528",(0,i.jsx)(n.code,{children:"plugin"}),"\u673a\u5236\u66ff\u4ee3\u3002\u4f8b\u5982v2\u7ecf\u5e38\u4f7f\u7528\u7684"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export const afterHooks = (cfg) => {\n  console.log(Object.entries(cfg._entry), '<-- cfg');\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728v3\u4e2d\uff0c\u53ef\u4ee5\u5b8c\u5168\u4f7f\u7528",(0,i.jsx)(n.code,{children:"plugin"}),"\u673a\u5236\u66ff\u4ee3\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { defineConfig, type Configuration, PluginHooks } from '@dz-web/esboot';\n\nexport default defineConfig({\n  plugins: [\n    {\n      key: 'plugin-log',\n      [PluginHooks.afterCompile]: (cfg) => {\n        console.log(cfg.entry);\n      },\n    },\n  ],\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5176\u4ed6\u529f\u80fd",children:"\u5176\u4ed6\u529f\u80fd"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"build"}),"\u4f18\u5316\uff0c",(0,i.jsx)(n.code,{children:"CI"}),"\u73af\u5883\u7981\u6b62\u4f7f\u7528\u7f13\u5b58\u3001\u4e5f\u4e0d\u4f7f\u7528",(0,i.jsx)(n.code,{children:"webpackbar"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5f85\u5b8c\u6210\u529f\u80fd",children:"\u5f85\u5b8c\u6210\u529f\u80fd"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u2b50\ufe0f \u652f\u6301RSPack"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u2b50\ufe0f \u652f\u6301changelogs"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u2b50\ufe0f \u4f18\u5316\u9879\u76ee\u6587\u6863"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"feature",children:"Feature"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u652f\u6301mock"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u652f\u6301\u591a\u7aef\u540c\u65f6\u5f00\u53d1"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","\u6269\u5c55tailwind\u5185\u7f6e cva\u548ccn"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","svgo\u914d\u7f6e"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"plugins",children:"Plugins"}),"\n",(0,i.jsx)(n.h4,{id:"vitest",children:"Vitest"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u6d4b\u8bd5\u8986\u76d6\u7387"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u591a\u5e73\u53f0\u540c\u6b65\u6d4b\u8bd5"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"bugs",children:"Bugs"}),"\n",(0,i.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","bug: tree-shaking\u5931\u8d25"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","bug: \u7269\u7406\u7f13\u5b58"]}),"\n",(0,i.jsxs)(n.li,{className:"task-list-item",children:[(0,i.jsx)(n.input,{type:"checkbox",disabled:!0})," ","bug: mfsu-\u5f15\u5165\u7b2c\u4e09\u65b9css\u95ee\u9898(antd-mobile\u7684\u65e5\u671f\u9009\u62e9\u7ec4\u4ef6)"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4ecev2\u8fc1\u79fb\u5230v3",children:"\u4ecev2\u8fc1\u79fb\u5230v3"}),"\n",(0,i.jsxs)(n.p,{children:["\u53c2\u8003",(0,i.jsx)(n.a,{href:"../../docs/3.0/docs/migration/migration-v3",children:"\u8fc1\u79fb\u5230v3"})]})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8355:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>r});var i=s(758);const l={},c=i.createContext(l);function d(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);