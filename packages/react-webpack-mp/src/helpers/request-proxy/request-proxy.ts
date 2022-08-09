import { AxiosInstance } from 'axios';
import requestProxyManager from './request-proxy-manager';

export default class RequestProxy {
  reqQueue: any[] = [];

  requestKeys = ['get', 'post', 'request'];

  constructor(scope: string) {
    requestProxyManager.add(this, scope);
  }

  proxy(service: AxiosInstance, checkHandle: () => boolean): AxiosInstance {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let instance: any = this;

    const reqProxy = new Proxy(service, {
      get(target, prop) {
        if (checkHandle() || instance.requestKeys.indexOf(prop as string) === -1) {
          return target[prop];
        }

        let resolveQuote;
        let args;
        const promise = new Promise((resolve) => {
          resolveQuote = resolve;
        });

        instance.reqQueue.push(() => {
          resolveQuote(target[prop](...args));
          resolveQuote = null;
          args = null;
        });

        return (...v) => {
          args = v;
          return promise;
        };
      },
    });

    Promise.resolve(() => {
      instance = null;
    });
    return reqProxy;
  }

  clear(): void {
    this.reqQueue.forEach((item) => item());
    this.reqQueue.length = 0;
  }
}
