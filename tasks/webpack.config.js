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
	'resolve': {
		'alias': {
			'@components' : path.resolve(__dirname,'..','src/javascript/components'),
			'@reducers' : path.resolve(__dirname,'..','src/javascript/reducers'),
			'@shared' : path.resolve(__dirname,'..','src/javascript/shared'),
			'@actions' : path.resolve(__dirname,'..','src/javascript/actions'),
			'@views' : path.resolve(__dirname,'..','src/javascript/views'),
			'@root' : path.resolve(__dirname,'..','src/javascript/'),
		}
	},
	'module': {
		'rules': [
			{
				'test': /\.js$/,
				'exclude': /(node_modules|bower_components)/,
				'use': {
					'loader': 'babel-loader',
					'options': {
						'presets': ['env', 'react'],
						'plugins': [
							['styled-jsx/babel', {'sourceMaps': true, 'optimizeForSpeed': true}]
						]
					}
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
