'use strict';
const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS = new ExtractTextPlugin({filename:'css/styles.css',allChunks: true});

const config = {
    context: __dirname + '/app',
    entry: './index.js',
    resolve: {
        extensions: ['.js', '.less', '.png', '.jpg', '.json', '.html', '.eot', '.ttf', '.svg', '.woff', '.woff2'],
        modules: ['node_modules']
    },
    devServer: {
        port: 9099
    },
    output: {
        path: __dirname + '/build',
        filename: './build.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                loader: extractLESS.extract(['css-loader', 'less-loader' ])
            },
            {
                test: /\.(png|jpe?g)$/,
                loaders: ['file-loader?name=../img/[name].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loaders: ['file-loader?name=font/[name].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.json$/,
                loader: 'file-loader?name=./data/[name].json'
            },
            {
                test: /\.html$/,
                loader: 'file-loader?name=./templates/[name].html'
            }
        ]
    },
    plugins: [
        extractLESS
    ]
};
module.exports = config;