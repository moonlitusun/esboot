import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Badge, Dropdown, Menu } from 'antd';
import { SearchOutlined, DownloadOutlined, BellFilled } from '@ant-design/icons';

import './header.scss';

const menu1 = (
  <Menu
    items={[
      { label: '自选', key: '1' },
      { label: '市场', key: '2' },
    ]}
  />
);
const menu2 = (
  <Menu
    items={[
      { label: '快讯', key: '1' },
      { label: '港股', key: '2' },
      { label: '美股', key: '3' },
      { label: '自选', key: '4' },
    ]}
  />
);
const Header: React.FC = () => (
  <header>
    <div styleName="content">
      <div styleName="header-left">
        <img src="" alt="" />
        <h1>中信建投证券</h1>
        <Link to="quote">首页</Link>

        <Dropdown overlay={menu1} placement="bottomLeft">
          <a>行情</a>
        </Dropdown>

        <Link to="personal-center">基金</Link>

        <Link to="personal-center">交易</Link>
        <Dropdown overlay={menu2} placement="bottomLeft">
          <a>资讯</a>
        </Dropdown>
      </div>
      <div styleName="header-right">
        <Input
          type="text"
          placeholder="代码/简称/拼音/关键字"
          prefix={<SearchOutlined style={{ color: '#666', fontSize: '24px' }} />}
        />
        <Button>登录/注册</Button>
        <DownloadOutlined />
        <Badge dot>
          {/* <Avatar shape="square" size="large" icon={} /> */}
          <BellFilled />
        </Badge>
      </div>
    </div>
  </header>
);

export default Header;
