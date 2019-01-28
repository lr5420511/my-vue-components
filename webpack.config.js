'use strict';

const { join } = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const WebpackCleanPlugin = require('clean-webpack-plugin');

const prod = /^production$/i.test(process.env.NODE_ENV);

const conf = module.exports = {
    entry: {
        root: ['babel-polyfill', './src/root.js']
    },
    output: {
        path: join(__dirname, 'build'),
        publicPath: '/build/',
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
    devServer: { historyApiFallback: { index: '/index.htm' } },
    module: {
        rules: [{
            test: /\.js$/i,
            loader: ['babel-loader'],
            exclude: '/node_modules/'
        },
        {
            test: /\.vue$/i,
            loader: ['vue-loader']
        },
        {
            test: /\.(le|c)ss$/i,
            loader: ['vue-style-loader', 'css-loader', 'less-loader']
        },
        {
            test: /\.(png|svg|ico|jpg|jpeg|gif)$/i,
            loader: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: prod ? 'resource/' : '',
                        name: '[name][hash].[ext]'
                    }
                }
            ]
        }
        ]
    },
    plugins: [new VueLoaderPlugin()]
};

if (prod) {
    delete conf.devtool;
    delete conf.devServer;
    conf.plugins.unshift(new WebpackCleanPlugin(['./build']));
}