'use strict';
/*
To learn more about interceptors, access this link
http://www.webdeveasy.com/interceptors-in-angularjs-and-useful-examples/
*/
angular.module('salesClient')
.factory('InterceptorService', ['$injector', function($injector){
    return {
        request: function(config){
            console.log(config);
            return config;
        },
        resquestError: function(rejection){
            return rejection;
        },
        response: function(response){
            console.log('response');
            return response;
        },
        responseError: function(rejection){
            var toastr = $injector.get('toastr');
            toastr.error(rejection.statusText);
            return rejection;
        }
    };
}])
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('InterceptorService');
}]);
