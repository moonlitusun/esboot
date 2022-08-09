interface ICodeStorageData {
  [prop: string]: any;
}

export default new (class CodeStorage {
  data: ICodeStorageData = {};

  language = '';

  token = '';

  // 加密token
  encryptionToken = '';

  // 交易偏好设置
  searchMarketPreference = 'HK';

  // 下单二次弹窗
  orderToConfirmByDialog = true;

  // 下单输入密码
  orderToConfirmByPwd = true;

  hasIdleAutoLockDuration = false;

  idleAutoLockDuration = '60m';

  quoteWsAddress = '';

  // 交易登录弹窗
  tradeLoginModal = false;

  set(key: string, data: any): void {
    this[key] = data;
  }

  get(key: string) {
    return this.data[key];
  }
})();
