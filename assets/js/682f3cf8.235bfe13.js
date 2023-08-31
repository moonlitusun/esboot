"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3808],{4024:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(1169);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4458:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(6040),a=(r(1169),r(4024));const o={sidebar_position:2},l=void 0,i={unversionedId:"changelog/v2",id:"changelog/v2",title:"v2",description:"2.0",source:"@site/docs/changelog/v2.md",sourceDirName:"changelog",slug:"/changelog/v2",permalink:"/esboot/docs/changelog/v2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/changelog/v2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"ChangeLogs",permalink:"/esboot/docs/category/changelogs"},next:{title:"TODOLIST",permalink:"/esboot/docs/TODO"}},c={},s=[{value:"2.0",id:"20",level:2},{value:"2.1.1",id:"211",level:3},{value:"2.0.34",id:"2034",level:3},{value:"2.0.33",id:"2033",level:3},{value:"2.0.32",id:"2032",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"20"},"2.0"),(0,a.kt)("h3",{id:"211"},"2.1.1"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"2023-08-30")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"feat: \u652f\u6301",(0,a.kt)("a",{parentName:"li",href:"/esboot/docs/guides/config#alias"},"alias"),"\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"feat: \u589e\u52a0",(0,a.kt)("a",{parentName:"li",href:"/esboot/docs/guides/command#g-alias"},"g-alias"),"\u547d\u4ee4")),(0,a.kt)("h3",{id:"2034"},"2.0.34"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"2023-08-11")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"feat: \u591a\u5e73\u53f0\u517c\u5bb9")),(0,a.kt)("h3",{id:"2033"},"2.0.33"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"2023-08-11")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fix: ",(0,a.kt)("inlineCode",{parentName:"li"},"@dr.pogodin/babel-plugin-react-css-modules"),"\u548cclassNames\u4e0d\u517c\u5bb9\uff0c\u63d2\u4ef6\u5199\u6b7b\u4e86\u5730\u5740\uff0c\u66ff\u6362",(0,a.kt)("inlineCode",{parentName:"li"},"@dr.pogodin/babel-plugin-react-css-modules"),"\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"@dr.pogodin/babel-plugin-react-css-modules"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5173\u95ed",(0,a.kt)("a",{parentName:"li",href:"https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md"},"react/require-default-props"),"\u89c4\u5219\u3002")),(0,a.kt)("h3",{id:"2032"},"2.0.32"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"2023-08-11")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fix: \u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"mock:bridge"),"\u547d\u4ee4\u6ca1\u6709\u8bfb\u53d6.env\u6587\u4ef6")))}d.isMDXComponent=!0}}]);