module.exports = {
  port: process.env.BRIDGE_MOCK_PORT || 3000,
  response: {
    url: (url, arg) => {
      console.log(`打开${url}?${JSON.stringify(arg)}`);
      return 'to url success';
    },
    view: (v, arg) => {
      console.log(`打开 ${v} 原生视图,传入参数${JSON.stringify(arg)}`);
      return 'open view';
    },
    msg: new Proxy(
      {
        userInfo: () => require('./export/GetUser'),
        getTradeConfig: () => {},
        sessionCodeExpire: (args) => {
          console.log(`登录超时: \n${JSON.stringify(args)}`);
        },
        getUserConfiguration: () => require('./export/SkinFaceConfig'),
        getServerConfig: () => {},
      },
      {
        get(target, name) {
          return name in target ? target[name] : (args) => console.log(`收到消息: ${name}, 尚未处理`);
        },
      },
    ),
  },
};
