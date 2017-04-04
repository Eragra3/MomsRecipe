(function () {
    'use strict';

    angular
        .module('momsRecipe.recipe')
        .component('recipeList', {
            templateUrl: 'Recipe/List',
            controller: recipeListController,
            controllerAs: 'ctrl'
        });

    recipeListController.$inject = ['RecipeService'];

    function recipeListController(recipeService) {
        console.log('[RecipeList] loaded');
    }

})();