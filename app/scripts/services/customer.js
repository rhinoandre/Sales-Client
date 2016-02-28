'use strict';

/**
* @ngdoc service
* @name salesClient.customerService
* @description
* # customerService
* Customer service to validate and other logics things.
*/
angular.module('salesClient')
.factory('CustomerService', function () {
    var service = {};

    service.validateAdd = function(customer){
        if(customer.CustomerID.split('').length > 5){
            return 'ID must have just 5 characters';
        }
    };

    return service;
});
