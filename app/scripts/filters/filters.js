'use strict';

/**
* @ngdoc filter
* @name salesClientNewApp.filter:filters
* @function
* @description
* # filters
* Filter in the salesClientNewApp.
*/
angular.module('salesClient')
.filter('startFrom', function(){
    return function(input, start){
        if(!input){
            return;
        }
        start = +start;
        return input.slice(start);
    };
});
