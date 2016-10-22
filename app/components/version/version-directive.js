'use strict';

angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return {
    restrict:'E',
    templateUrl:'components/version/tpl.html',
    link:function(scope, elm, attrs) {
      elm.find('div').text(version+'gogo'); 
    }
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