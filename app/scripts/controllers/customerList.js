'use strict';

/**
* @ngdoc function
* @name salesClientNewApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the salesClientNewApp
*/
angular.module('salesClient')
.controller('CustomersListCTRL',
['$scope', 'CustomerModel',
function ($scope, CustomerModel) {
    $scope.currentPage = 0;
    $scope.pageSize = 15;

    CustomerModel.query(function(customers){
        $scope.customers = customers;
    });
}]);
