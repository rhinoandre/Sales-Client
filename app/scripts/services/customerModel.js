'use strict';

/**
* @ngdoc service
* @name salesClientNewApp.customers
* @description
* # customers
* Factory in the salesClientNewApp.
*/
angular.module('salesClient')
.service('CustomerModel', ['$resource', function ($resource) {
    //More about $resource: https://docs.angularjs.org/api/ngResource/service/$resource
    return $resource(
                'http://angular.esy.es/customer/:id',
                null,
                {
                    edit: {method:'PUT'},
                    delete: {method: 'DELETE', params: {id: '@CustomerID'}}
                }
            );
}]);
