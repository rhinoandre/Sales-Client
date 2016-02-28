'use strict';
/*
To learn more about interceptors, access this link
http://www.webdeveasy.com/interceptors-in-angularjs-and-useful-examples/
*/
angular.module('salesClient')
.factory('InterceptorService', ['$injector', function($injector){
    return {
        responseError: function(error){
            var toastr = $injector.get('toastr');
            toastr.error(error.statusText);
        }
    };
}])
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('InterceptorService');
}]);
