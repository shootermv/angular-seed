/// <reference path="../typings/main.d.ts" />
import { config } from './config';
import view2 from './view2/view2';
import view1 from './view1/view1';
import version from './components/version/version';
module angularSeed {
'use strict';
  new view2();
  new view1();
  new version();
  // Declare app level module which depends on views, and components
  angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
  ]).config(config)


}