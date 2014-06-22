define(['angular', '../module'], function (ng) {
  'use strict';

  ng.module('admin.factories')
  .factory('AdminFactory', function(){
      return {
          sayHello: function(text){
              return "Admin Factory says \"Hello " + text + "\"";
          }
      }
  });

});