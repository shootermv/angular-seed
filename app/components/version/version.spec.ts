import * as angular from "angular";
import "angular-mocks";
import "phantomjs-polyfill";
import {version} from './version'
describe('myApp.version module', () => {
  beforeEach(angular.mock.module('myApp.version'));

  describe('version service', () => {
    it('should return current version', () => {
      expect(version).toEqual('0.1');
    });
  });
});
