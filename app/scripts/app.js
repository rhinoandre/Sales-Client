'use strict';

/**
* @ngdoc overview
* @name salesClientNewApp
* @description
* # salesClientNewApp
*
* Main module of the application.
*/
angular
.module('salesClient', [
    'ngAnimate',
    'ngResource',
    'toastr',
    'ui.router',
    'ngDialog'
])
.config(['ngDialogProvider',
function(ngDialogProvider){
    ngDialogProvider.setDefaults({
        className: 'ngdialog-theme-default',
        templateUrl: 'views/ngdialog/warn.html',
        showClose: true,
        closeByDocument: true,
        closeByEscape: true,
        appendTo: false
    });
}]);
