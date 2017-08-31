require('shelljs/global');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const baseConfig = require('./webpack.base.conf');
const util = require('./util');

module.exports = webpackMerge(baseConfig, {
  devtool: '#source-map',
  entry: {
    'ngx-smartadmin': './src/index.ts'
  },
  output: {
    path: util.root('lib'),
    filename: '[name].js',
    chunkFilename: '[id].js',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/forms',
    '@angular/animations'
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        LIB_VERSION: `'${require('../package.json').version}'`
      }
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ]
});
