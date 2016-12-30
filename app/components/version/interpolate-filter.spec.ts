import * as angular from "angular";
import "angular-mocks";
import "phantomjs-polyfill";
describe('myApp.version module', () => {
  beforeEach(angular.mock.module('myApp.version'));

  describe('interpolate filter', () => {
    beforeEach(angular.mock.module(($provide) => {
      $provide.value('version', 'TEST_VER');
    }));

    it('should replace VERSION', inject((interpolateFilter) => {
      expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
    }));
  });
});
