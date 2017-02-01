(function () {
    'use strict';

    angular
        .module('momsRecipe.recipe')
        .config('routeConfig', routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        /* jshint validthis:true */

        $stateProvider.state('recipe', {

        });
    }
})();
