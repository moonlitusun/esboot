"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3349],{6848:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(6070),i=t(8355);const r={sidebar_position:0},o="Doc",l={id:"docs/plugins/plugin-vitest/doc",title:"Doc",description:"\u4f7f\u7528\u63d2\u4ef6",source:"@site/docs/docs/plugins/plugin-vitest/doc.md",sourceDirName:"docs/plugins/plugin-vitest",slug:"/docs/plugins/plugin-vitest/doc",permalink:"/docs/3.0/docs/plugins/plugin-vitest/doc",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Plugin-Vitest",permalink:"/docs/3.0/category/plugin-vitest"},next:{title:"Plugin-Storybook",permalink:"/docs/3.0/category/plugin-storybook"}},c={},d=[{value:"\u4f7f\u7528\u63d2\u4ef6",id:"\u4f7f\u7528\u63d2\u4ef6",level:2},{value:"\u542f\u52a8\u63d2\u4ef6",id:"\u542f\u52a8\u63d2\u4ef6",level:2},{value:"\u63d2\u4ef6\u8bf4\u660e",id:"\u63d2\u4ef6\u8bf4\u660e",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"doc",children:"Doc"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u63d2\u4ef6",children:"\u4f7f\u7528\u63d2\u4ef6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// .esbootrc.ts\nimport vitestPlugin from '@dz-web/esboot-plugin-vitest';\n\nexport default defineConfig({\n  // ...\n  plugins: [vitestPlugin()],\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u542f\u52a8\u63d2\u4ef6",children:"\u542f\u52a8\u63d2\u4ef6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"pnpm run esboot g-alias\n\npnpm run esboot vitest\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"vitest"}),"\u547d\u4ee4\u8f6c\u53d1\u4e86",(0,s.jsx)(n.a,{href:"https://vitest.dev/guide/cli.html",children:"vitest"}),"\uff0c\u5185\u7f6e\u4e86",(0,s.jsx)(n.code,{children:"-r/-c/--dir"}),"\u53c2\u6570\uff0c\u5176\u4ed6\u53c2\u6570\u53ef\u4ee5\u6b63\u5e38\u52a0\u5165\uff0c\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"pnpm run esboot vitest --open\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u63d2\u4ef6\u8bf4\u660e",children:"\u63d2\u4ef6\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u63d2\u4ef6\u5185\u90e8\u8f6c\u53d1\u4e86\u4ee5\u4e0b\u4f9d\u8d56\uff0c\u6240\u4ee5\u65e0\u9700\u624b\u52a8\u5b89\u88c5\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://localhost:3000/docs/plugins/plugin-list/vitest",children:"vitest"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://testing-library.com/docs/react-testing-library/intro/",children:"@testing-library/react"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://testing-library.com/docs/ecosystem-user-event/",children:"@testing-library/user-event"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { test, expect } from 'vitest';\nimport { render } from '@testing-library/react';\n\nimport Home from '@/modules/demo/app';\n\ntest('Demo', () => {\n  const { container } = render(<Home />);\n\n  expect(container.querySelector('p')?.textContent).toBe('close');\n});\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8355:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(758);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);