---
sidebar_position: 1
---

# 目录结构

## .husky

husky钩子，开发的时候可以不用管。

## config

配置相关目录。

## doc

项目文档目录。

## src

```sh
|-- api # 全局公共接口
|-- api # 全局公共接口
|-- constants # 全局公共常量
|-- global-css # 全局公共样式
|-- helpers # 工具 全局公共副作用函数
|-- utils # 工具 全局公共无副作用函数
|-- components # 全局公共组件
|-- hooks # 全局自定义hooks
|-- images # 全局公共图片
|-- model # 全局状态
|   |-- app.ts # 默认reducer
|   |-- store.ts # redux store
|-- platforms # 多平台
|   |-- mobile # 移动端
|       |-- components # 移动端公共组件
|       |-- constants # 移动端公共常量
|       |-- helpers # 移动端公共副作用函数
|       |-- utils # 移动端公共无副作用函数
|       |-- hooks # 移动端公共Hooks
|       |-- images # 移动端公共图片
|       |-- styles # 移动端公共样式
|       |-- mpa # 多页面
|           |-- modules # 模块列表
|               |-- quote # 行情模块
|                   |-- views # 行情页面列表
|                       |-- demo
|                           |-- lang # 语言文件
|                           |-- demo.entry.tsx # 入口文件
|                           |-- demo.scss # 样式文件
|       |-- spa # 单页面
|           |-- lang # 语言文件
|           |-- modules # 模块列表
|   |-- pc # PC端结构跟mobile端相同
```

## 其他文件

```sh
|-- .editorconfig # 编辑器配置同步文件
|-- .env # 环境变量文件
|-- .esbootrc.ts # esboot配置文件
|-- .gitignore
|-- .npmrc # 本地npm配置文件
|-- package.json
|-- .tsconfig.json
```
