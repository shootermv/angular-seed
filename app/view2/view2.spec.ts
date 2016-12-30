import * as angular from "angular";
import "angular-mocks";

describe('myApp.view2 module', () => {

  beforeEach(angular.mock.module('myApp.view2'));

  describe('view2 controller', () => {

    it('should ....', inject(($controller) => {
      //spec body
      var view2Ctrl = $controller('View2Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});