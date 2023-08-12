import bridge from './bridge';

const { getInstance } = bridge;

/**
 * 用户更新配置
 *
 */
export interface IUserConfigRaw {
  skin: string; // white black
  theme: string; // dark light red
  language: string; // zh-TW  zh-CN
  raise: string; // 红涨绿跌 还是绿涨红跌
  orderToConfirmByDialog: boolean;
  font: {
    additionalSize: number;
    weight: string;
  };
}

/**
 * pc修改完个人信息返回修改过后信息
 * @param {Function} handle 处理函数
 *
 */
export function updateUserInfo(handle: unknown): unknown {
  return getInstance().register('updateUserInfo', handle);
}

/**
 * pc换肤回调
 *
 */
export function updateUserConfig(handle: unknown): unknown {
  return getInstance().register('updateUserConfig', handle);
}
