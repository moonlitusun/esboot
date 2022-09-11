import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { getDisplayName } from './native';

export interface I18nOption {
  messageDict: any;
}

export default function wrapAntd(App): React.ReactNode {
  const InternalApp: React.FC = () => {
    return (
      <ConfigProvider locale={zhCN}>
        {App}
      </ConfigProvider>
    );
  };

  InternalApp.displayName = `wrapAntd(${getDisplayName(App)})`;
  return <InternalApp />;
}
