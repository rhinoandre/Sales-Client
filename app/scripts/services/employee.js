'use strict';

angular.module('salesClient')
.factory('EmployeeService', ['EmployeeModel', function(EmployeeModel){
    var service = {
        lists: {
            employees: []
        }
    };

    service.getAll = function(){
        EmployeeModel.query(function(employees){
            service.lists.employees = employees;
        });
    };

    service.save = function(employee, isUpdate, success){
        if(isUpdate){
            employee.$edit(success);
        } else {
            EmployeeModel.save(success);
        }
    };

    service.get = function(id){
        return EmployeeModel.get({id: id});
    };

    service.delete = function(employee, success){
        return employee.$delete(success);
    };

    return service;
}]);
