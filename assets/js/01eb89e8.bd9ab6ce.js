"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8651],{4024:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(1169);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=s(n),m=l,d=k["".concat(o,".").concat(m)]||k[m]||c[m]||i;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[k]="string"==typeof e?e:l,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(6040),l=(n(1169),n(4024));const i={sidebar_position:3},r="\u914d\u7f6e",p={unversionedId:"guides/config",id:"guides/config",title:"\u914d\u7f6e",description:"\u5bf9\u4e8eesboot\u4e2d\u80fd\u4f7f\u7528\u7684\u81ea\u5b9a\u4e49\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u9879\u76ee\u6839\u76ee\u5f55\u7684.esbootrc.ts\u3002",source:"@site/docs/guides/config.md",sourceDirName:"guides",slug:"/guides/config",permalink:"/esboot/docs/guides/config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/config.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u547d\u4ee4\u884c",permalink:"/esboot/docs/guides/command"},next:{title:"static",permalink:"/esboot/docs/guides/static"}},o={},s=[{value:"analyze",id:"analyze",level:2},{value:"alias",id:"alias",level:2},{value:"mfsu",id:"mfsu",level:2},{value:"copy",id:"copy",level:2},{value:"proxy",id:"proxy",level:2},{value:"https",id:"https",level:2},{value:"http2",id:"http2",level:2},{value:"open",id:"open",level:2},{value:"port",id:"port",level:2},{value:"TSChecker",id:"tschecker",level:2},{value:"outputPath",id:"outputpath",level:2},{value:"extraBabelPlugins",id:"extrababelplugins",level:2},{value:"extraBabelPresets",id:"extrababelpresets",level:2},{value:"extraBabelIncludes",id:"extrababelincludes",level:2},{value:"pxtorem",id:"pxtorem",level:2},{value:"jsMinifier",id:"jsminifier",level:2},{value:"jsMinifierOptions",id:"jsminifieroptions",level:2},{value:"cssMinifier",id:"cssminifier",level:2},{value:"cssMinifierOptions",id:"cssminifieroptions",level:2}],u={toc:s},k="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("p",null,"\u5bf9\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"esboot"),"\u4e2d\u80fd\u4f7f\u7528\u7684\u81ea\u5b9a\u4e49\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u9879\u76ee\u6839\u76ee\u5f55\u7684",(0,l.kt)("inlineCode",{parentName:"p"},".esbootrc.ts"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"esboot"),"\u7684\u914d\u7f6e\u6587\u4ef6\u662f\u4e00\u4e2a\u6b63\u5e38\u7684 node \u6a21\u5757\uff0c\u5b83\u5728\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"esboot"),"\u547d\u4ee4\u884c\u7684\u65f6\u5019\u4f7f\u7528\uff0c\u5e76\u4e14\u4e0d\u5305\u542b\u5728\u6d4f\u89c8\u5668\u7aef\u6784\u5efa\u4e2d\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u6709\u4e00\u4e2a\u6700\u7b80\u5355\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"esboot"),"\u914d\u7f6e\u6587\u4ef6\u7684\u8303\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineConfig } from 'esboot';\n \nexport default defineConfig({\n  outputPath: 'dist',\n});\n")),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"defineConfig")," \u5305\u88f9\u914d\u7f6e\u662f\u4e3a\u4e86\u5728\u4e66\u5199\u914d\u7f6e\u6587\u4ef6\u7684\u65f6\u5019\uff0c\u80fd\u5f97\u5230\u66f4\u597d\u7684\u62fc\u5199\u8054\u60f3\u652f\u6301\u3002\u5982\u679c\u4f60\u4e0d\u9700\u8981\uff0c\u76f4\u63a5 ",(0,l.kt)("inlineCode",{parentName:"p"},"export default {}")," \u4e5f\u53ef\u4ee5\u3002"),(0,l.kt)("h2",{id:"analyze"},"analyze"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("p",null,"\u4ea7\u7269size\u5206\u6790\uff0c\u57fa\u4e8e",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/webpack-bundle-analyzer"},"webpack-bundle-analyzer"),"\u3002"),(0,l.kt)("h2",{id:"alias"},"alias"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Record<string, string>")),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n  '@': 'src',\n  '@mobile': 'src/platforms/mobile',\n  '@mobile-native': 'src/platforms/mobile/_native',\n  '@mobile-browser': 'src/platforms/mobile/_browser',\n  '@pc': 'src/platforms/pc',\n  '@pc-native': 'src/platforms/pc/_native',\n  '@pc-browser': 'src/platforms/pc/_browser',\n}\n")),(0,l.kt)("p",null,"\u8def\u5f84\u522b\u540d\u914d\u7f6e\uff0c\u4f7f\u7528\u65b9\u6cd5\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { FONT_SIZE } from '@/constants/config';\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,l.kt)("p",null,"\u914d\u7f6e\u7684key\uff0c\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"@"),"\uff0c\u4e0d\u8981\u5199\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"@/"),"\uff0cvalue\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"src"),"\uff0c\u4e0d\u8981\u5199\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"src/"),"\uff0c\u56e0\u4e3a\u89e3\u6790\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u52a0\u4e0a\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"alias"),"\u5728\u9879\u76ee\u4e2d\u5176\u5b9e\u9700\u8981\u914d\u7f6e4\u4e2a\u5730\u65b9(",(0,l.kt)("inlineCode",{parentName:"p"},"eslint"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"typescript"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"webpack"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"babel"),")\uff0c4\u4e2a\u5730\u65b9\u7684\u5199\u6cd5\u90fd\u6709\u4e9b\u4e0d\u540c\uff0c\u6240\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"esboot"),"\u5185\u90e8\u4f1a\u53bb\u517c\u5bb9\u683c\u5f0f\u95ee\u9898\u3002\u5176\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"webpack"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"babel"),"\u7684\u6539\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"alias"),"\u4f1a\u7acb\u5373\u751f\u6548\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"typescript"),"\u7684\u4f1a\u5728\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"esboot g-alias"),"\u540e\u751f\u6548\u3002\u4f46\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"eslint"),"\u53ea\u4f1a\u5728\u5f00\u9879\u76ee\u7684\u65f6\u5019\u8bfb\u4e00\u6b21\u914d\u7f6e\uff0c\u6240\u4ee5\u6539\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"alias"),"\u4e4b\u540e\u6700\u597d\u7684\u64cd\u4f5c\u5c31\u662f\u5148\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"esboot g-alias"),"\uff0c\u7136\u540e",(0,l.kt)("inlineCode",{parentName:"p"},"reload window"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"vscode"),"\u4e2d\u89e6\u53d1\u5feb\u6377\u952e",(0,l.kt)("inlineCode",{parentName:"p"},"ctrl + shift + p"),"\uff0c\u7136\u540e\u8f93\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"reload window"),")\u4e00\u4e0b\u3002\u8fd9\u6837",(0,l.kt)("inlineCode",{parentName:"p"},"alias"),"\u624d\u4f1a\u5b8c\u5168\u751f\u6548\u3002"),(0,l.kt)("h2",{id:"mfsu"},"mfsu"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"true"))),(0,l.kt)("p",null,"\u662f\u5426\u5f00\u542f",(0,l.kt)("a",{parentName:"p",href:"https://module-federation.github.io/"},"mfsu")),(0,l.kt)("h2",{id:"copy"},"copy"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5927\u90e8\u5206\u60c5\u51b5\u53ef\u4ee5\u4e0d\u7528\uff0c\u53c2\u8003",(0,l.kt)("a",{parentName:"strong",href:"/docs/guides/static"},"static"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Array<string | { from: string; to: string; }>")),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"[]"))),(0,l.kt)("p",null,"\u914d\u7f6e\u8981\u590d\u5236\u5230\u8f93\u51fa\u76ee\u5f55\u7684\u6587\u4ef6\u6216\u6587\u4ef6\u5939\u3002"),(0,l.kt)("p",null,"\u5f53\u914d\u7f6e\u5b57\u7b26\u4e32\u65f6\uff0c\u9ed8\u8ba4\u62f7\u8d1d\u5230\u4ea7\u7269\u76ee\u5f55\uff0c\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"copy: ['foo.json', 'src/bar.json']\n")),(0,l.kt)("p",null,"\u4f1a\u4ea7\u751f\u5982\u4e0b\u4ea7\u7269\u7684\u7ed3\u6784\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"+ dist\n  - bar.json\n  - foo.json\n+ src\n  - bar.json\n- foo.json\n")),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5bf9\u8c61\u914d\u7f6e\u5177\u4f53\u7684\u62f7\u8d1d\u4f4d\u7f6e\uff0c\u5176\u4e2d\u76f8\u5bf9\u8def\u5f84\u7684\u8d77\u70b9\u4e3a\u9879\u76ee\u6839\u76ee\u5f55\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"copy: [\n  { from: 'from', to: 'dist/output' },\n  { from: 'file.json', to: 'dist' }\n]\n")),(0,l.kt)("p",null,"\u6b64\u65f6\u5c06\u4ea7\u751f\u5982\u4e0b\u4ea7\u7269\u7ed3\u6784\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"+ dist\n  + output\n    - foo.json\n  - file.json\n+ from\n  - foo.json\n- file.json\n")),(0,l.kt)("h2",{id:"proxy"},"proxy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"object")),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"{}"))),(0,l.kt)("p",null,"\u914d\u7f6e\u4ee3\u7406\u529f\u80fd\uff0c\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/dev-server/#devserverproxy"},"devServer.proxy"),"\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff0c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"proxy: {\n  '/api': {\n    'target': 'http://jsonplaceholder.typicode.com/',\n    'changeOrigin': true,\n    'pathRewrite': { '^/api' : '' },\n  }\n}\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"proxy")," \u529f\u80fd\u4ec5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"dev")," \u65f6\u6709\u6548\u3002"),(0,l.kt)("h2",{id:"https"},"https"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("p",null,"\u4e0e",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/dev-server/#devserverhttps"},"devServer.https"),"\u4e00\u81f4\u3002"),(0,l.kt)("h2",{id:"http2"},"http2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("p",null,"\u4e0e",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/dev-server/#devserverhttp2"},"devServer.http2"),"\u4e00\u81f4\u3002"),(0,l.kt)("h2",{id:"open"},"open"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("p",null,"\u4e0e",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/dev-server/#devserveropen"},"devServer.open"),"\u4e00\u81f4\u3002"),(0,l.kt)("h2",{id:"port"},"port"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"8900"))),(0,l.kt)("p",null,"\u4e0e",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/dev-server/#devserverport"},"devServer.port"),"\u4e00\u81f4\u3002"),(0,l.kt)("h2",{id:"tschecker"},"TSChecker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("p",null,"\u5f00\u542f ",(0,l.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u7684\u7c7b\u578b\u68c0\u67e5\u3002\u57fa\u4e8e",(0,l.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin"},"fork-ts-checker-webpack-plugin"),"\u3002"),(0,l.kt)("h2",{id:"outputpath"},"outputPath"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"dist"))),(0,l.kt)("p",null,"\u4e0e",(0,l.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/output/#outputpath"},"output.path"),"\u4e00\u81f4\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"esboot preview"),"\u7684\u65f6\u5019\u4e5f\u4f1a\u9ed8\u8ba4\u7528\u8fd9\u4e2a\u8def\u5f84\u3002"),(0,l.kt)("h2",{id:"extrababelplugins"},"extraBabelPlugins"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string[] | Function")),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"[]"))),(0,l.kt)("p",null,"\u914d\u7f6e\u989d\u5916\u7684 babel \u63d2\u4ef6\u3002\u53ef\u4f20\u5165\u63d2\u4ef6\u5730\u5740\u6216\u63d2\u4ef6\u51fd\u6570\u3002"),(0,l.kt)("h2",{id:"extrababelpresets"},"extraBabelPresets"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string[] | Function")),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"[]"))),(0,l.kt)("p",null,"\u914d\u7f6e\u989d\u5916\u7684 babel \u63d2\u4ef6\u96c6\u3002\u53ef\u4f20\u5165\u63d2\u4ef6\u96c6\u5730\u5740\u6216\u63d2\u4ef6\u96c6\u51fd\u6570\u3002"),(0,l.kt)("h2",{id:"extrababelincludes"},"extraBabelIncludes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"Array<string | RegExp>")),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"[]"))),(0,l.kt)("p",null,"\u914d\u7f6e\u989d\u5916\u9700\u8981\u505a Babel \u7f16\u8bd1\u7684 NPM \u5305\u6216\u76ee\u5f55\u3002\u5e38\u7528\u4e8e\u5904\u7406\u7b2c\u4e09\u65b9\u5e93\u7684\u517c\u5bb9\u6027\u3002"),(0,l.kt)("h2",{id:"pxtorem"},"pxtorem"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  rootValue: 100,\n  unitPrecision: 5,\n  propWhiteList: [],\n  propBlackList: [],\n  exclude: false,\n  selectorBlackList: [],\n  ignoreIdentifier: false,\n  replace: true,\n  mediaQuery: false,\n  minPixelValue: 0,\n}\n")),(0,l.kt)("p",null,"\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/postcss-plugin-px2rem"},"postcss-plugin-px2rem"),"\u3002\u53ea\u4e0d\u8fc7\u5185\u7f6e\u7684\u662f\u57fa\u4e8epostcss\u7684\u63d2\u4ef6\u3002"),(0,l.kt)("h2",{id:"jsminifier"},"jsMinifier"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"JsMinifier"),"\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"enum JsMinifier {\n  terser = 'terser',\n  // esbuild = 'esbuild',\n  swc = 'swc',\n  none = 'none', // \u4e0d\u538b\u7f29\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"JsMinifier.terser"))),(0,l.kt)("h2",{id:"jsminifieroptions"},"jsMinifierOptions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"object")),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"{}"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"jsMinifier")," \u7684\u914d\u7f6e\u9879\uff1b\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u538b\u7f29\u4ee3\u7801\u4f1a\u79fb\u9664\u4ee3\u7801\u4e2d\u7684\u6ce8\u91ca\uff0c\u53ef\u4ee5\u901a\u8fc7\u5bf9\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"jsMinifier")," \u9009\u9879\u6765\u4fdd\u7559\u6ce8\u91ca\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  jsMinifier: 'terser',\n  jsMinifierOptions: {\n    format: {\n      comments: false,\n    },\n  }\n}\n")),(0,l.kt)("p",null,"\u914d\u7f6e\u9879\u9700\u8981\u548c\u6240\u4f7f\u7528\u7684\u5de5\u5177\u5bf9\u5e94\uff0c\u5177\u4f53\u53c2\u8003\u5bf9\u5e94\u6587\u6863\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://terser.org/docs/api-reference/#minify-options"},"terser")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://swc.rs/docs/configuration/minification#configuration"},"swc"))),(0,l.kt)("h2",{id:"cssminifier"},"cssMinifier"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"CSSMinifier"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export enum CSSMinifier {\n  cssnano = 'cssnano',\n  lightningcss = 'lightningcss',\n  none = 'none', // \u4e0d\u538b\u7f29\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"CSSMinifier.cssnano"))),(0,l.kt)("h2",{id:"cssminifieroptions"},"cssMinifierOptions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"Object")),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"{}"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cssMinifier")," CSS \u538b\u7f29\u5de5\u5177\u914d\u7f6e\u9009\u9879\u3002"),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"{\n  cssMinifier: 'lightningcss',\n  cssMinifierOptions: {},\n}\n")),(0,l.kt)("p",null,"\u5bf9\u5e94 CSS \u538b\u7f29\u7684\u914d\u7f6e\u8bf7\u67e5\u770b\u5bf9\u5e94\u7684\u6587\u6863\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cssnano.co/docs/config-file/"},"cssnano")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://lightningcss.dev/"},"lightningcss"))))}c.isMDXComponent=!0}}]);