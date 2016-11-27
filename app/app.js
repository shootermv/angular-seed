/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/// <reference path="../typings/main.d.ts" />
	var config_1 = __webpack_require__(1);
	var angularSeed;
	(function (angularSeed) {
	    'use strict';
	    // Declare app level module which depends on views, and components
	    angular.module('myApp', [
	        'ngRoute',
	        'myApp.view1',
	        'myApp.view2',
	        'myApp.version'
	    ]).config(config_1.config);
	})(angularSeed || (angularSeed = {}));


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	function config($locationProvider, $routeProvider) {
	    $locationProvider.hashPrefix('!');
	    $routeProvider.otherwise({ redirectTo: '/view1' });
	}
	exports.config = config;
	;


/***/ }
/******/ ]);