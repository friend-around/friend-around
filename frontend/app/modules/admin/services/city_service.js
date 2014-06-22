define(['angular', '../module'], function (ng) {
  'use strict';

  ng.module('admin.services')
  .service('CityService', [
    '$http',
    function ($http) {

      return {

        list: function () {
          return $http.get('/city?id_country=1').then(function (res) {
              return res.data;
          });
        }
      };

    }

  ]);

});
