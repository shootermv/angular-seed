import * as angular from "angular";
import "angular-mocks";
import {View2Ctrl} from './view2'
describe('myApp.view2 module', () => {

  beforeEach(angular.mock.module('myApp.view2'));

  describe('view2 controller', () => {

    it('should ....', () => {
      //spec body
     
      expect(View2Ctrl).toBeDefined();
    });

  });
});