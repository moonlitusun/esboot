const { ESBOOT_STATIC_CONFIG_PATH } = require('../../scripts/config');

module.exports = {
  copyFile: [
    ESBOOT_STATIC_CONFIG_PATH,
    './static',
    { from: './static/pc-native', to: './static' }
  ]
};
