'use strict';
const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS = new ExtractTextPlugin({filename:'css/styles.css',allChunks: true});

const config = {
    context: __dirname + '/app',
    entry: './index.js',
    resolve: {
        extensions: ['.js', '.less'],
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
            }
        ]
    },
    plugins: [
        extractLESS
    ]
};
module.exports = config;