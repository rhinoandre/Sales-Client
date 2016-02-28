'use strict';

//More about directives: https://docs.angularjs.org/guide/directive
angular.module('salesClient')
.directive('paginationDirective', function () {
    return {
        templateUrl: 'views/directive/pagination.html',
        restrict: 'E'
    };
});
