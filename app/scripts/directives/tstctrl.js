'use strict';

/**
 * @ngdoc directive
 * @name draftTransclusionApp.directive:tstCtrl
 * @description
 * # tstCtrl
 */
angular.module('draftTransclusionApp')
  .directive('tstCtrl', ['$compile', function ($compile) {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        tstModel: '='
      },
      controller: ['$scope', function($scope) {
        $scope.tstParentScope = $scope.$parent;
        var template =
            '<ul class="list-group">' +
            '<li class="list-group-item" ng-repeat="tstElem in tstElem.children">' +
            '<div tst-ctrl-trans></div>' +
            '</li>' +
            '</ul>';
        this.render = $compile(template);
      }],
      compile: function(element, attrs, childTranscludeFn) {
        return function (scope, element, attrs, controller) {
          scope.$watch('tstModel', function (newValue) {
              if (angular.isArray(newValue)) {
                  if (angular.isDefined(scope.tstElem)
                    && angular.equals(scope.tstElem.children, newValue))
                      return;
                  scope.tstElem = {};
                  scope.tstElem.children = newValue;
              }
              else {
                  if (angular.equals(scope.tstElem, newValue))
                      return;
                  scope.tstElem = newValue;
              }
              console.log(scope);
          });

          controller.render(scope, function (clone) {
              element.html('').append( clone );
          });

          scope.$tstTranscludeFn = childTranscludeFn;
        };
      }
    };
  }]);
