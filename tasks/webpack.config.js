let path = require('path')
let webpack = require('webpack')

module.exports = {
	'target': 'web',
	'entry': {
		'index': './src/javascript/app.js'
	},
	'output': {
		'path': path.resolve(__dirname, '..','dist/'),
		'filename': '[name].build.js',
		'publicPath': './',
		'library': 'myApplication',
		'libraryTarget': 'umd'
	},
	'resolve': {},
	'module': {
		'rules': [
			{
				'test': /\.js$/,
				'exclude': /(node_modules|bower_components)/,
				'use': {
					'loader': 'babel-loader'
				}
			}
		]
	},
	'externals': {},
	'plugins': [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			},
		})
	]
}
