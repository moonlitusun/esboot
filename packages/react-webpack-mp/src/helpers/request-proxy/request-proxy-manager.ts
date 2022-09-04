import { RequestProxyScope } from '@/constants/request';

const requestProxyManager = new (class RequestProxyManager {
  dict = {};

  add(proxy, scope: string) {
    (this.dict[scope] || (this.dict[scope] = [])).push(proxy);
  }

  clear(scope: string): void {
    if (this.dict[scope]) {
      this.dict[scope].forEach((item) => item.clear());
    }
  }
})();

/** 重置proxy */
export function requestProxyManagerClear(keys = [] as RequestProxyScope[]) {
  if (keys.length) {
    keys.forEach((key) => {
      requestProxyManager.clear(key);
    });

    return;
  }
  requestProxyManager.clear(RequestProxyScope.DEFAULT);
}

export default requestProxyManager;
