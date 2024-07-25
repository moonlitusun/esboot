---
sidebar_position: 1
---

# Rules

## no-cross-platform-imports

`默认开启`

为了代码结构清晰，避免代码复用时代码兼容问题，禁止引入其他平台的代码。

### Rule Options

```js
{
  '@dz-web/esboot/no-cross-platform-imports': 'error'
}
```

### Rule Detail

有下列情形之一的都会报错：

1. 引入低于自己平台结构的代码。

例如：

```ts
// src/index.ts

import * as xx from '@mobile/helpers/generate-page';
import * as xx from '@pc/helpers/generate-page';
import * as xx from '@mobile-browser/helpers/generate-page';
import * as xx from '@mobile-native/helpers/generate-page';
import * as xx from '@pc-browser/helpers/generate-page';
import * as xx from '@pc-native/helpers/generate-page';
```

以上使用都会报错，因为引入了低于自己当前位置的平台代码。

2. 引入非自己平台的代码。

```ts
// src/platform/mobile/index.ts

// 报错，不能引入非mobile平台代码，pc同理
import * as xx from '@pc/helpers/generate-page';
import * as xx from '@pc-browser/helpers/generate-page';
import * as xx from '@pc-native/helpers/generate-page';
```

```ts
// src/platform/mobile/_native/index.ts

// 报错
import * as xx from '@mobile-browser/helpers/generate-page';
// 通过
import * as xx from '@mobile-native/helpers/generate-page';
```

## no-cross-platform-lib-imports

`非默认开启`

为了代码结构清晰，避免打包体积增加和引入不必要的工具，禁止引入其他平台的第三方库。

### Rule Options

示例

```ts
{
 "rules": {
      "@dz-web/esboot/no-cross-platform-lib-imports": [
        "error",
        [
          "antd"
        ],
        [
          "antd-mobile"
        ]
      ]
    }
}
```

- `参数1(string[])`: 在mobile平台不能引入的lib。
- `参数2(string[])`: 在pc平台不能引入的lib。

### Rule Detail

如果配置如上：

```ts
// src/platforms/mobile/index.ts

// error
import * as from 'antd';
```

```ts
// src/platforms/pc/index.ts

// error
import * as from 'antd-mobile';
```
