const path = require('path');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.join(__dirname, 'dist');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  entry: ['@babel/polyfill', './src/index.tsx', 'webpack-plugin-serve/client'],
  output: {
    filename: 'index.js',
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new Serve({
      open: true,
      host: 'localhost',
      port: 3000,
      static: [outputPath]
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  watch: true
};
