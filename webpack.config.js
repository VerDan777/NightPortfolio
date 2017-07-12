const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path:path.resolve(__dirname,'dist/js'),
        filename: 'app.js'
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
}