import {appVersion} from './version-directive'
import {interpolate} from './interpolate-filter'
import * as angular from "angular";
export const version = '0.1' 
    angular.module('myApp.version.version-directive',[]).directive('appVersion', appVersion)
    angular.module('myApp.version.interpolate-filter', []).filter('interpolate',interpolate)

    angular.module('myApp.version', [
      'myApp.version.interpolate-filter',
      'myApp.version.version-directive'
    ])

    .value('version', version);
  
