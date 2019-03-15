const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');



module.exports = {
	entry: {
		app: [
			"babel-polyfill",
			path.join(__dirname, 'src/index.js')
		],
		vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
	},
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js',
		publicPath : '/'
	},
	resolve: {
		alias: {
			pages: path.join(__dirname, 'src/pages'),
			components: path.join(__dirname, 'src/components'),
			router: path.join(__dirname, 'src/router'),
			// redux: path.join(__dirname, 'src/redux')//不能直接使用别名redux,因为‘import {createStore} from 'redux'’语句在webapck编译的时候碰到redux都去src/redux去找了，找不着，问题就出现了
			reduxs: path.join(__dirname, 'src/redux')
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, 'src/index.html')
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'runtime'
		}),
		new webpack.HashedModuleIdsPlugin()
	],
	module: {
		rules: [{
			test: /\.js$/,
			use: ['babel-loader'],
			include: path.join(__dirname, 'src')
		},{
			test: /\.(png|jpg|gif)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 8192
				}
			}]
		}]
	}
};