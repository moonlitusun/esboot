---
sidebar_position: 1
---

# 快速开始

## 环境准备

因为ESBoot v2用的API都比较新，所以先确保有Node v16版本以上。

因为ESBoot集成了很多工程化工具，包括一些Rust和Go的包，非常大，所以包管理工具推荐使用pnpm，节省磁盘空间，退而求次之选用yarn。

## 创建项目

项目脚手架正在开发中...

## 编辑器准备

以VSCode举例：

因为ESBoot内置了eslint、stylelint规则。所以一定要安装以下插件

### Stylelint

- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

stylelint下载之后需要配置一下能支持scss规则.

![stylelint-config](./images/stylelint-config.png)

配置完之后检测一下，找一个scss文件，配置一个0px，查看一下效果。

![stylelint-error](./images/stylelint-error.png)

### ESLint

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### EditorConfig

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
