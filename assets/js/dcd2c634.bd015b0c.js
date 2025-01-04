"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6456],{7391:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>t,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"docs/bundlers-webpack/config","title":"Config","description":"webpack bundler\u7684\u7279\u5b9a\u914d\u7f6e\u3002","source":"@site/docs/docs/bundlers-webpack/config.md","sourceDirName":"docs/bundlers-webpack","slug":"/docs/bundlers-webpack/config","permalink":"/docs/3.0/docs/bundlers-webpack/config","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Bundler-Webpack","permalink":"/docs/3.0/category/bundler-webpack"},"next":{"title":"Bundler-Vite","permalink":"/docs/3.0/category/bundler-vite"}}');var r=s(6070),d=s(9299);const t={sidebar_position:1},l="Config",c={},h=[{value:"Base Config Support",id:"base-config-support",level:2},{value:"mfsu",id:"mfsu",level:2},{value:"mfsuOptions",id:"mfsuoptions",level:2},{value:"codeSplitting",id:"codesplitting",level:2},{value:"extraBabelPresets",id:"extrababelpresets",level:2},{value:"extraBabelIncludes",id:"extrababelincludes",level:2},{value:"extraBabelPlugins",id:"extrababelplugins",level:2},{value:"customConfig",id:"customconfig",level:2}];function x(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"config",children:"Config"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"webpack"})," bundler\u7684\u7279\u5b9a\u914d\u7f6e\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"base-config-support",children:"Base Config Support"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Supported"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"server.proxy"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"server.https"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"server.http2"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sever.open"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sever.port"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"outputPath"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"useLangJsonPicker"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"minimize"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"jsMinifier"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"jsMinifierOptions"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cssMinifier"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cssMinifierOptions"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"analyze"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"alias"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"define"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sourceMap"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"externals"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"copy"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"svgr"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"svgrOptions"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"px2rem"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"useTailwindcss"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tailwindcssOptions"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"--"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"mfsu",children:"mfsu"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u578b\uff1a",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u662f\u5426\u5f00\u542f",(0,r.jsx)(n.a,{href:"https://module-federation.github.io/",children:"mfsu"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5173\u4e8emfsu\u7684\u89e3\u91ca\u53ef\u4ee5\u770b\u4e0b",(0,r.jsx)(n.a,{href:"https://umijs.org/docs/guides/mfsu#mfsu",children:"umi MFSU"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"mfsuoptions",children:"mfsuOptions"}),"\n",(0,r.jsxs)(n.p,{children:["\u53c2\u8003",(0,r.jsx)(n.a,{href:"https://umijs.org/blog/mfsu-independent-usage",children:"\u72ec\u7acb\u4f7f\u7528MFSU"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"codesplitting",children:"codeSplitting"}),"\n",(0,r.jsxs)(n.p,{children:["\u53c2\u8003",(0,r.jsx)(n.a,{href:"https://umijs.org/docs/docs/3.0/api/config#codesplitting",children:"codesplitting"}),"\uff0c\u914d\u7f6e\u5b8c\u5168\u76f8\u540c\uff0c\u9664\u4e86",(0,r.jsx)(n.code,{children:"jsStrategyOptions"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.code,{children:"granularChunks"}),"\u6a21\u5f0f\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"interface JsStrategyOptions {\n  // \u52a0\u5165\u6b64\u6570\u7ec4\u4e2d\u7684\u5e93\uff0c\u624d\u4f1a\u88ab\u6253\u5305\u5230\u516c\u5171\u7684\u4f9d\u8d56\u4e2d\u3002\n  frameworkBundles: string[];\n}\n\n// frameworkBundles\u7684\u9ed8\u8ba4\u503c\u4e3a\n const FRAMEWORK_BUNDLES = [\n  // React Series\n  'react-dom',\n  'react',\n  'react-intl',\n  'react-router',\n  'react-router-dom',\n  'classnames',\n  //\n  'lodash',\n  'dayjs',\n  'zustand',\n  '@loadable/component',\n];\n"})}),"\n",(0,r.jsx)(n.h2,{id:"extrababelpresets",children:"extraBabelPresets"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u578b\uff1a",(0,r.jsx)(n.code,{children:"string[] | Function"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u989d\u5916\u7684 babel \u63d2\u4ef6\u96c6\u3002\u53ef\u4f20\u5165\u63d2\u4ef6\u96c6\u5730\u5740\u6216\u63d2\u4ef6\u96c6\u51fd\u6570\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"extrababelincludes",children:"extraBabelIncludes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u578b\uff1a",(0,r.jsx)(n.code,{children:"Array<string | RegExp>"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u989d\u5916\u9700\u8981\u505a Babel \u7f16\u8bd1\u7684 NPM \u5305\u6216\u76ee\u5f55\u3002\u5e38\u7528\u4e8e\u5904\u7406\u7b2c\u4e09\u65b9\u5e93\u7684\u517c\u5bb9\u6027\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"e.g."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default {\n  extraBabelIncludes: [\n    /filter-obj/i,\n    /immer/i,\n    /zustand/i,\n    /query-string/i,\n    /react-intl/i,\n    /common/i,\n    /d3-/i,\n    /@tanstack/i,\n    /@react-spring/i,\n    /@floating-ui/i,\n    /radash/i,\n    /tailwind-merge/i,\n    /@radix-ui/i,\n  ],\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"extrababelplugins",children:"extraBabelPlugins"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u578b\uff1a",(0,r.jsx)(n.code,{children:"string[] | Function"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u914d\u7f6e\u989d\u5916\u7684 babel \u63d2\u4ef6\u3002\u53ef\u4f20\u5165\u63d2\u4ef6\u5730\u5740\u6216\u63d2\u4ef6\u51fd\u6570\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"e.g."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default defineConfig((runtimeCfg) => {\n  const extraBabelPlugins: UserOpts['extraBabelPlugins'] = [];\n  if (!runtimeCfg.isMobile) {\n    extraBabelPlugins.push(getImportPluginsOfRsuite([]));\n  }\n\n\n  return {\n    extraBabelPlugins,\n  };\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"customconfig",children:"customConfig"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u578b\uff1a",(0,r.jsx)(n.code,{children:"(config: WebpackConfig) => WebpackConfig"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u4ee5\u4e0a\u6240\u6709\u7684\u914d\u7f6e\u90fd\u65e0\u6cd5\u6ee1\u8db3\u7684\u65f6\u5019\uff0c",(0,r.jsx)(n.code,{children:"customConfig"}),"\u53ef\u4ee5\u8ba9\u4f60\u5b8c\u5168\u81ea\u5b9a\u4e49webpack\u914d\u7f6e\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"e.g."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default defineConfig((runtimeCfg) => {\n  return {\n    customConfig: (cfg) => {\n      Object.assign(cfg?.devServer ?? {}, {\n      allowedHosts: ['127.1'],\n      headers: {\n        'Access-Control-Allow-Origin': '*',\n      },\n    });\n\n    Object.assign(cfg.output ?? {}, {\n      library: {\n        name: `${pkg.name}-[name]`,\n        type: 'umd',\n      },\n      uniqueName: `webpackJsonp_${pkg.name}`,\n    });\n\n      // \u4e00\u5b9a\u8981\u8fd4\u56deconfig\n      return cfg;\n    },\n  };\n});\n"})})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},9299:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var i=s(758);const r={},d=i.createContext(r);function t(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);