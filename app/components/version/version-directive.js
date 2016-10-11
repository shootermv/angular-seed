'use strict';

angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);

/*
module myApp.version.version-directive {

    class appVersion implements ng.IDirective {

        static instance() : ng.IDirective {
            return new appVersion();
        }

        link: (scope, elm, attrs) =>{
          elm.text(version);
        }
        constructor() {

        }
    }

    angular.module('myApp.version.version-directive').directive('appVersion', appVersion.instance);

}*/