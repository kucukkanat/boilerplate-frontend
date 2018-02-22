const gulp = require(`gulp`)
const inquirer = require(`inquirer`)
const consolidate = require(`gulp-consolidate`)
const rename = require(`gulp-rename`)

const createReducer = (actionName) => {
	const reducerName = `${actionName.toLowerCase()}`
	gulp.src(`./tasks/templates/redux.reducer.js`)
		.pipe(consolidate('mustache',{reducerName,actionName}))
		.pipe(rename(`index.js`))
		.pipe(gulp.dest(`src/javascript/reducers/${reducerName}`))
}

const createActionCreator = (done) => {
	inquirer.prompt([
		{
			'type' :    `input`,
			'name' :    `actionName`,
			'message' : `What is your action name ?`
		},
		{
			'type' :    `confirm`,
			'name' :    `hasReducer`,
			'message' : `Do you have a reducer for this action already?`
		}
	])
		.then(response => {
			gulp.src(`./tasks/templates/redux.action.js`)
				.pipe(consolidate('mustache',{'actionName':response.actionName}))
				.pipe(rename(`index.js`))
				.pipe(gulp.dest(`src/javascript/actions/${response.actionName}/`))
            
			// Create the correspondent reducer for the action
			if(!response.hasReducer) {
				createReducer(response.actionName)
			}
		})
		.catch(err => {
			console.log(err)
		})
}

module.exports = createActionCreator
