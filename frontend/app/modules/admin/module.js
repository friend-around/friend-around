define(['angular'], function (ng) {
  'use strict';

  ng.module('admin.controllers', []);
  ng.module('admin.providers', []);
  ng.module('admin.services', []);

  var module = ng.module('admin', [
    'cs_common',
    'admin.controllers',
    'admin.providers',
    'admin.services',
  ]);

  module.config([
    '$routeProvider',
    'CSTemplateProvider',
    function ($routeProvider, CSTemplate) {

      // Set the subfolder of your module that contains all your view templates.
      CSTemplate.setPath('/modules/admin/views');

      // Register any routes you need for your module.
      $routeProvider
        .when('/admin/regions', {
          templateUrl: CSTemplate.view('regions'),
          controller: 'RegionController',
          public: false
        })
        .when('/admin/cities', {
          templateUrl: CSTemplate.view('cities'),
          controller: 'CityController',
          public: false
        });
    }

  ]);

  return module;
});
