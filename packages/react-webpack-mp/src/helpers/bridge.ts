interface IInitBridgeReturn {
  getInstance: () => any;
  ready: (fn: any) => void;
}

export function initBridge(platform: 'mock' | 'app' | 'pc'): IInitBridgeReturn {
  let dz = { call: {}, onReady: Promise.resolve() };

  if (platform === 'mock') {
    dz = require('@dz-web/bridge/dist/cjs/mock');
  } else if (platform === 'app') {
    dz = require('@dz-web/bridge');
  } else {
    dz = require('@dz-web/bridge/dist/cjs/pc');
  }

  return {
    getInstance: () => dz,
    ready(fn) {
      dz.onReady.then(fn);
    },
  };
}
