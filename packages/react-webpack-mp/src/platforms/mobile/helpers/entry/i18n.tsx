import { useContext } from 'react';
import { IntlProvider } from 'react-intl';
import { getDisplayName, userConfigContext } from './native';

export interface I18nOption {
  messageDict: any;
}

export default function wrapI18n(App: any, options: I18nOption): React.ReactNode {
  const InternalApp: React.FC = () => {
    const { language } = useContext<any>(userConfigContext);

    return (
      <IntlProvider messages={options.messageDict[language]} locale={language}>
        {App}
      </IntlProvider>
    );
  };

  InternalApp.displayName = `wrapI18n(${getDisplayName(App)})`;
  return <InternalApp />;
}
