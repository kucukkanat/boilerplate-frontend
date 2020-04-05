const path = require('path');

module.exports = {
    mode: "production",

    entry: "./app/entry",



    output: {

        path: path.resolve(__dirname, "dist"),


        filename: "bundle.js",

        publicPath: "/assets/",

        library: "MyLibrary",

        libraryTarget: "umd",

        /* Advanced output configuration (click to show) */
        /* Expert output configuration (on own risk) */
    },
    module: {

        rules: [

            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "app")
                ],
                exclude: [
                    path.resolve(__dirname, "app/demo-files")
                ],







                issuer: { test, include, exclude },

                enforce: "pre",
                enforce: "post",

                loader: "babel-loader",

                options: {
                    presets: ["es2015"]
                },

            },
            {
                test: /\.html$/,
                use: [

                    "htmllint-loader",
                    {
                        loader: "html-loader",
                        options: {
                        }
                    }
                ]
            },

        ],
        /* Advanced module configuration (click to show) */
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
    },
    performance: {
        hints: "warning",
        maxAssetSize: 200000,
        maxEntrypointSize: 400000,
    },
    devtool: "source-map",
    stats: "errors-only",
    devServer: {
        proxy: {
            '/api': 'http://localhost:3000'
        },
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        historyApiFallback: true,
        hot: true,
        https: true,
        noInfo: true,
        port: 8080,
        host: '0.0.0.0'
    },
    plugins: [

    ],

}
