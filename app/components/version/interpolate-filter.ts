/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../../../typings/main/ambient/angular/index.d.ts" />
module myApp.version.interpolateFilter {
    export function interpolate(version)
    {
      return (text:String) => {
        return String(text).replace(/\%VERSION\%/mg, version);
      };
    }
    interpolate.$inject = ['version'];
    angular.module('myApp.version.interpolate-filter', []).filter('interpolate',interpolate)
}