'use strict';

describe('Controller: BestCtrl', function () {

  // load the controller's module
  beforeEach(module('landscapesApp'));

  var BestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BestCtrl = $controller('BestCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BestCtrl.awesomeThings.length).toBe(3);
  });
});
