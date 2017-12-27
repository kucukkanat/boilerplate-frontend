const gulp = require('gulp')
const config = require('./jsdoc.config.json')
const jsdoc = require('gulp-jsdoc3')

module.exports = (done) => {
	gulp.src(['README.md', './src/**/*.js'], {'read': false})
		.pipe(jsdoc(config, done))
}