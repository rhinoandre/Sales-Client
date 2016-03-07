'use strict';

angular.module('salesClient')
.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/employees');
    //More about ui-router ($state): https://github.com/angular-ui/ui-router/wiki
    $stateProvider
    .state('home', {
        url: '/',
        views: {
            'main': {
                templateUrl: 'views/main.html'
            }
        }
    })
    .state('customers', {
        url: '/customers',
        views: {
            'main': {
                templateUrl: 'views/customers/main.html',
                controller: 'CustomersListCTRL'
            }
        }
    })
    .state('customerAdd', {
        url: '/customer/add',
        views: {
            'main': {
                templateUrl: 'views/customers/form.html',
                controller: 'CustomerFormCtrl'
            }
        },
        resolve: {
            customer: function(){
                return undefined;
            }
        }
    })
    .state('customerEdit', {
        url: '/customer/edit',
        views: {
            'main': {
                templateUrl: 'views/customers/form.html',
                controller: 'CustomerFormCtrl'
            }
        },
        params: {
            CustomerID: null
        },
        resolve: {
            customer: ['$stateParams', 'CustomerModel', function($stateParams, CustomerModel){
                return CustomerModel.get({id: $stateParams.CustomerID});
            }]
        }
    })
    .state('employees', {
        url: '/employees',
        views: {
            'main': {
                templateUrl: 'views/employees/main.html',
                controller: 'EmployeeListCtrl'
            }
        }
    })
    .state('employees.add', {
        url: '/add',
        views: {
            'intern@employees': {
                templateUrl: 'views/employees/form.html',
                controller: 'EmployeeFormCtrl'
            }
        },
        resolve: {
            employee: function(){
                return undefined;
            }
        }
    })
    .state('employees.edit', {
        url: '/edit',
        views: {
            'intern@employees': {
                templateUrl: 'views/employees/form.html',
                controller: 'EmployeeFormCtrl'
            }
        },
        params: {
            id: null
        },
        resolve: {
            employee: ['$stateParams', 'EmployeeService', function($stateParams, EmployeeService){
                var id = $stateParams.id || localStorage.getItem('employeeId');
                localStorage.setItem('employeeId', id);
                return EmployeeService.get(id);
            }]
        }
    });
}]);
