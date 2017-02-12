'use strict';
angular.module('myApp.version.version-directive', [])
    .directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]);
//# sourceMappingURL=version-directive.js.map