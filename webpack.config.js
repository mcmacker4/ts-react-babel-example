const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = env => {

    var plugins = [
        new HtmlPlugin({
            title: "Example App",
            template: "index.html",
            filename: "index.html"
        })
    ]

    if(env.production) {
        const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
        plugins.push(
            new UglifyJsPlugin()
        )
    }

    return {
        entry: [
            path.resolve(__dirname, 'src', 'index.tsx')
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[hash].js'
        },
        mode: env.production ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'babel-loader!ts-loader'
                },
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    loader: 'source-map-loader'
                },
                {
                    test: /\.less$/,
                    loader: 'style-loader!css-loader!less-loader'
                },
                {
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
                },
                {
                    test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "url-loader"
                },
                {
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: "file-loader"
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', '*']
        },
        devtool: env.production ? false : 'source-map',
        plugins: plugins
    }
}