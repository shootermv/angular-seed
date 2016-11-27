import {appVersion} from './version-directive'
import {interpolate} from './interpolate-filter'
class version {

  'use strict';
  constructor(){
    angular.module('myApp.version.version-directive',[]).directive('appVersion', appVersion)
    angular.module('myApp.version.interpolate-filter', []).filter('interpolate',interpolate)

    angular.module('myApp.version', [
      'myApp.version.interpolate-filter',
      'myApp.version.version-directive'
    ])

    .value('version', '0.1');
  }
}
export default version;