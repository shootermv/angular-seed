'use strict';

describe('myApp.version module', function() {
  beforeEach(function(){

    module('myApp.version')
   module('templates');   
  });

  describe('app-version directive', function() {
    it('should print current version', function() {
      module(function($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<app-version></app-version>')($rootScope);
        $rootScope.$digest();
        expect(element.text()).toEqual('TEST_VERgogo');
      });
    });
  });
});
