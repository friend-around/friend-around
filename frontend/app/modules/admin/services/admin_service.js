define(['angular', '../module'], function (ng) {
  'use strict';

  ng.module('admin.services')
  .service('AdminService', [
    '$http',
    function ($http) {

      return {

        example: function () {
          return $http.get('/example')
            .then(function(response){
              return response.data;
            });
        }

      };

    }

  ]);

});
