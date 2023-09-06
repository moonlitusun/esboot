/**
 * 多皮肤
 *
 */
export enum THEME {
  WHITE = 'light',
  BLACK = 'dark',
}

export const THEME_MAP = {
  [THEME.WHITE]: 'white',
  [THEME.BLACK]: 'black',
};

export const DEFAULT_THEME = THEME_MAP[THEME.WHITE];
