import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { store } from '@/model/store';

import '@/styles/index.scss';

import RouterApp from './router';

ReactDOM.createRoot(
  document.getElementById('root') as Element,
).render(<Provider store={store}>
  <StrictMode>
    <Router>
      <RouterApp />
    </Router>
  </StrictMode>
</Provider>);

export default {
  title: 'mobile-browser',
};
