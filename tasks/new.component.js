const gulp = require('gulp')
const inquirer = require('inquirer')
const consolidate = require('gulp-consolidate')
const rename = require('gulp-rename')

module.exports = (done) => {
	inquirer.prompt([
		{
			'type':'input',
			'name':'componentName',
			'message':'What is your component name ? (Component name should start with a Capital letter)'
		},
		{
			'type':'confirm',
			'name':'reduxEnabled',
			'message':'Enable redux for component ? '
		}
	])
		.then(response => {
			const initial = response.componentName[0]
			const uppercase = initial.toUpperCase() == initial
			let params = Object.assign({},response)
			params.componentName_lowercase = params.componentName.toLowerCase()
            
			if(!uppercase) throw new Error('Component name should start with an uppercase letter!')
            
			gulp.src('./tasks/templates/react.component.js')
				.pipe(consolidate('mustache',params))
				.pipe(rename(`index.js`))
				.pipe(gulp.dest(`src/javascript/components/${response.componentName}`))
		})
		.catch(e => {
			console.log(e)
		})
}