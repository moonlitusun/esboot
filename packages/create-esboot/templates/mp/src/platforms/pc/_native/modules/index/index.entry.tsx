import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import generatePage from '@pc-native/helpers/generate-page';
import { LAN_ENUM } from '@/constants/config';

import zhCN from '@/lang/zh-CN';
import zhTW from '@/lang/zh-TW';
import enUS from '@/lang/en-US';

import App from './index';

generatePage(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  {
    i18n: { messageDict: { [LAN_ENUM.ZH_TW]: zhTW, [LAN_ENUM.ZH_CN]: zhCN, [LAN_ENUM.EN_US]: enUS } },
  },
);

export default {
  title: 'personal-center',
};
