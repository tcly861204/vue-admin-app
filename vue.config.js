const path = require('path')
const os = require('os')
function resolve (dir) {
  return path.join(__dirname, dir)
}
const port = 8089
const isDev = process.env.NODE_ENV === 'development'
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: isDev,
  productionSourceMap: false,
  devServer: {
    port,
    compress: true,
    open: true,
    host: '0.0.0.0',
    hot: false,
    inline: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: process.env.VUE_APP_URL,
        changeOrigin: true, // 是否改变域名
        ws: true
      }
    }
  },
  parallel: require('os').cpus().length > 1,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    performance: {
      hints: 'warning',
      // 入口起点的最大体积
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积
      maxAssetSize: 30000000,
      // 只给出 js | css 文件的性能提示
      assetFilter: assetFilename => {
        return assetFilename.endsWith('.js') || assetFilename.endsWith('.css')
      }
    }
  },
  chainWebpack (config) {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    // 开发环境
    config
      .when(isDev, config =>
        config.devtool('cheap-source-map')
      )
    // 生产环境
    config
      .when(!isDev, config => {
        config.optimization.splitChunks({
          chunks: 'all',
          cacheGroups: {
            libs: {
              name: 'chunk-libs',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              chunks: 'initial'
            },
            elementUI: {
              name: 'chunk-element',
              priority: 20, // 打包权重
              test: /[\\/]node_modules[\\/]_?element-ui(.*)/
            },
            commons: {
              name: 'chunk-commons',
              test: resolve('src/components'),
              minChunks: 3,
              priority: 5,
              reuseExistingChunk: true
            }
          }
        })
      })
  }
}
