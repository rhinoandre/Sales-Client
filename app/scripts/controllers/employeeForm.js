'use strict';
angular.module('salesClient').controller('EmployeeFormCtrl',['$scope', '$rootScope', '$state', '$stateParams', 'EmployeeService', 'toastr', 'employee',function($scope, $rootScope, $state, $stateParams, EmployeeService, toastr, employee){    $scope.employee = employee || {};    $scope.isUpdate = !!$stateParams.id;
    $scope.save = function(){        EmployeeService.save($scope.employee, $scope.isUpdate, function(){            toastr.info('Employee Saved!');
            EmployeeService.getAll();
            $state.go('employees');
        });    };
    $scope.del = function(){        EmployeeService.delete($scope.employee, function(){            toastr.info('Employee Deleted!');            EmployeeService.getAll();            $state.go('employees');        });    };}]);
