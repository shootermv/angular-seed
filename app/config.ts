  export function config($locationProvider: ng.ILocationProvider, $routeProvider: angular.route.IRouteProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/view1'});
  };