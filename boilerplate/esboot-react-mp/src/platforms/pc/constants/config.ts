// 多皮肤
export enum THEME {
  WHITE = 'light',
  BLACK = 'dark'
}

export const THEME_MAP = {
  [THEME.WHITE]: 'white',
  [THEME.BLACK]: 'black',
};

export const DEFAULT_THEME = THEME_MAP[THEME.WHITE];

// 红涨绿跌切换
export type GREEN = 'green';
export type RED = 'red';
const GREEN_COLOR = '#2d9e00';
const RED_COLOR = '#f23030';

export interface IRiseFallColor {
  riseColor: string;
  fallColor: string;
}

interface IRiseFallColorsDict {
  green: IRiseFallColor;
  red: IRiseFallColor;
}

export const RISE_FALL_COLORS_DICT: IRiseFallColorsDict = {
  green: {
    riseColor: GREEN_COLOR,
    fallColor: RED_COLOR,
  },
  red: {
    riseColor: RED_COLOR,
    fallColor: GREEN_COLOR,
  },
};

export const DEFAULT_RISE_FALL_COLOR = RISE_FALL_COLORS_DICT.red;
