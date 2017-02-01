(function () {
    'use strict';

    angular
        .module('momsRecipe.recipe')
        .factory('recipeService', recipeService);

    recipeService.$inject = ['$resource'];

    function recipeService($resource) {
        return $resource('/api/recipe/:id');
    }
})();