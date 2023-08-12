export enum Language {
  ZH_CN = 'zh-CN',
  ZH_TW = 'zh-TW',
  EN_US = 'en-US'
}

export const DEFAULT_LAN = Language.ZH_CN;

// 多皮肤
export enum THEME {
  WHITE = 'light',
  BLACK = 'dark',
}

export const THEME_MAP = {
  [THEME.WHITE]: 'white',
  [THEME.BLACK]: 'black',
};

export const DEFAULT_THEME = THEME_MAP[THEME.WHITE];

// Quote Color
const GREEN_COLOR = '#2d9e00';
const RED_COLOR = '#f23030';

export interface QuoteColor {
  up: string;
  down: string;
}

export const QUOTE_COLOR_DICT: Record<'green' | 'red', QuoteColor> = {
  green: {
    up: GREEN_COLOR,
    down: RED_COLOR,
  },
  red: {
    up: RED_COLOR,
    down: GREEN_COLOR,
  },
};

export const DEFAULT_RISE_FALL_COLOR = QUOTE_COLOR_DICT.red;

// Font
export const FONT_SIZE = 14;
export const FONT_WEIGHT = 'normal';
export const FONT_CFG_SIZE_DICT = {
  12: -2,
  13: -1,
  14: 0,
  15: 1,
  16: 2,
};
