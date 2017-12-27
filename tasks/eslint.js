const gulp = require('gulp')
const eslint = require('gulp-eslint')
module.exports = function () {
	return gulp
		.src(['src/javascript/**/*.js', '!node_modules/**'])
		.pipe(eslint())
		.pipe(eslint.formatEach('compact',process.stderr))
		.pipe(eslint.failAfterError())
}
