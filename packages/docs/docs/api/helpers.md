---
sidebar_position: 0
---

# Helpers

## getImportPluginsOfRsuite

配合`babel-plugin-import`去做一些自动tree shaking失败后的手动tree shaking行为。

这里是[rsuite](https://rsuitejs.com/)的预置行为。

### DEMO

使用如下：

```ts
import { defineConfig, getImportPluginsOfRsuite } from '@dz-web/esboot';

export default defineConfig((runtimeCfg) => ({
  extraBabelPlugins: [
    getImportPluginsOfRsuite(),
  ],
}));
```

### API

```ts
type GetImportPluginsOfRsuite = (noCssCompList?: string[]) => BabelPlugin;
```

#### noCssCompList

rsuite有一些组件是没有style的，需要传入一个忽略数组。

内置的已经有

```ts
const defaultNoCssComp = ['CustomProvider', 'Whisper'];
```
