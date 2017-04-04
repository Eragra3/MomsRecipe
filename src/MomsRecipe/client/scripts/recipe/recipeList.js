(function () {
    'use strict';

    angular
        .module('momsRecipe.recipe')
        .component('recipeList', {
            templateUrl: 'Recipe/Template/List',
            controller: recipeListController,
            controllerAs: 'ctrl'
        });

    recipeListController.$inject = ['RecipeService'];

    function recipeListController(RecipeService) {
        //
    }

})();