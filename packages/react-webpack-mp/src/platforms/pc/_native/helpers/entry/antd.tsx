import { useContext } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { getDisplayName, userConfigContext } from './native';

export interface I18nOption {
  messageDict: any;
}

export default function wrapAntd(App: React.ReactNode): React.ReactNode {
  const InternalApp: React.FC = () => {
    const { language } = useContext<any>(userConfigContext);

    console.log(language, 'language');
    return (
      <ConfigProvider locale={zhCN}>
        {App}
      </ConfigProvider>
    );
  };

  InternalApp.displayName = `wrapAntd(${getDisplayName(App)})`;
  return <InternalApp />;
}
