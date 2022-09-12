import { Button } from 'antd';
import Home from '@mobile/components/home/home';
import { useBearStore } from '@/model';

useBearStore.getState().increase();
console.log(useBearStore.getState());

const AppHome: React.FC = () => {
  const bears = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increase);

  return (
    <div>
      <Home platform="mobile-native" />

      <p>Bears: {bears}</p>
      <Button onClick={increase}>Add Bears</Button>
    </div>
  );
};

export default AppHome;
