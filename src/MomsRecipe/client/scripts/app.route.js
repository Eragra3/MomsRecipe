(function () {
    'use strict';

    angular
        .module('momsRecipe')
        .config(routeConfig);

    routeConfig.$inject = ['$urlRouterProvider'];

    function routeConfig($urlRouterProvider) {
        /* jshint validthis:true */

        $urlRouterProvider.when('', '/recipe');
    }
})();