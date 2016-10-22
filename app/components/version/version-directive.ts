/// <reference path="../../../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../../../typings/main/ambient/angular/index.d.ts" />


module myApp.version.versionDirective {
  export function appVersion(version: any): angular.IDirective {

    return {
      restrict: 'A',
      link: (scope:angular.IScope , elm: JQuery, attrs: any) => {
           console.log('var',version)
            elm.text(version);
      }
    };

  }
  angular.module('myApp.version.version-directive',[]).directive('appVersion', appVersion);
}