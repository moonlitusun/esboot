import { useRoutes } from 'react-router-dom';
import loadable from '@loadable/component';

import App from './app';

import demoRouters from '../demo/router';

const NotFound = loadable(() => import('../misc/not-found/not-found'));

export default function RouterApp(): React.ReactElement | null {
  const element = useRoutes([
    {
      path: '/',
      element: <App />,
      children: [demoRouters],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return element;
}
