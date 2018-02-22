const webpackConfig = require('./tasks/webpack.config.js')
const path = require('path')
module.exports = {
	'title': 'Boilerplate',
	'components': './src/javascript/components/**/*.js',
	webpackConfig,
	'assetsDir': 'dist/',
	'serverPort': 3000,
	'serverHost': '0.0.0.0',
	'template': 'src/styleguide.template.html',
}