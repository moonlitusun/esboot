const { ESBOOT_STATIC_CONFIG_PATH } = require('../../scripts/config');

module.exports = {
  serverPort: 23579,
  copyFile: [
    ESBOOT_STATIC_CONFIG_PATH,
    { from: './static/mobile-mpa', to: './static' },
  ]
};
