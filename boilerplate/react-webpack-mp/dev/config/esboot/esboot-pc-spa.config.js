const { ESBOOT_STATIC_CONFIG_PATH } = require('../../scripts/config');

module.exports = {
  serverPort: 23573,
  copyFile: [
    ESBOOT_STATIC_CONFIG_PATH,
  ]
};
