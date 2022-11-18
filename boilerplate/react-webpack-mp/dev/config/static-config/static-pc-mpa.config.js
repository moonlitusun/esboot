var GLOBAL_CONFIG = {
  COMMON_SERVERS: {
    commonServer: 'http://10.10.11.82:6002',
    news: 'http://10.10.11.47:6002',
  },
  // ENABLE_ENCRYPT: true,
};

var QUOTES_CONFIG = {
  search: [2002, 2003, 2004, 2031, 8300, 8600, 47000, 48000, 49000, 50000, 51000, 52000, 53000, 54000, 1, 1001, 1008],
  blockidlists: [8400, 8500, 42000],
  SZMARKET: 2017, // 深股通市场
};

/**
 * 涨跌分布，南向资金，北向资金
 *
 */
var WS_ADDRESS = {
  UP_DOWN_DISTRIBUTE: 'ws://47.107.33.136:8219/socket', // 涨跌分布接口 14.152.90.159 103.253.9.240
  NORTH_BOUND: 'ws://47.107.33.136:8219/socket', // 生成环境--- 北向资金+市场温度
};

// 北向资金 配置
var NB_bound = {
  SZMARKET: 2017, // 深股通市场
  HGMARKET: 2017, // 沪股通市场
  SZCODE: 'SZHK05', // 深股通商品
  HGCODE: 'SHHK05', // 沪股通商品
};

/**
 * 南向资金配置
 */
var SB_bound = {
  SZMARKET: 2017, // 深股通市场
  HGMARKET: 2017, // 沪股通市场
  SZHKCODE: 'SZHK04', // 深股通商品
  SHHKCODE: 'SHHK04', // 沪股通商品
};

// 南北向资金marketID--南北向资金二级页面
var ntB_bound = {
  promiseHG: 8400, // 沪股通商品
  promiseSG: 8500, // 深股通商品
  promiseGGH: 8300, // 港股通沪商品
  promiseGGS: 8600, // 港股通深商品
};

var TRADE_CONFIG = {
  tableUpdateTime: 10000,
};
