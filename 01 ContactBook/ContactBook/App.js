(function () {
    'use strict';

    angular.module('MyApp', [

    ]);
})();

angular.module("MyApp", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: "/home/:groupId",
            templateUrl: "/Home.html",
            controller: "HomeCtrl as ctrl",
        })      
        .state('ContactEdit', {
            url: "/contact/:contactId",
            templateUrl: "/ContactEdit.html",
            controller: "ContactEditCtrl as ctrl",
        })
   
    $urlRouterProvider.otherwise("/home/");
});



