const path = require('path')


// 判断开发环境
// const isProduction = process.env.NODE_ENV === 'production'

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 根据环境设置根路径
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  publicPath: BASE_URL,
  devServer: {
    host: '0.0.0.0',
    port: 2020, // 端口号
    hotOnly: false,
    open: true, // 配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://dev.jp.iamlosing.me', // 测试
        changeOrigin: true
      }
    }
  },
  // eslint 检查
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('~', resolve('src')) // key,value自行定义，比如.set('~c', resolve('src/components'))
      .set('~c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false
  // webpack配置
  // configureWebpack: config => {
  //   // 开启gzip压缩
  //   if (isProduction) {
  //     // eslint-disable-next-line no-undef
  //     config.plugins.push(new CompressionWebpackPlugin({
  //       algorithm: 'gzip',
  //       test: /\.js$|\.html$|\.json$|\.css/,
  //       threshold: 10240,
  //       minRatio: 0.8
  //     }))
  //   }
  // config.externals = {
  //   'vue': 'Vue',
  //   'vue-router': 'VueRouter',
  //   'vuex': 'Vuex',
  //   'axios': 'axios'
  // }
  // }
}
