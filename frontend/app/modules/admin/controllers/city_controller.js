define(['angular', '../module'], function (ng) {
  'use strict';

  ng.module('admin.controllers')
  .controller('CityController', [
      '$scope',
      'CityService',
      function ($scope, CityService) {
          $scope.title = 'Список городов';
          $scope.cities = [];
          CityService.list().then(function (cities) {
              $scope.cities = cities;
          });
      }
  ]);

});
