import generatePage from '@mobile-native/helpers/generate-page';
import { Language } from '@/constants/config';

import zhCN from '@/lang/zh-CN';
import zhTW from '@/lang/zh-TW';
import enUS from '@/lang/en-US';

import App from './home';

generatePage(<App />, {
  i18n: { messageDict: { [Language.ZH_TW]: zhTW, [Language.ZH_CN]: zhCN, [Language.EN_US]: enUS } },
});

export default {
  title: 'Mobile-Native',
};
