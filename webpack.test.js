var loaders = require("./loaders");
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
    extensions: ['', '.ts', '.js', '.json']
  },
  resolveLoader: {
    modulesDirectories: ["node_modules"]
  },
  devtool: "source-map-inline",
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.jquery': 'jquery'
    })
  ],
  module: {
    loaders: loaders,
    postLoaders: [
      {
        test: /^((?!\.spec\.ts).)*.ts$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'istanbul-instrumenter'
      }
    ]
  },
  tslint: {
        emitErrors: true,
        failOnHint: true
  }
};

