"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4640],{8254:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var i=s(6070),r=s(8355);const d={sidebar_position:3},l="Environment Variables",c={id:"docs/guides/environment-variables",title:"Environment Variables",description:".env\u6587\u4ef6",source:"@site/docs/docs/guides/environment-variables.md",sourceDirName:"docs/guides",slug:"/docs/guides/environment-variables",permalink:"/docs/3.0/docs/guides/environment-variables",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Entry Files",permalink:"/docs/3.0/docs/guides/entry-files"},next:{title:"Project Docs",permalink:"/docs/3.0/docs/guides/docs"}},t={},o=[{value:".env\u6587\u4ef6",id:"env\u6587\u4ef6",level:2},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2},{value:"ESBOOT_PLATFORM",id:"esboot_platform",level:3},{value:"ESBOOT_PAGE_TYPE",id:"esboot_page_type",level:3},{value:"ESBOOT_CONTENT_PATH",id:"esboot_content_path",level:3},{value:"ESBOOT_CONTENT_PATTERN",id:"esboot_content_pattern",level:3},{value:"ESBOOT_CONTENT_IGNORE",id:"esboot_content_ignore",level:3},{value:"BRIDGE_MOCK_HOST",id:"bridge_mock_host",level:3},{value:"BRIDGE_MOCK_PORT",id:"bridge_mock_port",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"environment-variables",children:"Environment Variables"})}),"\n",(0,i.jsx)(n.h2,{id:"env\u6587\u4ef6",children:".env\u6587\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"env\u6587\u4ef6\u7528\u4e8e\u8bbe\u7f6e\u9879\u76ee\u7f16\u8bd1\u65f6\u7684\u73af\u5883\u53d8\u91cf\uff0c\u76ee\u524d\u652f\u6301\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".env"}),": \u9ed8\u8ba4\u63d0\u4ea4Git\uff0c\u7528\u4e8e\u516c\u7528\u7684\u73af\u5883\u53d8\u91cf\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".env.local"}),": \u9ed8\u8ba4\u4e0d\u63d0\u4ea4Git\uff0c\u7528\u4e8e\u81ea\u5df1\u672c\u5730\u5f00\u53d1\u65f6\u5019\u7684\u73af\u5883\u53d8\u91cf\uff0c",(0,i.jsx)(n.code,{children:".env.local"}),"\u4e2d\u7684\u53d8\u91cf\u4f1a\u8986\u76d6",(0,i.jsx)(n.code,{children:".env"}),"\u4e2d\u7684\u53d8\u91cf\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u63a8\u8350\u4f7f\u7528",(0,i.jsx)(n.a,{href:"../getting-started#esboot",children:"ESBoot"}),"\u63d2\u4ef6\uff0c\u53ef\u4ee5\u5feb\u901f\u5207\u6362\u73af\u5883\u53d8\u91cf\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u73af\u5883\u53d8\u91cf",children:"\u73af\u5883\u53d8\u91cf"}),"\n",(0,i.jsx)(n.h3,{id:"esboot_platform",children:"ESBOOT_PLATFORM"}),"\n",(0,i.jsx)(n.p,{children:"\u662fPC\u7aef\u8fd8\u662f\u79fb\u52a8\u7aef"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u53ef\u9009\u503c\uff1a",(0,i.jsx)(n.code,{children:"pc | mobile"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u9ed8\u8ba4\u503c: ",(0,i.jsx)(n.code,{children:"pc"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"esboot_page_type",children:"ESBOOT_PAGE_TYPE"}),"\n",(0,i.jsx)(n.p,{children:"\u662f\u6d4f\u89c8\u5668\u7aef\u8fd8\u662f\u5d4c\u5165\u5230\u5ba2\u6237\u7aef\u4e2d\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u53ef\u9009\u503c\uff1a",(0,i.jsx)(n.code,{children:"browser | native"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u9ed8\u8ba4\u503c\uff1a",(0,i.jsx)(n.code,{children:"browser"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"esboot_content_path",children:"ESBOOT_CONTENT_PATH"}),"\n",(0,i.jsx)(n.p,{children:"\u5f00\u53d1MPA\u7684\u65f6\u5019\u4f1a\u533a\u5206\u6a21\u5757\uff0c\u6bd4\u5982\u8bf4\u4ea4\u6613\u3001\u884c\u60c5\u3001\u4e2a\u4eba\u4e2d\u5fc3\u7b49\u3002\u6bcf\u6b21\u5168\u91cf\u542f\u52a8\u4f1a\u5bfc\u81f4\u5f00\u53d1\u4f53\u9a8c\u4e0d\u597d\uff0c\u6240\u4ee5\u53ef\u4ee5\u5728\u5f00\u53d1\u7684\u65f6\u5019\u8bbe\u7f6e\u53ea\u8bfb\u53d6\u67d0\u4e2a\u8def\u5f84\u4e0b\u7684\u9875\u9762\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53ef\u9009\u503c\uff1a\u8def\u5f84\u5730\u5740"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u57fa\u4e8e\u6839\u8def\u5f84\u662f",(0,i.jsx)(n.code,{children:"./platforms/${ESBOOT_PLATFORM}/${ESBOOT_PAGE_TYPE}"}),"\u3002\u5982\u679c\u4e0d\u5199\u9ed8\u8ba4\u5c31\u662f\u8bfb\u53d6\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u7684\u5168\u91cf\u5165\u53e3\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f8b\u5982\u6211\u4eec\u60f3\u53ea\u8dd1\u4e2a\u4eba\u4e2d\u5fc3\u6a21\u5757\u5c31\u53ef\u4ee5\u8bbe\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-env",children:"ESBOOT_CONTENT_PATH=./modules/personal-center\n"})}),"\n",(0,i.jsx)(n.h3,{id:"esboot_content_pattern",children:"ESBOOT_CONTENT_PATTERN"}),"\n",(0,i.jsxs)(n.p,{children:["\u8bfb\u53d6\u9875\u9762\u5730\u5740\u7684\u6b63\u5219\u5339\u914d\uff0c\u9ed8\u8ba4\u662f",(0,i.jsx)(n.code,{children:"*"}),"\uff0c\u4ee3\u8868\u5339\u914d",(0,i.jsx)(n.code,{children:"ESBOOT_CONTENT_PATH"}),"\u4e0b\u6240\u6709\u7684\u7684",(0,i.jsx)(n.code,{children:"*.entry.tsx"}),"\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53ef\u9009\u503c\uff1a\u6b63\u5219"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3e\u4f8b\u53ea\u60f3\u8dd1",(0,i.jsx)(n.code,{children:"trade.html"}),"\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-env",children:"ESBOOT_CONTENT_PATTERN=trade\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u60f3\u8dd1",(0,i.jsx)(n.code,{children:"trade.html"}),"\u548c",(0,i.jsx)(n.code,{children:"trade-setting.html"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-env",children:"ESBOOT_CONTENT_PATTERN=+(trade|trade-setting)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"esboot_content_ignore",children:"ESBOOT_CONTENT_IGNORE"}),"\n",(0,i.jsx)(n.p,{children:"\u5ffd\u7565\u67d0\u4e9b\u9875\u9762\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u53ef\u9009\u503c\uff1a\u6b63\u5219 \u591a\u4e2a\u7528",(0,i.jsx)(n.code,{children:","}),"\u9694\u5f00"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6bd4\u5982\u4f60\u60f3\u5ffd\u7565",(0,i.jsx)(n.code,{children:"trade.html"}),"\u548c",(0,i.jsx)(n.code,{children:"trade-setting.html"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-env",children:"ESBOOT_CONTENT_IGNORE=trade,trade-setting\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e5f\u53ef\u4ee5\u76f4\u63a5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-env",children:"ESBOOT_CONTENT_IGNORE=trade*\n"})}),"\n",(0,i.jsx)(n.h3,{id:"bridge_mock_host",children:"BRIDGE_MOCK_HOST"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"\u53ef\u9009host\uff0c\u5982localhost"})}),"\n",(0,i.jsx)(n.p,{children:"bridge-mock\u7684\u76d1\u542chost\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"bridge_mock_port",children:"BRIDGE_MOCK_PORT"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"\u53ef\u9009\u7aef\u53e3\u53f7\uff0c\u59823021"})}),"\n",(0,i.jsx)(n.p,{children:"bridge-mock\u7684\u76d1\u542c\u7aef\u53e3\u53f7\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8355:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var i=s(758);const r={},d=i.createContext(r);function l(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);