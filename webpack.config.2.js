let path = require('path');
//let ExtractTextPlugin = require("extract-text-webpack-plugin");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const WebpackMd5Hash = require("webpack-md5-hash");
const CleanWebpackPlugin = require("clean-webpack-plugin");

let conf = {
	entry: { main: "./src/index.js" },
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: "[name].[hash].js",
		// publicPath: '/dist'
	},
	devServer: {
    contentBase: "./dist",
    port:8080
  },
	module: {
		rules: [
		  {
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		  },
		  {
			test: /\.sass$/,
			use: [
				"style-loader",
				MiniCssExtractPlugin.loader,
			  {
				loader: "css-loader",
				options: { sourceMap: true }
			  },
			  {
				loader: "postcss-loader",
				options: { sourceMap: true, config: { path: 'src/postcss.config.js' } }
			  },
			  {
				loader: "sass-loader",
				options: { sourceMap: true }
			  }
			]
		  },
		  {
			test: /\.css$/,
			use: [
				"style-loader",
				MiniCssExtractPlugin.loader,
			  {
				loader: "css-loader",
				options: { sourceMap: true }
			  },
			  {
				loader: "postcss-loader",
				options: { sourceMap: true, config: { path: 'src/postcss.config.js' } }
			  }
			]
		  },
		  {
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			exclude: /node_modules/,
			loader: 'url-loader',
			options: { 
				outputPath: 'fonts/',
				name: '[name].[ext]',
				limit: 1000
				}
		  },
		  {
	        test: /\.(gif|png|jpe?g|svg)$/i,
			  use: [
				'file-loader',
				{
				  loader: 'image-webpack-loader',
				  options: {
						bypassOnDebug: true
				  },
				},
			  ],
					},
		//	{ test: /\.html$/, loader: 'html-loader' },
					
		]
	},
	plugins: [
		//new ExtractTextPlugin("styles.css"),
		new CleanWebpackPlugin("dist", {}),
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html"
    }),
	]
};

module.exports = conf;