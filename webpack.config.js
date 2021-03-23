const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js',
    // [name] 默认名字是 main开头 可以更改成其他名字
  },
  plugins: [new HtmlWebpackPlugin({
      title: '为什么会出错呢',
      template: 'src/assets/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

