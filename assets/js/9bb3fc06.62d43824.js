"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1752],{2744:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"docs/guides/entry-files","title":"Entry Files","description":"Matching Rule","source":"@site/docs/docs/guides/entry-files.md","sourceDirName":"docs/guides","slug":"/docs/guides/entry-files","permalink":"/docs/3.0/docs/guides/entry-files","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"CLI","permalink":"/docs/3.0/docs/guides/cli"},"next":{"title":"Environment Variables","permalink":"/docs/3.0/docs/guides/environment-variables"}}');var i=s(6070),c=s(9299);const l={sidebar_position:2},d="Entry Files",r={},o=[{value:"Matching Rule",id:"matching-rule",level:2},{value:"Page Metadata",id:"page-metadata",level:2},{value:"title",id:"title",level:3},{value:"template",id:"template",level:3},{value:"name",id:"name",level:3},{value:"langJsonPicker",id:"langjsonpicker",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"entry-files",children:"Entry Files"})}),"\n",(0,i.jsx)(n.h2,{id:"matching-rule",children:"Matching Rule"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"esboot"}),"\u7684\u89c4\u5219\u662f\u5339\u914d\u5e73\u53f0\u6839\u76ee\u5f55\u4e0b\u7684",(0,i.jsx)(n.code,{children:"*.entry.tsx"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728",(0,i.jsx)(n.code,{children:"SP"}),"\u6a21\u5f0f\u4e0b\uff0c\u5e73\u53f0\u6839\u76ee\u5f55\u662f",(0,i.jsx)(n.code,{children:"src"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728",(0,i.jsx)(n.code,{children:"MP"}),"\u6a21\u5f0f\u4e0b\uff0c\u4f1a\u6839\u636e",(0,i.jsx)(n.code,{children:"platform"}),"\u548c",(0,i.jsx)(n.code,{children:"pageType"}),"\u53bb\u5339\u914d\u76ee\u5f55"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f8b\u5982\u4f60\u7684",(0,i.jsx)(n.code,{children:"env"}),"\u6587\u4ef6\u5982\u4e0b\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"ESBOOT_PLATFORM=mobile\nESBOOT_PAGE_TYPE=native\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6b64\u65f6\u542f\u52a8",(0,i.jsx)(n.code,{children:"dev/build"}),"\u547d\u4ee4\u4e0b\u7684",(0,i.jsx)(n.code,{children:"content"}),"\u5c31\u662f",(0,i.jsx)(n.code,{children:"src/platforms/mobile/_native"}),"(\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,i.jsx)(n.code,{children:"ESBOOT_CONTENT_PATH"}),"\u548c",(0,i.jsx)(n.code,{children:"ESBOOT_CONTENT_PATTERN"}),"\u81ea\u5b9a\u4e49\u89c4\u5219\uff0c\u66f4\u591a\u53c2\u8003",(0,i.jsx)(n.a,{href:"./environment-variables#esboot_content_path",children:"env"}),")\uff0c\u7136\u540e\u53bb\u5bfb\u627e\u4e0b\u9762\u6240\u6709\u7684",(0,i.jsx)(n.code,{children:"*.entry.tsx"}),"\u5f53\u505a\u5165\u53e3\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f8b\u5982\u4f60\u6709\u4e00\u4e2a",(0,i.jsx)(n.code,{children:"home.entry.tsx"}),"\uff0c\u90a3\u4e48\u5728\u6d4f\u89c8\u5668\u4e2d\u7684\u5730\u5740\u5c31\u662f",(0,i.jsx)(n.code,{children:"http://localhost:8001/home.html"}),"(\u57df\u540d\u548c\u7aef\u53e3\u662f\u57fa\u4e8e\u4f60\u7684\u914d\u7f6e\u51b3\u5b9a)."]}),"\n",(0,i.jsx)(n.h2,{id:"page-metadata",children:"Page Metadata"}),"\n",(0,i.jsxs)(n.p,{children:["\u5165\u53e3\u6587\u4ef6\u652f\u6301\u4e00\u4e9b\u914d\u7f6e\uff0c\u5982\u9875\u9762",(0,i.jsx)(n.code,{children:"title"}),"\u4e4b\u7c7b\u7684\u3002\u5199\u6cd5\u662f\u5728",(0,i.jsx)(n.code,{children:"*.entry.tsx"}),"\u4e2d\u5bfc\u51fa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"// \u4f60\u7684React\u4ee3\u7801\n\nexport default {\n  // \u4ee3\u8868\u9875\u9762\u540d\u79f0\u4e3aDEMO\n  title: 'DEMO',\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u652f\u6301\u7684\u914d\u7f6e\u6e05\u5355\uff1a"}),"\n",(0,i.jsx)(n.h3,{id:"title",children:"title"}),"\n",(0,i.jsxs)(n.p,{children:["\u9875\u9762\u6807\u9898\uff0c\u9ed8\u8ba4\u4e3a",(0,i.jsx)(n.code,{children:"\u6587\u4ef6\u540d\u79f0 | ESboot APP"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"template",children:"template"}),"\n",(0,i.jsxs)(n.p,{children:["\u6a21\u7248html\u5730\u5740\uff0c\u9ed8\u8ba4\u5730\u5740\u662f",(0,i.jsx)(n.code,{children:"config/template/index.html"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"MP"}),"\u6a21\u5f0f\u4e0b\u662f",(0,i.jsx)(n.code,{children:"config/{platforms}/template/index.html"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u914d\u7f6e\u4e0d\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u5730\u5740(\u76ee\u5f55\u662f\u56fa\u5b9a\u6b7b\u7684)\uff0c\u53ea\u9700\u8981\u914d\u7f6e\u9875\u9762\u540d\u79f0\uff0c\u6bd4\u5982",(0,i.jsx)(n.code,{children:"my-tpl"}),"\uff0c\u6b64\u65f6\u7684\u5730\u5740\u5c31\u4f1a\u662f",(0,i.jsx)(n.code,{children:"config/{platforms}/template/my-tpl.html"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,i.jsxs)(n.p,{children:["\u9875\u9762\u7684\u552f\u4e00\u8d44\u6e90\u540d\u79f0\uff0c\u9ed8\u8ba4\u662f",(0,i.jsx)(n.code,{children:"\u6587\u4ef6\u540d\u79f0"}),"\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"// home.entry.tsx\nexport default {\n  name: 'home',\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5927\u90e8\u5206\u60c5\u51b5\u53ef\u4ee5\u4e0d\u7528\u586b\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"langjsonpicker",children:"langJsonPicker"}),"\n",(0,i.jsxs)(n.p,{children:["\u7c7b\u578b: ",(0,i.jsx)(n.code,{children:"string[]"}),"\uff0c\u652f\u6301\u5d4c\u5957\u8bed\u6cd5xx.xx.xx\u3002\n\u9ed8\u8ba4\u503c\uff1a\u7a7a\u5373\u5bfc\u5165\u5168\u90e8"]}),"\n",(0,i.jsxs)(n.p,{children:["\u53c2\u8003",(0,i.jsx)(n.a,{href:"../config/#uselangjsonpicker",children:"langJsonPicker"}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u9875\u9762\u6807\u9898\uff0c\u9ed8\u8ba4\u4e3a\u6587\u4ef6\u540d\u79f0 | ESboot APP\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},9299:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var t=s(758);const i={},c=t.createContext(i);function l(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);