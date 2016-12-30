import * as angular from "angular";

    export const View1Ctrl = () => {

    }
    angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', ($routeProvider: angular.route.IRouteProvider) => {
      $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      });
    }])

    .controller('View1Ctrl', [View1Ctrl]); 
