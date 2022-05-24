// const TerserPlugin = require("terser-webpack-plugin")
// const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
  // productionSourceMap:false,
  configureWebpack: {
    // plugins: [
    //   new CompressionPlugin({
    //     test: /\.(js|css)(\?.*)?$/i,//需要压缩的文件正则
    //     threshold: 10240,//文件大小大于这个值时启用压缩
    //     deleteOriginalAssets: false//压缩后保留原文件
    //   })
    // ],  
    resolve: {
      alias: {
        "assets": "@/assets",
        "views": "@/views",
        "img": "@/assets/img",
        "components": "@/components"
      }
    },
    // optimization: {
    //   minimize: true,
    //   minimizer: [
    //     new TerserPlugin({
    //       terserOptions: {
    //         compress: {
    //           drop_console: true, // 默认false，设置为true, 则会删除所有console.* 相关的代码。
    //           pure_funcs: ["console.log"], // 单纯禁用console.log
    //         }
    //       }
    //     })
    //   ]
    // },
    externals: {
      Vue: "Vue",
      VueRouter: "VueRouter",
    }  
  }
}