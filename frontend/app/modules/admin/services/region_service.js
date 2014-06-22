define(['angular', '../module'], function (ng) {
  'use strict';

  ng.module('admin.services')
  .service('RegionService', [
    '$http',
    function ($http) {

      return {

        list: function () {
          return $http.get('/region?id_country=1').then(function (res) {
              return res.data;
          });
        }
      };

    }

  ]);

});
