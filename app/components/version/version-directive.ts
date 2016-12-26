
export function appVersion(version: any): angular.IDirective {

  return {
    restrict: 'A',
    link: (scope:angular.IScope , elm: JQuery, attrs: any) => {
          console.log('var',version)
          elm.text(version);
    }
  };

}