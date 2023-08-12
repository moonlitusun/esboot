import { createContext, ReactNode } from 'react';

import useInitNative, {
  IUserConfig,
  IUserInfo,
  defaultUserConfig,
  defaultUserInfo,
} from '@pc-native/hooks-pure/use-init-native';

export const userConfigContext = createContext<IUserConfig>(defaultUserConfig);
export const userInfoContext = createContext<IUserInfo>(defaultUserInfo);

export function getDisplayName(WrappedComponent: ReactNode): string {
  return (WrappedComponent as any).displayName || 'Component';
}

export default function wrapNative(App): React.ReactNode {
  const InternalApp = () => {
    const { userConfig, userInfo } = useInitNative();

    return (
      <userConfigContext.Provider value={userConfig}>
        <userInfoContext.Provider value={userInfo}>{App}</userInfoContext.Provider>
      </userConfigContext.Provider>
    );
  };

  InternalApp.displayName = `wrapNative(${getDisplayName(App)})`;
  return <InternalApp />;
}
