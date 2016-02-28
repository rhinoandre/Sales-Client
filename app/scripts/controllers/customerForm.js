'use strict';

/**
* @ngdoc function
* @name salesClientNewApp.controller:CustomerformCtrl
* @description
* # CustomerformCtrl
* Controller of the salesClientNewApp
*/
angular.module('salesClient')
.controller('CustomerFormCtrl',
['$scope', '$state', '$stateParams', 'toastr', 'ngDialog', 'CustomerModel', 'CustomerService', 'customer',
function ($scope, $state, $stateParams, toastr, ngDialog, CustomerModel, CustomerService, customer) {
    $scope.customer = customer || new CustomerModel();
    $scope.isUpdate = !!$stateParams.CustomerID;

    $scope.save = function(){
        $scope.message = CustomerService.validateAdd($scope.customer);

        if($scope.message){
            ngDialog.open({
                scope: $scope
            });
        } else {
            if($scope.isUpdate) {
                console.log($scope.customer);
                $scope.customer.$edit().then(function(){
                    $state.go('customers');
                    toastr.info('Contact Edited');
                });
            } else {
                $scope.customer.$save().then(function(){
                    $state.go('customers');
                    toastr.info('Contact Saved');
                });
            }
        }
    };

    $scope.delete = function(){
        $scope.message = 'Do you really want to delete the Customer: ' + $scope.customer.CompanyName + '?';
        ngDialog.openConfirm({
            template: 'views/ngdialog/confirm.html',
            scope: $scope
        }).then(function(){
            $scope.customer.$delete(function(){
                $state.go('customers');
                toastr.info('Contact Deleted');
            },
            function(){
                $scope.message = 'Error to delete!';
                ngDialog.open({
                    scope: $scope
                });
            });
        });
    };
}]);
