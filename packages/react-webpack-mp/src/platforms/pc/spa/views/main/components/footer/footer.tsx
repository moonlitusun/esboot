import React from 'react';
import { Button } from 'antd';

import './footer.scss';

// const nav = [
//   ['证券服务', '费率标准', '软件下载'],
//   ['关于我们', '关于中信', '联系我们'],
//   ['条款申明', '服务协议', '软件下载'],
// ];
const Footer: React.FC = () => (
  <footer>
    <div styleName="content">
      <div styleName="footer-left">
        <ul>
          <li>证券服务</li>
          <li>费率标准</li>
          <li>软件下载</li>
        </ul>
        <ul>
          <li>关于我们</li>
          <li>关于中信</li>
          <li>联系我们</li>
        </ul>
        <ul>
          <li>条款申明</li>
          <li>服务协议</li>
          <li>隐私政策</li>
        </ul>
        {/* {nav.map((item1) => (
          <ul>
            {item1.map((item2) => (
              <li>{item2}</li>
            ))}
          </ul>
        ))} */}
      </div>
      <div styleName="footer-rigth">
        <div styleName="footer-rigth-saoma">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div styleName="footer-rigth-phone">
          <p>400-880-888</p>
          <Button>线上咨询服务</Button>
          <span>交易日09:00-翌日05:00</span>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
