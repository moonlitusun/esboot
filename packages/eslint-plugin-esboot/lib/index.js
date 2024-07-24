module.exports = {
  rules: {
    'no-import-other-platform': require('./no-import-other-platform'),
  },
  configs: {
    recommended: {
      plugins: ['@dz-web/esboot'],
      rules: {
        '@dz-web/esboot/no-import-other-platform': 'error',
      },
    },
  },
};
