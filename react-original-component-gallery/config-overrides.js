const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#2fa7ff',
      '@link-color': '#2fa7ff',
      '@success-color': '#7cdb86',
      '@warning-color': '#fc8b37',
      '@error-color': '#ed253d',
      '@heading-color': '#4a505c',
      '@text-color': '#4a505c',
      // '@text-color-secondary': '#f4f5f8',
      '@border-radius-base': '5px',
      '@box-shadow-base': '7px 7px 20px 0 rgba(0, 0, 0, 0.08)'
    }
  })
);
