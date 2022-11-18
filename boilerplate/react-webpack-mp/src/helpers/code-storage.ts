interface ICodeStorageData {
  [prop: string]: any;
}

export default new (class CodeStorage {
  data: ICodeStorageData = {};

  language = 'zh-CN';

  token = '';

  tradeToken = '';

  userInfo = {
    sessionCode: '',
    tradeToken: '',
    mobile: '',
  };

  set(key: string, data: any): void {
    this[key] = data;
  }

  get(key: string) {
    return this.data[key];
  }
})();
