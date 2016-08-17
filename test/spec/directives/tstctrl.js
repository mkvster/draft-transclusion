'use strict';

describe('Directive: tstCtrl', function () {

  // load the directive's module
  beforeEach(module('draftTransclusionApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tst-ctrl></tst-ctrl>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tstCtrl directive');
  }));
});
