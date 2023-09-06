import { ReactNode, useEffect } from 'react';

import { updateUserConfig, updateUserInfo, getUserConfig, getUserInfo } from '@dz-web/bridge/pc';
import type { UserConfig } from '@dz-web/bridge/pc';

import { QUOTE_COLOR_DICT } from '@/constants/config';
import {
  FONT_WEIGHT, FONT_ADD_SIZE, FONT_CFG_SIZE_DICT, FONT_SIZE,
  THEME_MAP, DEFAULT_THEME,
} from '@pc/constants/config';

import { useAppStore } from '@pc-native/model/app';

export function getDisplayName(WrappedComponent: ReactNode): string {
  return (WrappedComponent as any).displayName || 'Component';
}

const defaultFontCfg = {
  additionalSize: FONT_ADD_SIZE,
  weight: FONT_WEIGHT,
};

const { classList } = document.documentElement;

export default function wrapNative(App): React.ReactNode {
  const InternalApp = () => {
    const setLanguage = useAppStore((state) => state.setLanguage);
    const setSessionCode = useAppStore((state) => state.setSessionCode);
    const userConfig = useAppStore((state) => state.userConfig);
    const setUserConfig = useAppStore((state) => state.setUserConfig);
    const setUserInfo = useAppStore((state) => state.setUserInfo);

    function _updateUserConfig(rawConfig: UserConfig): void {
      const { theme: prevTheme, raise: prevRaise } = userConfig;
      const { raise, theme, language, font = defaultFontCfg } = rawConfig;
      const { additionalSize, weight } = font;

      const nextTheme = THEME_MAP[theme] || DEFAULT_THEME;

      const config = {
        theme: nextTheme,
        language,
        riseFallColor: QUOTE_COLOR_DICT[raise],
      };

      setUserConfig(config);
      setLanguage(language);

      if (prevTheme) classList.remove(prevTheme);
      classList.add(nextTheme);

      if (prevRaise) classList.remove(prevRaise);
      classList.add(raise);

      const fontDictSize = FONT_CFG_SIZE_DICT[additionalSize] || 0;
      document.documentElement.style.fontSize = `${Math.max(FONT_SIZE + fontDictSize, 12)}px`;
      document.documentElement.style.fontWeight = weight;
    }

    function _updateUserInfo(res): void {
      Object.assign(res, { token: res.sessionCode });

      setSessionCode(res.sessionCode);
      setUserInfo({ ...res });
    }

    useEffect(() => {
      getUserConfig()
        .then((res) => {
          updateUserConfig(res);
        })
        .catch((err) => console.log(`获取用户配置失败: ${err}`));

      getUserInfo()
        .then((res) => _updateUserConfig(res))
        .catch((err) => console.log('err:', err));

      updateUserInfo((res) => _updateUserInfo(res));
    }, []);

    return App;
  };

  InternalApp.displayName = `wrapNative(${getDisplayName(App)})`;
  return <InternalApp />;
}
