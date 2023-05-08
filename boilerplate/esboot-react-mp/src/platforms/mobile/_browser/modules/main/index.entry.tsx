import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';

import '@/styles/index.scss';

import RouterApp from './router';

ReactDOM.createRoot(
  document.getElementById('root') as Element,
).render(
  <StrictMode>
    <Router>
      <RouterApp />
    </Router>
  </StrictMode>,
);

export default {
  title: 'mobile-browser',
};
