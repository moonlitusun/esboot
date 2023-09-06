import { IntlProvider } from 'react-intl';
import { Language } from '@/constants/config';
import { useAppStore } from '@mobile-native/model/app';
import { getDisplayName } from './native';

export interface I18nOption {
  messageDict: Record<Language, Record<string, string>>;
}

export default function wrapI18n(App: any, options: I18nOption): React.ReactNode {
  const InternalApp: React.FC = () => {
    const language = useAppStore((state) => state.language);

    return (
      <IntlProvider messages={options.messageDict[language]} locale={language}>
        {App}
      </IntlProvider>
    );
  };

  InternalApp.displayName = `wrapI18n(${getDisplayName(App)})`;
  return <InternalApp />;
}
