        import * as angular from "angular";
        export const View2Ctrl = () => {
          $('#input-tags').selectize({
            persist: false,
            createOnBlur: true,
            create: true
          });
        }
        angular.module('myApp.view2', ['ngRoute'])

        .config(['$routeProvider', ($routeProvider: angular.route.IRouteProvider) => {
          $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
          });
        }])

        .controller('View2Ctrl', [View2Ctrl]); 
  
