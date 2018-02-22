const gulp = require('gulp')

// Builders
gulp.task('build',['build:js','build:scss','copy:assets'])
gulp.task('build:js',[],require('./tasks/buildjs.js'))
gulp.task('build:scss',[],require('./tasks/buildscss.js'))

// Watchers
gulp.task('watch',['watch:js','watch:scss','copy:assets'])
gulp.task('watch:js', ['build:js'], () => {
	gulp.watch('src/javascript/**/*.*',['build:js'])
})
gulp.task('watch:scss', ['build:scss'], () => {
	gulp.watch('src/scss/**/*.scss',['build:scss'])
})

// Individual Tasks

gulp.task('clean',[],require('./tasks/clean.js'))
gulp.task('eslint',[],require('./tasks/eslint.js'))
gulp.task('webserver',[],require('./tasks/webserver.js'))
gulp.task('copy:assets',[],require('./tasks/copyassets.js'))
gulp.task('bitballoon',[],require('./tasks/bitballoon.js'))
gulp.task('jsdoc',[],require('./tasks/jsdoc.js'))

// Boilerplate Tasks
gulp.task('analyze',[],require('./tasks/analyze.js'))
gulp.task('ensure',[],require('./tasks/ensure.js'))
gulp.task('new:component',[],require('./tasks/new.component.js'))
gulp.task('new:reducer',[],require('./tasks/new.reducer.js'))
gulp.task('new:shared',[],require('./tasks/new.shared.js'))
gulp.task('new:action',[],require('./tasks/new.action.js'))
gulp.task('new:view',[],require('./tasks/new.view.js'))

// Githooks
gulp.task('precommit',['eslint'])

// Development
gulp.task('dev', ['webserver','build','watch'])

gulp.task('default', ['dev'])
