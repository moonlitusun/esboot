import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import '@/global-css/main.scss';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { store } from '@/model/store';

import RouterApp from './router';

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <Router>
        <RouterApp />
      </Router>
    </StrictMode>
  </Provider>,
  document.getElementById('root'),
);

export default {
  title: '中信建投证券',
};
