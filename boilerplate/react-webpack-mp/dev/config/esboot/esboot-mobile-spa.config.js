const { ESBOOT_STATIC_CONFIG_PATH } = require('../../scripts/config');

module.exports = {
  serverPort: 23571,
  copyFile: [
    ESBOOT_STATIC_CONFIG_PATH,
  ]
};
