import { bridge, BridgePlatforms } from '@dz-web/bridge';
import { mounteReact } from '@/helpers/react';

import wrapNative from './hoc/native';
import wrapI18n, { I18nOption } from './hoc/i18n';

import '@/styles/index.scss';
import '@mobile/styles/index.scss';

interface GeneratePageOptions {
  native?: boolean;
  i18n?: I18nOption;
}

function mounte(native: boolean, innerApp: React.ReactElement) {
  if (native) {
    bridge.ready(() => {
      mounteReact(innerApp);
    });
  } else {
    mounteReact(innerApp);
  }
}

export default function generatePage(App: React.ReactNode, options: GeneratePageOptions = {}): void {
  const { native = true, i18n } = options;
  let wrapApp: React.ReactNode = App;

  if (i18n) wrapApp = wrapI18n(wrapApp, i18n);
  if (native) {
    bridge.initPlatforms(BridgePlatforms.webview);
    wrapApp = wrapNative(wrapApp);
  }

  mounte(native, wrapApp as React.ReactElement);
}
