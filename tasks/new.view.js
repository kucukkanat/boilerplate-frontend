const gulp = require('gulp')
const inquirer = require('inquirer')
const consolidate = require('gulp-consolidate')
const rename = require('gulp-rename')

module.exports = (done) => {
	inquirer.prompt([
		{
			'type':'input',
			'name':'viewName',
			'message':'What is your view name ? (View name should start with a Capital letter)'
		},
		{
			'type':'input',
			'name':'viewPath',
			'message':'Please enter the path for your view '
		},        
		{
			'type':'confirm',
			'name':'isPublic',
			'message':'Is this view public ? '
		}
	])
		.then(response => {
			const initial = response.viewName[0]
			const uppercase = initial.toUpperCase() == initial
			let params = Object.assign({},response)
			params.viewName_lowercase = params.viewName.toLowerCase()
		
			if(!uppercase) throw new Error('View name should start with an uppercase letter!')
			// Styling
			gulp.src('./tasks/templates/react.view.style.js')
				.pipe(consolidate('mustache',params))
				.pipe(rename(`style.js`))
				.pipe(gulp.dest(`src/javascript/views/${response.viewName}`))
                
			gulp.src('./tasks/templates/react.view.js')
				.pipe(consolidate('mustache',params))
				.pipe(rename(`index.js`))
				.pipe(gulp.dest(`src/javascript/views/${response.viewName}/`))
		})
		.catch(e => {
			console.log(e)
		})
}
