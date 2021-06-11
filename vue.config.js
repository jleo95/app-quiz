const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
module.exports = {
  lintOnSave: false,
  publicPath: '/computer-quiz/',
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
  }
}
