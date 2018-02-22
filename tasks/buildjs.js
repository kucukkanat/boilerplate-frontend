const gulp = require('gulp')
const webpack = require('webpack-stream')
const webpackConfig = require('./webpack.config.js')
const minify = require('gulp-minify')
const notify = require('gulp-notify')

webpackConfig.devtool = process.env.NODE_ENV !== 'production' ? 'source-map' : ''

module.exports = (done) => {
	let task = gulp.src('')
		.pipe(webpack(webpackConfig))

	if(process.env.NODE_ENV === 'production') {
		task = task.pipe(minify({
			'ext':{
				'src':'.js',
				'min':'.min.js'
			}
		}))
	}

	task = task.pipe(gulp.dest('dist/'))
		.pipe(notify({
			'title':'build:javascript',
			'message': `Javascript built! Environment : ${process.env.NODE_ENV === 'production' ? 'production' : 'development'}`
		}))
	return task
}
