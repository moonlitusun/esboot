"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2740],{8853:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>r,contentTitle:()=>n,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var t=i(6070),o=i(8355);const c={sidebar_position:4},n="Static",d={id:"docs/guides/static",title:"Static",description:"\u81ea\u5b9a\u4e49\u9759\u6001\u6587\u4ef6",source:"@site/versioned_docs/version-2.0/docs/guides/static.md",sourceDirName:"docs/guides",slug:"/docs/guides/static",permalink:"/docs/2.0/docs/guides/static",draft:!1,unlisted:!1,tags:[],version:"2.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Hooks",permalink:"/docs/2.0/docs/guides/hooks"},next:{title:"ENV",permalink:"/docs/2.0/docs/guides/env"}},r={},l=[{value:"\u81ea\u5b9a\u4e49\u9759\u6001\u6587\u4ef6",id:"\u81ea\u5b9a\u4e49\u9759\u6001\u6587\u4ef6",level:2},{value:"config.js",id:"configjs",level:2}];function a(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"static",children:"Static"})}),"\n",(0,t.jsx)(s.h2,{id:"\u81ea\u5b9a\u4e49\u9759\u6001\u6587\u4ef6",children:"\u81ea\u5b9a\u4e49\u9759\u6001\u6587\u4ef6"}),"\n",(0,t.jsxs)(s.p,{children:["\u9759\u6001\u6587\u4ef6\u4e0d\u9700\u8981\u989d\u5916\u7684\u914d\u7f6e\uff0cesboot\u4f1a\u81ea\u52a8\u53bb\u6839\u76ee\u5f55\u7684",(0,t.jsx)(s.code,{children:"config"}),"\u76ee\u5f55\u4e0b\u53bb\u627e\u3002\u4ee5",(0,t.jsx)(s.code,{children:"esboot.txt"}),"\u6587\u4ef6\u6765\u8bf4\uff0c\u89c4\u5219\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\u5f53\u653e\u5728",(0,t.jsx)(s.code,{children:"config/static/esboot.txt"}),"\u7684\u65f6\u5019\uff0c\u6b64\u65f6\u65e0\u8bba\u4ec0\u4e48\u5e73\u53f0\u6253\u5305\uff0c\u90fd\u4f1a\u751f\u6210\u5230",(0,t.jsx)(s.code,{children:"dist/static/esboot.ext"}),"\u4e2d\u53bb\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:["\u5f53\u653e\u5728",(0,t.jsx)(s.code,{children:"config/mobile/static/esboot.txt"}),"\u7684\u65f6\u5019\uff0c\u53ea\u6709\u5f53",(0,t.jsx)(s.code,{children:"ESBOOT_PLATFORM=mobile"}),"\u7684\u65f6\u5019\u624d\u4f1a\u751f\u6548\uff0c\u751f\u6210\u5230",(0,t.jsx)(s.code,{children:"dist/static/esboot.ext"}),"\u4e2d\u53bb\u3002",(0,t.jsx)(s.code,{children:"config/pc/static/esboot.txt"}),"\u548c",(0,t.jsx)(s.code,{children:"ESBOOT_PLATFORM=pc"}),"\u7684\u65f6\u5019\u540c\u7406\u3002"]}),"\n",(0,t.jsxs)(s.li,{children:["\u5f53\u653e\u5728",(0,t.jsx)(s.code,{children:"config/mobile/browser/static/esboot.txt"}),"\u7684\u65f6\u5019\uff0c\u53ea\u6709\u5f53",(0,t.jsx)(s.code,{children:"ESBOOT_PLATFORM=mobile\u548cESBOOT_PAGE_TYPE=browser"}),"\u7684\u65f6\u5019\u624d\u4f1a\u751f\u6548\uff0c\u751f\u6210\u5230",(0,t.jsx)(s.code,{children:"dist/static/esboot.ext"}),"\u4e2d\u53bb\uff0c\u5176\u4ed6\u5e73\u53f0\u540c\u7406\u3002"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"\u4e0a\u8ff0\u7684\u4e09\u6761\u89c4\u5219\u53ef\u4ee5\u53e0\u52a0\uff0c\u5f53\u540c\u65f6\u5b58\u5728\u7684\u65f6\u5019\uff0c\u6307\u5b9a\u66f4\u8be6\u7ec6\u7684\u4f1a\u8986\u76d6\u5916\u9762\u7684\uff0c3 > 2 > 1\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"configjs",children:"config.js"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"config.js"}),"\u5728",(0,t.jsx)(s.code,{children:"config"}),"\u76ee\u5f55\u7684\u6bcf\u4e2a\u5e73\u53f0\u4e0b\uff0c\u6bd4\u5982",(0,t.jsx)(s.code,{children:"config/mobile/browser/config.js"}),"\uff0c\u662f\u7528\u6765\u505a\u9879\u76ee\u8fd0\u884c\u65f6\u914d\u7f6e\u4f7f\u7528\u7684\uff0c\u6240\u4ee5\u4f1a\u81ea\u52a8\u627e\u5230\u5bf9\u5e94\u7684\u5e73\u53f0\u4e0b\u9762\u7684",(0,t.jsx)(s.code,{children:"config"}),"\u751f\u6210\u5230",(0,t.jsx)(s.code,{children:"dist/config.js"}),"\u4e2d\u3002"]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8355:(e,s,i)=>{i.d(s,{R:()=>n,x:()=>d});var t=i(758);const o={},c=t.createContext(o);function n(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);