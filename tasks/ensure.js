const gulp = require('gulp')
const fs = require('fs-extra')
const notify = require('gulp-notify')
const rename = require('gulp-rename')

const folders = [
	'./src/javascript/components',
	'./src/javascript/reducers',
	'./src/javascript/shared',
	'./src/javascript/views',
	'./src/scss/components/',
	'./src/scss/settings/',
	'./src/scss/mixins/',
	'./src/scss/utils/',
    
]
const files = [
	'./src/javascript/components/index.js',
	'./src/javascript/reducers/index.js',
	'./src/javascript/shared/index.js',    
	'./src/javascript/views/index.js',    
	'./src/javascript/routes.js',
	'./src/javascript/store.js',
	'./src/javascript/app.js',
	'./src/index.html',    
	'./src/scss/app.scss',
	'./tasks/webpack.config.js'
]
module.exports = function (done) {
	folders.forEach(path => {
		fs.ensureDir(path, err => {
			console.log(`${path} ensured!`)
		})
	})
	files.forEach(path => {
		fs.ensureFile(path, err => {
			console.log(`${path} ensured!`)
		})
	})
	// Ensure store file
	return gulp.src('./tasks/templates/redux.store.js')
		.pipe(rename('store.js'))
		.pipe(gulp.dest('src/javascript/'))
		.pipe(notify({
			'title':'ensure',
			'message': `Ensured all the files and folders`
		}))
}
