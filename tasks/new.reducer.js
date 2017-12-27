const gulp = require(`gulp`)
const inquirer = require(`inquirer`)
const rename = require(`gulp-rename`)

module.exports = (done) => {
	const print = console.log
	print(`-------------------------- WARNING ! ---------------------------`)
	print(`THIS TASK IS DEPRECATED AND WILL BE REMOVED IN FURTHER VERSIONS!`)
	print(`Please consider using npm run gulp -- new:action`)
	print(`new:action task will create the regarding reducer for your action!`)
	print(`-------------------------- WARNING ! ---------------------------`)
}
