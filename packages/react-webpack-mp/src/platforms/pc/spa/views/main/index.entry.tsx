import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import '@/global-css/main.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { QuoteClientProvider } from 'quote-client-react';
import { IntlProvider } from 'react-intl';
import { store } from '@/model/store';

import zhHans from '../../lang/zh-hans';
// import zhHant from '../../lang/zh-hant';

import '@pc/styles/global.scss';

import RouterApp from './router';

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <IntlProvider locale="zhHans" messages={zhHans}>
        <QuoteClientProvider
          wsServerAddress="ws://47.112.167.178:10001/socket"
          token="692005c1-d54f-4590-b5d5-7fbca7c025c2"
        >
          <Router>
            <RouterApp />
          </Router>
        </QuoteClientProvider>
      </IntlProvider>
    </StrictMode>
  </Provider>,
  document.getElementById('root'),
);

export default {
  title: '中信建投证券',
};
