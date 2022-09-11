import { Button } from 'antd-mobile';
import { useAppDispatch, useAppSelector } from '@/helpers/react-redux';

import { incrementByAmount } from '@/model/app';
import checked from '@mobile/images/checked@2x.png';

const Demo: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((v) => v.app.value);

  const onClick = () => {
    dispatch(incrementByAmount(Math.random()));
  };

  return (
    <div>
      <p>
        图片：
        <img src={checked} alt="" />
      </p>

      <p>
        Redux值：
        {count}
      </p>

      <p>
        <Button onClick={onClick}>更新Redux值</Button>
      </p>
    </div>
  );
};

export default Demo;
