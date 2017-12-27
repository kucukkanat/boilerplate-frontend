const gulp = require('gulp')
const inquirer = require('inquirer')
const consolidate = require('gulp-consolidate')
const rename = require('gulp-rename')

module.exports = (done) => {
	inquirer.prompt([
		{
			'type':'input',
			'name':'reducerName',
			'message':'What is your shared lib ? (Shared library name should start with a lowercase letter)'
		}
	])
		.then(response => {
			const initial = response.reducerName[0]
			const lowercase = initial.toLowerCase() == initial
			if(!lowercase) throw new Error('Shared lib name should start with an lowercase letter!')
			gulp.src('./tasks/templates/shared.js')
				.pipe(consolidate('mustache',response))
				.pipe(rename(`${response.reducerName}.js`))
				.pipe(gulp.dest(`src/javascript/shared/`))
		})
		.catch(e => {
			console.log(e)
		})
}