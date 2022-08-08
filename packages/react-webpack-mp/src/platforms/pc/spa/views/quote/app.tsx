import { Button } from 'antd';

import { useApp } from './hooks/use-app';

import './app.scss';

const App: React.FC = () => {
  const { count, setCount } = useApp();

  return (
    <div styleName="quote">
      行情
      {count}
      <Button onClick={() => setCount(Math.random())}>Setting Count</Button>
    </div>
  );
};

export default App;
