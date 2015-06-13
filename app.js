define([
    'angular',
    'angularRoute',
    'jQuery',
    'bootstrap',

], function ( angular, ngRoute,  $, bootstrap ) {

    function StartApp(){
        var app =  angular.module('MyApp', ['ngRoute']);
        console.log("TEST");
        // return app;
    }
    StartApp();
});