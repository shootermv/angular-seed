//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'components/**/*.js',
      'view*/**/*.js',
      '**/*.html'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor' 
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },


   //for load templates
    preprocessors: {
       './**/*.html': ['ng-html2js']
    },
  
    ngHtml2JsPreprocessor: {
       // setting this option will create only a single module that contains templates
       // from all the files, so you can load them all with module('foo')
      moduleName: 'templates'
    }

  });
};
