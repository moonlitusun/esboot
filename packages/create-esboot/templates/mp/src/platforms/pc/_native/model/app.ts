import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { DEFAULT_LAN, QuoteColorDirection } from '@/constants/config';

export interface UserConfig {
  riseFallColor?: QuoteColorDirection;
  raise?: string;
  language: string;
  theme?: string;
}

export interface UserInfo {
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

export const defaultUserInfo = {
  orgCode: '',
  mobile: '',
  token: '',
  isLoginTrade: false,
};

interface AppStore {
  sessionCode: string;
  setSessionCode: (sessionCode: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  userConfig: UserConfig;
  setUserConfig: (conf: UserConfig) => void;
  userInfo: UserInfo;
  setUserInfo: (info: UserInfo) => void;
}

const useAppStore = create<AppStore>()(
  immer((set) => ({
    language: DEFAULT_LAN,
    setLanguage: (language) => set((state) => {
      state.language = language;
    }),
    sessionCode: '',
    setSessionCode: (sessionCode) => set((state) => {
      state.sessionCode = sessionCode;
    }),
    userConfig: {
      language: DEFAULT_LAN,
    },
    setUserConfig: (conf) => set((state) => {
      state.userConfig = conf;
    }),
    userInfo: {
      orgCode: '',
      mobile: '',
      token: '',
      isLoginTrade: false,
    },
    setUserInfo: (info) => set((state) => {
      state.userInfo = info;
    }),
  })),
);

export { useAppStore };
