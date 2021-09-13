










const path= require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:{
    index:'./src/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  // loader 
  module: {
    rules: [
      {
        test:/\.ts$/,
        use:'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 9000,
    open: true, // 自动打开浏览器
    hot: true, //开启HMR功能
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ],
  mode: 'development'
}


