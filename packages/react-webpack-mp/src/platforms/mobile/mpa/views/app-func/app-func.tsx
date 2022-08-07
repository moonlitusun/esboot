import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { userConfigContext } from '@mobile/helpers/entry/native';

import Func from '@mobile/components/func/func';

const AppFunc: React.FC = () => {
  const userConfig = useContext(userConfigContext);

  return (
    (
      <div>
        <p>
          当前语言:
          {' '}
          <FormattedMessage id="name" />
        </p>

        <p>
          当前皮肤：
          {userConfig.theme}
        </p>

        <Func />
      </div>
    )
  );
};

export default AppFunc;
