"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1799],{3811:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>d,metadata:()=>r,toc:()=>t});var l=i(6070),o=i(8355);const d={sidebar_position:2},s="Plugin API",r={id:"api/plugin",title:"Plugin API",description:"onActivated",source:"@site/docs/api/plugin.md",sourceDirName:"api",slug:"/api/plugin",permalink:"/docs/3.0/api/plugin",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apiSidebar",previous:{title:"Helpers",permalink:"/docs/3.0/api/helpers"},next:{title:"Browser",permalink:"/docs/3.0/category/browser"}},c={},t=[{value:"onActivated",id:"onactivated",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"prepare",id:"prepare",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:3},{value:"modifyConfig",id:"modifyconfig",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:3},{value:"registerCommands",id:"registercommands",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570-3",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-3",level:3},{value:"modifyTypescriptConfig",id:"modifytypescriptconfig",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570-4",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-4",level:3},{value:"modifyPrettierConfig",id:"modifyprettierconfig",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570-5",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-5",level:3},{value:"modifyStylelintConfig",id:"modifystylelintconfig",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570-6",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-6",level:3},{value:"modifyEslintConfig",id:"modifyeslintconfig",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570-7",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-7",level:3},{value:"modifyBundlerConfig",id:"modifybundlerconfig",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570-8",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-8",level:3},{value:"afterCompile",id:"aftercompile",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570-9",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-9",level:3}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"plugin-api",children:"Plugin API"})}),"\n",(0,l.jsx)(e.h2,{id:"onactivated",children:"onActivated"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"onActivated?: (cfg: Configuration) => void;\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5f53\u63d2\u4ef6\u88ab\u6ce8\u518c\u7684\u65f6\u5019\u4f1a\u88ab\u89e6\u53d1\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"cfg"}),"\uff1a\u5f53\u524d\u7684\u914d\u7f6e\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import { defineConfig, type Configuration } from '@dz-web/esboot';\n\nexport default defineConfig({\n  plugins: [\n    {\n      key: 'plugin-key',\n      onActivated: (cfg) => {\n        console.log('My plugin is activated', cfg);\n      },\n    },\n  ],\n});\n"})}),"\n",(0,l.jsx)(e.h2,{id:"prepare",children:"prepare"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"prepare?: (cfg: Configuration) => void;\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5f53\u6267\u884c",(0,l.jsx)(e.a,{href:"../docs/guides/cli#prepare",children:"esboot prepare"}),"\u7684\u65f6\u5019\u4f1a\u88ab\u89e6\u53d1\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u901a\u5e38\u4f1a\u505a\u4e00\u4e9b\u521d\u59cb\u5316\u64cd\u4f5c\uff0c\u6bd4\u5982\u5b89\u88c5\u4f9d\u8d56\uff0c\u751f\u6210\u6587\u4ef6\u7b49\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u53c2\u6570-1",children:"\u53c2\u6570"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"cfg"}),"\uff1a\u5f53\u524d\u7684\u914d\u7f6e\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u793a\u4f8b-1",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import { defineConfig, type Configuration, PluginHooks } from '@dz-web/esboot';\n\nexport default defineConfig({\n  [PluginHooks.prepare]: [\n    {\n      key: 'plugin-key',\n      prepare: (cfg) => {\n        console.log('My plugin is prepared', cfg);\n      },\n    },\n  ],\n});\n"})}),"\n",(0,l.jsx)(e.h2,{id:"modifyconfig",children:"modifyConfig"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"[PluginHooks.modifyConfig]?: (\n    config: Configuration\n) => Partial<Configuration>;\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u8bfb\u53d6\u5b8c\u914d\u7f6e\u540e\u6267\u884c\uff0c\u5141\u8bb8\u5728\u914d\u7f6e\u88ab\u4f7f\u7528\u524d\u8fdb\u884c\u4fee\u6539\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u53c2\u6570-2",children:"\u53c2\u6570"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"config"}),"\uff1a\u5f53\u524d\u7684\u914d\u7f6e\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.admonition,{type:"info",children:(0,l.jsx)(e.p,{children:"\u8bf7\u4e0d\u8981\u76f4\u63a5\u4fee\u6539 config \u5bf9\u8c61\uff0c\u8fd9\u6837\u662f\u65e0\u6548\u7684\u3002"})}),"\n",(0,l.jsx)(e.h3,{id:"\u793a\u4f8b-2",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(e.p,{children:"\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u63d2\u4ef6\uff0c\u5b83\u9700\u8981\u4fee\u6539\u8f93\u51fa\u76ee\u5f55\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import { defineConfig, type Configuration } from '@dz-web/esboot';\n\nexport default defineConfig({\n  plugins: [\n    {\n      key: 'plugin-key',\n      modifyConfig: (config) => {\n        return {\n          output: {\n            dir: 'dist-custom',\n          },\n        };\n      },\n    },\n  ],\n});\n"})}),"\n",(0,l.jsx)(e.h2,{id:"registercommands",children:"registerCommands"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"[PluginHooks.registerCommands]?: (cfg: Configuration) => Command[];\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6ce8\u518c\u547d\u4ee4\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u53c2\u6570-3",children:"\u53c2\u6570"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"cfg"}),"\uff1a\u5f53\u524d\u7684\u914d\u7f6e\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"Command[]"}),"\uff1a\u547d\u4ee4\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"interface Command {\n  name: string;\n  description?: string;\n  allowUnknownOption?: boolean;\n  options?: string[];\n  action: (...args: any[]) => void;\n}\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u66f4\u591a\u53c2\u6570\u542b\u4e49\u53ef\u4ee5\u770b",(0,l.jsx)(e.a,{href:"https://github.com/tj/commander.js/",children:"commander"}),"\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u793a\u4f8b-3",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import { defineConfig, type Configuration } from '@dz-web/esboot';\n\nexport default defineConfig({\n  plugins: [\n    {\n      key: 'plugin-key',\n      registerCommands: (cfg) => {\n        return [\n          {\n            name: 'test',\n            description: 'This is a test command',\n            options: ['-f, --file <char>', '-s, --sampleFile <char>'],\n            action: (options) => {\n              // \u5728\u8fd9\u91cc\u8bfb\u5230\u7528\u6237\u8f93\u5165\u7684\u53c2\u6570 \u6bd4\u5982options.file\n              console.log('This is a test command', options);\n            },\n          },\n        ];\n      },\n    },\n  ],\n});\n"})}),"\n",(0,l.jsx)(e.h2,{id:"modifytypescriptconfig",children:"modifyTypescriptConfig"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"[PluginHooks.modifyTypescriptConfig]?: (\n  cfg: Configuration,\n  tsconfig: NormalConfig\n) => Partial<NormalConfig>;\n"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"prepare"})," \u9636\u6bb5\u6267\u884c\uff0c\u7528\u4e8e\u4fee\u6539\u751f\u6210\u7684",(0,l.jsx)(e.code,{children:"tsconfig.json"}),"\u5185\u5bb9\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u53c2\u6570-4",children:"\u53c2\u6570"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"config"}),"\uff1a\u5f53\u524d\u7684\u914d\u7f6e\u5bf9\u8c61\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"tsconfig"}),"\uff1a\u5f53\u524d\u7684 tsconfig \u914d\u7f6e\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u793a\u4f8b-4",children:"\u793a\u4f8b"}),"\n",(0,l.jsxs)(e.p,{children:["\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u63d2\u4ef6\uff0c\u5b83\u9700\u8981\u4fee\u6539 tsconfig \u7684",(0,l.jsx)(e.code,{children:"baseUrl"}),"\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import { defineConfig, type Configuration } from '@dz-web/esboot';\n\nexport default defineConfig({\n  plugins: [\n    {\n      key: 'plugin-key',\n      modifyTypescriptConfig: (config, tsconfig) => {\n        return {\n          baseUrl: 'src',\n        };\n      },\n    },\n  ],\n});\n"})}),"\n",(0,l.jsx)(e.h2,{id:"modifyprettierconfig",children:"modifyPrettierConfig"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"[PluginHooks.modifyPrettierConfig]?: (\n  cfg: Configuration,\n  prettierConfig: NormalConfig\n) => Partial<NormalConfig>;\n"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"prepare"})," \u9636\u6bb5\u6267\u884c\uff0c\u7528\u4e8e\u4fee\u6539\u751f\u6210\u7684",(0,l.jsx)(e.code,{children:"prettier"}),"\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u53c2\u6570-5",children:"\u53c2\u6570"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"config"}),"\uff1a\u5f53\u524d\u7684\u914d\u7f6e\u5bf9\u8c61\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"prettierConfig"}),"\uff1a\u5f53\u524d\u7684 prettier \u914d\u7f6e\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u793a\u4f8b-5",children:"\u793a\u4f8b"}),"\n",(0,l.jsxs)(e.p,{children:["\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u63d2\u4ef6\uff0c\u5b83\u9700\u8981\u4fee\u6539 prettier \u7684",(0,l.jsx)(e.code,{children:"tabWidth"}),"\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import { defineConfig, type Configuration } from '@dz-web/esboot';\n\nexport default defineConfig({\n  plugins: [\n    {\n      key: 'plugin-key',\n      modifyTypescriptConfig: (config, tsconfig) => {\n        return {\n          tabWidth: 2,\n        };\n      },\n    },\n  ],\n});\n"})}),"\n",(0,l.jsx)(e.h2,{id:"modifystylelintconfig",children:"modifyStylelintConfig"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"[PluginHooks.modifyStylelintConfig]?: (\n  cfg: Configuration,\n  stylelintConfig: NormalConfig\n) => Partial<NormalConfig>;\n"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"prepare"})," \u9636\u6bb5\u6267\u884c\uff0c\u7528\u4e8e\u4fee\u6539\u751f\u6210\u7684",(0,l.jsx)(e.code,{children:"stylelint"}),"\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u53c2\u6570-6",children:"\u53c2\u6570"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"config"}),"\uff1a\u5f53\u524d\u7684\u914d\u7f6e\u5bf9\u8c61\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"stylelintConfig"}),"\uff1a\u5f53\u524d\u7684 stylelint \u914d\u7f6e\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u793a\u4f8b-6",children:"\u793a\u4f8b"}),"\n",(0,l.jsxs)(e.p,{children:["\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u63d2\u4ef6\uff0c\u5b83\u9700\u8981\u4fee\u6539 stylelint \u7684\u4e00\u4e2a rule(",(0,l.jsx)(e.code,{children:"max-nesting-depth"}),")\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import { defineConfig, type Configuration } from '@dz-web/esboot';\n\nexport default defineConfig({\n  plugins: [\n    {\n      key: 'plugin-key',\n      modifyStylelintConfig: (config, stylelintConfig) => {\n        return {\n          rules: {\n            'max-nesting-depth': 3,\n          },\n        };\n      },\n    },\n  ],\n});\n"})}),"\n",(0,l.jsx)(e.h2,{id:"modifyeslintconfig",children:"modifyEslintConfig"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"[PluginHooks.modifyEslintConfig]?: (\n  cfg: Configuration,\n  eslintConfig: NormalConfig\n) => Partial<NormalConfig>;\n"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"prepare"})," \u9636\u6bb5\u6267\u884c\uff0c\u7528\u4e8e\u4fee\u6539\u751f\u6210\u7684",(0,l.jsx)(e.code,{children:"eslint"}),"\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u53c2\u6570-7",children:"\u53c2\u6570"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"config"}),"\uff1a\u5f53\u524d\u7684\u914d\u7f6e\u5bf9\u8c61\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"eslintConfig"}),"\uff1a\u5f53\u524d\u7684 eslint \u914d\u7f6e\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u793a\u4f8b-7",children:"\u793a\u4f8b"}),"\n",(0,l.jsxs)(e.p,{children:["\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u63d2\u4ef6\uff0c\u5b83\u9700\u8981\u4fee\u6539 eslint \u7684\u4e00\u4e2a rule(",(0,l.jsx)(e.code,{children:"no-unused-vars"}),")\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import { defineConfig, type Configuration } from '@dz-web/esboot';\n\nexport default defineConfig({\n  plugins: [\n    {\n      key: 'plugin-key',\n      modifyEslintConfig: (config, eslintConfig) => {\n        return {\n          rules: {\n            'no-unused-vars': 'off',\n          },\n        };\n      },\n    },\n  ],\n});\n"})}),"\n",(0,l.jsx)(e.h2,{id:"modifybundlerconfig",children:"modifyBundlerConfig"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"[PluginHooks.modifyBundlerConfig]?: (\n  cfg: Configuration,\n  bundlerConfig: NormalConfig,\n  bundlerName: string\n) => void;\n"})}),"\n",(0,l.jsxs)(e.p,{children:["Bunder\u7684",(0,l.jsx)(e.code,{children:"dev"}),"/",(0,l.jsx)(e.code,{children:"build"})," \u6267\u884c\u4e4b\u524d\u6267\u884c\uff0c\u7528\u4e8e\u4fee\u6539\u5f53\u524dbundler\u7684\u914d\u7f6e\u6587\u4ef6\u3002\u5f88\u7c7b\u4f3c\u4e8e\u6bcf\u4e2abundler\u7684",(0,l.jsx)(e.code,{children:"customConfig"}),"\u914d\u7f6e\uff0c\u4f46\u662f",(0,l.jsx)(e.code,{children:"plugin"}),"\u7684\u597d\u5904\u662f\u53ef\u4ee5\u5c01\u88c5\u5e76\u4e14\u8de8",(0,l.jsx)(e.code,{children:"bundler"}),"\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u53c2\u6570-8",children:"\u53c2\u6570"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"config"}),"\uff1a\u5f53\u524d\u7684\u914d\u7f6e\u5bf9\u8c61\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"bundlerConfig"}),"\uff1a\u5f53\u524d\u7684 bundler \u914d\u7f6e\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"bundlerName"}),"\uff1a\u5f53\u524d\u7684 bundler \u540d\u79f0\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u793a\u4f8b-8",children:"\u793a\u4f8b"}),"\n",(0,l.jsxs)(e.p,{children:["\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u63d2\u4ef6\uff0c\u5b83\u9700\u8981\u4fee\u6539 webpack \u7684",(0,l.jsx)(e.code,{children:"output.publicPath"}),"\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import { defineConfig, type Configuration, PluginHooks } from '@dz-web/esboot';\n\nexport default defineConfig({\n  plugins: [\n    {\n      key: 'plugin-key',\n      [PluginHooks.modifyBundlerConfig]: (cfg, bundlerConfig, bundlerName) => {\n        if (bundlerName === 'webpack') {\n          bundlerConfig.output.publicPath = '/module';\n        }\n      },\n    },\n  ],\n});\n"})}),"\n",(0,l.jsx)(e.h2,{id:"aftercompile",children:"afterCompile"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"[PluginHooks.afterCompile]?: (cfg: Configuration) => void;\n"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"dev"}),"/",(0,l.jsx)(e.code,{children:"build"})," \u6267\u884c\u4e4b\u540e\u6267\u884c\uff0c\u7528\u4e8e\u5728 bundler \u7f16\u8bd1\u4e4b\u540e\u505a\u4e00\u4e9b\u4e8b\u60c5\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u53c2\u6570-9",children:"\u53c2\u6570"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"config"}),"\uff1a\u5f53\u524d\u7684\u914d\u7f6e\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u793a\u4f8b-9",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(e.p,{children:"\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u63d2\u4ef6\uff0c\u5b83\u9700\u8981\u5728\u7f16\u8bd1\u4e4b\u540e\u63d0\u793a\u5f53\u524d\u7f16\u8bd1\u7684\u9875\u9762\u5217\u8868\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-ts",children:"import { defineConfig, type Configuration, PluginHooks } from '@dz-web/esboot';\n\nexport default defineConfig({\n  plugins: [\n    {\n      key: 'plugin-key',\n      [PluginHooks.afterCompile]: (cfg) => {\n        console.log(cfg.entry);\n      },\n    },\n  ],\n});\n"})})]})}function g(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},8355:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>r});var l=i(758);const o={},d=l.createContext(o);function s(n){const e=l.useContext(d);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);