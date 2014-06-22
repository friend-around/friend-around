define(['angular', '../module'], function (ng) {
  'use strict';

  ng.module('admin.controllers')
  .controller('AdminController', [
    '$scope',
    function ($scope) {
      $scope.something = 'Административная панель';
    }

  ]);

});
