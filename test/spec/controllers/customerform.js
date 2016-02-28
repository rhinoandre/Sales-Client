'use strict';

describe('Controller: CustomerformCtrl', function () {

  // load the controller's module
  beforeEach(module('salesClientNewApp'));

  var CustomerformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomerformCtrl = $controller('CustomerformCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
