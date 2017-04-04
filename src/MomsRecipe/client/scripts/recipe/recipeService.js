(function () {
    'use strict';

    angular
        .module('momsRecipe.recipe')
        .factory('RecipeService', recipeService);

    recipeService.$inject = ['$resource'];

    function recipeService($resource) {
        return $resource('/api/recipe/:id');
    }
})();