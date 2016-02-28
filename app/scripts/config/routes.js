'use strict';

angular.module('salesClient')
.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    //More about ui-router ($state): https://github.com/angular-ui/ui-router/wiki
    $stateProvider
    .state('home', {
        url: '/',
        views: {
            main: {
                templateUrl: 'views/main.html'
            }
        }
    })
    .state('customers', {
        url: '/customers',
        views: {
            'main': {
                templateUrl: 'views/customers/main.html'
            },
            'innerCustomer@customers': {
                templateUrl: 'views/customers/list.html',
                controller: 'CustomersListCTRL'
            }
        }
    })
    .state('customers.add', {
        url: '/add',
        views: {
            'innerCustomer@customers': {
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
    .state('customers.edit', {
        url: '/edit',
        views: {
            'innerCustomer@customers': {
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
    });
}]);
