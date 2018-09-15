const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules:[
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      // },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ],
  devServer: {
    host: '192.168.0.7',
    port: 3000,
    // respond to 404s with index.html
    historyApiFallback: true,
    // open the browser
    open: true
  }
};
