import ReactDOM from 'react-dom/client';

import wrapNative from './entry/native';
import wrapI18n, { I18nOption } from './entry/i18n';
import wrapRedux from './entry/redux';
import wrapAntd from './entry/antd';
import bridge from './native/bridge';

import '@/styles/index.scss';
import '@pc/styles/global.scss';

interface IOptions {
  store?: any;
  native?: boolean;
  i18n?: I18nOption;
  antd?: boolean;
  quote?: boolean;
}

function mounteReact(innerApp: React.ReactElement) {
  ReactDOM.createRoot(document.getElementById('root') as Element).render(innerApp);
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
export default function generatePage(wrapApp: React.ReactNode, options: IOptions = {}): void {
  const { store, native = true, i18n, antd = true } = options;

  if (store) wrapApp = wrapRedux(wrapApp, store);
  if (i18n) {
    wrapApp = wrapI18n(wrapApp, i18n);
  }
  if (native) wrapApp = wrapNative(wrapApp);
  if (antd) wrapApp = wrapAntd(wrapApp);

  mounte(native, wrapApp as React.ReactElement);
}
