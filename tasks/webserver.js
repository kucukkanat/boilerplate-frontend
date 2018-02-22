const gulp = require('gulp')
const webserver = require('gulp-webserver')
const compression = require('compression')

module.exports = (done) => {
	gulp
		.src('./dist')
		.pipe(webserver({
			'livereload': true,
			'host': '0.0.0.0',
			'port': 8080,
			'directoryListing': false,
			'open': false,
			'https': false,
			'fallback': 'index.html',
			'middleware': process.env.NODE_ENV === 'production'
				? [compression()]
				: []
		}))
}