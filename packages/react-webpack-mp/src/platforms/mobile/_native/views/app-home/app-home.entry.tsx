import generatePage from '@mobile/helpers/generate-page';
import { store } from '@/model/store';
import App from './app-home';
import zhHans from './lang/zh-hans';
import zhHant from './lang/zh-hant';

generatePage(<App />, {
  store,
  i18n: { messageDict: { 'zh-Hant': zhHant, 'zh-Hans': zhHans } },
});

export default {
  title: 'App-Home',
};
