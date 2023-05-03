import { Outlet } from 'react-router-dom';

import './app.scss';

const App: React.FC = () => (
  <div styleName="main">
    spa23

    <Outlet />
  </div>
);

export default App;
