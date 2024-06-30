// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false // 关闭eslint校验
// })

module.exports = {
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  lintOnSave: false,
  devServer:{
    open: true,
    // host:'192.168.10.108',
    port: 8080,
    proxy:{
      '/api':{
        target:'http://192.168.10.107:8081',
        ws:true,
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}
