const { ESBOOT_STATIC_CONFIG_PATH } = require('@dz-web-esboot/core/src/helpers/config');

module.exports = {
  copyFile: [
    ESBOOT_STATIC_CONFIG_PATH,
    './static',
    { from: './static/pc-native', to: './static' }
  ]
};
