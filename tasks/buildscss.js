const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const sassOptions = {
	'outputStyle' : process.env.NODE_ENV === 'production' ? 'compressed' : 'expanded'
}

module.exports = (done) => {
	if(process.env.NODE_ENV === 'production') {
		return gulp.src('./src/scss/app.scss')
			.pipe(sass(sassOptions).on('error', sass.logError))
			.pipe(gulp.dest('./dist'))
	} else{
		return gulp.src('./src/scss/app.scss')
			.pipe(sourcemaps.init())
			.pipe(sass(sassOptions).on('error', sass.logError))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('./dist'))
	}
}
