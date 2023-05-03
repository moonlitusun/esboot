import { createContext } from 'react';

import
useInitNative,
{ IUserConfig, IUserInfo, defaultUserConfig, defaultUserInfo } from '@mobile/hooks/use-init-native';

export const userConfigContext = createContext<IUserConfig>(defaultUserConfig);
export const userInfoContext = createContext<IUserInfo>(defaultUserInfo);

export function getDisplayName(WrappedComponent: React.FC): string {
  return WrappedComponent.displayName || 'Component';
}

export default function wrapNative(App): React.ReactNode {
  const InternalApp = () => {
    const { userConfig, userInfo } = useInitNative();

    return (
      <userConfigContext.Provider value={userConfig}>
        <userInfoContext.Provider value={userInfo}>
          {App}
        </userInfoContext.Provider>
      </userConfigContext.Provider>
    );
  };

  InternalApp.displayName = `wrapNative(${getDisplayName(App)})`;
  return <InternalApp />;
}
