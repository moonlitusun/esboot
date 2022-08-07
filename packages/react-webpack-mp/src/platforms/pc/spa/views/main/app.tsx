import { Outlet } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import './app.scss';

const App: React.FC = () => (
  <div styleName="main">
    <Header />

    <Outlet />

    <Footer />
  </div>
);

export default App;
