import ReactDOM from 'react-dom';

import wrapNative from './entry/native';
import wrapI18n, { I18nOption } from './entry/i18n';
import wrapRedux from './entry/redux';
import bridge from './native/bridge';

import '@/global-css/main.scss';
import '@mobile/styles/global.scss';

interface IOptions {
  store?: any;
  native?: boolean;
  i18n?: I18nOption;
}

function mounte(native: boolean, innerApp: React.ReactElement) {
  if (native) {
    bridge.ready(() => {
      ReactDOM.render(innerApp, document.getElementById('root'));
    });
  } else {
    ReactDOM.render(innerApp, document.getElementById('root'));
  }
}

export default function generatePage(App: React.ReactNode, options: IOptions = {}): void {
  const { store, native = true, i18n } = options;
  let wrapApp: React.ReactNode = App;

  if (store) wrapApp = wrapRedux(wrapApp, store);
  if (i18n) wrapApp = wrapI18n(wrapApp, i18n);
  if (native) wrapApp = wrapNative(wrapApp);

  mounte(native, wrapApp as React.ReactElement);
}
