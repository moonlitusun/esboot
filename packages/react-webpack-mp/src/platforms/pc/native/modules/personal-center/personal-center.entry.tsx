import { HashRouter as Router } from 'react-router-dom';
import React from 'react';
import generatePage from '@pc-native/helpers/generate-page';
import { store } from '@/model/store';
import { LAN_ENUM } from '@pc/constants/config';
import App from './personal-center';
import zhCN from './lang/zh-cn';
import zhTW from './lang/zh-tw';

generatePage(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  {
    store,
    i18n: { messageDict: { [LAN_ENUM.ZH_TW]: zhTW, [LAN_ENUM.ZH_CN]: zhCN } },
  },
);

export default {
  title: 'personal-center',
};
