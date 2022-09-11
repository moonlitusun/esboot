import generatePage from '@mobile/helpers/generate-page';
import { store } from '@/model/store';
import { LAN_ENUM } from '@/constants/config';
import App from './home';

import zhCN from './lang/zh-CN';
import zhTW from './lang/zh-TW';
import enUS from './lang/en-US';

generatePage(<App />, {
  store,
  i18n: { messageDict: { [LAN_ENUM.ZH_TW]: zhTW, [LAN_ENUM.ZH_CN]: zhCN, [LAN_ENUM.EN_US]: enUS } },
});

export default {
  title: 'Mobile-Home',
};
