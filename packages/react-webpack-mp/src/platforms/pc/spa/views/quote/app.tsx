import { Button } from 'antd';
import { TinyArea } from '@ant-design/plots';
import QuoteChartInTrade from '@pc/containers/quote-chart-in-trade/quote-chart-in-trade';

import { useApp } from './hooks/use-app';

import './app.scss';

const App: React.FC = () => {
  const { count, setCount } = useApp();
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192,
  ];
  const config = {
    height: 100,
    tooltip: false,
    autoFit: false,
    data,
    smooth: true,
  };

  return (
    <div>
      行情
      {count}

      <div styleName="tiny-trend">
        <TinyArea {...config} />
      </div>

      <div styleName="qc-trade">
        <QuoteChartInTrade market={2002} code="00700" />
      </div>

      <Button onClick={() => setCount(Math.random())}>Setting Count</Button>
    </div>
  );
};

export default App;
