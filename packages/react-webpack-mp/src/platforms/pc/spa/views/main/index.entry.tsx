import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import '@/global-css/main.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { store, useAppSelector } from '@pc/model/store';
import { LAN_ENUM, DEFAULT_LAN } from '@/constants/config';

import zhTW from '@pc-spa/lang/zh-tw';
import zhCN from '@pc-spa/lang/zh-cn';

import '@pc/styles/global.scss';

import RouterApp from './router';

const messagesDict = {
  [LAN_ENUM.ZH_TW]: zhTW,
  [LAN_ENUM.ZH_CN]: zhCN,
};

const App = () => {
  const lang = useAppSelector((state) => state.app.userConfig.language);

  return (
    <IntlProvider locale={DEFAULT_LAN} messages={messagesDict[lang]}>
      <Router>
        <RouterApp />
      </Router>
    </IntlProvider>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root'),
);

export default {
  title: 'React-webpack-mp',
};
