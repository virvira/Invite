const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = function(){
  return {
    mode: 'development',
    entry: [
      './src/index.js'
    ],
    // entry: { main: "./src/index.js" },
    watch: true,
    watchOptions: {
      aggregateTimeout: 300, // Process all changes which happened in this time into one rebuild
      poll: 1000, // Check for changes every second,
      ignored: /node_modules/,
      // ignored: [
      //   '**/*.scss', '/node_modules/'
      // ]
    },
    devtool: 'source-maps',
    devServer: {
      contentBase: path.join(__dirname, 'src'),
      watchContentBase: true,
      hot: true,
      open: true,
      inline: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack starter project',
        template: path.resolve('./src/index.html')
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.sass$/,
          use: [
            'style-loader',
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: './img',
                name: "[name].[ext]",
              },
            },
          ]
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
          }
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          exclude: /node_modules/,
          loader: 'url-loader',
          options: { 
            outputPath: 'src/fonts/',
            name: '[name].[ext]',
            limit: 1000
            }
          },
      ]
    },
    // plugins: [
    //   new HtmlWebpackPlugin({
    //     inject: false,
    //     hash: true,
    //     template: "./src/index.html",
    //     filename: "index.html"
    //   }),
    // ]
    
  };
}