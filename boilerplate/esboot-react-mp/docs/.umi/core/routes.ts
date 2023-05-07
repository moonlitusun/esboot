// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/rocsun/Code/dz-library/esboot/react/boilerplate/react-webpack-mp/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/rocsun/Code/dz-library/esboot/react/boilerplate/react-webpack-mp/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/rocsun/Code/dz-library/esboot/react/boilerplate/react-webpack-mp/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'/Users/rocsun/Code/dz-library/esboot/react/boilerplate/react-webpack-mp/docs/docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/docs/index.md",
          "updatedTime": 1662911206000,
          "title": "React-webpack-mp WEB",
          "hero": {
            "title": "React-webpack-mp WEB",
            "desc": "<div class=\"markdown\"><p>点证Web Team项目文档。</p></div>",
            "background": "https://images.tuyacn.com/rms-static/b2994480-b3df-11eb-8b85-1990e48a4eb7-1620905892040.png?tyName=210513docs_bg.png",
            "image": "https://img1.baidu.com/it/u=3776480377,1998806836&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
            "actions": [
              {
                "link": "/项目说明",
                "text": "快速上手"
              }
            ]
          },
          "slugs": []
        },
        "title": "React-webpack-mp WEB - DZ WEB TEAM"
      },
      {
        "path": "/开发资源/components",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__开发资源__components.md' */'/Users/rocsun/Code/dz-library/esboot/react/boilerplate/react-webpack-mp/docs/docs/开发资源/components.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/docs/开发资源/components.md",
          "updatedTime": 1662911206000,
          "slugs": [
            {
              "depth": 1,
              "value": "Components",
              "heading": "components"
            }
          ],
          "title": "Components",
          "nav": {
            "path": "/开发资源",
            "title": "开发资源"
          }
        },
        "title": "Components - DZ WEB TEAM"
      },
      {
        "path": "/开发资源/helpers",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__开发资源__helpers.md' */'/Users/rocsun/Code/dz-library/esboot/react/boilerplate/react-webpack-mp/docs/docs/开发资源/helpers.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/docs/开发资源/helpers.md",
          "updatedTime": 1662911206000,
          "slugs": [
            {
              "depth": 1,
              "value": "Helpers",
              "heading": "helpers"
            }
          ],
          "title": "Helpers",
          "nav": {
            "path": "/开发资源",
            "title": "开发资源"
          }
        },
        "title": "Helpers - DZ WEB TEAM"
      },
      {
        "path": "/开发资源/hooks",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__开发资源__hooks.md' */'/Users/rocsun/Code/dz-library/esboot/react/boilerplate/react-webpack-mp/docs/docs/开发资源/hooks.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/docs/开发资源/hooks.md",
          "updatedTime": 1662911206000,
          "slugs": [
            {
              "depth": 1,
              "value": "Hooks",
              "heading": "hooks"
            }
          ],
          "title": "Hooks",
          "nav": {
            "path": "/开发资源",
            "title": "开发资源"
          }
        },
        "title": "Hooks - DZ WEB TEAM"
      },
      {
        "path": "/开发资源/utils",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__开发资源__utils.md' */'/Users/rocsun/Code/dz-library/esboot/react/boilerplate/react-webpack-mp/docs/docs/开发资源/utils.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/docs/开发资源/utils.md",
          "updatedTime": 1662911206000,
          "slugs": [
            {
              "depth": 1,
              "value": "Utils",
              "heading": "utils"
            }
          ],
          "title": "Utils",
          "nav": {
            "path": "/开发资源",
            "title": "开发资源"
          }
        },
        "title": "Utils - DZ WEB TEAM"
      },
      {
        "path": "/页面列表/pc-web-in-native-pages",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__页面列表__pc-web-in-native-pages.md' */'/Users/rocsun/Code/dz-library/esboot/react/boilerplate/react-webpack-mp/docs/docs/页面列表/pc-web-in-native-pages.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/docs/页面列表/pc-web-in-native-pages.md",
          "updatedTime": 1662911206000,
          "slugs": [
            {
              "depth": 1,
              "value": "PC嵌入WEB页面",
              "heading": "pc嵌入web页面"
            },
            {
              "depth": 2,
              "value": "交易模块",
              "heading": "交易模块"
            },
            {
              "depth": 3,
              "value": "交易",
              "heading": "交易"
            },
            {
              "depth": 4,
              "value": "页面地址",
              "heading": "页面地址"
            },
            {
              "depth": 3,
              "value": "交易买入",
              "heading": "交易买入"
            },
            {
              "depth": 4,
              "value": "页面地址",
              "heading": "页面地址-1"
            },
            {
              "depth": 4,
              "value": "url参数",
              "heading": "url参数"
            },
            {
              "depth": 3,
              "value": "资金流水",
              "heading": "资金流水"
            },
            {
              "depth": 4,
              "value": "页面地址",
              "heading": "页面地址-2"
            },
            {
              "depth": 3,
              "value": "交易设置",
              "heading": "交易设置"
            },
            {
              "depth": 4,
              "value": "页面地址",
              "heading": "页面地址-3"
            },
            {
              "depth": 3,
              "value": "修改交易密码",
              "heading": "修改交易密码"
            },
            {
              "depth": 4,
              "value": "页面地址",
              "heading": "页面地址-4"
            },
            {
              "depth": 2,
              "value": "资讯模块",
              "heading": "资讯模块"
            },
            {
              "depth": 3,
              "value": "资讯",
              "heading": "资讯"
            },
            {
              "depth": 4,
              "value": "页面地址",
              "heading": "页面地址-5"
            },
            {
              "depth": 4,
              "value": "url参数",
              "heading": "url参数-1"
            },
            {
              "depth": 3,
              "value": "资讯详情",
              "heading": "资讯详情"
            },
            {
              "depth": 4,
              "value": "页面地址",
              "heading": "页面地址-6"
            },
            {
              "depth": 4,
              "value": "url参数",
              "heading": "url参数-2"
            },
            {
              "depth": 2,
              "value": "南北向资金",
              "heading": "南北向资金"
            },
            {
              "depth": 4,
              "value": "页面地址",
              "heading": "页面地址-7"
            },
            {
              "depth": 2,
              "value": "资金流向",
              "heading": "资金流向"
            },
            {
              "depth": 4,
              "value": "页面地址",
              "heading": "页面地址-8"
            },
            {
              "depth": 2,
              "value": "个人中心",
              "heading": "个人中心"
            },
            {
              "depth": 4,
              "value": "页面地址",
              "heading": "页面地址-9"
            },
            {
              "depth": 3,
              "value": "行情订阅",
              "heading": "行情订阅"
            },
            {
              "depth": 4,
              "value": "我的行情",
              "heading": "我的行情"
            },
            {
              "depth": 5,
              "value": "页面地址",
              "heading": "页面地址-10"
            },
            {
              "depth": 4,
              "value": "订购记录",
              "heading": "订购记录"
            },
            {
              "depth": 5,
              "value": "页面地址",
              "heading": "页面地址-11"
            },
            {
              "depth": 2,
              "value": "IPO",
              "heading": "ipo"
            },
            {
              "depth": 3,
              "value": "新股中心",
              "heading": "新股中心"
            },
            {
              "depth": 4,
              "value": "页面地址",
              "heading": "页面地址-12"
            },
            {
              "depth": 3,
              "value": "去认购",
              "heading": "去认购"
            },
            {
              "depth": 4,
              "value": "页面地址",
              "heading": "页面地址-13"
            },
            {
              "depth": 4,
              "value": "url参数",
              "heading": "url参数-3"
            },
            {
              "depth": 3,
              "value": "认购记录",
              "heading": "认购记录"
            },
            {
              "depth": 4,
              "value": "页面地址",
              "heading": "页面地址-14"
            }
          ],
          "title": "PC嵌入WEB页面",
          "nav": {
            "path": "/页面列表",
            "title": "页面列表"
          }
        },
        "title": "PC嵌入WEB页面 - DZ WEB TEAM"
      },
      {
        "path": "/项目说明",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__项目说明__index.md' */'/Users/rocsun/Code/dz-library/esboot/react/boilerplate/react-webpack-mp/docs/docs/项目说明/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/docs/项目说明/index.md",
          "updatedTime": 1662911206000,
          "title": "项目说明",
          "order": 1,
          "nav": {
            "order": 1,
            "path": "/项目说明",
            "title": "项目说明"
          },
          "slugs": []
        },
        "title": "项目说明 - DZ WEB TEAM"
      },
      {
        "path": "/项目说明/npm scripts",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__项目说明__npm scripts.md' */'/Users/rocsun/Code/dz-library/esboot/react/boilerplate/react-webpack-mp/docs/docs/项目说明/npm scripts.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/docs/项目说明/npm scripts.md",
          "updatedTime": 1659801394284,
          "order": 4,
          "slugs": [
            {
              "depth": 1,
              "value": "NPM Scripts",
              "heading": "npm-scripts"
            }
          ],
          "title": "NPM Scripts",
          "nav": {
            "path": "/项目说明",
            "title": "项目说明"
          }
        },
        "title": "NPM Scripts - DZ WEB TEAM"
      },
      {
        "path": "/项目说明/多页面开发",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__项目说明__多页面开发.md' */'/Users/rocsun/Code/dz-library/esboot/react/boilerplate/react-webpack-mp/docs/docs/项目说明/多页面开发.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/docs/项目说明/多页面开发.md",
          "updatedTime": 1662911206000,
          "title": "多页面开发",
          "order": 5,
          "slugs": [
            {
              "depth": 2,
              "value": "手动指定入口",
              "heading": "手动指定入口"
            },
            {
              "depth": 2,
              "value": "约定式入口（推荐）",
              "heading": "约定式入口推荐"
            }
          ],
          "nav": {
            "path": "/项目说明",
            "title": "项目说明"
          }
        },
        "title": "多页面开发 - DZ WEB TEAM"
      },
      {
        "path": "/项目说明/文件目录",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__项目说明__文件目录.md' */'/Users/rocsun/Code/dz-library/esboot/react/boilerplate/react-webpack-mp/docs/docs/项目说明/文件目录.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/docs/项目说明/文件目录.md",
          "updatedTime": 1662911206000,
          "order": 3,
          "slugs": [
            {
              "depth": 1,
              "value": "文件目录",
              "heading": "文件目录"
            }
          ],
          "title": "文件目录",
          "nav": {
            "path": "/项目说明",
            "title": "项目说明"
          }
        },
        "title": "文件目录 - DZ WEB TEAM"
      },
      {
        "path": "/项目说明/文档开发说明",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__项目说明__文档开发说明.md' */'/Users/rocsun/Code/dz-library/esboot/react/boilerplate/react-webpack-mp/docs/docs/项目说明/文档开发说明.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/docs/项目说明/文档开发说明.md",
          "updatedTime": 1662911206000,
          "order": 3,
          "slugs": [
            {
              "depth": 1,
              "value": "文档开发说明",
              "heading": "文档开发说明"
            }
          ],
          "title": "文档开发说明",
          "nav": {
            "path": "/项目说明",
            "title": "项目说明"
          }
        },
        "title": "文档开发说明 - DZ WEB TEAM"
      },
      {
        "path": "/项目说明/项目启动",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__项目说明__项目启动.md' */'/Users/rocsun/Code/dz-library/esboot/react/boilerplate/react-webpack-mp/docs/docs/项目说明/项目启动.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/docs/项目说明/项目启动.md",
          "updatedTime": 1662911206000,
          "title": "项目启动",
          "order": 2,
          "slugs": [
            {
              "depth": 1,
              "value": "环境变量",
              "heading": "环境变量"
            },
            {
              "depth": 2,
              "value": "创建文件",
              "heading": "创建文件"
            },
            {
              "depth": 2,
              "value": "变量参考列表",
              "heading": "变量参考列表"
            },
            {
              "depth": 3,
              "value": "ESBOOT_PLATFORM",
              "heading": "esboot_platform"
            },
            {
              "depth": 3,
              "value": "ESBOOT_PAGE_TYPE",
              "heading": "esboot_page_type"
            },
            {
              "depth": 3,
              "value": "ESBOOT_CONTENT_PATH",
              "heading": "esboot_content_path"
            },
            {
              "depth": 3,
              "value": "ESBOOT_CONTENT_PATTERN",
              "heading": "esboot_content_pattern"
            },
            {
              "depth": 3,
              "value": "useMFSU",
              "heading": "usemfsu"
            },
            {
              "depth": 3,
              "value": "BRIDGE_MOCK_PORT",
              "heading": "bridge_mock_port"
            }
          ],
          "nav": {
            "path": "/项目说明",
            "title": "项目说明"
          }
        },
        "title": "项目启动 - DZ WEB TEAM"
      },
      {
        "path": "/开发资源",
        "meta": {},
        "exact": true,
        "redirect": "/开发资源/components"
      },
      {
        "path": "/页面列表",
        "meta": {},
        "exact": true,
        "redirect": "/页面列表/pc-web-in-native-pages"
      }
    ],
    "title": "DZ WEB TEAM",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
