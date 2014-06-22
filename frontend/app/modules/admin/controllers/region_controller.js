define(['angular', '../module'], function (ng) {
  'use strict';

  ng.module('admin.controllers')
  .controller('RegionController', [
      '$scope',
      'RegionService',
      function ($scope, RegionService) {
          $scope.title = 'Список регионов';
          $scope.regions = [];
          RegionService.list().then(function (regions) {
              $scope.regions = regions;
          });
      }
  ]);

});
