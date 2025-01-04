"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9889],{7249:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"docs/bundlers-rspack/config","title":"Config","description":"rspack bundler\u7684\u7279\u5b9a\u914d\u7f6e\u3002","source":"@site/docs/docs/bundlers-rspack/config.md","sourceDirName":"docs/bundlers-rspack","slug":"/docs/bundlers-rspack/config","permalink":"/docs/3.0/docs/bundlers-rspack/config","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Bundler-Rspack","permalink":"/docs/3.0/category/bundler-rspack"},"next":{"title":"Plugins","permalink":"/docs/3.0/category/plugins"}}');var n=d(6070),t=d(9299);const i={sidebar_position:1},c="Config",l={},h=[{value:"Base Config Support",id:"base-config-support",level:2}];function x(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"config",children:"Config"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"rspack"})," bundler\u7684\u7279\u5b9a\u914d\u7f6e\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"base-config-support",children:"Base Config Support"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Name"}),(0,n.jsx)(s.th,{children:"Supported"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"server.proxy"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"server.https"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"server.http2"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"sever.open"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"sever.port"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"outputPath"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"useLangJsonPicker"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"minimize"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"jsMinifier"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"jsMinifierOptions"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cssMinifier"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"cssMinifierOptions"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"analyze"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"alias"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"define"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"sourceMap"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"externals"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"copy"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"svgr"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"svgrOptions"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"px2rem"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"useTailwindcss"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"tailwindcssOptions"}),(0,n.jsx)(s.td,{children:"\u274c"}),(0,n.jsx)(s.td,{children:"--"})]})]})]})]})}function j(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},9299:(e,s,d)=>{d.d(s,{R:()=>i,x:()=>c});var r=d(758);const n={},t=r.createContext(n);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);