import { useContext } from 'react';
import { IntlProvider } from 'react-intl';
import { Language } from '@/constants/config';
import { getDisplayName, userConfigContext } from './native';

interface GenericObject {
  [prop: string]: string;
}

export interface I18nOption {
  messageDict: Record<Language, GenericObject>;
}

export default function wrapI18n(App: React.ReactNode, options: I18nOption): React.ReactNode {
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
