var webpack = require('webpack');
var path = require('path');
module.exports = {
    context: path.join( __dirname, '/app'),		    
    entry: 'app.ts',		
    output: {	
      filename: 'app.js',	
      path: path.join( __dirname, '/app')		
    },		    
    resolve: {	
      root: path.join( __dirname, '/app'),	
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