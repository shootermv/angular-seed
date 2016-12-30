import * as angular from "angular";
import "angular-mocks";

describe('myApp.version module', () => {
  beforeEach(angular.mock.module('myApp.version'));

  describe('app-version directive', () => {
    it('should print current version', () => {
      angular.mock.module(($provide) => {
        $provide.value('version', 'TEST_VER');
      });
      inject(($compile, $rootScope) =>  {
        var element = $compile('<span app-version></span>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });
});
