
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common.config.js');

const webpack = require('webpack');


const path=require("path");
module.exports=merge({
	customizeArray(a, b, key) {
		/*entry.app不合并，全替换*/
		if (key === 'entry.app') {
			return b;
		}
		return undefined;
	}
})(commonConfig,{
	// entry:[
	// 	'react-hot-loader/patch',
	// 	path.join(__dirname,'src/index.js')
	// ],
	entry: {
		app: [
			'babel-polyfill',
			'react-hot-loader/patch',
			path.join(__dirname, 'src/index.js')
		]
	},
	output:{
		// path:path.join(__dirname,'./dist'),
		// filename:'bundle.js'
		// filename: 'bundle.js',
		// chunkFilename: '[name].js'
		/*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
		filename: '[name].[hash].js',
		// chunkFilename: '[name].[chunkhash].js'
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
	devtool: 'inline-source-map',
	devServer:{
		port: 8080,
		contentBase: path.join(__dirname, './dist'),
		historyApiFallback: true,
		host: '0.0.0.0'
	},
	plugins:[
		new webpack.DefinePlugin({
			MOCK: true
		})
	],
	module:{
		rules:[
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader',"postcss-loader"]
			}
		]
	}

})
