import * as angular from "angular";
import "angular-mocks";

describe('myApp.version module', () => {
  beforeEach(angular.mock.module('myApp.version'));

  describe('version service', () => {
    it('should return current version', inject((version) => {
      expect(version).toEqual('0.1');
    }));
  });
});
