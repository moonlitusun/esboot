var GLOBAL_CONFIG = {
  COMMON_SERVERS: {
    commonServer: 'http://10.10.11.101:6002',
    // commonServer: 'http://183.57.47.83:6009', // 测试环境[用于调试环境bug]
    filterStockServer: 'http://10.10.11.101:10020', // 选股器
    police: 'http://10.10.11.76:11001', // 日志系统
    tradeGateway: '/trading/trans/Handle.aspx',
    consultServer: 'http://10.10.11.76:9081', // 咨讯
    flowCapitalServer: 'http://10.10.11.76:12040', // 出入金
  },
  LIVE_CONFIG: {
    // 暂时使用股多多配置,等中薇具备了在修改
    // ck: '1131220920163065#demo',
    ck: '1193210116042665#dz', // 中薇的AppKey
  },
  QUOTES_CONFIG: {
    searchGlobal: [2002, 2003, 2004, 2031, 8300, 8600, 47000, 48000, 49000, 50000, 51000, 52000, 53000, 54000, 1, 1001, 1008],
    chartIndicatorsParamsList: {
      ma: [5, 10, 20, 60],
      ema: [5, 10, 20, 60, 120, 250],
      boll: [20, 2],
      sar: [4, 2, 20],
      sma: [5, 10, 20, 60, 120],
      vol: [5, 10],
      dma: [10, 50, 10],
      macd: [12, 26, 9],
      kdj: [9, 3, 3],
      rsi: [6, 12, 24],
    },
    blockidlists: [8400, 8500, 42000],
  },
  TRADE_CONFIG: {
    tableUpdateTime: 100000,
    /**
     * 交易首页 nav 导航栏展示入口
     * @params navList
     * @param type new 新开一个页面 | default 路由跳转
     */
    navList: [
      {
        label: '买入',
        icon: 'icon_nav_buy',
        url: 'trade.html#/buy',
        title: '下单买入',
        fullScreen: true,
      },
      {
        label: '卖出',
        icon: 'icon_nav_sell',
        url: 'trade.html#/sell',
        title: '下单卖出',
        fullScreen: true,
      },
      {
        label: '新股IPO',
        icon: 'icon_nav_ipo',
        native: true,
        url: 'ipo_center',
      },
      {
        label: '我的订单',
        icon: 'icon_nav_my_order',
        url: 'trade.html#/my-order',
        fullScreen: true,
      },
      {
        label: '资金存入',
        icon: 'icon_nav_capital_save',
        fullUrl: 'http://10.10.11.76:12040/#/home',
        url: '',
      },
      {
        label: '资产分析',
        icon: 'icon_nav_capital_analyze',
        url: '',
      },
      {
        label: '股票转入',
        icon: 'icon_nav_stock_in',
        url: '',
      },
      {
        label: '资金明细',
        icon: 'icon_nav_money_detail',
        url: '',
      },
      {
        label: '货币兑换',
        icon: 'icon_nav_money_change',
        url: '',
      },
      {
        label: '全部功能',
        icon: 'icon_nav_all',
        url: 'trade.html#/all',
      },
    ],
  },
  ENABLE_ENCRYPT: false,
  // 持仓组合配置
  COMBINATION_POSITION: {
    updateFrequency: 300000, // 组合列表更新频率, 轮询间隔（毫秒）
  },
  INFORMATION_MODULE: {
    HKETFMarket: { 2034: 2034, 2032: 2032 },
  },
};
