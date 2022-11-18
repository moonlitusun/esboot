const { ESBOOT_STATIC_CONFIG_PATH } = require('../../scripts/config');

module.exports = {
  serverPort: 23572,
  copyFile: [
    ESBOOT_STATIC_CONFIG_PATH,
  ]
};
