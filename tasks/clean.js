const gulp = require('gulp')
const clean = require('gulp-clean')

module.exports = (done) => {
    return gulp
        .src('./dist', {'read': false})
        .pipe(clean({'force': true}))
}