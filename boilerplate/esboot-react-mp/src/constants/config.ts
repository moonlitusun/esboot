import { UNIT_LAN } from '@dz-web/o-orange';

// 多语言
export const LAN_ENUM = UNIT_LAN;

export const DEFAULT_LAN = LAN_ENUM.ZH_TW;
export const DEFAULT_UPDOWNCOLOR = 'red';

// 多皮肤
export enum THEME {
  WHITE = 'white',
  BLACK = 'black',
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

export enum RISEFALLCOLOR {
  RED = 'red',
  GREEN = 'green',
}

export const RISE_FALL_CLASS_DICT = {
  [RISEFALLCOLOR.RED]: 'raise-red',
  [RISEFALLCOLOR.GREEN]: 'raise-green',
};

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

export const FONT_SIZE = 14;

export const FONT_CFG_SIZE_DICT = {
  12: -2,
  13: -1,
  14: 0,
  15: 1,
  16: 2,
};
