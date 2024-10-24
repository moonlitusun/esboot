"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7628],{5025:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>t});var i=s(6070),d=s(8355);const o={sidebar_position:1},l="CLI",r={id:"docs/guides/cli",title:"CLI",description:"\u8981\u83b7\u53d6\u53ef\u7528\u7684\u547d\u4ee4\u5217\u8868\uff0c\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u76ee\u5f55\u4e2d\u8fd0\u884c help \u547d\u4ee4\uff1a",source:"@site/docs/docs/guides/cli.md",sourceDirName:"docs/guides",slug:"/docs/guides/cli",permalink:"/docs/3.0/docs/guides/cli",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Platforms",permalink:"/docs/3.0/docs/guides/platforms"},next:{title:"Entry Files",permalink:"/docs/3.0/docs/guides/entry-files"}},c={},t=[{value:"dev",id:"dev",level:2},{value:"build",id:"build",level:2},{value:"preview",id:"preview",level:2},{value:"lint",id:"lint",level:2},{value:"prepare",id:"prepare",level:2},{value:"docs",id:"docs",level:2},{value:"<code>docs dev</code>",id:"docs-dev",level:3},{value:"<code>docs build</code>",id:"docs-build",level:3},{value:"<code>docs preview</code>",id:"docs-preview",level:3},{value:"Mock Series",id:"mock-series",level:2},{value:"mock:bridge",id:"mockbridge",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"cli",children:"CLI"})}),"\n",(0,i.jsx)(n.p,{children:"\u8981\u83b7\u53d6\u53ef\u7528\u7684\u547d\u4ee4\u5217\u8868\uff0c\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u76ee\u5f55\u4e2d\u8fd0\u884c help \u547d\u4ee4\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ esboot help\n\n# \u4f60\u5e94\u8be5\u80fd\u770b\u5230\u7c7b\u4f3c\u5982\u4e0b\u7684\u65e5\u5fd7\uff1a\n\nUsage: esboot [options] [command]\n\nOptions:\n  -V, --version             output the version number\n  -h, --help                display help for command\n\nCommands:\n  dev                       Start to develop project\n  build                     Build project\n  prepare                   Prepare esboot project\n  lint                      Lint project files using ESLint and\n                            Stylelint\n  preview                   Preview the distribution content\n  mock:bridge [options]     Start bridge mock\n  exec_git_hooks [options]  Execute git hooks\n  help [command]            display help for command\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u4f55\u8fd8\u60f3\u67e5\u770b\u5177\u4f53\u547d\u4ee4\u7684\u914d\u7f6e\uff0c\u53ef\u4ee5\u7ee7\u7eed\u6267\u884c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ esboot help preview\n\nUsage: esboot preview [options]\n\nPreview Projects\n\nOptions:\n  -p, --port <char>\n  -d, --directory <char>\n  -h, --help              display help for command\n"})}),"\n",(0,i.jsx)(n.h2,{id:"dev",children:"dev"}),"\n",(0,i.jsx)(n.p,{children:"\u542f\u52a8\u672c\u5730\u5f00\u53d1\u670d\u52a1\u5668\uff0c\u8fdb\u884c\u9879\u76ee\u7684\u5f00\u53d1\u4e0e\u8c03\u8bd5\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ esboot dev\n...\n"})}),"\n",(0,i.jsx)(n.h2,{id:"build",children:"build"}),"\n",(0,i.jsx)(n.p,{children:"\u6784\u5efa\u9879\u76ee\uff0c\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u7684\u90e8\u7f72\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ esboot build\n...\n"})}),"\n",(0,i.jsx)(n.h2,{id:"preview",children:"preview"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"preview"}),"\u547d\u4ee4\u4f1a\u5728\u672c\u5730\u542f\u52a8\u4e00\u4e2a\u9759\u6001 Web \u670d\u52a1\u5668\uff0c\u5c06 dist \u6587\u4ef6\u5939\u8fd0\u884c\u5728 ",(0,i.jsx)(n.code,{children:"http://127.0.0.1:8900"}),", \u7528\u4e8e\u9884\u89c8\u6784\u5efa\u540e\u4ea7\u7269\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ esboot preview\n\nStarting up http-server, serving dist\n\nhttp-server version: 14.1.1\n\nhttp-server settings: \nCORS: disabled\nCache: 1 seconds\nConnection Timeout: 120 seconds\nDirectory Listings: visible\nAutoIndex: visible\nServe GZIP Files: false\nServe Brotli Files: false\nDefault File Extension: none\n\nAvailable on:\n  http://127.0.0.1:8900\n  http://10.10.11.247:8900\n  http://198.18.0.1:8900\n"})}),"\n",(0,i.jsx)(n.h2,{id:"lint",children:"lint"}),"\n",(0,i.jsx)(n.p,{children:"lint\u547d\u4ee4\u7528\u4e8e\u68c0\u67e5\u53ca\u4fee\u6b63\u4ee3\u7801\u662f\u5426\u7b26\u5408\u89c4\u5219\u3002\u76ee\u524d\u5305\u542b\u4e86eslint\u6821\u9a8c\u548cstylelint\u6821\u9a8c\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ esboot lint\n...\n"})}),"\n",(0,i.jsx)(n.h2,{id:"prepare",children:"prepare"}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884c\u521d\u59cb\u5316\u64cd\u4f5c\uff0c\u4e3b\u8981\u4f1a\u505a\u4e24\u4ef6\u4e8b\u60c5\uff0c"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u751f\u6210eslint\u3001stylelint\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"\u521d\u59cb\u5316husky"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ esboot prepare\n\ninfo  - Created Typescript Config: ~/sp-base/node_modules/.cache/esboot/typescript/tsconfig.json.\ninfo  - Created Stylelint Config: ~/sp-base/node_modules/.cache/esboot/stylelint/index.js.\ninfo  - Created Prettier Config: ~/sp-base/node_modules/.cache/esboot/prettier/index.json.\ninfo  - Created ESLint Config: ~/sp-base/node_modules/.cache/esboot/eslint/index.js.\ninfo  - Created Commitlint Config: ~/sp-base/node_modules/.cache/esboot/commitlint/index.js.\ninfo  - Created Type File: ~/sp-base/node_modules/.cache/esboot/typescript/esboot.d.ts.\nDone!\n\nhusky - Git hooks installed\n"})}),"\n",(0,i.jsx)(n.h2,{id:"docs",children:"docs"}),"\n",(0,i.jsx)(n.p,{children:"\u751f\u6210\u9879\u76ee\u6587\u6863\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"docs-dev",children:(0,i.jsx)(n.code,{children:"docs dev"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ esboot docs dev\n...\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u542f\u52a8\u672c\u5730\u5f00\u53d1\u670d\u52a1\u5668\uff0c\u8fdb\u884c\u9879\u76ee\u7684\u5f00\u53d1\u4e0e\u8c03\u8bd5\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"docs-build",children:(0,i.jsx)(n.code,{children:"docs build"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ esboot docs build\n...\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6784\u5efa\u6587\u6863\u4ea7\u7269\uff0c\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u7684\u90e8\u7f72\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"docs-preview",children:(0,i.jsx)(n.code,{children:"docs preview"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ esboot docs preview\n...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u672c\u5730\u542f\u52a8\u4e00\u4e2a\u9759\u6001 Web \u670d\u52a1\u5668\uff0c\u8fd0\u884c\u5728 ",(0,i.jsx)(n.code,{children:"http://127.0.0.1:4172"}),", \u7528\u4e8e\u9884\u89c8\u6784\u5efa\u540e\u4ea7\u7269\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"--port"})," \u53c2\u6570\u6765\u914d\u7f6e\u670d\u52a1\u7684\u8fd0\u884c\u7aef\u53e3\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"esboot docs preview --port 9527\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u73b0\u5728 ",(0,i.jsx)(n.code,{children:"preview"})," \u547d\u4ee4\u4f1a\u5c06\u670d\u52a1\u5668\u8fd0\u884c\u5728 ",(0,i.jsx)(n.code,{children:"http://127.0.0.1:9527"})]}),"\n",(0,i.jsx)(n.h2,{id:"mock-series",children:"Mock Series"}),"\n",(0,i.jsx)(n.p,{children:"\u751f\u6210\u4e00\u4e9b\u5e94\u7528\u7684mock\u6570\u636e\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"mockbridge",children:"mock:bridge"}),"\n",(0,i.jsxs)(n.p,{children:["\u914d\u5408",(0,i.jsx)(n.a,{href:"http://asset.web.dz/ld/bridge-mock/#/",children:"bridge-mock"}),"\uff0c\u542f\u52a8mock\u670d\u52a1\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ esboot mock:bridge\n\n/Users/My/esboot-react-mp/config/mobile/bridge/bridge-mock.js \u52a0\u8f7d\u6210\u529f\n\u6b63\u5728\u76d1\u542c *:3002, admin\u63a7\u5236\u53f0\u8bbf\u95ee\u5730\u5740\uff1a http://localhost:3002?port=3002\n"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8355:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var i=s(758);const d={},o=i.createContext(d);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);