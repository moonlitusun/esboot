import loadable from '@loadable/component';

const App = loadable(() => import('./app'));

export default {
  path: 'quote',
  element: <App />,
};
