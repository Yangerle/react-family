
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = require('webpack');

const path=require("path");
module.exports={
	// entry:[
	// 	'react-hot-loader/patch',
	// 	path.join(__dirname,'src/index.js')
	// ],
	entry: {
		app: [
			'react-hot-loader/patch',
			path.join(__dirname, 'src/index.js')
		],
		vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
	},
	output:{
		path:path.join(__dirname,'./dist'),
		// filename:'bundle.js'
		// filename: 'bundle.js',
		// chunkFilename: '[name].js'
		filename: '[name].[hash].js',//这里应该用chunkhash替换hash
		chunkFilename: '[name].[chunkhash].js'
	},
	resolve: {
		alias: {
			pages: path.join(__dirname, 'src/pages'),
			component: path.join(__dirname, 'src/component'),
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
		/*plugins*/
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		})
	],
	devtool: 'inline-source-map',
	devServer:{
		port: 8080,
		contentBase: path.join(__dirname, './dist'),
		historyApiFallback: true,
		host: '0.0.0.0'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				use:['babel-loader?cacheDirectory=true'],
				include:path.join(__dirname,'src')
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192
					}
				}]
			}
		]
	}

}
