import { IntlProvider } from 'react-intl';
import { useAppStore } from '@pc-native/model/app';
import { Language } from '@/constants/config';
import { getDisplayName } from './native';

interface GenericObject {
  [prop: string]: string;
}

export interface I18nOption {
  messageDict: Record<Language, GenericObject>;
}

export default function wrapI18n(App: React.ReactNode, options: I18nOption): React.ReactNode {
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
