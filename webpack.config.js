var webpack = require('webpack');
var path = require('path');
module.exports = {
    context: path.join( __dirname, '/app'),
    entry: ['app/app.ts'],
    output: {
        filename: 'app.js',
        path: '/app'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    module: {
        loaders: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.ts?$/, loader: 'ts-loader' }
        ]
    }
}