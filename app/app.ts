/// <reference path="../typings/main.d.ts" />
import { config } from './config';
import './view2/view2';
import './view1/view1';
import './components/version/version';
module angularSeed {
'use strict';
  // Declare app level module which depends on views, and components
  angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
  ]).config(config)


}