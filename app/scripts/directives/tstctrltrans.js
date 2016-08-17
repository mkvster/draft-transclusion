'use strict';

/**
 * @ngdoc directive
 * @name draftTransclusionApp.directive:tstCtrlTrans
 * @description
 * # tstCtrlTrans
 */
angular.module('draftTransclusionApp')
  .directive('tstCtrlTrans', function () {
    return {
      controller: ['$scope',function ($scope) {
      }],
      link: function(scope, element, attrs) {
        scope.transcludeScope = scope.tstParentScope.$new();
        scope.transcludeScope.tstElem = scope.tstElem;
        scope.$on('$destroy', function() {
            scope.transcludeScope.$destroy();
        });
        scope.$tstTranscludeFn(scope.transcludeScope, function(clone) {
            element.empty();
            element.append(clone);
        });
        console.log(scope);
      }
    };
  });
