
const merge = require('webpack-merge');

const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./webpack.common.config.js');


module.exports = merge(commonConfig,{
	devtool: 'cheap-module-source-map',
	plugins: [
		new UglifyJSPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		//我修改了CleanWebpackPlugin的参数，不让他每次构建都删除api文件夹了。要不每次都得复制进去。麻烦~
		new CleanWebpackPlugin(['dist/*.*']),
		new ExtractTextPlugin({
			filename: '[name].[contenthash:5].css',
			allChunks: true
		})



	],
	module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: ["css-loader","postcss-loader"]
			})
		}]
	}
});