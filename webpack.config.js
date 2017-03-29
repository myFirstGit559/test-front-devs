'use strict';
const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS = new ExtractTextPlugin({filename:'css/styles.css',allChunks: true});

const config = {
    context: __dirname + '/app',
    entry: './index.js',
    resolve: {
        extensions: ['.js', '.less', '.png', '.jpg', '.json'],
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
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loaders: ['file-loader?name=./img/[name].[ext]',
                          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.json$/,
                loader: 'file-loader?name=./data/[name].json'
            }
        ]
    },
    plugins: [
        extractLESS
    ]
};
module.exports = config;