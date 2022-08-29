var GLOBAL_CONFIG = {
  COMMON_SERVERS: {
    commonServer: 'http://10.10.11.79:6002',
    news: 'http://10.10.11.79:6002',
    openAccountsGuideUrl: 'http://10.10.11.115:9011',
  },
  QUOTES_CONFIG: {
    search: [2002, 2003, 2004, 2031, 8300, 8600, 47000, 48000, 49000, 50000, 51000, 52000, 53000, 54000, 1, 1001, 1008],
    blockidlists: [8400, 8500, 42000],
    SZMARKET: 2017, // 深股通市场
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
  },
  TRADE_CONFIG: {
    tableUpdateTime: 10000,
  },
  INFORMATION_CONFIG: {
    path: {
      infomationMessage: '/news-detail.html',
      infoDetailPage: '/info-detail.html',
    },
  },
  ENABLE_ENCRYPT: true,
  IMGS: {
    openAccountsGuide: 'http://10.10.11.147:3002/open.png', // 开户引导二维码
  },
};
