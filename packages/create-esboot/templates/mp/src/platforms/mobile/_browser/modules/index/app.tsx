import { Outlet } from 'react-router-dom';
import { FONT_SIZE } from '@/constants/config';

import './app.scss';

const App = () => (
  <div styleName="main">
    Mobile Browser Platform
    {FONT_SIZE}
    <Outlet />
  </div>
);

export default App;
