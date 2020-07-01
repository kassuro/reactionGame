const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
