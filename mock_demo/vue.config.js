/*!
 * see https://cli.vuejs.org/zh/config/#vue-config-js
 */

module.exports = {
  devServer: {
    host: 'localhost',
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: false,
        changeOrigin: true
      }
    }
  },
  publicPath: './',
  lintOnSave: true,
  filenameHashing: false,
  runtimeCompiler: false,
  transpileDependencies: [ ]
}
