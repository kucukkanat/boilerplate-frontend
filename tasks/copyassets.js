const gulp = require('gulp')
const consolidate = require('gulp-consolidate')

module.exports = (done) => {
	gulp
		.src('./src/index.html')
		.pipe(consolidate('mustache',{
			'environmentScript': process.env.NODE_ENV === 'production'
				? '/index.build.min.js'
				: '/index.build.js'
		}))
		.pipe(gulp.dest('./dist'))
	gulp
		.src('./src/assets/**')
		.pipe(gulp.dest('./dist'))
}