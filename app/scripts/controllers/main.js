'use strict';

/**
 * @ngdoc function
 * @name draftTransclusionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the draftTransclusionApp
 */
angular.module('draftTransclusionApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.vm = {};

    $scope.vm.testModel = [
      {id: 1, name:'HTML', badge: 15},
      {id: 2, name:'JavaScript', badge: 12},
      {id: 3, name:'CSS', badge: 10},
      {id: 4, name:'AngularJS', badge: 2},
    ];

    $scope.vm.text = 'TEST';

    $scope.getTestModel = function () {
      var result = angular.toJson($scope.vm.testModel);
      return result;
    }
  }]);
