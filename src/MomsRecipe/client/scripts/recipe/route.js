(function () {
    'use strict';

    angular
      .module('momsRecipe.recipe')
      .controller('customController', customController);

    customController.$inject = ['$scope'];

    function customController($scope) {
        /* jshint validthis:true */
        var vm = this;
        
        vm.title = '';

        activate();

        function activate() { }
    }
})();
