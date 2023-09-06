import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { QuoteColor, DEFAULT_LAN } from '@/constants/config';

export interface UserConfig {
  quoteColor?: QuoteColor;
  theme?: string;
}

export interface UserInfo {
  sessionCode?: string;
}

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
    userConfig: {},
    setUserConfig: (conf) => set((state) => {
      state.userConfig = conf;
    }),
    userInfo: {},
    setUserInfo: (info) => set((state) => {
      state.userInfo = info;
    }),
  })),
);

export { useAppStore };
