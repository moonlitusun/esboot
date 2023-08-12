import { Button } from 'antd-mobile';
import classNames from 'classnames';
import { useAppStore } from '@/model';
import { a, sayHi } from '@/helpers/multi-platforms';
import './home.scss';

const AppHome: React.FC = () => {
  const bears = useAppStore((state) => state.bears);
  const increase = useAppStore((state) => state.increase);

  sayHi();
  console.log(a);

  return (
    <div>
      <p styleName={classNames({ test: true })}>
        Bears:
        {' '}
        {bears}
      </p>

      <Button onClick={increase}>Add Bears</Button>
    </div>
  );
};

export default AppHome;
