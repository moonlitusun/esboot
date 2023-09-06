/**
 * 多皮肤
 *
 */
export enum THEME {
  WHITE = 'white',
  BLACK = 'black',
}

export const THEME_MAP = {
  [THEME.WHITE]: 'white',
  [THEME.BLACK]: 'black',
};

export const DEFAULT_THEME = THEME_MAP[THEME.WHITE];

/**
 * 字体设置相关
 *
 */
export const FONT_SIZE = 14;
export const FONT_ADD_SIZE = 0;
export const FONT_WEIGHT = 'normal';
export const FONT_CFG_SIZE_DICT = {
  12: -2,
  13: -1,
  14: 0,
  15: 1,
  16: 2,
};
