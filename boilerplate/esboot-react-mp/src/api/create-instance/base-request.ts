import { initReqInfo } from '@dz-web/request';
import codeStorage from '@/helpers/code-storage';
// import logger from '@mobile/helpers/logger';
// import { userStatusChange, UserStatus } from '@/platforms/mobile/helpers/native/msg';
import staticConfig from '@/helpers/static-config';

const reqInfo = initReqInfo({
  defaultBaseUrl: staticConfig.getCommonServer(),
  defaultTimeout: 1000 * 6 * 3,
  reqInfo: codeStorage,
  // logger,
  responseInterceptors: (response: any) => {
    const { code, message } = response.data;
    // token 过期跳转到登录页
    if (code === 990151) {
      if (process.env.NODE_ENV === 'production') {
        // userStatusChange({
        //   userStatus: UserStatus.sessioncode_expired,
        //   message,
        // });
      } else {
        console.log(`%ctip: ${message}`, 'color:red');
      }
      return null;
    }
    return response.data;
  },
});

export const {
  baseReqInstance,
  baseReqInstanceByProxy,
  createReqInstance,
  createReqInstanceByProxy,
  userTokenProxyInfo,
} = reqInfo;
