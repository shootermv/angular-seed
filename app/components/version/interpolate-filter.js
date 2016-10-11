/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../../../typings/main/ambient/angular/index.d.ts" />
var myApp;
(function (myApp) {
    var version;
    (function (version_1) {
        var interpolateFilter;
        (function (interpolateFilter) {
            function interpolate(version) {
                return function (text) {
                    return String(text).replace(/\%VERSION\%/mg, version);
                };
            }
            interpolateFilter.interpolate = interpolate;
            interpolate.$inject = ['version'];
            angular.module('myApp.version.interpolate-filter', []).filter('interpolate', interpolate);
        })(interpolateFilter = version_1.interpolateFilter || (version_1.interpolateFilter = {}));
    })(version = myApp.version || (myApp.version = {}));
})(myApp || (myApp = {}));
