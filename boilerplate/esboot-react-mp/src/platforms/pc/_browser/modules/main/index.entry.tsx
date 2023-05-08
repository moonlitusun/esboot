import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { LAN_ENUM, DEFAULT_LAN } from '@/constants/config';

import { useAppStore } from '@/model';

import '@/styles/index.scss';

import zhTW from '@pc-browser/lang/zh-TW';
import zhCN from '@pc-browser/lang/zh-CN';
import enUS from '@pc-browser/lang/en-US';

import RouterApp from './router';

const messagesDict = {
  [LAN_ENUM.ZH_TW]: zhTW,
  [LAN_ENUM.ZH_CN]: zhCN,
  [LAN_ENUM.EN_US]: enUS,
};

const App = () => {
  const lang = useAppStore((state) => state.lang);

  return (
    <IntlProvider locale={DEFAULT_LAN} messages={messagesDict[lang]}>
      <Router>
        <RouterApp />
      </Router>
    </IntlProvider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

export default {
  title: 'React-webpack-mp',
};
