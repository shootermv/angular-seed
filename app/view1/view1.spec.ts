import * as angular from "angular";
import "angular-mocks";
import "phantomjs-polyfill";
import {View1Ctrl} from './view1'
describe('myApp.view1 module', ()=> {

  beforeEach(angular.mock.module('myApp.view1'));

  describe('view1 controller', ()=>{

    it('should ....', () =>{
      //spec body
      expect(View1Ctrl).toBeDefined();
    });

  });
});