import { Outlet } from 'react-router-dom';

import './app.scss';

const App = () => (
  <div styleName="main">
    Mobile Browser Platform

    <Outlet />
  </div>
);

export default App;
