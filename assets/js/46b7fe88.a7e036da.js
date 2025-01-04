"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3767],{3235:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"docs/guides/command","title":"\u547d\u4ee4\u884c","description":"\u8981\u83b7\u53d6\u53ef\u7528\u7684\u547d\u4ee4\u5217\u8868\uff0c\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u76ee\u5f55\u4e2d\u8fd0\u884c help \u547d\u4ee4\uff1a","source":"@site/versioned_docs/version-2.0/docs/guides/command.md","sourceDirName":"docs/guides","slug":"/docs/guides/command","permalink":"/docs/2.0/docs/guides/command","draft":false,"unlisted":false,"tags":[],"version":"2.0","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Guides","permalink":"/docs/2.0/category/guides"},"next":{"title":"\u914d\u7f6e","permalink":"/docs/2.0/docs/guides/config"}}');var d=s(6070),o=s(9299);const t={sidebar_position:2},c="\u547d\u4ee4\u884c",l={},r=[{value:"dev",id:"dev",level:2},{value:"build",id:"build",level:2},{value:"preview",id:"preview",level:2},{value:"lint",id:"lint",level:2},{value:"docs",id:"docs",level:2},{value:"dev",id:"dev-1",level:3},{value:"build",id:"build-1",level:3},{value:"postinstall",id:"postinstall",level:2},{value:"exec",id:"exec",level:2},{value:"Mock Series",id:"mock-series",level:2},{value:"mock:bridge",id:"mockbridge",level:3},{value:"Generate Series",id:"generate-series",level:2},{value:"g-alias",id:"g-alias",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"\u547d\u4ee4\u884c",children:"\u547d\u4ee4\u884c"})}),"\n",(0,d.jsx)(n.p,{children:"\u8981\u83b7\u53d6\u53ef\u7528\u7684\u547d\u4ee4\u5217\u8868\uff0c\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u76ee\u5f55\u4e2d\u8fd0\u884c help \u547d\u4ee4\uff1a"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ esboot help\n\n# \u4f60\u5e94\u8be5\u80fd\u770b\u5230\u7c7b\u4f3c\u5982\u4e0b\u7684\u65e5\u5fd7\uff1a\n\nUsage: esboot [options] [command]\n\nOptions:\n  -V, --version          output the version number\n  -h, --help             display help for command\n\nCommands:\n  dev                    Start development project\n  build                  build project\n  preview [options]      Preview Projects\n  lint                   Lint files\n  docs                   docs\n  exec                   exec commands\n  mock:bridge [options]  Start bridge mock\n  help [command]         display help for command\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u4f55\u8fd8\u60f3\u67e5\u770b\u5177\u4f53\u547d\u4ee4\u7684\u914d\u7f6e\uff0c\u53ef\u4ee5\u7ee7\u7eed\u6267\u884c"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ esboot help preview\n\nUsage: esboot preview [options]\n\nPreview Projects\n\nOptions:\n  -p, --port <char>\n  -d, --directory <char>\n  -h, --help              display help for command\n"})}),"\n",(0,d.jsx)(n.h2,{id:"dev",children:"dev"}),"\n",(0,d.jsx)(n.p,{children:"\u542f\u52a8\u672c\u5730\u5f00\u53d1\u670d\u52a1\u5668\uff0c\u8fdb\u884c\u9879\u76ee\u7684\u5f00\u53d1\u4e0e\u8c03\u8bd5\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ esboot dev\n...\n"})}),"\n",(0,d.jsx)(n.h2,{id:"build",children:"build"}),"\n",(0,d.jsx)(n.p,{children:"\u6784\u5efa\u9879\u76ee\uff0c\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u7684\u90e8\u7f72\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ esboot build\n...\n"})}),"\n",(0,d.jsx)(n.h2,{id:"preview",children:"preview"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"preview"}),"\u547d\u4ee4\u4f1a\u5728\u672c\u5730\u542f\u52a8\u4e00\u4e2a\u9759\u6001 Web \u670d\u52a1\u5668\uff0c\u5c06 dist \u6587\u4ef6\u5939\u8fd0\u884c\u5728 ",(0,d.jsx)(n.code,{children:"http://127.0.0.1:8900"}),", \u7528\u4e8e\u9884\u89c8\u6784\u5efa\u540e\u4ea7\u7269\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ esboot preview\n\nStarting up http-server, serving dist\n\nhttp-server version: 14.1.1\n\nhttp-server settings: \nCORS: disabled\nCache: 1 seconds\nConnection Timeout: 120 seconds\nDirectory Listings: visible\nAutoIndex: visible\nServe GZIP Files: false\nServe Brotli Files: false\nDefault File Extension: none\n\nAvailable on:\n  http://127.0.0.1:8900\n  http://10.10.11.247:8900\n  http://198.18.0.1:8900\n"})}),"\n",(0,d.jsx)(n.h2,{id:"lint",children:"lint"}),"\n",(0,d.jsx)(n.p,{children:"lint\u547d\u4ee4\u7528\u4e8e\u68c0\u67e5\u53ca\u4fee\u6b63\u4ee3\u7801\u662f\u5426\u7b26\u5408\u89c4\u5219\u3002\u76ee\u524d\u5305\u542b\u4e86eslint\u6821\u9a8c\u548cstylelint\u6821\u9a8c\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ esboot lint\n...\n"})}),"\n",(0,d.jsx)(n.h2,{id:"docs",children:"docs"}),"\n",(0,d.jsxs)(n.p,{children:["\u542f\u52a8\u9879\u76ee\u6587\u6863\uff0c\u57fa\u4e8e",(0,d.jsx)(n.code,{children:"docs"}),"\u76ee\u5f55\uff0c\u652f\u6301MDX\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"dev-1",children:"dev"}),"\n",(0,d.jsx)(n.p,{children:"\u542f\u52a8dev\u670d\u52a1\u5668\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ esboot docs dev\n\ninfo  - dumi v2.2.1\nwarn  - Hash history is temporarily incompatible, it is recommended to use browser history for now.\ninfo  - Umi v4.0.71\n        \u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n        \u2551 App listening at:                                  \u2551\n        \u2551  >   Local: http://localhost:8001                  \u2551\nready - \u2551  > Network: http://10.10.11.247:8001               \u2551\n        \u2551                                                    \u2551\n        \u2551 Now you can open browser with the above addresses\u2191 \u2551\n        \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d\nevent - [Webpack] Compiled in 5467 ms (1394 modules)\n"})}),"\n",(0,d.jsx)(n.h3,{id:"build-1",children:"build"}),"\n",(0,d.jsx)(n.p,{children:"\u6253\u5305\u6587\u6863\uff0c\u7528\u4e8e\u90e8\u7f72\u7ebf\u4e0a\u6587\u6863\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"$ esboot docs build\n\ninfo  - dumi v2.2.1\nwarn  - Hash history is temporarily incompatible, it is recommended to use browser history for now.\ninfo  - Umi v4.0.71\n\n\u2714 Webpack\n  Compiled successfully in 4.60s\n\ninfo  - Memory Usage: 323.54 MB (RSS: 630.59 MB)\n\ninfo  - File sizes after gzip:\n\n  237.73 kB  dist/umi.78ec1200.js\n  39 kB      dist/927.1de87c66.chunk.css\n  27.52 kB   dist/927.7ccf385d.async.js\n  22.41 kB   dist/85.ca55c792.async.js\n  4.12 kB    dist/umi.6cab289a.css\n  1.19 kB    dist/docs/esboot__hello__index.md.778c6473.chunk.css\n  1.19 kB    dist/docs/esboot__index.md.778c6473.chunk.css\n  717 B      dist/dumi__theme__ContextWrapper.5c098201.async.js\n  404 B      dist/dumi__theme__ContextWrapper.92e58cdd.chunk.css\n  351 B      dist/docs/esboot__hello__index.md.8cb70dc6.async.js\n  339 B      dist/dumi__theme__layouts__DocLayout.00dacd40.async.js\n  319 B      dist/dumi__pages__404.ef2ba46c.async.js\n  276 B      dist/dumi__pages__404.8b85f2d9.chunk.css\n  266 B      dist/docs/esboot/esboot__index.md.a521bf97.async.js\n  244 B      dist/dumi__pages__Demo.2b46b679.async.js\n  147 B      dist/957.2b2e8583.async.js\n  45 B       dist/dumi__pages__Demo.578aa5c0.chunk.css\n\nevent - Build 404.html\nevent - Build hello/index.html\nevent - Build index.html\nevent - Build ~demos/:id/index.html\nevent - Build ~demos/docs/esboot/esboot-hello-demo-0/index.html\n"})}),"\n",(0,d.jsx)(n.h2,{id:"postinstall",children:"postinstall"}),"\n",(0,d.jsxs)(n.p,{children:["\u7528\u4e8e\u6267\u884c",(0,d.jsx)(n.code,{children:"postinstall"}),"\u94a9\u5b50\uff0c\u5185\u90e8\u6267\u884c\u4e24\u4e2a\u547d\u4ee4\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"$ pnpm run postinstall\n\n# esboot exec husky install\ninfo  - Created File: /Users/rocsun/Code/dz-library/esboot/esboot-react-sp/node_modules/.cache/esboot/eslint/index.js.\ninfo  - Created File: /Users/rocsun/Code/dz-library/esboot/esboot-react-sp/node_modules/.cache/esboot/typescript/esboot.d.ts.\ninfo  - Created File: /Users/rocsun/Code/dz-library/esboot/esboot-react-sp/node_modules/.cache/esboot/typescript/tsconfig.json.\nDone!\n\n# esboot g-alias\nhusky - Git hooks installed\n"})}),"\n",(0,d.jsx)(n.h2,{id:"exec",children:"exec"}),"\n",(0,d.jsx)(n.p,{children:"\u7528\u4e8e\u6267\u884cesboot\u5185\u90e8\u7684\u547d\u4ee4\uff0c\u5bf9\u5916\u53ef\u4ee5\u4e0d\u4f7f\u7528\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"mock-series",children:"Mock Series"}),"\n",(0,d.jsx)(n.p,{children:"\u751f\u6210\u4e00\u4e9b\u5e94\u7528\u7684mock\u6570\u636e\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"mockbridge",children:"mock:bridge"}),"\n",(0,d.jsxs)(n.p,{children:["\u914d\u5408",(0,d.jsx)(n.a,{href:"http://asset.web.dz/ld/bridge-mock/#/",children:"bridge-mock"}),"\uff0c\u542f\u52a8mock\u670d\u52a1\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sh",children:"$ esboot mock:bridge\n\n/Users/My/esboot-react-mp/config/mobile/bridge/bridge-mock.js \u52a0\u8f7d\u6210\u529f\n\u6b63\u5728\u76d1\u542c *:3002, admin\u63a7\u5236\u53f0\u8bbf\u95ee\u5730\u5740\uff1a http://localhost:3002?port=3002\n"})}),"\n",(0,d.jsx)(n.h2,{id:"generate-series",children:"Generate Series"}),"\n",(0,d.jsx)(n.p,{children:"\u751f\u6210\u4e00\u4e9b\u6a21\u7248\u7c7b\u7684\u4e1c\u897f\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"g-alias",children:"g-alias"}),"\n",(0,d.jsxs)(n.p,{children:["\u7528\u4e8e\u6539\u4e86",(0,d.jsx)(n.a,{href:"../guides/config#alias",children:"alias"}),"\u4e4b\u540e\u4ece\u65b0\u751f\u6210",(0,d.jsx)(n.code,{children:"typescript"}),"\u548c",(0,d.jsx)(n.code,{children:"eslint"}),"\u7684\u914d\u7f6e\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},9299:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(758);const d={},o=i.createContext(d);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);