import { Outlet, Link } from 'react-router-dom';
import { Button, Input, Badge, Avatar, Menu, Dropdown } from 'antd';

import './app.scss';

const { Search } = Input;

const menu = (
  <Menu items={[
    { label: '菜单项一', key: '1' },
    { label: '菜单项一', key: '2' },
  ]}
  />
);

const App: React.FC = () => (
  <div styleName="main">
    <div styleName="header">
      <div styleName="header-left">
        <Avatar shape="square" size="large" />
        <h1>中信建投证券</h1>
        <Link to="quote">首页</Link>
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <Link to="quote">去行情</Link>
        </Dropdown>

        <Link to="quote">去行情</Link>
        <Link to="personal-center">去个人中心</Link>
        <Link to="trade">去交易</Link>
      </div>
      <div styleName="header-right">
        <Search type="text" />
        <Button>Antd</Button>
        <Avatar shape="square" size="large" />
        <Badge dot>
          <Avatar shape="square" size="large" />
        </Badge>
      </div>
    </div>

    <Outlet />
  </div>
);

export default App;
