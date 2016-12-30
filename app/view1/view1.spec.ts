import * as angular from "angular";
import "angular-mocks";

describe('myApp.view1 module', ()=> {

  beforeEach(angular.mock.module('myApp.view1'));

  describe('view1 controller', ()=>{

    it('should ....', inject(($controller) =>{
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});