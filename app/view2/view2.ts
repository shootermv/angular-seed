/// <reference path="../../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../../typings/main/ambient/angular/index.d.ts" />
/// <reference path="../../typings/main/ambient/angular-route/index.d.ts" />
        angular.module('myApp.view2', ['ngRoute'])

        .config(['$routeProvider', ($routeProvider: angular.route.IRouteProvider) => {
          $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
          });
        }])

        .controller('View2Ctrl', [() => {

        }]); 
  
