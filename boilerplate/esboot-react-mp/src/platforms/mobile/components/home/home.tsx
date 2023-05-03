import { Button } from 'antd-mobile';
import useHome, { IUseHomeProps } from '@/hooks/use-home';

import './home.scss';

const Home: React.FC<IUseHomeProps> = (props) => {
  const { platform } = props;
  const {
    sourceText,
    localState,
    setLocalState,
  } = useHome({
    platform,
  });

  return (
    <div styleName="home">
      <p>
        来源：
        {sourceText}
      </p>

      <p>
        组件名称：
        {Home.name}
      </p>

      <div>
        <p>
          Local State:
          {localState}
        </p>

        <Button onClick={() => setLocalState(performance.now())} color="success">Update local state</Button>
      </div>
    </div>
  );
};

export default Home;
