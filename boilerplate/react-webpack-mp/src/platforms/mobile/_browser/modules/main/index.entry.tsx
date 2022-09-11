import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '@/model/store';

import '@/styles/index.scss';

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
  title: 'mobile-browser',
};
