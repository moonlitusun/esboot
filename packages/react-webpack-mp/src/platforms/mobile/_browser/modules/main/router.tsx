import { useRoutes } from 'react-router-dom';
import loadable from '@loadable/component';

import App from './app';

import personalCenterRouters from '../personal-center/router';
import quoteRouters from '../quote/router';
import tradeQuotes from '../trade/router';

const NotFound = loadable(() => import('../misc/not-found/not-found'));

export default function RouterApp(): React.ReactElement | null {
  const element = useRoutes([
    {
      path: '/',
      element: <App />,
      children: [
        personalCenterRouters,
        quoteRouters,
        tradeQuotes,
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return element;
}
