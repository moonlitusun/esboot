import { Outlet } from 'react-router-dom';

import './app.scss';

const App: React.FC = () => (
  <div styleName="main">
    SPA
    <Outlet />
  </div>
);

export default App;
