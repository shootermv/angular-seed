/// <reference path="../../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../../typings/main/ambient/angular/index.d.ts" />
/// <reference path="../../typings/main/ambient/angular-route/index.d.ts" />
class view2 {
    "use strict";
      constructor(){
        angular.module('myApp.view2', ['ngRoute'])

        .config(['$routeProvider', ($routeProvider: angular.route.IRouteProvider) => {
          $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
          });
        }])

        .controller('View2Ctrl', [() => {

        }]); 
      }
}
export default view2;