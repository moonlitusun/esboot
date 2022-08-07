import bridge from './bridge';

const { getInstance } = bridge;

/**
 * 获取用户信息
 *
 */
export function getUserInfo(): Promise<any> {
  return getInstance()
    .call.msg('userInfo')
    .then((res) => res);
}

/**
 * 获取用户配置
 *
 */
export function getUserConfig(): Promise<any> {
  return getInstance().call.msg('getUserConfiguration');
}
