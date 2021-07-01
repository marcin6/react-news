const path = require('path');
const currTask = process.env.npm_lifecycle_event;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin')

const config = {
    entry: './app/app.js',
    output: {
        filename: 'myBundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({template: './app/index.html'})],
    mode: 'development',
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    mode: "development"
}

if (currTask == "build") {
    config.mode = "production"
    config.module.rules[0].use[0] = MiniCssExtractPlugin.loader
    config.plugins.push(new MiniCssExtractPlugin({filename: 'main.[hash].css'}), new CleanWebpackPlugin(), new WebpackManifestPlugin())
}

module.exports = config

