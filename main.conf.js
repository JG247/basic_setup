requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.

    paths: {
        jQuery : 'bower_components/jquery/dist/jquery.min',
        bootstrap: 'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min',
        angular: 'bower_components/angular/angular.min',
        angularRoute: 'bower_components/angular-route/angular-route.min',
        app : 'app',
        domReady: 'bower_components/domReady/domReady',
        highcharts: 'bower_components/highcharts/highcharts'
    },

    shim: {
        'angular' : {
            deps : ['domReady','jQuery'],
            exports: 'angular'
        },
        'angularRoute' : {
            deps: ['angular']
        },
        'bootstrap' : {
            deps : ['jQuery']
        }
    }
});

define([
    'jQuery',
    'angular',
    'angularRoute',
    'app',
    'domReady'
], function($, angular, ngRoute, MyApp, domReady){
    requirejs([domReady], function(){
        angular.bootstrap(document, ['MyApp','ngRoute']);
    });
});