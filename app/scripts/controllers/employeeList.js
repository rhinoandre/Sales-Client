'use strict';
angular.module('salesClient').controller('EmployeeListCtrl', ['$scope', 'EmployeeService',
function($scope, EmployeeService){    console.log('EmployeeListCtrl');    $scope.list = EmployeeService.lists;    EmployeeService.getAll();}]);
