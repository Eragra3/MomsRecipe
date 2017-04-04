(function () {
    'use strict';

    angular
        .module('momsRecipe.recipe')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        /* jshint validthis:true */
        
        $stateProvider
            .state('recipe', {
                url: '/recipe',
                abstract: true
            })
            .state('recipe.list', {
                url: '',
                component: 'recipeList'
            });
    }
})();
