const webpackConfig = require('../webpack.config')

console.log(webpackConfig.module)
module.exports = {
    resolve: webpackConfig.resolve,
    module:webpackConfig.module,
}