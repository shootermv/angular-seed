  export function config($locationProvider: ng.ILocationProvider, $routeProvider: ng.route.IRouteProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/view1'});
  };