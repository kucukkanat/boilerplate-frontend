const gulp = require('gulp')
const bitballoon = require('bitballoon')

module.exports = function (done) {
	bitballoon.deploy({
		'access_token': '',
		'site_id': 'xxxxx.bitballoon.com',
		'dir': 'dist'
	}, (err, deploy) => {
		if (err) {
			throw(err)
		} else {
			done()
		}
	})
}