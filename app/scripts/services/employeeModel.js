'use strict';

angular.module('salesClient')
.factory('EmployeeModel', ['$resource', function($resource){
    return $resource(
            'http://angular.esy.es/employee/:id', null,
            {
                edit: {method: 'PUT'},
                delete: {method: 'DELETE', params: {id: '@EmployeeID'}}
            }
        );
}]);
