import React from 'react';
import { parseUrl } from '@dz-web/o-orange';
import { useSafeState, useGetState } from 'ahooks';

import codeStorage from '@pc-mpa/helpers/code-storage';

import {
  DEFAULT_THEME,
  THEME_MAP,
  RISE_FALL_COLORS_DICT,
  IRiseFallColor,
  DEFAULT_LAN,
  RISEFALLCOLOR,
  RISE_FALL_CLASS_DICT,
} from '@/constants/config';

import { FONT_ADD_SIZE, FONT_WEIGHT, FONT_CFG_SIZE_DICT, FONT_SIZE } from '@pc-mpa/constants/config';
import { queryUserConfig, queryUserInfo } from '../helpers/native/msg';
import { updateUserConfig, IUserConfigRaw, updateUserInfo } from '../helpers/native/register';

const { useEffect, useLayoutEffect } = React;
const { classList } = document.documentElement;
export interface IUserConfig {
  riseFallColor?: IRiseFallColor;
  language: string;
  theme?: string;
}

export interface IUserInfo {
  tradeNo?: string;
  orgCode: any;
  token: string;
  isLoginTrade: boolean;
  areaCode?: string;
  cusNo?: string;
  mobile?: string;
  nickname?: string;
  avatar?: string;
  userId?: number;
}

interface IUseInitNative {
  userConfig: IUserConfig;
  userInfo: IUserInfo;
}

export const defaultUserConfig = {
  language: DEFAULT_LAN,
};

export const defaultUserInfo = {
  orgCode: '',
  mobile: '',
  token: '',
  isLoginTrade: false,
};

const defaultFontCfg = {
  additionalSize: FONT_ADD_SIZE,
  weight: FONT_WEIGHT,
};

export default function useInitNative(): IUseInitNative {
  const [userConfig, setUserConfig, getUserConfig] = useGetState<IUserConfig>(defaultUserConfig);
  const [userInfo, setUserInfo] = useSafeState<IUserInfo>(defaultUserInfo);

  function updateUserConfigProxy(rawConfig: IUserConfigRaw): void {
    console.log(rawConfig, '----> config');

    const { theme: prevTheme } = getUserConfig() || {};
    const { raise, theme, language, font = defaultFontCfg } = rawConfig;
    const { additionalSize, weight } = font;

    const nextTheme = THEME_MAP[theme] || DEFAULT_THEME;

    const config = {
      theme: nextTheme,
      language,
      riseFallColor: RISE_FALL_COLORS_DICT[raise],
    };
    codeStorage.set('language', rawConfig.language);

    setUserConfig(config);

    if (prevTheme) classList.remove(prevTheme);
    classList.add(nextTheme);

    if (raise === RISEFALLCOLOR.GREEN) {
      classList.remove(RISE_FALL_CLASS_DICT[RISEFALLCOLOR.RED]);
    } else if (raise === RISEFALLCOLOR.RED) {
      classList.remove(RISE_FALL_CLASS_DICT[RISEFALLCOLOR.GREEN]);
    }

    classList.add(RISE_FALL_CLASS_DICT[raise]);

    const fontDictSize = FONT_CFG_SIZE_DICT[additionalSize] || 0;
    document.documentElement.style.fontSize = `${Math.max(FONT_SIZE + fontDictSize, 12)}px`;
    document.documentElement.style.fontWeight = weight;
  }

  function updateUserInfoProxy(res, isInit = false): void {
    Object.assign(res, { token: res.sessionCode });

    setUserInfo({ ...res });
    codeStorage.set('userInfo', res);
    codeStorage.set('token', res.sessionCode);
    codeStorage.set('stoken', res.stoken);
    codeStorage.set('tradeLoginModal', false);
  }

  useLayoutEffect(() => {
    const theme = parseUrl(window.location.hash, 'theme');

    if (theme) classList.add(theme);
  }, []);

  useEffect(() => {
    localStorage.removeItem('bcanStatus');

    queryUserConfig()
      .then((res) => {
        updateUserConfigProxy(res);
      })
      .catch((err) => console.log(`获取用户配置失败: ${err}`));

    updateUserConfig((res) => updateUserConfigProxy(res));

    queryUserInfo()
      .then((res) => updateUserInfoProxy(res, true))
      .catch((err) => console.log('err:', err));

    updateUserInfo((res) => updateUserInfoProxy(res));
  }, []);

  return { userConfig, userInfo };
}
