const Visualizer = require(`webpack-visualizer-plugin`)
const webpackConfig = require(`./webpack.config`)
const webpack = require(`webpack`)
webpackConfig.plugins.push(new Visualizer({
	"filename" : `./statistics.html`
}))

module.exports = (done) => {
	webpack(webpackConfig, (err, stats) => {
		if(err) console.log(err)
		done()
	})
}
